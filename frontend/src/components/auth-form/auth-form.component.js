import styled from 'styled-components';

import breakpoints from 'styles/breakpoints';
import { useTranslations } from 'hooks/use-translations';
import Footer from 'components/auth-form/auth-form.footer';
import FormDynamicInput from 'components/form-dynamic-input/form-dynamic-input';
import Form from 'components/form/form.component';

export default function AuthForm({
  initiateFacebookLogin,
  initiateGoogleLogin,
  initiateLogin,
  initiateRegister,
  isSigningUp,
  isStrongPassword,
  minimumPasswordLength,
  setErrorMessage,
}) {
  const { getTranslations } = useTranslations();

  const userSignup = ({ email, password, verifyPassword, displayName }) => {
    if (password !== verifyPassword) {
      setErrorMessage({
        errorMessage: getTranslations('authForm.errorMessages.passwordsDoNotMatch'),
      });
      return;
    }

    if (isStrongPassword(password)) {
      initiateRegister({ email, password, displayName });
    } else if (password.length < minimumPasswordLength) {
      setErrorMessage({ errorMessage: getTranslations('authForm.errorMessage.passwordTooShort') });
    } else {
      setErrorMessage({
        errorMessage: getTranslations('authForm.errorMessage.missingPasswordRequirements'),
      });
    }
  };

  const userLogin = ({ email, password }) => initiateLogin({ email, password });

  return (
    <Wrapper>
      <div className='form-card'>
        <Form className='form' onSubmit={isSigningUp ? userSignup : userLogin}>
          {isSigningUp && (
            <FormDynamicInput
              required
              name='displayName'
              text={getTranslations('authForm.username')}
            />
          )}
          <FormDynamicInput
            required
            name='email'
            type='email'
            text={getTranslations('authForm.email')}
          />
          <FormDynamicInput
            required
            name='password'
            type='password'
            text={getTranslations('authForm.password')}
          />
          {isSigningUp && (
            <FormDynamicInput
              required
              type='password'
              name='verifyPassword'
              text={getTranslations('authForm.verifyPassword')}
            />
          )}
          {isSigningUp ? (
            <>
              <button className='submit-button btn btn-orange g-recaptcha' type='submit'>
                {getTranslations('authForm.signUp')}
              </button>
            </>
          ) : (
            <button className='submit-button btn btn-orange' type='submit'>
              {getTranslations('authForm.login')}
            </button>
          )}
        </Form>
        <Footer
          isSigningUp={isSigningUp}
          initiateFacebookLogin={initiateFacebookLogin}
          initiateGoogleLogin={initiateGoogleLogin}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - var(--navbar-height));

  .form-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 80%;
    max-width: 530px;
    margin: 0 auto;
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    box-shadow: var(--shadow-s);
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .submit-button {
    margin: var(--space-vertical-l);
    padding: var(--space-inset-s);
  }

  ${breakpoints('mid')`
    .form-card {
      padding: 20px 50px;
    }
  `};
`;
