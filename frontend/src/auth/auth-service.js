import { getApps, initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword as createAuthUserWithEmailAndPassword,
  sendEmailVerification as sendAuthEmailVerification,
  getAuth,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getStorage } from 'firebase/storage';

import firebaseConfig from 'auth/config';

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();

export const googleProvider = new GoogleAuthProvider();
export const createUserWithEmailAndPassword = (email, password) =>
  createAuthUserWithEmailAndPassword(auth, email, password);
export const sendUserEmailVerification = () => sendAuthEmailVerification(auth.currentUser);
