import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './profile.css';
import ProductManagement from './ProductManagement';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import {routes} from './routing';
import Analytics from './analytics';
// import './adminPanel.css'

class adminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
      let status = false;
      if(this.props.users[0]){
         status =  this.props.users[0].status;
      }

      const routes = [
        {
          path: "/adminPanel/analytics",
          main: () => <Analytics />
        },
        {
          path: "/adminPanel/management",
          main: () => <ProductManagement />
        },
      ];

      console.log(this.state.input);
      
      
        return (
            <div>
            {(!status)? (
            <div>
              <div className="container mt-3">
                <div className="mainContents text-center">
                    <main className="form-details" style={{ marginRight: "auto"}}>
                    <h1 className="h3 mb-5 fw-normal">Please login <span><Link to="/">here</Link>.</span></h1>
                    </main>
                </div>
                </div>
            </div>):
            <div className="container shadow" style={{ padding: "0", marginTop: "90px", minHeight: "1000px"}}>
                <div className="mainContents text-center" style={{ padding: "0",  minHeight: "1000px"}} >
                    <main className="form-details" style={{ textAlign: "left", marginRight: "auto",backgroundColor:"#f5f5f5", padding: "0", minHeight: "1000px"}}>
                        <div className = "row" style={{ marginLeft: "1px",minHeight: "1000px"}}>
                        <div className = "col-lg-3 shadow-sm" style={{ borderColor:"black", backgroundColor:"#292828",color:"white", paddingTop: "20px", paddingLeft:"0", paddingRight:"0"}}>
                        <h3 className="fw-normal p-3">Admin Panel</h3>
                        <br></br>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                          <li style={{ padding: "15px", fontSize: "20px"}}>
                          {/* <NavLink to="/adminPanel/analytics" style={{textDecoration: "none", color: "#b8b8b8"}} activeStyle={{ color: "white"}}>Analytics</NavLink> */}
                          </li>
                          <li style={{ padding: "15px", fontSize: "20px"}}>
                          <NavLink to="/adminPanel/management" style={{textDecoration: "none", color: "#b8b8b8"}} activeStyle={{ color: "white"}}>Management</NavLink>
                          </li>
                        </ul>
                        <Switch>
                          {routes.map((route, index) => (
                            <Route
                              key={index}
                              path={route.path}
                              exact={route.exact}
                            />
                          ))}
                        </Switch>
                        </div>
                        <div className= "col-lg-9 p-0" >
                        <div>
                        <Switch>
                            {routes.map((route, index) => (
                              // Render more <Route>s with the same paths as
                              // above, but different components this time.
                              <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                              />
                            ))}
                          </Switch>
                        </div>
                        </div>
                        </div>
            
                    </main>
                </div>
                </div>
            }
            </div>
        );
    }
}

const mapStateToProps = state => ({  
    users: state.user,
    currentUser: state.currentUser,
    menus: state.searchList
})

export default connect(mapStateToProps)(adminPanel)
