import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateQuantityDetails } from "../store/user";
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';


const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
      color: theme.palette.common.black,
    },
    tooltip: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  
  
  function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
  
    return <Tooltip arrow classes={classes} {...props} />;
  }
  
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

class selected extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quantity : [],
            open: false,
            loadingOpen: false
         };
    }

    componentDidMount(){
        const index = this.props.list.findIndex(item => item.title === this.props.selectedItem.title);
        let count = [];
        if(index !== -1){
            count = Object.assign({}, this.props.selectedItem)
            count.quantity = this.props.list[index].quantity
        }else{
            count =  this.props.selectedItem
        }     
        this.setState({ quantity: count})
    }

    componentWillReceiveProps(nextProps) {
        const index = nextProps.list.findIndex(item => item.title === nextProps.selectedItem.title);
        let count = [];
        if(index !== -1){
            count = Object.assign({}, nextProps.selectedItem)
            count.quantity = nextProps.list[index].quantity
        }else{
            count =  nextProps.selectedItem
        }     
        this.setState(() => { return {quantity: count} })
      }

    decreaseItems = () => {
        this.setState(prevState => {
            const quantity =  Object.assign({}, prevState.quantity);
            quantity.quantity--;
            return {quantity}
                })
     }
 
     increaseItems = () => {
        this.setState(prevState => {
            const quantity =  Object.assign({}, prevState.quantity);
            quantity.quantity++;
            return {quantity}
         })  
    }

      setQuantity = (item) =>{
        //   var item = Object.assign({}, item)
        //   item.quantity = this.state.quantity;
          this.props.dispatch(updateQuantityDetails(item))
          this.setState({ open: true, loadingOpen: true })

        //   setTimeout(() => {
        //       this.setState({ loadingOpen: false})
        //   },1000)
      }

      handleClose = () => {
        this.setState({  open: false });
      };
    

    render() {   
        const { open } = this.state;
        const classes = makeStyles((theme) => ({
            backdrop: {
              zIndex: theme.zIndex.drawer + 1,
              color: '#fff',
            },
          }));
        
        return (
            <div>
                {this.state.quantity.length !== 0 ? 
                <div className="container mt-3 shadow" style={{ backgroundColor: "white", borderRadius:"10px" }}>
                    <div className="row" style={{textAlign: "left", backgroundColor:"white" , margin: "30px"}}>
                <h1 style={{textAlign: "left", margin: "30px"}}>Product Details</h1>
                                <div className = "col-lg-5" width="50%" style={{ textAlign: "center", padding: "50px"}}>
                                    <img src={this.state.quantity.src} width="70%" alt=""/>
                                </div>
                                <div className = "col-lg-6 p-5">
                                <h3 style={{ margin: "auto", textAlign: "left"}}>{this.state.quantity.title}</h3>
                                <h5 style={{ margin: "20px 0px", textAlign: "left"}}>Price: <span style={{ color: "red" }}>${this.state.quantity.price}</span></h5>
                                <p className="mt-4">{this.state.quantity.description}</p>
                                {(this.state.quantity.quantity === 0)? <button className="btn btn-outline-success" style={{margin: "10px", fontSize: "12px"}} onClick={this.increaseItems}>Order</button> :
                                <div><button className="btn btn-outline-success" style={{marginRight: "10px", fontSize: "12px", marginTop: 0}} onClick={this.decreaseItems}>-</button>{this.state.quantity.quantity}<button className="btn btn-outline-success" style={{marginLeft: "10px", fontSize: "12px",marginTop: 0}} onClick={this.increaseItems}>+</button><br></br><button className="btn btn-outline-success mt-3" onClick={() => this.setQuantity(this.state.quantity)} style={{fontSize:"11px"}}>ADD TO CART</button></div>}
                                <AvatarGroup max={4} className="mt-3" >
                                <h5 style={{ marginRight: "10px", marginTop: "6px" }}>Reviews:</h5>
                                <BootstrapTooltip title="Jason">
                                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" />
                                </BootstrapTooltip>
                                <BootstrapTooltip title="Robert">
                                <Avatar alt="Travis Howard" src="https://i1.pickpik.com/photos/516/857/262/smile-profile-face-male-preview.jpg" />
                                </BootstrapTooltip>
                                <Avatar alt="Cindy Baker" src="https://i.pinimg.com/originals/bf/0f/6b/bf0f6be29343f675e7e4394843ba3fc5.webp" />
                                <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                </AvatarGroup>
                                <br></br>
                                <br></br>
                                {/* <Backdrop  open= {true}>
                                <CircularProgress color="inherit" />
                                </Backdrop>      */}
                                </div>         
                    </div>
                    <Snackbar className={classes.backdrop} open={open} autoHideDuration={6000} onClose={this.handleClose}>
                    <Alert onClose={this.handleClose} severity="success">
                        Successfully Added to Cart!
                    </Alert>
                    </Snackbar>
                </div>
                
                    : <div className="container mt-3 shadow" style={{ backgroundColor: "white", borderRadius:"10px" }}> <div className="row" style={{textAlign: "left", backgroundColor:"white" , margin: "30px"}}><h1 style={{textAlign: "left", margin: "30px"}}>Product Details</h1> <h5 style={{textAlign: "left", margin: "30px"}}>Please select an item.</h5> </div> </div>}
            </div>
        );
    }
}


const mapStateToProps = state => {  
    return{
        selectedItem: state.users.selectedItem,
        list: state.users.list,
        user: state.users.currentUser
    }
}

export default connect(mapStateToProps)(selected)
