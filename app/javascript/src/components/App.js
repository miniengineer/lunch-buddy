import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Posts from '../components/Posts';

const App = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Posts} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
