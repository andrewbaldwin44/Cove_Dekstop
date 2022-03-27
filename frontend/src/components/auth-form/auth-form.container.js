import { connect } from 'react-redux';

import AuthForm from 'components/auth-form/auth-form.component';
import { userActions } from 'auth/user.slice';
import { formActions } from 'components/form/form.slice';
import { PASSWORD_REQUIREMENTS } from 'auth/auth.constants';

const { minimumPasswordLength, minimumPasswordRequirements } = PASSWORD_REQUIREMENTS;

const isStrongPassword = password => minimumPasswordRequirements.test(password);

function AuthFormContainer({ ...props }) {
  return (
    <AuthForm
      {...props}
      isStrongPassword={isStrongPassword}
      minimumPasswordLength={minimumPasswordLength}
    />
  );
}

const actionCreators = {
  initiateLogin: userActions.initiateLogin,
  initiateRegister: userActions.initiateRegister,
  initiateGoogleLogin: userActions.initiateGoogleLogin,
  initiateFacebookLogin: userActions.initiateFacebookLogin,
  setErrorMessage: formActions.setErrorMessage,
};

export default connect(null, actionCreators)(AuthFormContainer);
