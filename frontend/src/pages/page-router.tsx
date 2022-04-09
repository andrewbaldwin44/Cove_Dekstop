import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from 'components/layout/layout.component';
import Homepage from 'pages/Homepage';
import SignUpPage from 'pages/sign-up';
import LoginPage from 'pages/login';
// import Profile from 'pages/profile';
// import Room from 'components/Room';
// import DeezerAuthenticated from 'pages/DeezerAuthenticated';
import FourOhFour from 'pages/FourOhFour';

export default function PageRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/users/login'>
            <LoginPage />
          </Route>
          <Route exact path='/users/sign-up'>
            <SignUpPage />
          </Route>

          <Route path='/'>
            <FourOhFour />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

// <Route exact path='/users/profile'>
//   <Profile />
// </Route>
// <Route exact path='/cove/:roomID'>
//   <Room />
// </Route>
// <Route exact path='/api/deezer_authenticated'>
//   <DeezerAuthenticated />
// </Route>
