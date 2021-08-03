
import React, { Component } from "react";
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6
import ContextMenu from "./contextMenu";
import Dashboard from "./dashboard";
import Paper from '@material-ui/core/Paper';
import {MDCBanner} from '@material/banner';



const toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],
  [{ 'header': [1,2,3,4,5,6, false] }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] },'link','image','video'],

  ['clean']                                         // remove formatting button
];

var Block = Quill.import('blots/block');
Block.tagName = 'div';
Quill.register(Block,true);

let Inline = Quill.import('blots/inline');

class SpanBlock extends Inline{    

  static create(value){
      let node = super.create();
      node.setAttribute('class','container');
      return node;    
  } 
}

SpanBlock.blotName = 'container';
SpanBlock.tagName = 'div';
Quill.register(SpanBlock);

const Embed = Quill.import('blots/embed')

Quill.register(class extends Embed {
  static create(key) {
    let node = super.create()
    node.setAttribute('data-key', key)
    node.innerHTML = `${key}`
    return node
  }

  static value(node) {
    return node.dataset.key
  }

  static blotName = 'customEmbed'
  static className = 'customEmbed'
  static tagName = 'span'

})

let html = `
<div><div class="container" id="mainDiv">asd <span style="background-color:red"><strong>asdadad</strong></span> </div>
<img id="image" src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-location-icon-png-image_317888.jpg" width="10%" /><div id="lastDiv">asd</div></div>
`;

let content =""

class analytics extends Component {
  constructor(props) {
    super(props);
    this.state={
      value:0,
      content:""
    };
    this.quillRef = null;
    this.reactQuillRef = null;
  }

  componentDidMount(){
    this.reactQuillRef.getEditor().root.innerHTML = html;
    // this.reactQuillRef.getEditor().root.querySelector("div").classList.add("container")
    this.reactQuillRef.getEditor().root.addEventListener("contextmenu",function(event){
      event.preventDefault();
      var contextElement = document.getElementById("context-menu");
      let X = event.pageX;
      let Y = event.pageY;
      contextElement.style.top = Y + "px";
      contextElement.style.left = X + "px";
      contextElement.classList.add("active");
        let editor = event.target.id;
        localStorage.setItem("currentElement", editor)
    });
    window.addEventListener("click",function(){
      if(document.getElementById("context-menu")) 
      document.getElementById("context-menu").classList.remove("active");
    });
  }

  // componentWillUnmount(){
  //   window.removeEventListener("click",function(){
  //     document.getElementById("context-menu").classList.remove("active");
  //   });
  // }

  handleClick = () => {
    const element = document.querySelector("div");
    element.classList.remove("container");
  }
  
  handleChange = (value) => {
    this.setState({ text: value })
  }

  selectChange = (previousRange, source, editor) => {
    this.setState({ value: previousRange })
  }

  currentPosition = () => {
    if(this.reactQuillRef.getEditorSelection()){
      var cursorPosition = this.reactQuillRef.getEditorSelection().index;
      this.reactQuillRef.getEditor().insertText(cursorPosition, "★");
    }
  }

  modules = {
    toolbar: toolbarOptions,
  };

  render() {
    if(document.querySelector('img')){
      document.querySelector('img')
      .addEventListener('click', () => {
        this.handleClick()
      })
    }

    return (
      <div>
      <h3 className=" fw-normal shadow-sm p-4 m-0 bg-body rounded" style={{ width: "99%" }}>Analytics</h3>
      {/* <Paper style={{ width: "50%", height: "20%", margin: "20px", padding: "20px" }}>
      <Dashboard />
      </Paper> */}
      <div className="container mt-4" style={{ maxWidth: "90%" }}> 
      <ReactQuill 
        ref={(el) => { this.reactQuillRef = el }}
         theme="snow"
         modules={this.modules}
         onChange={this.handleChange}
         onBlur={this.selectChange}
         >
           </ReactQuill>
           <ContextMenu id="contex-menu" content={this.reactQuillRef} value={this.state.value}/>
      </div>
      <button className="btn btn-success" onClick={this.currentPosition}>click</button>
      </div>
    );
  }
}

export default analytics;

