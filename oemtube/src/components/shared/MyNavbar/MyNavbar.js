import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import favicon from '../../../photos/favicon.jpg';
import logo from '../../../photos/oemLogo21.jpg';
import {
    NavbarDropdown,
    faCaretDown,
    faUser,
    faCaretUp,
    faBookmark,
    FontAwesomeIcon,
    faArchive,
    faCog,
    Toggle,
    
} from 'react-navbar-dropdown';
import { Link } from 'react-router-dom';

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
        const { isOpen, isClosed, } = this.state;

       

                return(
                    <div className="MyNavbar">
                      <Navbar expand="xl">
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
                           <NavLink className="navbar-links" tag={RRNavLink} to='/products'>Products<i class="fa fa-caret-down"></i></NavLink>
 
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