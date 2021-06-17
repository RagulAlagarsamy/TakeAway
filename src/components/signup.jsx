import React from 'react';
import { signupDetails } from "../store/details";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Menus from './menus';
import "./signup.css";
  
class signup extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      input: {
        fName:"",
        lName:"",
        email:"",
        password: "",
        phone: "",
        address: "",
        status: false
      },
      errors: {}
    };
  }
     
  handleChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
     
  handleSubmit = (event) => {
    event.preventDefault();
    if(this.validate()){
    const input = this.state.input;
    console.log(input);
      this.props.dispatch(signupDetails(input));
      this.props.history.push('/')
    }
  }

  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;
 
    if (!input["fName"]) {
      isValid = false;
      errors["fName"] = "Please enter your first name.";
    }

    if (!input["lName"]) {
        isValid = false;
        errors["lName"] = "Please enter your last name.";
      }

    if (!input["email"]) {
      isValid = false;
      errors["email"] = "Please enter your email Address.";
    }

    if (typeof input["email"] !== "undefined") {
        
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(input["email"])) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }

    if (!input["password"]) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }

    if (typeof input["password"] !== "undefined") {
      if(input["password"].length < 6){
          isValid = false;
          errors["password"] = "Please add at least 6 character password.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
}

  render() {
    return (
      <div>
        <div className="mainContents text-center">
        <main className="form-signin" style={{ marginRight: "auto"}}>
          <form onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Sign up</h1>
            <div className="form-floating">
              <input type="text" className="form-control" name="fName" id="floatingInput" placeholder="name" value={this.state.input.fName} onChange={this.handleChange}/>
              <label htmlFor="floatingInput">Enter the First Name</label>
              <div className="text-danger" style={{textAlign: "left"}}>{this.state.errors.fName}</div>
            </div>
            <br></br>
            <div className="form-floating">
              <input type="text" className="form-control" name="lName" id="floatingInput" placeholder="name" value={this.state.input.lName} onChange={this.handleChange}/>
              <label htmlFor="floatingInput">Enter the Last Name</label>
              <div className="text-danger" style={{textAlign: "left"}}>{this.state.errors.lName}</div>
            </div>
            <br></br>
            <div className="form-floating">
              <input type="email" className="form-control" name="email" id="floatingInput" placeholder="name@example.com" value={this.state.input.email} onChange={this.handleChange}/>
              <label htmlFor="floatingInput">Email address</label>
              <div className="text-danger" style={{textAlign: "left"}}>{this.state.errors.email}</div>
            </div>
            <br></br>
            <div className="form-floating">
              <input type="password" className="form-control" name="password" id="floatingPassword" value={this.state.input.password} onChange={this.handleChange} placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
              <div className="text-danger" style={{textAlign: "left"}}>{this.state.errors.password}</div>
            </div> 
            <br></br>
            <button className="w-100 btn btn-lg btn-danger" type="submit">Sign up</button>
          </form>
        </main>
      </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
    signupDetails: (user) => {
    dispatch(signupDetails(user))
  }
})

export default connect(mapDispatchToProps) (signup)

