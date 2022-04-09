import { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import { userActions } from 'auth/user.slice';
import useOnClickOutside from 'hooks/use-on-click-outside';

function Dropdown({ initiateLogout, user: { email, displayName, photoURL } }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownButton = useRef();

  useOnClickOutside(dropdownButton, () => setIsDropdownOpen(false));

  const history = useHistory();

  const signOutRedirect = () => {
    initiateLogout();
    history.push('/');
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <Wrapper ref={dropdownButton}>
      <button onClick={toggleDropdown}>
        <ProfileImage src={photoURL} alt='Profile Image' />
      </button>
      <DropdownMenu isDropdownOpen={isDropdownOpen}>
        <h4>{displayName ? displayName : email}</h4>
        <Seperator />
        <Link to='users/profile'>View Profile</Link>
        <button type='button' onClick={signOutRedirect}>
          Sign Out
        </button>
      </DropdownMenu>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  button,
  a {
    cursor: pointer;
  }
`;

const DropdownMenu = styled.div`
  display: ${({ isDropdownOpen }) => (isDropdownOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  right: 0;
  margin-top: 5px;
  background-color: white;
  width: 230px;
  box-shadow: 0px 8px 16px 0px var(--dark-shadow);
  padding: 15px 16px;
  z-index: 1;

  h4 {
    font-weight: bold;
  }

  button {
    align-self: flex-end;
    color: var(--light-blue);
    margin-top: 40px;
  }
`;

const Seperator = styled.div`
  width: 100%;
  margin: 20px 0;
  border: 1px solid #e0e0e0;
  align-self: center;
`;

const ProfileImage = styled.img`
  border-radius: 100%;
  height: 50px;
  width: 50px;
`;

const storeConnector = ({ user }) => ({ user });

const actionCreator = {
  initiateLogout: userActions.initiateLogout,
};

export default connect(storeConnector, actionCreator)(Dropdown);
