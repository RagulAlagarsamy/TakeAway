import React, { Component } from "react";
import { db, messaging } from "../config/fbConfig";
import { connect } from "react-redux";
import './chat.css';


class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
      chats: [],
      content: '',
      readError: null,
      writeError: null,
      loadingChats: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
    this.onMessageListener();
  }

  async componentDidMount() {
    let user = "";
    if(this.props.currentUser.length !== 0){
      user = this.props.currentUser
    }else{
       user =this.props.currentAdmin
    }
    this.setState({ readError: null, loadingChats: true, user: user });
    try {
      db.ref("chats").on("value", snapshot => {
        let chats = [];
        snapshot.forEach((snap) => {
          chats.push(snap.val());
        });
        chats.sort(function (a, b) { return a.timestamp - b.timestamp })
        this.setState({ loadingChats: false });
        this.setState({ chats });
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

  onMessageListener = messaging.onMessage(message => console.log("mensagem enviada"))

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    try {
      let body = {
        to: "BFQcb3yPhd57ZJVIndAtg-s_a1D7HY7SjKiuk760DHctKs_CGzWU-8DKU5_Mu7I-IQXzYlJB4xJPXuUhAv-xl3I",
        notification:{
          title: this.state.user.fName,
          body: this.state.content
        }
      }
      let options={
        method:"POST",
        headers: new Headers({
          Authorization:
          "key=AAAAIvzLj0I:APA91bH7oFk99OYT7KsqdQCTm4Tn2OBLjhcU3V4Kvk65d1th1YmgwVIImgQcIzxrlRy97heGpNX8b0_DxWdb7xn5zd7sSDXqQnEG_-gQiEMKuRDqs1WM2KVQZqRBZYlDzxHjVWMdDEkf",
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(body)
      }
      fetch("https://fcm.googleapis.com/fcm/send",options).then(res =>{
        console.log(res); 
        console.log(messaging);    
      }).catch(err => {
        console.log(err);
      })

      messaging.onMessageCallback(payload => {
        console.log(payload);
      })
        
      await db.ref("chats").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.fName
      });
      this.setState({ content: '' });
    } catch (error) {
      this.setState({ writeError: error.message });
    }
    debugger;
    console.log(messaging);
    messaging.onMessage(payload => {
      const title = payload.data.title;
      const options = {
        body: payload.data.score
      };
      console.log(payload);
      // return self.registration.showNotification(title, options);
    });
  }

  formatTime(timestamp) {
    const d = new Date(timestamp);
    const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
    return time;
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
      <div className="container mt-3">
      <div className="mainContents text-center">
      <div className="w-100" style={{ backgroundColor: "white", padding: "30px", borderRadius: "25px"}}>
          <h4 style={{ textAlign: "left" }} >{(this.state.user.fName === "admin")? "Messages": "Send Message to Admin"}</h4>
          { (status === true || status === "admin") ?        
          <div>
        <div className="chat-area">
          {/* loading indicator */}
          {(this.state.loadingChats) ? <div className=" text-success" role="status">
            <h5>Loading...</h5> 
          <span className="spinner-border spinner-border-sm p-3" role="status" aria-hidden="true"></span>
          </div> : ""}
          {/* chat area */}
          {this.state.chats.map(chat => {
            if(chat.uid === "admin" || "Raghul" === chat.uid ){
            return <div key={chat.timestamp}>
              <h5 className={"chat-bubble " + (this.state.user.fName === chat.uid ? "current-name" : "other-name")}>
                {(this.state.user.fName === chat.uid ? "Me" : chat.uid)}</h5>
            <p className={"chat-bubble " + (this.state.user.fName === chat.uid ? "current-user" : "")}>
              {chat.content}
              <br />
              <span className="chat-time float-right">{this.formatTime(chat.timestamp)}</span>
            </p>
              </div>
            }
          })}
        </div>
        <form onSubmit={this.handleSubmit}>
          <textarea style={{ display: "inline", padding: "10px" }} rows="1" className="form-control" name="content" onChange={this.handleChange} value={this.state.content}></textarea>
          {this.state.error ? <p className="text-danger">{this.state.error}</p> : null}
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

export default connect(mapStateToProps)(Chat)