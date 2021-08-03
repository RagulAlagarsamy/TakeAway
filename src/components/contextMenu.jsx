
import React, { Component } from "react";
import ReactQuill, {Quill, Delta} from 'react-quill';
import './contextMenu.css';

let html = `
   <div><div class="container" id="mainDiv">asd <span style="background-color:red"><strong>asdadad</strong></span> </div>
    <img id="image" src="https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-vector-location-icon-png-image_317888.jpg" width="10%" /><div id="lastDiv">asd</div></div>
`;

export default class contextMenu extends Component {
    constructor(props){
        super(props)
    }

    cutOperation = (e) => {
        if (e.defaultPrevented) return;
        setTimeout(()=>{
            const text = this.props.content.getEditor().getText(this.props.value);
            this.props.content.getEditor().deleteText(this.props.value, Quill.sources.USER);
            navigator.clipboard.writeText(text)
        },0);
    }

    
    copyOperation = (e) => {
        if (e.defaultPrevented) return;
        setTimeout(()=>{
            const text = this.props.content.getEditor().getText(this.props.value);
            navigator.clipboard.writeText(text)
        },0);
    }

    pasteOperation = async (e) => {
        const text = await navigator.clipboard.readText()
        this.props.content.getEditor().insertText(this.props.value.index, text);
    }

    addHtml = () => {
        // const delta = this.props.content.getEditor().clipboard.convert(html)
        // this.props.content.getEditor().setContents(delta, 'silent')
        var editor = document.getElementsByClassName('ql-editor')
        editor[0].innerHTML = html
    }

    deleteHtml = (e) => {
        if (e.defaultPrevented) return;
        // const delta = this.props.content.getEditor().clipboard.convert("")
        // this.props.content.getEditor().setContents(delta, 'silent')
      var id = localStorage.getItem("currentElement");  
      var element = document.getElementById(id);
      element.remove();
    }

    addClass = () => {
        this.props.content.getEditor().formatText(this.props.value,'container',true);  
    }

    deleteClass = () => {
        this.props.content.getEditor().removeFormat(this.props.value);  
    }

    copyHtml = (e) => {
        e.preventDefault();
        var id = localStorage.getItem("currentElement");  
        var element = document.getElementById(id);
        navigator.clipboard.writeText(id)
    }

    pasteHtml = async (e) => {
        e.preventDefault();
        const text = await navigator.clipboard.readText()
        var element = document.getElementById(text).outerHTML;
        // this.props.content.getEditor().clipboard.dangerouslyPasteHTML(this.props.value.index, element);
        this.props.content.getEditor().insertEmbed(this.props.value.index, 'customEmbed', element);
    }


render(){
    return(
        <div id="context-menu">
        <div class="item" onClick={this.cutOperation}>
            <i class="fa fa-cut" ></i> Cut
        </div>
        <div class="item" onClick={this.copyOperation}>
            <i class="fa fa-files-o"></i> Copy
        </div>
        <div class="item" onClick={this.pasteOperation}>
            <i class="fa fa-paste"></i> Paste
        </div>
        <div class="item" onClick={this.addHtml}>
            <i class="fa fa-code"></i> Add HTML
        </div>
        <div class="item" onClick={this.deleteHtml}>
            <i class="fa fa-trash"></i> Delete HTML
        </div>
        <div class="item" onClick={this.addClass}>
            <i class="fa fa-code"></i> Add Class
        </div>
        <div class="item" onClick={this.deleteClass}>
            <i class="fa fa-ban"></i> Delete Class
        </div>
        <div class="item" onClick={this.copyHtml}>
            <i class="fa fa-ban"></i> Copy HTML
        </div>
        <div class="item" onClick={this.pasteHtml}>
            <i class="fa fa-ban"></i> Paste HTML
        </div>
        </div>
    )
}
}