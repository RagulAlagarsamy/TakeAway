import './App.css';
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import Routing from './components/routing';


const store = configureStore();

function App() {
  return <Provider store= {store}>
  <Routing />
  </Provider>
}

export default App;