import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom@5";

import Home from './conteiners/Home'
import Users from './conteiners/Home/Users'

function Routes(){

return(
    <Router>
        <Switch>
        <Route exact path="/" component = {Home}/>   
        <Route exact path="/usuários" component={Users}/>
        </Switch>
    </Router>
)
}
export default Routes