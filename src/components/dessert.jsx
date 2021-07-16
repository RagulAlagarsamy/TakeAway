import React, { Component } from 'react';
import { decreaseItems, increaseItems } from "../store/user";

class desserts extends Component {
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
            <img src="https://assets.limetray.com/assets/image_manager/uploads/7196/Banner-1-sweets-23.jpg" width="100%" alt="coffee"></img>
            <div className="container mb-5" style={{ backgroundColor:"white", borderRadius:'10px' }}>
            <div className="mainContents text-center"  style={{ backgroundColor:"white" }}>
                <main className="form-details" style={{ marginRight: "auto"}}>
                <h1 className="mb-3" style={{ color:"#8e2e03" }}>Our Ranges of</h1>
                <h6 className="mb-5" style={{ color:"#8e2e03" }}>SWEET AND SNACKS </h6>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                        <img src="https://thumbs.dreamstime.com/b/indian-sweet-rasgulla-famous-bengali-sweet-over-white-background-rasgulla-sweet-food-105732045.jpg" width="80%" alt="coffee"></img>
                        <h4 style={{ color:"#8e2e03" }}>Rasagulla</h4>
                        </div>
                        <div className="col-lg-4">
                        <img src="https://www.bigbasket.com/media/uploads/p/l/800389764_1-anand-sweets-and-savouries-sweets-kaju-katli.jpg" width="60%" alt="coffee"></img>
                        <h4 style={{ color:"#8e2e03", paddingTop: "0px"}}>Kaju Katli</h4>
                        </div>
                        <div className="col-lg-4">
                        <img src="https://5.imimg.com/data5/XT/GA/MY-29970631/motichoor-laddu-sweet-500x500.png" width="80%" alt="coffee"></img>
                        <h4 style={{ color:"#8e2e03", }}>Laddu</h4>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-4">
                        <img src="https://lh3.googleusercontent.com/proxy/PcZ_g-ik6AbX1-cxVGP3A89f3840CwFwuBFn-k8SL9sjEuZ4Crn0eRpqzjJlYOiZ5GO1HUMJISnQ9A_j1ZVcbQBuo9zoVhYdG4wDJU9436XcBF-O4ySzII61" width="100%" alt="coffee"></img>
                        <h4 style={{ color:"#8e2e03" }}>Rasamalai</h4>
                        </div>
                        <div className="col-lg-4">
                        <img src="https://www.giftkart.pk/media/catalog/product/cache/8f9ff50889b1a192ddfa50220fe53c9a/d/e/delicious_gulab_jamun_sweet_2_kg_.png" width="60%" alt="coffee"></img>
                        <h4 style={{ color:"#8e2e03", paddingTop: "0px"}}>Gulab Jamun</h4>
                        </div>
                        <div className="col-lg-4">
                        <img src="https://5.imimg.com/data5/JC/CU/MY-29970631/mysore-pak-500x500.png" width="80%" alt="coffee"></img>
                        <h4 style={{ color:"#8e2e03", }}>Pak</h4>
                        </div>
                    </div>
                </div>
                <br></br>

                </main>
            </div>
            </div>
                    <img src="https://cpimg.tistatic.com/39511/6/template_photo_1.jpg" width="100%" alt="coffee"></img>
            </div>
        );
    }
}

export default desserts;