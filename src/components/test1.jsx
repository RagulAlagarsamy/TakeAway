import React, { Component } from 'react';
import UpdateComponent from './tests';

class Test1 extends Component{
    render(){
        return(
            <p>{this.props.name}</p>
        )
    }
}

export default UpdateComponent(Test1)