import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import logo from '../../../photos/oemLogo21.jpg';


import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
   } from 'reactstrap';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
    state = {
        isOpen: true,
        logo:[],
        isClosed: false,
        CSSTransitionMenu: [],
        Item: [],
       
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
        this.setState({ isClosed: !this.state.isClosed });
    }

   
    render() {
        const { isOpen } = this.state;

       

                return(
                    <div className="MyNavbar">
                      <Navbar className="fluid ml-auto navbar-links"expand="lg">
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <img className="home-title"to="/home" src={logo} alt="logo"></img>
                        <Nav className=" navbar ml-auto" navbar>
                        <NavItem>
                            <NavLink className="navbar-links" tag={RRNavLink} to='/home'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="navbar-links" tag={RRNavLink} to='/aboutUs'>About Us</NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink className="navbar-links" tag={RRNavLink} to='/products'>Products</NavLink>
 
                        </NavItem>
                        <NavItem>
                           <NavLink className="navbar-links" tag={RRNavLink} to='/contactUs'>Contact Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="navbar-links" tag={RRNavLink} to='/requestQuote'>Request A Quote</NavLink>
                       </NavItem>
                                     </Nav>
                    </Collapse>
                </Navbar>
              
            </div>
                 )
                }
              }
            
          
            
            export default MyNavbar;