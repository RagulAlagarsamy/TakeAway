
      <Carousel >

      <div className="imgContainers">
      <video id="glass" width="1920" height="1080" loop autoPlay src={Video} type="video/mp4" style={{ bottom: "100px", position: "relative"}} />
      <div id="textContent" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "850px" ,position:"relative", color: "black"}}>
      <h1 style={{ fontSize: "80px", fontFamily: 'Lato, sans-serif', marginBottom: "40px", marginLeft: "40px" }}>The Stylish <br />coffee</h1>
      <h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
      </div>
      </div> 
  
      <div className="imgContainers">
      <img src={newImage} width="100%" />
      {/* <video id="glass" width="1920" height="1080" className="videoTag"  loop autoPlay src={Videos} type="video/mp4" style={{ bottom: "100px", position: "relative"}} /> */}
      <div id="newContents" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "910px" , left: "120px" ,position:"relative", color: "white"}}>
      <h1 style={{ fontSize: "80px", fontFamily: 'Lato , sans-serif', marginBottom: "40px", marginLeft: "40px" }}>WE LOVE <br />WHAT WE DO</h1>
      <h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
      </div> 
      </div>

      <div className="imgContainers">
      <img src={Image} width="100%" />
      <div id="textContents" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "650px" , left: "750px" ,position:"relative", color: "white"}}>
      <h1 style={{ fontSize: "70px", fontFamily: 'Lato , sans-serif', marginBottom: "20px", marginLeft: "20px" }}>COFFEE IS <br />OUR LANGUAGE</h1>
      <h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
      </div> 
      </div>
      </Carousel>





<Carousel showThumbs={false} showIndicators={false} infiniteLoop={true}>

<div className="carouselImage">
<video id="glass" width="1920" height="1080" loop autoPlay src={Video} type="video/mp4" style={{ bottom: "100px", position: "relative"}} />
{/* <div id="textContent" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "700px" ,position:"relative", color: "black"}}>
<h1 style={{ fontSize: "80px", fontFamily: 'Lato, sans-serif', marginBottom: "40px", marginLeft: "40px" }}>The Stylish <br />coffee</h1>
<h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
</div> */}
</div>


<div className="carouselImage">
<img src={newImage} width="100%" />
{/* <video id="glass" width="1920" height="1080" className="videoTag"  loop autoPlay src={Videos} type="video/mp4" style={{ bottom: "100px", position: "relative"}} /> */}
{/* <div id="newContents" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "140px" , left: "0px" ,position:"absolute", color: "white"}}>
<p style={{ fontSize: "70px", fontFamily: 'Lato , sans-serif', marginBottom: "40px", marginLeft: "40px" }}>WE LOVE <br />WHAT WE DO</p>
<h2 style={{ fontSize: "18px", fontFamily: 'Barlow Condensed, sans-serif',marginLeft: "40px" }}>A cup of coffee lasts only a moment, but it is <br /> that moment that makes your day better.</h2>
</div>  */}
</div>


<div className="carouselImage">
<img src={Image} width="100%" />
{/* <div id="textContents" style={{ textAlign : "left", padding:"60px",zIndex:"1",bottom: "650px" , left: "750px" ,position:"relative", color: "white"}}>
P

</div>  */}
</div>

</Carousel>



<Carousel showThumbs={false} showIndicators={false} infiniteLoop={true} showArrows={false} showStatus={false}>
<div className="carouselImage">
<video id="glass" width="1920" height="1080" loop autoPlay src={Video} type="video/mp4" />
</div>
<div className="carouselImage">
  <img src={newImage} width="100%" />
</div>
<div className="carouselImage">
<img src={Image} width="100%" />
</div>

</Carousel>




// import React, { Component } from "react";
// // import ReactQuill, { Quill } from "react-quill";
// import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // ES6
// import { useQuill } from "react-quilljs";

// // #1 import quill-image-uploader
// import ImageUploader from "quill-image-uploader";

// // #2 register module
// Quill.register("modules/imageUploader", ImageUploader);


// class analytics extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: ""
//     };
//   }

//   handleChange = (value) => {
//     this.setState({ text: value })
//   }

//   modules = {
//     // #3 Add "image" to the toolbar
//     toolbar: [
//       // [{ header: "1" },{ header: "2" },{ header: "3" },{ header: "4" }]
//       ["link","image","video"]],
//     // # 4 Add module and upload function
//     imageUploader: {
//       upload: file => {
//         return new Promise((resolve, reject) => {
//           const formData = new FormData();
//           formData.append("image", file);

//           fetch(
//             "https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22",
//             {
//               method: "POST",
//               body: formData
//             }
//           )
//             .then(response => response.json())
//             .then(result => {
//               console.log(result);
//               resolve(result.data.url);
//             })
//             .catch(error => {
//               reject("Upload failed");
//               console.error("Error:", error);
//             });
//         });
//       }
//     }
//   };

//   formats = [
//     "header",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "blockquote",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//     "imageBlot" // #5 Optinal if using custom formats
//   ];

 

//   render() {
//     return (
//       <div>
//       <h3 className=" fw-normal shadow-sm p-4 m-0 bg-body rounded" style={{ width: "99%" }}>Analytics</h3>
//       <div className="container mt-4" style={{ maxWidth: "70%" }}> 
//       <ReactQuill 
//          value={this.state.text}
//          theme="snow"
//          modules={this.modules}
//          formats={this.formats}
//          onChange={this.handleChange} />
//       </div>
//       </div>
//     );
//   }
// }

// export default analytics;




import React, { Component } from "react";
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import Quill from 'quill/dist/quill.js';
import Toolbar from 'quill/modules/toolbar';
import Snow from 'quill/themes/snow'; //snow works, but need to import and register formats, and replace icons...

import Bold from 'quill/formats/bold';
import Italic from 'quill/formats/italic.js';
import Header from 'quill/formats/header';
import Underline from 'quill/formats/underline';
import Link from 'quill/formats/link';
import List, { ListItem } from 'quill/formats/list';

import Icons from 'quill/ui/icons'; 


class analytics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  componentDidMount(){
    Quill.register({
      'modules/toolbar': Toolbar,
      'themes/snow.js': Snow,
      'formats/italic': Italic,
      'formats/header': Header,
      'formats/underline': Underline,
      'formats/link': Link,
      'formats/list': List,
      'formats/list/item': ListItem,
      'ui/icons': Icons
    });

    var icons = Quill.import('ui/icons');
    icons['bold'] = '<i class="fa fa-bold" aria-hidden="true"></i>';
    icons['italic'] = '<i class="fa fa-italic" aria-hidden="true"></i>';
    icons['underline'] = '<i class="fa fa-underline" aria-hidden="true"></i>';
    icons['link'] = '<i class="fa fa-link" aria-hidden="true"></i>';
    icons['clean'] = '<i class="fa fa-eraser" aria-hidden="true"></i>'; 

    var toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean']                                         // remove formatting button
    ];

    var quill = new Quill('#editor', {
      modules: {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline'],
          ['image', 'code-block']
        ]
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'  // or 'bubble'
    });



    // console.log(this.editor);
    // if(this.editor==null){
    //   console.log("Here");
    //   this.editor = new Quill('#editor', {
    //     theme: 'snow', //this needs to come after the above, which registers Snow...
    //     placeholder: "Write something awesome..."
    //   });
    //   console.log(this.editor);
    // }

  }

  handleChange = (value) => {
    this.setState({ text: value })
  }
 

  render() {
    return (
      <div>
      <h3 className=" fw-normal shadow-sm p-4 m-0 bg-body rounded" style={{ width: "99%" }}>Analytics</h3>

            {/* <!-- Create the editor container --> */}
            <div id="editor">
            </div>
   
      </div>
    );
  }
}

export default analytics;

