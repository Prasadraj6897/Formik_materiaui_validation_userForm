import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from "./HomePage"

import Feautures from "./Feautures"
import AboutUs from "./AboutUs"
import Pricing from "./Pricing"
import NavBar from "./NavBar"
import Footer from "./Footer"
import ContactPage from "./contactus"
import RegisterPage from "./RegisterPage"
import Registration_Form from "./Example/RegistrationForm_validation"
import Account from "./Example/Account"
import Profile from "./Example/Profile"

let Routes = () =>{

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <React.Fragment>
            
            <Router>
            {/* <NavBar /> */}
            < Registration_Form />
                    <Switch>
                        {/* <Route exact path = "/"  component = {HomePage} />
                        <Route  path = "/features"  component = {Feautures} />
                        <Route  path = "/aboutus"  component = {AboutUs} />
                        <Route  path = "/pricing"  component = {Pricing} />
                        <Route  path = "/contactus"  component = {ContactPage} />
                        <Route  path = "/signup"  component = {RegisterPage} /> */}
                        {/* <Route exact path = "/"  component = {Registration_Form} /> */}
                        <Route exact path = "/profile"  component = {Profile} />
                        <Route exact path = "/account"  component = {Account} />
                        
                    </Switch>
                    {/* <Footer /> */}
                </Router>
               
        </React.Fragment>
    )
}
export default Routes;
