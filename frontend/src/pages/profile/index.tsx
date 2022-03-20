import { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { AuthenticationContext } from 'components/AuthenticationContext';
import { isContainingData, isEmptyData } from '../../utils/index';
import Profile from 'components/profile/profile.component';

export default function ProfilePage() {
  const { userData } = useContext(AuthenticationContext);

  return isContainingData(userData) ? (
    <Profile userData={userData} updateUserDatabase={updateUserDatabase} uploadFile={uploadFile} />
  ) : (
    <Redirect from='/users/profile' to='/users/log_in' />
  );
}
