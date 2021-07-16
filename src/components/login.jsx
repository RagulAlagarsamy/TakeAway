import React from 'react';
import { loginCheck, googleSign, adminLoginCheck } from "../store/user";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import "./login.css";
import { signInWithGoogle } from "../helpers/auth";
import Button from '@material-ui/core/Button';
import axios from 'axios';
  
class login extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      input: {
        email:"",
        password: ""
      },
      errors: {},
      error:""
    };
  }

   googleSignIn = async () => {
    try {
      await signInWithGoogle().then((res) => {
        if(res){
          const user = {
            email: res.user.email,
            fName: res.user.displayName
          }
          this.onSuccessRedirect();
          this.props.dispatch(googleSign(user));
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

     
  handleChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }

  onSuccessRedirect = async () => {
    // axios.post('http://localhost:5001/api/sms',
    // {to: "+916379350835",
    // body: "TAKEAWAY - Dear Customer,you have successfully login into your account."})
      this.props.history.push('/menu')
   }
     
  handleSubmit = async (event) => {
    event.preventDefault();
    if(this.validate()){
    const input = this.state.input;
    if(input.email === "admin@test.com"){
      this.props.dispatch(adminLoginCheck(input))
    }else{
      this.props.dispatch(loginCheck(input));
    }
      setTimeout(() =>{
       this.props.users.map((user) => {
         if(user.email === this.state.input.email){
           if(user.status === true || user.status === "admin"){
             this.onSuccessRedirect()
           }
          }
       })
       this.props.admin.map((admin) => {
        if(admin.email === this.state.input.email){
          if(admin.status === "admin"){
            this.props.history.push('/adminPanel/')
          }
         }
      })
      },1000)
    }
  }


  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

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
          errors["password"] = "Please add at least 6 digit password.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
}


  render() {
    return (
      <div style={{ height: "90%" }}>
        <div className="mainContents text-center">
        <main className="form-signin">
          <form onSubmit={this.handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Sign in</h1>
            <div className="form-floating">
              <input type="email" style={{ width: "100%" }} className="form-control" name="email" id="floatingInput" placeholder="name@example.com" value={this.state.input.email} onChange={this.handleChange}/>
              <label htmlFor="floatingInput">Email address</label>
              <div className="text-danger" style={{textAlign: "left"}}>{this.state.errors.email}</div>
            </div>
            <br></br>
            <div className="form-floating">
              <input type="password" style={{ width: "100%" }} className="form-control" name="password" id="floatingPassword" value={this.state.input.password} onChange={this.handleChange} placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
              <div className="text-danger" style={{textAlign: "left"}}>{this.state.errors.password}</div>
            </div> 
            <br></br>
            <button className="w-100 btn btn-lg btn-danger" type="submit">Sign in</button>
          </form>
          <div style={{ marginTop: "15px" }}>
            <Button  style={{ display: "inline"}}><Link to="/signup" style={{textDecoration: "none"}}>Not a member</Link></Button>
            <Button className="btns pull-left" variant="contained" color="primary" onClick={this.googleSignIn} style={{ marginRight: "auto" }}>Google Signin</Button>
          </div>
        </main>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({  
  users : state.users.user,
  admin : state.admin.admin
})


export default connect(mapStateToProps) (login)

