import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { decreaseItems, increaseItems } from "../store/user";
import { DataGrid } from '@material-ui/data-grid';

class cart extends Component {
    constructor(props) {
        super(props);
        this.state={
            ModalVisibles: false,
        }
    }

     getArraySum = (a) => {
        var total=0;
        for(var i in a) { 
            total += a[i].total;
        }
        return total;
    }

    decreaseItems = (menu) => {
       this.props.dispatch(decreaseItems(menu))
    }

    increaseItems = (menu) => {
        this.props.dispatch(increaseItems(menu))
     }
 
    render() {
        const total = this.getArraySum(this.props.menus)
        console.log(this.props.menus);
        let status = false;
        if(this.props.user[0]){
           status =  this.props.user[0].status;
          console.log(status);
        }

        const columns = [
            { field: 'id', headerName: 'ID', width: 70 },
            { field: 'firstName', headerName: 'First name', width: 130 },
            { field: 'lastName', headerName: 'Last name', width: 130 },
            {
              field: 'age',
              headerName: 'Age',
              type: 'number',
              width: 90,
            },
            {
              field: 'fullName',
              headerName: 'Full name',
              description: 'This column has a value getter and is not sortable.',
              sortable: false,
              width: 160,
              valueGetter: (params) =>
                `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
            },
          ];
        
        return (
            <div>
            <div className="container mt-3">
            <h1 style={{textAlign: "left", margin: "30px"}}>Shopping Cart</h1>
                <div className="row" style={{textAlign: "left", backgroundColor:"white" , margin: "30px"}}>
                <h1 style={{textAlign: "left" , margin: "30px"}}>Your Bag  <span className="h5">{this.props.menus.length} item</span></h1>
                    <div className="col">
                    <table className="table shadows-lg" style={{padding: "70px"}}>
                        <thead>
                            <tr style={{textAlign: "center"}}>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quality</th>
                            <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.menus.map((menu) =>{
                            return(
                                <tr key={menu.id} style={{textAlign: "center"}}>
                                <td style={{textAlign: "left" ,maxWidth: "90px"}}><div className="row">
                                    <div className= "col-lg-5 pull-right" style={{alignItems: "center"}}>
                                    <img src={menu.src} width="50px" style={{marginLeft: "70px"}}></img>
                                    </div>
                                    <div className="col">
                                    {menu.title}
                                    </div>
                                </div>
                                </td>
                                <td>{menu.price}</td>
                                <td style={{fontSize: "20px"}}><button className="btn btn-outline-success" style={{marginRight: "10px", fontSize: "12px"}} onClick={() => this.decreaseItems(menu)}>-</button>{menu.quantity}<button className="btn btn-outline-success" style={{marginLeft: "10px", fontSize: "12px"}} onClick={() => this.increaseItems(menu)}>+</button></td>
                                <td>${menu.total}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                        </table>
                    </div>
                    <h4 style={{padding: "30px", textAlign:"right"}}>Total: ${total}</h4>
                </div>
                <button className="btn btn-success" disabled = {(!status)?true:false} style={{marginRight: "auto"}}>Pay Now</button>
                <Link to= "/menu"><button className="btn btn-danger" style={{marginRight: "auto" ,marginLeft:"10px"}}>Go Back</button></Link>
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({  
    menus: state.list,
    user:state.user
})

export default connect(mapStateToProps)(cart)