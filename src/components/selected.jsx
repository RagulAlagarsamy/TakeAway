import React, { Component } from 'react';
import { connect } from "react-redux";
import { decreaseItems, addItems } from "../store/details";

class selected extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    decreaseItems = (menu) => {
        this.props.dispatch(decreaseItems(menu))
     }
 
     increaseItems = (menu) => {
         this.props.dispatch(addItems(menu))
      }
    render() {
        return (

            <div className="container mt-3" style={{ backgroundColor: "white", borderRadius:"10px" }}>
                <div className="row" style={{textAlign: "left", backgroundColor:"white" , margin: "30px"}}>
            <h1 style={{textAlign: "left", margin: "30px"}}>Product Details</h1>
                            <div className = "col-lg-5" width="50%" style={{ textAlign: "center", padding: "50px"}}>
                                <img src={this.props.selectedItem.src} width="70%"/>
                            </div>
                            <div className = "col-lg-6 p-5">
                            <h3 style={{ margin: "auto", textAlign: "left"}}>{this.props.selectedItem.title}</h3>
                            <p className="mt-4">{this.props.selectedItem.description}</p>
                            <button className="btn btn-outline-success" style={{margin: "10px", fontSize: "12px"}} onClick={() => this.increaseItems(this.props.selectedItem)}>ADD TO CART</button>
                            </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = state => ({  
    selectedItem: state.selectedItem
})

export default connect(mapStateToProps)(selected)
