import React from 'react';
import { Switch, Route,Redirect } from 'react-router-dom';

import Mainpage from './mainpage';
import Login from './login';
import Register from './register';
import A1 from './home';
import A2 from './imstock';
import A3 from './newspage';
import A4 from './a4';
import Exchange from './exchange';
import Stock from './stock';
import World from './world'
import Mainstock from './mainstock'
import What from './what'
import Page3 from './page3'
import Suggestions from './Suggestions'
import Newstag from './newstag'
import Imstockseach from './imstockseach'

const Main = () => (
  <Switch>
    <Route exact path="/" component={Mainpage} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/home" component={A1} />
    <Route path="/imstock" component={A2} />
    <Route path="/newspage" component={A3} />
    <Route path="/a4" component={A4} /> 
    <Route path="/exchange" component={Exchange} />
    <Route path="/stock" component={Stock} />
    <Route path="/world" component={World} />
    <Route path="/mainstock" component={Mainstock} />
    <Route path="/what" component={What} />
    <Route path="/page3" component={Page3} />
    <Route path="/Suggestions" component={Suggestions} />
    <Route path="/newstag" component={Newstag} />
    <Route path="/imstockseach/:id" component={Imstockseach} />
  </Switch>
)

export default Main;
