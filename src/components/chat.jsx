import React, { Component } from "react";
import { auth } from  "../config/fbConfig";
import { db } from "../config/fbConfig";
import { connect } from "react-redux";
import firebase  from '../config/fbConfig';
import './chat.css';
import CircularProgress from '@material-ui/core/CircularProgress';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.currentUser,
      chats: [],
      content: '',
      readError: null,
      writeError: null,
      loadingChats: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.myRef = React.createRef();
  }

  async componentDidMount() {
    this.setState({ readError: null, loadingChats: true });
    console.log(this.myRef.current);
    const chatArea = this.myRef.current;
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

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ writeError: null });
    const chatArea = this.myRef.current;
    try {
      await db.ref("chats").push({
        content: this.state.content,
        timestamp: Date.now(),
        uid: this.state.user.fName
      });
      this.setState({ content: '' });
    } catch (error) {
      this.setState({ writeError: error.message });
    }
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
    return (
      <div className="container mt-3">
      <div className="mainContents text-center">
      <div className="w-100" style={{ backgroundColor: "white", padding: "30px", borderRadius: "25px"}}>
          <h4 style={{ textAlign: "left" }} >Send Message to Admin </h4>
          { (!status) ? <div style={{ textAlign: "left", marginTop: "30px" }}><h6>Please login</h6></div>:
        <div>
        <div className="chat-area">
          {/* loading indicator */}
          {(this.state.loadingChats) ? <div className=" text-success" role="status">
            <h5>Loading...</h5> 
          <span class="spinner-border spinner-border-sm p-3" role="status" aria-hidden="true"></span>
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
        </div>
          }
      </div>
      </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({  
  currentUser: state.currentUser,
  users: state.user,
})

export default connect(mapStateToProps)(Chat)