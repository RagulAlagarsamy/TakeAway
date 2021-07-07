import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { logoutCheck, searchSelectedList } from "../store/user";
import SelectSearch from './search';
import {searchList} from './details/searchDetails';


class navbar extends Component {
  constructor(props) {
    super(props);
    this.state={
      newDiv: false,
      list: this.props.search
    }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(() => { return {list: nextProps.search} })
    }

    onLogout = () => {
      const input = this.props.user[0]
      this.props.dispatch(logoutCheck(input));
    }


    handleChange = () => {
      this.setState({newDiv: true})
    }

    onBlur = () => {
      setTimeout(() => {
        this.setState({newDiv: false})
      },500)
    }

    changeHandler = (e) => {
      const items = this.props.search.filter((item) => item.title.includes(e.target.value))
      this.setState({list: items})
      // this.props.dispatch(searchLists(e.target.value));
    }

    clickHandle = (menu) => {
      this.props.dispatch(searchSelectedList(menu))
    }

    render() {
      let status = false;
      if(this.props.user[0]){
         status =  this.props.user[0].status;
      }
      
        return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark p-4" style={{ backgroundColor: "black" }}>
            <Link className="navbar-brand" style={{fontSize: "25px"}} to="/menu" >
             <strong>TakeAway</strong>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/coffee">Coffee</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/iceCreams">Ice Creams</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/desserts">Desert</Link>
            </li>
            </ul>
            <form className="container" style={{maxWidth:"415px", marginRight:"auto", marginLeft:"5px"}}>
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for Coffees, Desserts, Icecreams" aria-label="Username" aria-describedby="basic-addon1"  onChange={(e) => this.changeHandler(e)} onClick={this.handleChange} onBlur={this.onBlur}/>
              </div>
            {this.state.newDiv ?
              <SelectSearch items={this.state.list} handleClick={(menu) => this.clickHandle(menu)}/> : ""
            }
            </form>
        </div>
        <div>
        <ul className="navbar-nav">
            <li className="nav-item navbar-right" >
            {status === true && ( <Link className="nav-link" to="/profile">Profile</Link> ) }
            </li>
            <li className="nav-item navbar-right" >
            {status === true && ( <Link className="nav-link" to="/chat">Chat</Link> ) }
            </li>
            <li className="nav-item navbar-right" >
            {status === "admin" && ( <Link className="nav-link" to="/adminPanel">Profile</Link> ) }
            </li>
            <li className="nav-item navbar-right" >
              <Link className="nav-link" to="/cart">Cart  <i className="fa fa-3x fa-shopping-cart" aria-hidden="true" style={{ fontSize:"20px"}}></i></Link>
            </li>
            <li className="nav-item navbar-right" >
            {(status === true || status === "admin") && (<Link className="nav-link" onClick={this.onLogout} to="/">Logout</Link>)}
            </li>
            <li className="nav-item navbar-right" >
            {(status)? null : (<Link className="nav-link" to="/">Login</Link>)}
            </li>
            </ul>
            </div>
          </nav>  
          </div>
        );
    }
}

const mapStateToProps = state => ({  
  user: state.user,
  search: state.searchList,
  filteredSearch: state.filteredSearch
})

export default withRouter(connect(mapStateToProps)(navbar))