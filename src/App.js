import './App.css';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Routing from './components/routing';
import { getToken, onMessageListener, messaging } from './config/fbConfig';
import React from "react";

const store = configureStore();


function App() {
  getToken();


  messaging.onMessage((payload) => {
    console.log(payload);
  })

  onMessageListener().then(message => {
    console.log(message);
  }).catch(err => console.log('failed: ', err));

  return (
  <Provider store= {store}>
        <Routing />
  </Provider>
  )
}

export default App;