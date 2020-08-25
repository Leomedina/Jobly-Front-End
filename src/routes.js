import react from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/companies/:handle"></Route>
      <Route exact path="/companies"></Route>
      <Route exact path="/jobs"></Route>
      <Route exact path="/login"></Route>
      <Route exact path="/profile"></Route>
      <Route exact path="/"></Route>
    </Switch>
  )
};

export default Routes;