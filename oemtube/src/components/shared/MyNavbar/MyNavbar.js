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
                      <Navbar color="dark" dark expand="xl">
                        <img to="/home" src="data:image/jpeg;base64,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" alt="logo"></img>
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
                <div className="triangle-end"></div>
            </div>
                 )
                }
              }
            
          
            
            export default MyNavbar;