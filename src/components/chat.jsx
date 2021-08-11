import React, { Component } from "react";
import { db, messaging } from "../config/fbConfig";
import { connect } from "react-redux";
import './chat.css';
import { storage } from '../config/fbConfig';
import moment from 'moment';

const { REACT_APP_SERVERKEY } = process.env


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      chats: [],
      content: '',
      readError: null,
      writeError: null,
      loadingChats: false,
      typing: false,
      typinguser: [],
      url:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
    this.chatRef = React.createRef()
  }

  async componentDidMount() {

 
    let user = "";
    if(this.props.currentUser.length !== 0){
      user = this.props.currentUser
    }else{
       user =this.props.currentAdmin
    }
    this.setState({ readError: null, loadingChats: true, user: user, typing: false });
    try {
      db.ref("users").on("value", snapshot => {
        let users = [];
        snapshot.forEach((snap) => {
          users.push(snap.val());
        });
        this.setState({ typinguser : users })
      })   
      db.ref("chats").on("value", snapshot => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        chats.sort(function (a, b) { return a.timestamp - b.timestamp })
        this.setState({ loadingChats: false });
        this.setState({ chats });
        setTimeout(() => {
          if(chats && this.myRef.current){
          this.myRef.current.scrollIntoView({ behavior: "smooth" });
          }
        },1000)
      });
    } catch (error) {
      this.setState({ readError: error.message, loadingChats: false });
    }
  }

  handleChange(event) {    
   
    this.setState({
      content: event.target.value
    });
  }

  blurredText = () =>{
    this.setState({ typing : false})
        db.ref("users/"+this.state.user.fName).set({
          typing: false,
          timestamp: Date.now(),
          uid: this.state.user.fName
        });
  }

  focussedText = () => {
    this.setState({ typing : true})
      db.ref("users/"+this.state.user.fName).set({
        typing: true,
        timestamp: Date.now(),
        uid: this.state.user.fName
      })
  }

  uploadImage = (e) => {
   const file =  e.target.files[0];
   const uploadTask = storage.ref(`images/${file.name}`).put(file);
   storage.ref('images').child(file.name).getDownloadURL().then(url => {
    console.log(url);
    this.setState({url});
  })
  }


  async handleSubmit(event) {
    event.preventDefault(); 
    this.setState({ writeError: null, typing: false });
    try {
      let body = {
        to: "e9S6geF0jxTtHP76C30VcS:APA91bEvgnAHbU7OxZH8mSeFelZMxe-FXiUevEQfVmWh8TSSXaBrwmLExOF7gG-IemLEKeiQTDZpkIUeJvnFu82vDyKVGDIHfUfc6rMali3ey_B4CCwsEs5I6YhbL84ZVh-lP0pzJIIZ",
        notification:{
          title: this.state.user.fName,
          body: this.state.content
        }
      }
      let options={
        method:"POST",
        headers: new Headers({
          Authorization:
          `key=${REACT_APP_SERVERKEY}`,
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(body)
      }
      fetch("https://fcm.googleapis.com/fcm/send",options).then(res =>{
         db.ref("chats").push({
          content: this.state.content,
          timestamp: Date.now(),
          uid: this.state.user.fName,
          image: this.state.url
        });
      this.setState({ content: '', url: '' });
      }).catch(err => {
        console.log(err);
      })        
    } catch (error) {
      this.setState({ writeError: error.message });
    }
  }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
  }

  getDate(timestamp) {
    let time = this.formatTime(timestamp)
    let newDate = new Date();
    let now = moment(newDate).format("DD/MM/YYYY")
    let date =  moment(now,"DD/MM/YYYY").diff(moment(time,"DD/MM/YYYY"),'days') + " days ago"
    // console.log("time", date)
    return date
  }

  scrollEvent = () => {
    console.log("scroll");
    let scrollpos = window.scrollY;
    console.log(scrollpos);
    if(scrollpos > 10){
      console.log("up...");
        // add_class_on_scroll();
    }
    else {
      console.log("down...");
        // remove_class_on_scroll();
    }
  }

  getCurrentDate() {
        if(document.querySelectorAll(".date").length != 0){
          let date = document.querySelectorAll(".date")
        // let date =  document.getElementById("date").each(() => {
        //   console.log(document.getElementById("date").textContent);
        // })
        // console.log(date[0].innerHTML);
        // for (let i = 0; i < date.length; i++){
        //   console.log(date[i].innerHTML)
        // }
        return date[0].innerHTML
        }
  }

  render() {
    let status = false;
    if(this.props.users[0]){
       status =  this.props.users[0].status;
    }
    if(this.props.admin[0]){
      status =  this.props.admin[0].status;
   }
    return (
      <div className="container chatBox mt-3 ch">
      <div className="mainContents text-center">
      <div className="w-100" style={{ backgroundColor: "white", padding: "30px", borderRadius: "25px"}}>
          <h4 style={{ textAlign: "left" }} >{(this.state.user.fName === "admin")? "Messages": "Send Message to Admin"}</h4>
          { (status === true || status === "admin") ?        
          <div>
        <div className="chat-area" ref={this.chatRef} onScroll={this.scrollEvent}>
          {/* loading indicator */}
          {(this.state.loadingChats) ? <div className=" text-success" role="status">
            <h5>Loading...</h5> 
          <span className="spinner-border spinner-border-sm p-3" role="status" aria-hidden="true"></span>
          </div> : ""}
          {/* chat area */}
          {this.state.chats.map((chat,i) => {
            if(chat.uid === "admin" || "Raghul" === chat.uid ){
            return <div key={chat.timestamp} ref={this.myRef}>
             {(this.getDate((this.state.chats[i-1])? this.state.chats[i-1].timestamp : "" ) === this.getDate(chat.timestamp)) ? "" :
             <div style={{ textAlign: "center", margin: "20px" }}>
             <div className="date" style={{ backgroundColor: "#d1d1d1", borderRadius: "20px", padding: "7px", width: "10%", margin: "auto", fontSize: "14px" }}>
               {this.getDate(chat.timestamp) === "1 days ago" ? "Yesterday" : this.getDate(chat.timestamp)}
             </div>
             </div>
              }
              <h5 className={"chat-bubble " + (this.state.user.fName === chat.uid ? "current-name" : "other-name")}>
                {(this.state.user.fName === chat.uid ? "Me" : chat.uid)}</h5>
            <p className={"chat-bubble " + (this.state.user.fName === chat.uid ? "current-user" : "")}>
             {chat.image ? <img src={chat.image} width="100%" /> : ""} 
              {chat.content}
              <br />
              <span className="chat-time float-right">{this.formatTime(chat.timestamp)}</span>
            </p>
              </div>
            }
          })}
          { this.state.typinguser.map ( (user) => {
            if((this.state.user.fName !== user.uid) && (user.typing !== false)){
              return(
              <div className="pb-3"  style={{ display: "inline-block" }}>
              <span >{user.uid} typing </span>
              <span className='typing-dot' ></span>
              <span className='typing-dot' ></span>
              <span className='typing-dot' ></span>
              </div>)
            }
          }) }

        </div>
        <div style={{ textAlign: "center", margin: "20px" }}>
              <div style={{ backgroundColor: "#d1d1d1", borderRadius: "20px", padding: "13px", width: "100%", fontSize: "14px" }}>
                {this.getCurrentDate()}
              </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          {/* {this.state.url ? <img src ={this.state.url} width="25%" margin="20px" /> : ""} */}
          <div style={{ display: "flex" }}>
          <textarea style={{ padding: "10px", width: "95%" }} rows="1" className="form-control" name="content" onChange={this.handleChange} value={this.state.content} onBlur={this.blurredText}
                    onFocus={this.focussedText}></textarea>
          {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
          <label for="file" style={{ cursor: "pointer"}}><span className="fa fa-camera fa-2x m-3" for="file"></span></label><input id="file" type="file" onChange={(e) => this.uploadImage(e)} style={{display: "none"}}></input>
          </div>
          <button type="submit" className="btn btn-outline-success px-5">Send Message</button>
        </form>
        </div> :
          <div style={{ textAlign: "left", marginTop: "30px" }}><h6>Please login</h6></div>
 
          }
      </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({  
  currentUser: state.users.currentUser,
  currentAdmin: state.admin.currentAdmin,
  users: state.users.user,
  admin : state.admin.admin
})

export default connect(mapStateToProps, {forwardRef: true})(Chat)