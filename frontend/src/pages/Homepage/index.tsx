import { connect } from 'react-redux';

import LandingPage from 'components/landing-page/landing-page.component';
import Dashboard from 'components/dashboard/dashboard.component';
import { isContainingData } from 'utils';

function Homepage({ user: { email } }) {
  return email ? <Dashboard /> : <LandingPage />;
}

const storeConnector = ({ user }) => ({ user });

export default connect(storeConnector)(Homepage);
