import './App.css';
import React from "react";

// import HomePage from "./components/HomePage"
import Routes from "./components/Router"

import {Provider} from "react-redux"
import {store} from "./redux/store"
import Message from "./components/Message"
import Registration_Form from "./components/Example/RegistrationForm_validation"
function App() {
  return (
      
    // <Provider store = {store}>
    //      <Message />
          
    // </Provider>
   // 
          //     <Routes />
          // 
          <React.Fragment>
            <Routes />
          </React.Fragment>
  );
}

export default App;
