import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateDetails } from "../store/user";
import { Link } from 'react-router-dom';
import './profile.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class profile extends Component {
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

      componentDidMount() {
         if(this.props.users.length !== 0){
            var details = this.props.users; 
            details.map(user => {
              if(user.email === this.props.currentUser.email){
                var users = Object.assign({}, user)
                  return(
                    this.setState({ input : users})
                    )
                }
              })
         } 
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
        this.props.dispatch(updateDetails(input));
        alert("Successfully Updated.")
        }else{
            console.log("error");
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

          if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter your phone number.";
          }

          if (!input["address"]) {
            isValid = false;
            errors["address"] = "Please enter your address.";
          }
    
        if (typeof input["username"] !== "undefined") {
          const re = /^\S*$/;
          if(input["username"].length < 6 || !re.test(input["username"])){
              isValid = false;
              errors["username"] = "Please enter valid username.";
          }
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
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }


    render() {
      let status = false;
      if(this.props.users[0]){
         status =  this.props.users[0].status;
      }
      console.log(status);

      const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
      
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
            <div className="container mt-3">
                <div className="mainContents text-center">
                    <main className="form-details" style={{ marginRight: "auto"}}>
                    <form className={useStyles.root} onSubmit={this.handleSubmit} style={{ textAlign: "left"}}>
                        <h1 className="h3 mb-5 fw-normal">Profile Details</h1>
                        <div className = "row">
                            <div className = "col-lg-6">
                            {/* <label className="mb-2">First Name</label> */}
                            <TextField  id="standard-basic" className="form-control" name="fName"  label="First Name" value={this.state.input.fName} onChange={this.handleChange}/>
                            <div className="text-danger">{this.state.errors.fName}</div>
                            </div>
                            <div className = "col-lg-6">
                            {/* <label className="mb-2">Last Name</label> */}
                            <TextField  id="standard-basic" className="form-control" name="lName"  label="Last Name" value={this.state.input.lName} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <br></br>
                        <div className = "row" style={{ textAlign: "left"}}>
                            <div className = "col-lg-6">
                            {/* <label className="mb-2">Email Address</label> */}
                            <TextField  id="standard-basic" className="form-control" name="email"  label="Email address" disabled value={this.state.input.email} onChange={this.handleChange}/>
                            </div>
                            <div className = "col-lg-6">
                            {/* <label className="mb-2">Phone Number</label> */}
                            <TextField  id="standard-basic" type="number" className="form-control" name="phone"  label="Phone Number" value={this.state.input.phone} onChange={this.handleChange}/>
                            <div className="text-danger">{this.state.errors.phone}</div>
                            </div>
                        </div>
                        <br></br>
                        <div className = "row" style={{ textAlign: "left"}}>
                            <div className = "col-lg-6">
                            {/* <label className="mb-2">Delivery Address</label> */}
                            <TextField  id="standard-basic" className="form-control" name="address"  label="Delivery Address" value={this.state.input.address} onChange={this.handleChange}/>
                            <div className="text-danger">{this.state.errors.address}</div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        {/* <button className="w-40 btn btn-danger" type="submit">Submit</button> */}
                        <Button variant="contained" color="primary" type="submit">
                            Submit
                        </Button>
                    </form>
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
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(profile)
