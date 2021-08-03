import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { decreaseItems, paymentSuccess} from "../store/user";
import { DataGrid } from '@material-ui/data-grid';
import './dataGrid.css';
import firebase  from '../config/fbConfig';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { db } from "../config/fbConfig";
import { Modal,ModalBody } from 'reactstrap';
import Payment from './PaymentForm';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import './cart.css';


const stripePromise = loadStripe("pk_test_51JAuGpSH4mPX8koHXg1rhzwl4HnX8K9EqzbqwouOQr8K9sd6zb5f0bUVZGn9Fuzyhoi7zMQ0IGZyzR4ZnH4m0pMD00eMvU15wo");

class cart extends Component {
    constructor(props) {
        super(props);
        this.state={
            ModalVisibles: false,
            menus:[],
            orderMenu: []
        }
    }

    fetchBlogs=async()=>{
        const items = [];
        firebase.collection("Orders").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                items.push(doc.data())
            });
            this.setState({ menus : items })
        });
      }

    componentDidMount(){
        this.fetchBlogs();
        this.setState({ orderMenu : this.props.menus})
    //    const menu =  getItems();
    //    console.log(menu);
    }

     getArraySum = (a) => {
        var total=0;
        for(var i in a) { 
            total += a[i].total;
        }
        return total;
    }

    decreaseItems = (menu) => {
        this.props.dispatch({ type: "decreaseUserItems", value: menu }) 
    }

    increaseItems = (menu) => {
        this.props.dispatch({ type: "increaseUserItems", value: menu }) 
     }

     
    modalCloseToggles = () =>{
        this.setState({ModalVisibles: false });
      }
    
     submitCart = (items,total) => {
        // axios.post('http://localhost:5001/api/sms',
        // {to: "+916379350835",
        // body: "Dear Customer, Your payment for TakeAway order #1212 is Rs."+total})
        this.setState({ModalVisibles : true})
        db.ref("orders").push({
            CustomerName: this.props.currentUser.fName,
            ProductDetails : items,
            Amount: total,
            Timestamp: Date.now(),
          });
       }

       closeModal = () => {
        this.setState({ModalVisibles: false});
        this.props.dispatch(paymentSuccess())
       }
 
    render() {
        const total = (this.props.menus.length !== 0) ? this.getArraySum(this.props.menus) : 0
        let status = false;
        if(this.props.user[0]){
           status =  this.props.user[0].status;
        }

        const columns = [
            { field: 'src', headerName: 'Images', width: 200 , height: 500,
            sortable: false,
            renderCell: (params) =>{
                return <img src={params.value} width="80px" style={{ margin: "auto" }} alt="New Images" />
            }
            },
            { field: 'title', headerName: 'Product', width: 300 
            },
            {
                field: 'price',
                headerName: 'Price',
                type: 'number',
                width: 200,
              },
              {
                field: 'quantity',
                headerName: 'Quality',
                type: 'number',
                width: 200,
                renderCell: (params) =>{
                    return <div>
                    <button className="btn btn-outline-success" style={{marginRight: "10px", fontSize: "12px",marginTop: 0}} onClick={() => this.decreaseItems(params.row)}>-</button>{params.value}<button className="btn btn-outline-success" style={{marginLeft: "10px", fontSize: "12px",marginTop: 0}} onClick={() => this.increaseItems(params.row)}>+</button></div>
                }
              },
            {
              field: 'total',
              headerName: 'Total',
              type: 'number',
              width: 200,
            }
          ];

          const rows = this.props.menus;
          
        
        return (
            <div>
            <div className="container mt-3">
            <h1 style={{textAlign: "left", margin: "30px"}}>Shopping Cart</h1>
                <div className="row" style={{textAlign: "left", backgroundColor:"white" , margin: "30px", borderRadius: "20px"}}>
                <h1 style={{textAlign: "left" , margin: "30px"}}>Your Bag  <span className="h5">{this.props.menus.length} item</span></h1>
                    <div className="col" style={{ height: 450, width: '100%', textAlign: "center" }}>
                    <DataGrid rows={rows} columns={columns} rowHeight={100} pageSize={5} style={{ fontSize: "70px" }} />
                    </div>
                    <h4 style={{padding: "30px", textAlign:"right"}}>Total: ${total}</h4>
                </div>
                <div style={{ textAlign: "center", padding: "20px" }}>
                <Button onClick={() => this.submitCart(this.props.menus,total)} variant="outlined"  disabled = {(!status)?true:false} color="primary">
                    Pay Now
                    </Button>
                    <Button variant="outlined" color="secondary" style={{ marginLeft: "10px" }}>
                    <Link to= "/menu" style={{ textDecoration: "none", color: "red" }}>  Go Back </Link>
                    </Button>
                </div>
            </div>
            <Modal isOpen={this.state.ModalVisibles} style={{ maxWidth:"1000px", textAlign:"left"}}>
                <ModalBody style={{padding: "0px"}}>
                <h3 className="fw-normal p-4">Payment Details</h3> 
                <main className="form-details" style={{ margin: "0", padding:"0"}}>
     
                        <div style={{ backgroundColor: "#f5f5f5", margin: "0px", padding: "10px"}}>
                                <div>
                                <div className="container mt-3 shadow p-2" style={{ backgroundColor: "white", borderRadius:"10px" }}>
                                <h4 className="fw-normal p-3">Cart Details<span className="h5 pull-right"> Total:${total}  </span></h4> 
                                    {this.props.menus.map((item) =>{
                                       return( <div className="row mb-3" key={item.id} style={{textAlign: "left"}}>
                                            <div className = "col-lg-3" width="50%" style={{ textAlign: "center"}}>
                                                <img src={item.src}  width="50%" alt={item.id}/>
                                            </div>
                                            <div className = "col-lg-6 p-3">
                                            <h4 style={{ margin: "auto", textAlign: "left"}}>{item.title}</h4>
                                            <p className="m-2">Quantity: {item.quantity}</p>
                                            <p className="m-2">Price: Rs.{item.price}</p>
                                            </div>
                                    </div>
                                        )
                                    })}
                        </div>
                                </div>
                        </div>
               
                    </main>
                        <main className="form-details" style={{ margin: "0", padding:"0"}}>
                        <div style={{ backgroundColor: "#f5f5f5", margin: "0px", padding: "10px"}}>
                                <div>
                                <div className="container mt-3 shadow p-2" style={{ backgroundColor: "white", borderRadius:"10px" }}>
                                <h4 className="fw-normal p-3">Payment Card Details</h4> 
                                <div className= "p-4">
                                <Elements stripe={stripePromise}>
                                   <Payment  handleClose = {this.closeModal} />
                                </Elements>
                                </div>
                        </div>
                                </div>
                        </div>
                            </main>
                <button className="btn btn-outline-danger btnAdd m-4" onClick={this.modalCloseToggles}>Close</button>
                </ModalBody>
            </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({  
    menus: state.users.list,
    user:state.users.user,
    currentUser: state.users.currentUser
})

// const mapDispachToProps = dispatch => {
//     return {
//         decreaseItems: (menu) => dispatch({ type: decreaseItems, value: menu })
//     };
//   };

export default connect(mapStateToProps)(cart)