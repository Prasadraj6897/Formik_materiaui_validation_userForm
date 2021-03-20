import React,{useState} from "react"

import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,
    MDBAnimation
  } from "mdbreact";
  import "./css/HomePageTop.css"
  import {useDispatch, useSelector} from "react-redux"
  import {login_action} from "../redux/action_reducer/action"


import 'mdbreact/dist/css/mdb.css'

let HomePage_top = () =>{

    const usedispatch = useDispatch();
    
    let [logindata, setlogindata] = useState({email: '', password:''});
    let [modal, setmodal] = useState(false);
    
    
    let submitHandler = (event) => {
        event.preventDefault();
        
        //sending userData to action/invoke api
        console.log(logindata);
        usedispatch(login_action(logindata))
        setmodal(true)
    }
    
    
    let changeHandler = (event) => {
        setlogindata({ 
            ...logindata, [event.target.name]: event.target.value })
    }

    let user_list = useSelector((state) =>{
        return state.User_root_reducer
    })
    let toggle = () => {
        setmodal(!modal)
  
      }
    return (
        <div id="classicformpage">
            <MDBView>
            
                <MDBMask className="d-flex justify-content-center align-items-center gradient">
                    <MDBContainer>
                        <MDBRow>
                            <MDBAnimation
                                type="fadeInLeft"
                                delay=".3s"
                                className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                            >
                                <h1 className="h1-responsive font-weight-bold">
                                    Sign in right now!
                                </h1>
                                <hr className="hr-light" />
                                {/* <pre>{JSON.stringify(user_list)}</pre> */}
                                <h6 className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                                    veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                                    molestiae, quisquam iste, maiores. Nulla.
                                </h6>
                                <MDBBtn outline color="white">
                                    Learn More
                                </MDBBtn>
                            </MDBAnimation>

                            <MDBCol md="6" xl="5" className="mb-4">
                                <MDBAnimation type="fadeInRight" delay=".3s">
                                    <MDBCard id="classic-card">
                                        <MDBCardBody className="white-text">
                                            <h3 className="text-center">
                                            <MDBIcon icon="user" /> Login:
                                            </h3>
                                            <hr className="hr-light" />
                                            {/* <MDBInput
                                                className="white-text"
                                                iconClass="white-text"
                                                label="Your name"
                                                icon="user"
                                            /> */}
                                            <MDBInput
                                                className="white-text"
                                                iconClass="white-text"
                                                label="Your email"
                                                icon="envelope"
                                                name='email'
                                                onChange={changeHandler}
                                            />
                                            <MDBInput
                                                className="white-text"
                                                iconClass="white-text"
                                                label="Your password"
                                                icon="lock"
                                                type="password"
                                                name='password'
                                                onChange={changeHandler}
                                            />
                                            <div className="text-center mt-4 black-text">
                                                <MDBBtn color="indigo" onClick ={submitHandler}>Sign In</MDBBtn>
                                                <hr className="hr-light" />
                                                <div className="text-center d-flex justify-content-center white-label">
                                                    <a href="#!" className="p-2 m-2">
                                                    <MDBIcon
                                                        fab
                                                        icon="twitter"
                                                        className="white-text"
                                                    />
                                                    </a>
                                                    <a href="#!" className="p-2 m-2">
                                                    <MDBIcon
                                                        fab
                                                        icon="linkedin"
                                                        className="white-text"
                                                    />
                                                    </a>
                                                    <a href="#!" className="p-2 m-2">
                                                    <MDBIcon
                                                        fab
                                                        icon="instagram"
                                                        className="white-text"
                                                    />
                                                    </a>
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBAnimation>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBMask>
            </MDBView> 
            <MDBContainer>
                <MDBRow className="py-5">
                    <MDBCol md="12" className="text-center">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

            <MDBModal isOpen={modal} toggle={toggle}>
                <MDBModalHeader toggle={toggle}>MDBModal title</MDBModalHeader>
                    <MDBModalBody>
                        <pre>{JSON.stringify(user_list)}</pre>
                    </MDBModalBody>
                <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={toggle}>Close</MDBBtn>
                    <MDBBtn color="primary">Save changes</MDBBtn>
                </MDBModalFooter>
            </MDBModal>

        </div>
    )
}
export default HomePage_top;