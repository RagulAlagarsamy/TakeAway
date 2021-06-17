import React, { Component } from 'react';
import { loadMenus,addItems,addNewItems } from "../store/details";
import { connect } from "react-redux";
import Carousel from './carousel';
import Card from './card';
import {coffeeCardPics, icecreamCardPics} from './details/details';


class Menus extends Component {

  constructor(props){
    super(props)
  }
  
  // componentDidMount() {
  //   console.log(this.props);
  //   this.props.loadMenus();
  // }

  onItemSelect = (coffee) =>{
    if(this.props.menus.length === 0){
      this.props.dispatch(addNewItems(coffee))
    }else{
      this.props.dispatch(addItems(coffee))
    }
  }

 render() {
  return(
    <div>
    <br></br>
    <Carousel/>
    <br></br>
    <Card cards={coffeeCardPics} heading="The Best of Coffee Drinks" selectItem = {this.onItemSelect}/>
    <br></br>
    <br></br>
    <Card cards={icecreamCardPics} heading="The Best of Ice Creams" selectItem = {this.onItemSelect}/>
    
    </div>
    )
   }
 }

const mapStateToProps = state => ({  
    menus: state.list
})

// const mapDispatchToProps = dispatch => ({
//   addItems: (coffee) => {
//     dispatch(addItems(coffee))
//   }
// })

export default connect(mapStateToProps)(Menus)
