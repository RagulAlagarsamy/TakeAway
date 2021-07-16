import React, { Component } from 'react';
import { Modal,ModalBody } from 'reactstrap';
import { connect } from "react-redux";
import { updateProductDetails, deleteItem, addItem,addNewProduct, updatingProductDetails } from "../store/user";
import Button from '@material-ui/core/Button';
import './ProductManagement.css';
import { Link } from 'react-router-dom';

class ProductManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {
              title:"",
              src:"",
              price:"",
              description:""
            },
            errors: {},
            ModalVisibles: false,
            AddModalVisibles: false,
            currentPage: 1,
            todosPerPage: 4,
            menuOpen: null
          };
    }

    handleChange = (event) => {
        let input = Object.assign({}, this.state.input)
        input[event.target.name] = event.target.value;
      
        this.setState({
          input
        });
      }

      handleClick = (event) => {
        this.setState({
          currentPage: Number(event.target.id)
        });
      }
         
      handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.input);
        
        if(this.validate()){
        const input = this.state.input;
        console.log(input);
        this.props.dispatch(updatingProductDetails(input));
        alert("Successfully Updated.");
        this.setState({ModalVisibles: false});
        }else{
            console.log("error");
        }
      }

      handleAddSubmit = (event) =>{
        event.preventDefault();
        console.log(this.state.input);
        
        if(this.validate()){
        const input = this.state.input;
        input.id = this.props.menus.length +1;
        input.quantity = 0;
        console.log(input);
        this.props.dispatch(addNewProduct(input));
        this.setState({AddModalVisibles: false});
        }else{
            console.log("error");
        }
      }


      validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;
     
        if (!input["title"]) {
          isValid = false;
          errors["title"] = "Please enter product title.";
        }

        if (!input["src"]) {
            isValid = false;
            errors["src"] = "Please enter product image.";
          }

          if (!input["price"]) {
            isValid = false;
            errors["price"] = "Please enter product price.";
          }

          if (!input["description"]) {
            isValid = false;
            errors["description"] = "Please enter product description.";
          }
    
        this.setState({
          errors: errors
        });
    
        return isValid;
    }


    deleteItem = (input) =>{
      console.log(input);
      this.props.dispatch(deleteItem(input));
    }

    modalCloseToggles = () =>{
      this.setState({ModalVisibles: false});
    }

    modalOpenToggles = (input) =>{
      this.setState({ input , ModalVisibles : true})
    }

    modalAddNewProductToggles = () =>{
      this.setState({ AddModalVisibles : true, input: []})
    }
    modalAddNewProductCloseToggles = () =>{
      this.setState({ AddModalVisibles : false})
    }

    handleClicks = (event) => {
      this.setState({ menuOpen : event.currentTarget })
    }

    handleClose = () => {
      this.setState({ menuOpen : null })
    }

    render() {
      const { currentPage, todosPerPage } = this.state;

       // Logic for displaying todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = this.props.menus.slice(indexOfFirstTodo, indexOfLastTodo);

          // Logic for displaying page numbers
          const pageNumbers = [];
          for (let i = 1; i <= Math.ceil(this.props.menus.length / todosPerPage); i++) {
            pageNumbers.push(i);
          }

          const renderPageNumbers = pageNumbers.map(number => {
            return (
              <li key={number} className={ number === this.state.currentPage ? "page-item active" : "page-item"}><a className="page-link" style={{ cursor:"pointer" }} id={number} onClick={this.handleClick}>{number}</a></li>
            );
          });
        
        return (
            <div>
            <h3 className=" fw-normal shadow-sm p-4 m-0 bg-body rounded" style={{ width: "99%" }}>Management</h3>
            <div className = "row" style={{ padding: "50px"}}>
            <h3 className="fw-normal p-4" style={{ width: "99%" }}>Product Management <button onClick ={()=>this.modalAddNewProductToggles()} className="btn btn-outline-dark m-2">Add New Product</button></h3>
            <div style={{ padding: "0", overflow:"auto"}}>
            <table className="table table-bordered shadows-lg" style={{ border:"5px", padding: "70px"}}>
            <thead>
                <tr style={{textAlign: "center",padding: "30px"}}>
                <th style={{padding: "30px"}}>Product</th>
                <th style={{padding: "30px"}}>Product Images</th>
                <th style={{padding: "30px"}}>Price</th>
                <th style={{padding: "30px"}}>Stock Availability</th>
                <th style={{padding: "30px"}}>Added By</th>
                <th style={{padding: "30px"}}>Action</th>
                </tr>
            </thead>
            <tbody>
            {currentTodos.map((menu) =>{
                return(
                    <tr key={menu.id} style={{textAlign: "center"}}>
                    <td>
                    {menu.title}
                    </td>
                    <td><img src={menu.src} width="50px" style={{margin: "auto"}} alt="coffee"></img></td>
                    <td>{menu.price}</td>
                    <td> Available</td>
                    <td> Admin</td>
                    <td> 
                    <Button variant="contained" color="primary" onClick={()=>this.modalOpenToggles(menu)} >Update</Button> 
                    <Button  onClick={()=>this.deleteItem(menu)}>Delete</Button>
                            {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClicks}>
                              Update/Delete
                            </Button>
                            <Menu
                              id="simple-menu"
                              anchorEl={this.state.menuOpen}
                              keepMounted
                              open={Boolean(this.state.menuOpen)}
                              onClose={this.handleClose}
                            >
                              <MenuItem onClick={()=>this.modalOpenToggles(menu)}>Update</MenuItem>
                              <MenuItem onClick={()=>this.deleteItem(menu)}>Delete</MenuItem>
                            </Menu> */}
                    </td>
                    </tr>
                )
            })}
            </tbody>
            </table>
              <nav aria-label="Page navigation example">
              <ul className="pagination">
                {renderPageNumbers}
              </ul>
            </nav>
            </div>
            </div>
            <br></br>
            <Modal isOpen={this.state.ModalVisibles} style={{ maxWidth:"1000px", textAlign:"left"}}>
                <ModalBody style={{padding: "0px"}}>
                <h3 className="fw-normal p-3">Update Product Details</h3> 
                <main className="form-details" style={{ marginRight: "auto"}}>
                        <form style={{ textAlign: "left", padding: "0px"}}>
                        <div style={{ backgroundColor: "#f5f5f5", margin: "0px", padding: "10px"}}>
                        <div className = "row">
                        <div className= "col-lg-6" style={{ maxWidth:"500px"}}>
                           <div className = "row m-3">
                            <div className = "col-lg-12">
                            <label className="mb-2">Product Title</label>
                            <input type="text" className="form-control" name="title"  placeholder="Product Title" value={this.state.input.title} onChange={this.handleChange}/>
                            <div className="text-danger">{this.state.errors.title}</div>
                            </div>
                        </div>
                        <div className = "row m-3">
                            <div className = "col-lg-12">
                            <label className="mb-2">Product Image</label>
                            <input type="text" className="form-control" name="src"  placeholder="Product Image" value={this.state.input.src} onChange={this.handleChange}/>
                            <div className="text-danger">{this.state.errors.src}</div>
                            </div>
                        </div>
                        <div className = "row m-3">
                            <div className = "col-lg-12">
                            <label className="mb-2">Product Price</label>
                            <input type="text" className="form-control" name="price"  placeholder="Product Price" value={this.state.input.price} onChange={this.handleChange}/>
                            <div className="text-danger">{this.state.errors.price}</div>
                            </div>

                        </div>
                        <div className = "row m-3">
                            <div className = "col-lg-12">
                            <label className="mb-2">Product Description</label>
                            <textarea type="text" className="form-control" name="description" rows="4" cols="500" placeholder="Product Description" value={this.state.input.description} onChange={this.handleChange}/>
                            <div className="text-danger">{this.state.errors.description}</div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <p>Image Preview</p>
                          <img src={this.state.input.src} width="250px" style={{ border:"5px solid white"}} alt="coffee"></img>
                        </div>
                        </div>
                        </div>
                            </form>
                            </main>
                            <button onClick={this.handleSubmit} className="btn btn-outline-success btnAdd m-4">Submit</button>
                <button className="btn btn-outline-danger btnAdd m-2" onClick={this.modalCloseToggles}>Close</button>
                </ModalBody>
            </Modal>
            <Modal isOpen={this.state.AddModalVisibles} style={{ maxWidth:"1000px", textAlign:"left"}}>
                <ModalBody style={{padding: "0px"}}>
                <h3 className="fw-normal p-4">Add Product Details</h3> 
                <main className="form-details" style={{ margin: "0", padding:"0"}}>
                        <form style={{ textAlign: "left", padding: "0px"}}>
                        <div style={{ backgroundColor: "#f5f5f5", margin: "0px", padding: "10px"}}>
                        <div className = "row">
                        <div className= "col-lg-6" style={{ maxWidth:"500px"}}>
                           <div className = "row m-3">
                            <div className = "col-lg-12">
                            <label className="mb-2">Product Title</label>
                            <input type="text" className="form-control" name="title"  placeholder="Product Title" value={this.state.input.title} onChange={this.handleChange}/>
                            <div className="text-danger">{this.state.errors.title}</div>
                            </div>
                        </div>
                        <div className = "row m-3">
                            <div className = "col-lg-12">
                            <label className="mb-2">Product Image</label>
                            <input type="text" className="form-control" name="src"  placeholder="Product Image" value={this.state.input.src} onChange={this.handleChange}/>
                            <div className="text-danger">{this.state.errors.src}</div>
                            </div>
                        </div>
                        <div className = "row m-3">
                            <div className = "col-lg-12">
                            <label className="mb-2">Product Price</label>
                            <input type="text" className="form-control" name="price"  placeholder="Product Price" value={this.state.input.price} onChange={this.handleChange}/>
                            <div className="text-danger">{this.state.errors.price}</div>
                            </div>
                        </div>
                        <div className = "row m-3">
                            <div className = "col-lg-12">
                            <label className="mb-2">Product Description</label>
                            <textarea type="text" className="form-control" name="description" rows="4" cols="500" placeholder="Product Description" value={this.state.input.description} onChange={this.handleChange}/>
                            <div className="text-danger">{this.state.errors.description}</div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <p>Image Preview</p>
                          <img src={this.state.input.src} width="250px" style={{ border:"5px solid white"}} alt="coffee"></img>
                        </div>
                        </div>
                        </div>
                            </form>
                            </main>
                            <button onClick={this.handleAddSubmit} className="btn btn-outline-success btnAdd m-4">Submit</button>
                <button className="btn btn-outline-danger btnAdd m-2" onClick={this.modalAddNewProductCloseToggles}>Close</button>
                </ModalBody>
            </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({  
    users: state.users.user,
    currentUser: state.users.currentUser,
    menus: state.admin.searchList
})

export default connect(mapStateToProps)(ProductManagement)