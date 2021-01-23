import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
    state = {
        isOpen: true,
    }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

   
    render() {
        const { isOpen } = this.state;
       

                return(
                    <div className="MyNavbar">
                      <Navbar color="dark" dark expand="md">
                        <img to="/home" src="https://photos.google.com/search/_tra_/photo/AF1QipO4lRMOTH_eBqhV0d68X5STwPqUQm6Zau1oESMy" alt="logo"></img>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
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
                            <NavLink className="navbar-links" tag={RRNavLink} to='/requestAQuote'>Request A Quote</NavLink>
                       </NavItem>
                                     </Nav>
                    </Collapse>
                </Navbar>
            </div>
                 )
                }
              }
            
          
            
            export default MyNavbar;