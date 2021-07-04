import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Menus from './menus';
import Login from './login';
import Signup from './signup';
import Cart from './cart';
import Profile from './profile';
import Navbar from './navbar';
import Icecream from './icecream';
import Desserts from './dessert';
import Coffee from './coffee';
import Selected from './selected';
import adminPanel from './adminPanel';
import ProductManagement from './ProductManagement';
import Analytics from './analytics';

class routing extends Component {
    render() {
        return (
            <Router>
            <Navbar />
            <Switch>
            <Route exact path="/" component={Login} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/management" component={ProductManagement} />
              <Route exact path="/analytics" component={Analytics} />
              <Route path="/adminPanel" component={adminPanel}>
              </Route>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/iceCreams" component={Icecream} />
              <Route exact path="/selected" component={Selected} />
              <Route exact path="/desserts" component={Desserts} />
              <Route exact path="/coffee" component={Coffee} />
              <Route exact path="/menu" component={Menus} />
            </Switch>
            </Router>
        );
    }
}

export default routing;