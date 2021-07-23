
import React, { Component } from "react";
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6


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


let html = `
   <div id="key"><div>asd <span style="background-color:red"><strong>asdadad</strong></span> </div>
    <img src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-location-icon-png-image_317888.jpg" width="10%" /><div>asd</div></div>
`;

var Block = Quill.import('blots/block');
Block.tagName = 'div';
Quill.register(Block,true);

class analytics extends Component {
  constructor(props) {
    super(props);
    this.state={
      text:""
    }
    this.quillRef = null;
    this.reactQuillRef = null;
  }

  componentDidMount(){
    const delta = this.reactQuillRef.getEditor().clipboard.convert(html)
    this.reactQuillRef.getEditor().setContents(delta, 'silent')
    this.reactQuillRef.getEditor().root.querySelector("div").classList.add("container")
  }


  handleClick = () => {
    const element = document.querySelector("div");
    element.classList.remove("container");
  }
  
  handleChange = (value) => {
    this.setState({ text: value })
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
      <div className="container mt-4" style={{ maxWidth: "90%" }}> 
      <ReactQuill 
        ref={(el) => { this.reactQuillRef = el }}
         theme="snow"
         modules={this.modules}
         onChange={this.handleChange} 
         >
           </ReactQuill>
      </div>
      <button className="btn btn-success" onClick={this.currentPosition}>click</button>
      </div>
    );
  }
}

export default analytics;

