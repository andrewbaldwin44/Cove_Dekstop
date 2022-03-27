import { connect } from 'react-redux';

import LandingPage from 'components/landing-page/landing-page.component';
import Dashboard from 'components/dashboard/dashboard.component';
import { isContainingData } from 'utils';

function Homepage({ userData }) {
  return isContainingData(userData) ? <Dashboard /> : <LandingPage />;
}

const storeConnector = ({ user }) => ({ userData: user });

export default connect(storeConnector)(Homepage);
