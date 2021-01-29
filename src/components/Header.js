import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import logo from "./images/plane1.jpg"

class Header extends Component {
  state = {};

  render() {
    return (
      <>
        <header>
          <div class="upper-head clearfix">
            <div class="container">
              <div class="contact-info">
                <p>
                  <i class="flaticon-phone-call"></i> Phone: (234)-70-3345-6789
                </p>
                <p>
                  <i class="flaticon-mail"></i> Mail: info@travelexperience.com
                </p>
              </div>
              <div class="login-btn pull-right">
                <a style={{color:"white"}}>
                  <i class="fa fa-user-plus"></i> Register
                </a>
                <a style={{color:"white"}}>
                  <i class="fa fa-unlock-alt"></i> Sign In
                </a>
              </div>
            </div>
          </div>
        </header>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          style={{padding:"20px"}}
        >
          <Navbar.Brand>
            <h4 style={{ color: "white" }}>The Travel Experience</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="container">
              <Nav className="mr-auto">
                <Nav.Link className="menu-itemo">
                <Link to={{pathname:"/Home"}} className="menu-itemo3">Home</Link>

                </Nav.Link>
                <NavDropdown
                  color="white"
                  title="Hotel Services"
                  id="collasible-nav-dropdown"
                  className="menu-itemo"
                >
                  <NavDropdown.Item>
                  <Link to={{pathname:"/Booking"}} className="menu-itemo2">Booking Services</Link>

                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Lodge Booking Number
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Pricing
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="Flight Services"
                  id="collasible-nav-dropdown"
                  className="menu-itemo"
                >
                  <NavDropdown.Item>


                                      <Link to={{pathname:"/Booking"}} className="menu-itemo2">Book a Flight</Link>

                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Flight Ticket
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    Pricing
                  </NavDropdown.Item>
                </NavDropdown>


                <NavDropdown
                  title="Our Page"
                  id="collasible-nav-dropdown"
                  className="menu-itemo"
                  
                >
                  <NavDropdown.Item>
                  <Link to={{pathname:"/AboutUs"}} className="menu-itemo2">About Us</Link>

                  </NavDropdown.Item>
                  <NavDropdown.Item>
                <Link to={{pathname:"/ContactUs"}} className="menu-itemo2">Contact Us</Link>

                    
                  </NavDropdown.Item>
                 
                </NavDropdown>
                <Nav.Link className="menu-itemo" color="white">
                  Whats New?
                </Nav.Link>
                <Nav.Link className="menu-itemo">
                <Link className="menu-itemo3">Take a Tour</Link>
                  
                </Nav.Link>
               
                
              </Nav>
             {/* <Link to={{pathname:"/SignIn_Register"}} className="btn btn-danger">Sign In</Link> */}
             <Link className="btn btn-danger"to={{pathname:"/SignIn_Register"}}> <i class="fa fa-unlock-alt"> </i> &nbsp; Sign In</Link>
            </div>
          </Navbar.Collapse>
        </Navbar>
    
    
    
      </>
    );
  }
}

export default Header;
