import { Link } from 'react-router-dom';
import styled from 'styled-components';

import breakpoints from 'styles/breakpoints';
import { useTranslations } from 'hooks/use-translations';
import GoogleIcon from 'assets/icons/google-icon';

export default function Footer({ isSigningUp, initiateFacebookLogin, initiateGoogleLogin }) {
  const { getTranslations } = useTranslations();

  return (
    <Wrapper>
      {isSigningUp ? (
        <div className='footer-redirect-wrapper'>
          <div>
            <span className='redirect-text'>{getTranslations('authForm.footer.loginText')}</span>
            <Link className='redirect-link' to='/users/login'>
              {getTranslations('authForm.login')}
            </Link>
          </div>
        </div>
      ) : (
        <div className='footer-redirect-wrapper'>
          <div>
            <span className='redirect-text'>{getTranslations('authForm.footer.signupText')}</span>
            <Link className='redirect-link' to='/users/sign-up'>
              {getTranslations('authForm.signUp')}
            </Link>
          </div>
        </div>
      )}
      <p className='footer-seperator'>
        <span className='seperator-text'>{getTranslations('authForm.footer.divider')}</span>
      </p>
      <div className='button-wrapper'>
        <button
          className='footer-login-button button google-button'
          onClick={initiateGoogleLogin}
          type='button'
        >
          <GoogleIcon className='google-icon auth-footer-icon' />
          {getTranslations('authForm.footer.google')}
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: space-between;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;

  .footer-redirect-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-weight: 400;
    margin: 0 auto;
    flex-direction: column;

    .forgot-password-wrapper {
      margin-top: var(--space-s);
    }

    .redirect-text {
      font-weight: 400;
      color: #888888;
    }

    .redirect-link {
      color: #2688e3;
      text-decoration: underline;
      padding-left: 10px;
      cursor: pointer;
    }
  }

  .toggle-reset-btn {
    font-weight: normal;
    color: red;
  }

  .footer-seperator {
    text-align: center;
    color: #888888;
    margin: var(--space-vertical);

    .seperator-text {
      display: inline-block;
      position: relative;
      color: inherit;
      font-weight: 400;

      &:before,
      &:after {
        content: '';
        position: absolute;
        border-bottom: 1px solid #d3d3d3;
        opacity: 0.8;
        width: 80px;
        top: 50%;
      }

      &:before {
        right: 100%;
        margin-right: 15px;
      }

      &:after {
        left: 100%;
        margin-left: 15px;
      }
    }
  }

  .button-wrapper {
    display: grid;
    row-gap: 10px;

    .footer-login-button {
      display: grid;
      grid-template-columns: 1fr 3fr;
      column-gap: 20px;
      align-items: center;
      text-align: left;
      width: 100%;
      height: 50px;
      border-radius: 6px;
      border: 1px solid #d3d3d3;
      padding: 0 5px;
      box-shadow: var(--shadow-s);
    }

    .auth-footer-icon {
      height: 30px;
      width: 30px;
      justify-self: flex-end;
    }
  }

  ${breakpoints('mid')`
    .footer-seperator .seperator-text {
      &:before,
      &:after {
        width: 150px;
      }
    }

    .button-wrapper {
      .footer-login-button {
        grid-template-columns: 1fr 1.5fr;
        font-size: 16px;
      }
    }
  `}

  ${breakpoints('large')`
    .button-wrapper {
      .footer-login-button {
        grid-template-columns: 1fr 2fr;
      }
    }
  `}
`;
