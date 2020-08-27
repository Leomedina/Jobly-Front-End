import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Companies from './components/company_components/Companies';
import Company from './components/company_components/Company';
import Jobs from './components/job_components/Jobs';
import ProfileForm from './components/UserComponents/ProfileForm';
import Login from './components/UserComponents/Login';
import Logout from './components/UserComponents/Logout';

const Routes = ({ setToken }) => {
  return (
    <Switch>
      <Route exact path="/companies/:handle"><Company /></Route>
      <Route exact path="/companies"><Companies /></Route>
      <Route exact path="/jobs"><Jobs /></Route>
      <Route exact path="/login"><Login setToken={setToken} /></Route>
      <Route exact path="/logout"><Logout setToken={setToken} /></Route>
      <Route exact path="/profile"><ProfileForm /></Route>
      <Route exact path="/"><Home /></Route>
    </Switch>
  )
};

export default Routes;