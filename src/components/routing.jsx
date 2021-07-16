import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom';
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
import Chat from './chat';
import adminPanel from './adminPanel';
import ProductManagement from './ProductManagement';
import Analytics from './analytics';
import { Modal,ModalBody } from 'reactstrap';



class routing extends Component {

        state={
            ModalVisibles: false
        }
   

    componentDidMount(){
        setTimeout(() => {
            this.setState({ModalVisibles: false})
        },10000)
    }

    closeToggles = () =>{
        this.setState({ModalVisibles: false});
      }

    render() {
        return (
            <Router>
            <Navbar />
            <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/chat" component={Chat} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/" component={ProductManagement} />
              <Route exact path="/analytics" component={Analytics} />
              <Route path="/adminPanel" component={adminPanel} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/iceCreams" component={Icecream} />
              <Route exact path="/selected" component={Selected} />
              <Route exact path="/desserts" component={Desserts} />
              <Route exact path="/coffee" component={Coffee} />
              <Route exact path="/menu" component={Menus} />
            </Switch>
            <Modal isOpen={this.state.ModalVisibles} style={{ maxWidth:"1000px", textAlign:"left"}}>
                <ModalBody style={{padding: "0px"}}>
                <main className="form-details" style={{ margin: "0", padding:"0"}}>
                        <form style={{ textAlign: "left", padding: "0px"}}>
                        <div style={{ backgroundColor: "#f5f5f5", margin: "0px", padding: "10px"}}>
                            </div>
                            </form>
                            </main>
                <button className="btn btn-outline-danger btnAdd m-2" onClick={this.closeToggles}>Close</button>
                </ModalBody>
            </Modal>
            </Router>
        );
    }
}

export default routing;