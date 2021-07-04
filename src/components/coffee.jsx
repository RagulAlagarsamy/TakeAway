import React, { Component } from 'react';
import { decreaseItems, increaseItems } from "../store/user";

class coffee extends Component {
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
            <img src="https://www.csmedia1.com/lyonacloud.org/coffee.jpg" width="100%"></img>
            <div className="container mb-5" style={{ backgroundColor:"white", borderRadius:'10px' }}>
            <div className="mainContents text-center"  style={{ backgroundColor:"white" }}>
                <main className="form-details" style={{ marginRight: "auto"}}>
                <h1 className="mb-3" style={{ color:"#8e2e03" }}>Featured Stores</h1>
                <h6 className="mb-5" style={{ color:"#8e2e03" }}>Exclusive picks for you!</h6>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                        <img src="https://thumbs.dreamstime.com/b/hot-coffee-latte-art-spiral-shape-foam-cappuccino-isolated-white-background-clipping-path-195718672.jpg" width="80%" ></img>
                        <h4 style={{ color:"#8e2e03" }}>Cappuccino</h4>
                        </div>
                        <div className="col-lg-4">
                        <img src="https://thumbs.dreamstime.com/b/fresh-espresso-macchiato-white-small-cup-isolated-background-99424100.jpg" width="87%" ></img>
                        <h4 style={{ color:"#8e2e03", paddingTop: "0px"}}>Espresso Macchiato</h4>
                        </div>
                        <div className="col-lg-4">
                        <img src="https://image.freepik.com/free-photo/white-cup-black-coffee-isolated-white-background_252965-15.jpg" width="80%" ></img>
                        <h4 style={{ color:"#8e2e03", paddingTop: "15px" }}>Americano</h4>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div className="col-lg-4">
                        <img src="https://www.allwhitebackground.com/images/3/3239.jpg" width="80%" ></img>
                        <h4 style={{ color:"#8e2e03" }}>Black</h4>
                        </div>
                        <div className="col-lg-4">
                        <img src="https://media.istockphoto.com/photos/cappuccino-with-cinnamon-on-a-foam-in-a-transparent-cup-with-a-double-picture-id1213046424?b=1&k=6&m=1213046424&s=170667a&w=0&h=B6nufLCbcQNdG8nvI_E3tIkPZ0Y64VjQ89plw0aoqk8=" width="90%" ></img>
                        <h4 style={{ color:"#8e2e03", paddingTop: "0px"}}>Galão</h4>
                        </div>
                        <div className="col-lg-4">
                        <img src="https://thumbs.dreamstime.com/b/hot-coffee-caramel-macchiato-cappuccino-cup-isolated-white-ba-background-clipping-path-included-107025290.jpg" width="68%" ></img>
                        <h4 style={{ color:"#8e2e03", paddingTop: "15px" }}>Macchiato</h4>
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
                        <img src="https://ak.picdn.net/shutterstock/videos/6204899/thumb/1.jpg" width="100%" ></img>
                        </div>
                        <div className="col-lg-6" style={{padding:"70px", margin:"auto"}}>
                        <h4 style={{ color:"#8e2e03", paddingTop: "25px" }}>TakeAway Coffees</h4>
                        <br></br>
                        <p className="text-bright" style={{textAlign:"left"}}>We are consistently researching, testing and implementing best practices throughout our business to raise the bar. Cupping hundreds of green bean samples every harvest before making our final selections is standard procedure at Blue Tokai Coffee Roasters. Holding advanced sensory trainings for junior roasters, and experimenting with processing at the farm level are just some of the ways that our highly skilled team is constantly evolving.</p>
                        </div>
                    </div>
                </div> 
                <img src="http://godere.vn/images/banner.jpg" width="100%"></img>
                <div className="container-fluid mt-4 p-5" style={{ backgroundColor:"white" }} >
                <h1 style={{ color:"#8e2e03" }}>Donuts</h1>
                    <div className="row m-5">
                        <div className="col-lg-4">
                        <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX6898921.jpg" width="100%" ></img>
                        <h4>Chocolate Donuts</h4>
                        </div>
                        <div className="col-lg-4 pt-5 mt-4">
                        <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX18473949.jpg" width="64%" ></img>
                        <h4>White Chocolate Donuts</h4>
                        </div>
                        <div className="col-lg-4 pt-4">
                        <img src="https://static8.depositphotos.com/1175884/i/600/depositphotos_10342353-stock-photo-white-chocolate-donut-isolated-in.jpg" width="90%" ></img>
                        <h4>White Creamy Donuts</h4>
                        </div>
                    </div>
                </div>
                    <img src="https://myhealthessentials.ca/wp-content/uploads/2016/08/1500-banner.jpg" width="100%"></img>
            </div>
        );
    }
}

export default coffee;