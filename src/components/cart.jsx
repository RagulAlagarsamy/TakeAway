import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { decreaseItems, increaseItems } from "../store/user";
import { DataGrid } from '@material-ui/data-grid';
import './dataGrid.css';

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
            { field: 'src', headerName: 'Images', width: 200 , height: 500,
            sortable: false,
            renderCell: (params) =>{
                return <img src={params.value} width="80px" style={{ margin: "auto" }} />
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
                    <button className="btn btn-outline-success" style={{marginRight: "10px", fontSize: "12px"}} onClick={() => this.decreaseItems(params.row)}>-</button>{params.value}<button className="btn btn-outline-success" style={{marginLeft: "10px", fontSize: "12px"}} onClick={() => this.increaseItems(params.row)}>+</button></div>
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
                <div className="row" style={{textAlign: "left", backgroundColor:"white" , margin: "30px"}}>
                <h1 style={{textAlign: "left" , margin: "30px"}}>Your Bag  <span className="h5">{this.props.menus.length} item</span></h1>
                    <div className="col" style={{ height: 450, width: '100%', textAlign: "center" }}>
                    <DataGrid rows={rows} columns={columns} rowHeight={100} pageSize={5} style={{ fontSize: "70px" }} />
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