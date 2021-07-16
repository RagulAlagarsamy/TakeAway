import React, { Component } from 'react';
import { decreaseItems, increaseItems } from "../store/user";

class icecream extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    decreaseItems = (menu) => {
        this.props.dispatch(decreaseItems(menu))
     }
 
     increaseItems = (menu) => {
         this.props.dispatch(increaseItems(menu))
      }
    render() {
        return (
            <div style={{ backgroundColor:"white" }}>
            <img src="https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_1440/https://www.havmor.com/wp-content/uploads/2020/04/Party-Packs-1.png" width="100%" alt="coffee"></img>
            <div className="container mb-5" style={{ backgroundColor:"white", borderRadius:'10px' }}>
            <div className="mainContents text-center"  style={{ backgroundColor:"white" }}>
                <main className="form-details" style={{ marginRight: "auto"}}>
                <h1 className="mb-3" style={{ color:"#8e2e03" }}>Featured Stores</h1>
                <h6 className="mb-5" style={{ color:"#8e2e03" }}>Exclusive picks for you!</h6>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                        <img src="https://www.vadilalicecreams.com/wp-content/uploads/2018/05/golden-fantasey.png" width="80%" alt="coffee"></img>
                        <h4 style={{ color:"#8e2e03", paddingTop: "25px" }}>French Icecreams</h4>
                        </div>
                        <div className="col-lg-4">
                        <img src="https://thumbs.dreamstime.com/b/bowl-ice-cream-balls-isolated-white-background-176524142.jpg" width="100%" alt="coffee"></img>
                        <h4 style={{ color:"#8e2e03", paddingTop: "0px"}}>Hard Icecreams</h4>
                        </div>
                        <div className="col-lg-4">
                        <img src="https://cdn.picpng.com/ice_cream/ice-cream-hd-27205.png" width="80%" alt="coffee"></img>
                        <h4 style={{ color:"#8e2e03", paddingTop: "47px" }}>French Icecreams</h4>
                        </div>
                    </div>
                </div>
                <br></br>
                </main>
            </div>
            </div>
            <div className="container-fluid mt-4">
                    <div className="row">
                        <div className="col-lg-6">
                        <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-53188,resizemode-1,msid-49335020/can-vadilal-make-india-drool-with-its-non-ice-cream-products.jpg" width="100%" alt="coffee"></img>
                        </div>
                        <div className="col-lg-6" style={{padding:"70px", margin:"auto"}}>
                        <h4 style={{ color:"#8e2e03", paddingTop: "25px" }}>TakeAway Icecreams</h4>
                        <br></br>
                        <p className="text-bright" style={{textAlign:"left"}}>If you could taste celebration it would taste like TREAT.</p>
                        <p style={{textAlign:"left"}}>TakeAway Ice Cream was won by taste, innovation and quality. It’s a difference you can taste. Which is why we are so loved by our fans and continue to make new ones? Keeping with the times and changing tastes of customers, TakeAway Ice Cream, as an ice cream brand has come a long way. Fast moving ahead with its path-breaking innovations, strategic roadmap and fruitful partnerships, Treat is all set to become Central India's most loved ice cream brand.</p>
                        <p style={{textAlign:"left"}}>All the standards of hygiene and quality control are observed at these plants. Treat has always adopted the latest and the most suitable technique for preparing its ice creams. The motto behind this is to give its customers the best products and retain a satisfactory smile on their faces. Treat scoops out lip-smacking variety of 100% vegetarian ice creams, sundaes, candy bars and novelties.</p>
                        </div>
                    </div>
                </div> 
                <br></br>
                <img src="https://wallup.net/wp-content/uploads/2019/09/768156-dessert-sweets-sugar-meal-food-ice-cream-baby-child.jpg" width="100%" alt="coffee"></img>
                <div className="container-fluid mt-4 p-5" style={{ backgroundColor:"white" }} >
                <h1 style={{ color:"#8e2e03", textAlign: "center" }}>Ice Cream Cakes</h1>
                    <div className="row m-5">
                        <div className="col-lg-4">
                        <img src="https://dairyqueen.com.ph/wp-content/uploads/2020/06/Kitkat-Cake-8inches_-1024x1024.png" width="78%" alt="coffee"></img>
                        <h4>DQ Icecream Cakes</h4>
                        </div>
                        <div className="col-lg-4 pt-5 mt-4">
                        <img src="https://i.pinimg.com/originals/dc/fd/74/dcfd743a38bb669ded0aaf8623c8b6ec.png" width="100%" alt="coffee"></img>
                        <h4>Custard Icecream Cakes</h4>
                        </div>
                        <div className="col-lg-4 pt-4">
                        <img src="https://images.heb.com/is/image/HEBGrocery/000773614?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0" width="90%" alt="coffee"></img>
                        <h4>Oreo Icecream Cakes</h4>
                        </div>
                    </div>
                </div>
                    <img src="https://creamistry.com/assets_front/images/footer_image.jpg" width="100%" alt="coffee"></img>
            </div>
        );
    }
}

export default icecream;