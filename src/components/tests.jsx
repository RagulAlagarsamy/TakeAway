import React  from "react";
import { Component } from "react";


const UpdatedComponent = OriginalComponent => {
    class NewComponent extends Component{
       render(){
           return(
              <OriginalComponent name="Raju"/>
           )
       }   
   }
   return NewComponent
}

export default UpdatedComponent