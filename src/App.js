import './App.css';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Routing from './components/routing';
import { getToken, onMessageListener, messaging } from './config/fbConfig';
import React, { useState } from "react";
import Context from './userContext';
import { Component } from 'react';

const store = configureStore();


class App extends Component {
  constructor(props) {
		super(props)
		this.updateState = this.updateState.bind(this) 
		this.state = {
			name: '...',
			update: this.updateState 
		}
	}

  updateState(value) {
    console.log(value);
		this.setState({name:value})
	}

  componentDidMount(){

    getToken();
  
    messaging.onMessage((payload) => {
      console.log(payload);
    })
  
    onMessageListener().then(message => {
      console.log(message);
    }).catch(err => console.log('failed: ', err));
  }

render(){
  return (
  <Provider store= {store}>
    <Context.Provider value={this.state}>
        <Routing />
    </Context.Provider>
  </Provider>
  )

}
}

export default App;