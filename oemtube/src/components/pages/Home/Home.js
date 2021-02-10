import React from 'react';
import MyCarousel from '../../../components/shared/MyCarousel/MyCarousel';
import favicon from '../../../photos/favicon.jpg';
import { Link } from 'react-router-dom'
import './Home.scss';
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


// import {
//   Card, CardImg, CardTitle,CardBody, 
// } from 'reactstrap';

class Home extends React.Component {
  state = {
    MyCarousel: [],
    flavicon: [],
  }

  render() {
   
    

    return (
    

   <div className="home">
     <section class="hero">
  <h1 className="typewriter">Let us Fabricate your Future</h1>
  <article>
    <p className="intro">Explore our product lines.  Click the button below to begin your journey.</p>
    <Link to='/products'><button className="intro-button" to='/products'>Browse Products</button></Link>
  </article>
</section>

    {/* <div className="carousel">
      < MyCarousel/>
  </div> */}
  </div>
 
         
    );   
    }
  }
  
  export default Home;