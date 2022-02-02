import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';
import UserContextProvider, { UserContext } from '../context/UserContext';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.css';

const App = () => {
  return (
    <UserContextProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/sign_in" component={Signin} />
        <Route exact path="/sign_up" component={Signup} />
        <ProtectedRoute path="/profile" component={Profile} />
      </Switch>
    </UserContextProvider>
  );
};

const ProtectedRoute = (props) => {
  const { signedInStatus } = useContext(UserContext);
  if (signedInStatus === 'unknown') return null;

  return signedInStatus === 'signed_in' ? <Route {...props} /> : <Redirect to="/sign_in" />;
};

export default App;
