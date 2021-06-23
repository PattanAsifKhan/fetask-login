//import logo from './logo.svg';
import React from "react";
import './App.css';
import LoginPage from "./components/LoginPage";
import store from "../src/redux/ConfigureStore";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div>
      <LoginPage/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
