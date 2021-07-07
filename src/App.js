import './App.css';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Routing from './components/routing';
import { getToken, onMessageListener } from './config/fbConfig';
import React, { useState } from "react";

const store = configureStore();


function App() {
  getToken();

  const [show, setShow] = useState(false);

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