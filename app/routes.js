import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from 'components/Home';
import UserConnector from 'features/user/components/UserConnector';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/user" component={UserConnector}/>
  </Switch>
);
