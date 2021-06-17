import React, { Component } from 'react';
import Menus from './menus';
import Login from './login';
import Signup from './signup';
import Cart from './cart';
import Profile from './profile';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './navbar';

class routing extends Component {
    render() {
        return (
            <Router>
            <Navbar />
            <Switch>
            <Route exact path="/" component={Login} />
              <Route exact path="/menu" component={Menus} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
            </Router>
        );
    }
}

export default routing;