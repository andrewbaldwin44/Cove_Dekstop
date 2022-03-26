import { useContext } from 'react';

import LandingPage from 'components/landing-page/landing-page.component';
import Dashboard from 'components/dashboard/dashboard.component';
import { AuthenticationContext } from 'components/AuthenticationContext';
import { isContainingData } from 'utils';

export default function Homepage() {
  const { userData } = useContext(AuthenticationContext);

  return isContainingData(userData) ? <Dashboard /> : <LandingPage />;
}
