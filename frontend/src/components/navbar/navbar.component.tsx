import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Logo from 'components/navbar/Logo';
import Dropdown from 'components/navbar/Dropdown';
import { createLoginLink } from 'utils/authenticationUtils';
import { isContainingData, isEmptyData } from 'utils';

function Navbar({ user: { email } }) {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const redirect = query.get('redirect');
  const inviteID = query.get('id');
  const signUpLink = createLoginLink(redirect, inviteID, 'sign-up');
  const loginLink = createLoginLink(redirect, inviteID, 'login');

  return (
    <Wrapper className='o-container'>
      <Link to='/'>
        <Logo />
      </Link>
      <NavLinks>
        {email ? (
          <Dropdown />
        ) : (
          <>
            <Link to={signUpLink}>Sign Up</Link>
            <Link to={loginLink}>Log In</Link>
          </>
        )}
      </NavLinks>
    </Wrapper>
  );
}

const storeConnector = ({ user }) => ({ user });

export default connect(storeConnector)(Navbar);

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--main-width-padding);
  width: 100vw;
  height: var(--navbar-height);
  background-color: var(--main-headers);
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 160px;

  > a {
    color: white;
    font-size: 1.1em;
  }
`;
