import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutCheck } from "../store/details";

class navbar extends Component {
  constructor(props) {
    super(props);
    }


    onLogout = () => {
      const input = this.props.user[0]
      this.props.dispatch(logoutCheck(input));
    }

    render() {
      let status = false;
      if(this.props.user[0]){
         status =  this.props.user[0].status;
        console.log(status);
      }
      
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
            <Link className="navbar-brand" style={{fontSize: "25px"}} to="/menu" >
              TakeAway
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Coffee</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Ice Creams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Desert</a>
            </li>
            </ul>
        </div>
        <div>
        <ul className="navbar-nav">
            <li className="nav-item navbar-right" >
            {status === true && ( <Link className="nav-link" to="/profile">Profile</Link> ) }
            </li>
            <li className="nav-item navbar-right" >
            {status === true && (
              <Link className="nav-link" to="/cart">Cart  <i class="fa fa-3x fa-shopping-cart" aria-hidden="true" style={{ fontSize:"20px"}}></i></Link>)}
            </li>
            <li className="nav-item navbar-right" >
            {status === true && (<Link className="nav-link" onClick={this.onLogout} to="/">Logout</Link>)}
            </li>
            <li className="nav-item navbar-right" >
            {(status)? null : (<Link className="nav-link" to="/">Login</Link>)}
            </li>
            </ul>
            </div>
          </nav>
        );
    }
}

const mapStateToProps = state => ({  
  user: state.user
})

export default connect(mapStateToProps)(navbar)