import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import UsersTable from "../components/usersTable/usersTable";
import Registration from "../components/formRegistration/formRegistration";

export default () =>
  <Switch>
    <Route exact path='/' component={UsersTable} />
    <Route exact path='/users' component={UsersTable}/>
    <Route exact path='/users/new' component={Registration} />
    <Redirect from='*' to='/' />
  </Switch>
