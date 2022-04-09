import { put, select } from 'redux-saga/effects';

import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  googleProvider,
  sendUserEmailVerification,
  waitForUser,
} from 'auth/auth-service';
import { userActions } from 'auth/user.slice';
import { deleteCookie, getCookie, setCookie } from 'utils/cookies';
import getTranslations from 'utils/translations';
import { formActions } from 'components/form/form.slice';
import { dateDaysFromNow } from 'utils/datetime';
import { pick } from 'utils/object';

export const userWatchers = {
  __rootInitialLoad: loadUser,
  initiateLogin: userLogin,
  initiateRegister: userRegister,
  initiateGoogleLogin: signInWithGoogle,
  initiateLogout: userLogout,
  sendEmailVerification,
  verifyEmail,
  resetPassword,
  confirmPasswordReset,
  deleteUser,
};

function* loadUser() {
  if (getCookie('current_user')) {
    const currentUser = yield waitForUser();
    yield put(userActions.setUser(pick(['displayName', 'photoURL', 'email'], currentUser)));
  }
}

function* userRegister({ payload: { email, password, displayName } }) {
  try {
    yield createUserWithEmailAndPassword(email, password);
  } catch ({ code }) {
    yield handleFirebaseAuthError({ code });
    return;
  }

  yield sendEmailVerification();

  deleteCookie('current_user');

  yield setAuthenticatedUser({ displayName, email });
}

function* deleteUser({ payload: { email } }) {
  const user = auth.currentUser;

  yield userLogout();
  yield user.delete();
}

function* userLogin({ payload: { email, password } }) {
  try {
    yield signInWithEmailAndPassword(email, password);
  } catch ({ code }) {
    yield handleFirebaseAuthError({ code });
    return;
  }

  const { displayName } = auth.currentUser;

  yield setAuthenticatedUser({ displayName, email });
}

function* signInWithGoogle() {
  yield auth.signInWithPopup(googleProvider);
  yield put(formActions.submitted());

  const { email, photoURL: profilePicture, displayName } = auth.currentUser;

  yield setAuthenticatedUser({ email, photoURL: profilePicture, displayName });

  yield put(formActions.success());
}

function* setAuthenticatedUser(userData) {
  const { emailVerified, uid } = auth.currentUser;

  setCookie('current_user', uid, { expires: dateDaysFromNow(7) });

  yield put(userActions.setUser({ ...userData, emailVerified }));
  yield put(formActions.success());
}

function clearUserCookies() {
  deleteCookie('user_auth_token');
  deleteCookie('current_user');
}

function* clearUser() {
  yield clearUserCookies();

  yield auth.signOut();
  yield put(userActions.clearUser());
}

function* userLogout() {
  yield clearUserCookies();

  yield auth.signOut();

  yield put(userActions.clearUser());
}

function* resetPassword({ payload: { email } }) {
  try {
    yield auth.sendPasswordResetEmail(email);
    yield put(formActions.success());
  } catch ({ code }) {
    yield handleFirebaseAuthError({ code });
  }
}

function* confirmPasswordReset({ payload: { oobCode, newPassword } }) {
  try {
    yield auth.confirmPasswordReset(oobCode, newPassword);
    yield clearUser();

    yield put(userActions.setUser({ userPasswordReset: true }));
    yield put(formActions.success());
  } catch ({ code }) {
    yield handleFirebaseAuthError({ code });
  }
}

function* verifyEmail({ payload: { actionCode } }) {
  try {
    yield auth.applyActionCode(actionCode);
  } catch {
    yield put(userActions.setUser({ emailVerificationError: true }));
    return;
  }

  yield auth.currentUser.reload();

  const { email, emailVerified } = yield auth.currentUser;

  yield put(userActions.setUser({ emailVerified }));
}

function* sendEmailVerification() {
  yield sendUserEmailVerification();
}

export function* handleFirebaseAuthError({ code }) {
  let errorMessage = '';
  switch (code) {
    case 'auth/user-not-found':
      errorMessage = getTranslations('authForm.errorMessages.invalidEmail');
      break;
    case 'auth/wrong-password':
      errorMessage = getTranslations('authForm.errorMessages.wrongPassword');
      break;
    case 'auth/email-already-in-use':
      errorMessage = getTranslations('authForm.errorMessages.emailInUse');
      break;
    case 'auth/cancelled-popup-request':
    case 'auth/popup-closed-by-user':
      return;
    case 'auth/invalid-action-code':
      errorMessage = getTranslations('accountManagement.error');
      break;
    default:
      errorMessage = getTranslations('authForm.errorMessages.defaultMessage');
      break;
  }

  yield put(formActions.setErrorMessage({ errorMessage }));
}
