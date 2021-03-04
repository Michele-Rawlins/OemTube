import React from 'react';
import MyCarousel from '../../../components/shared/MyCarousel/MyCarousel';
import favicon from '../../../photos/favicon.jpg';
import { Link } from 'react-router-dom'
import './Home.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import distributor14 from '../../../photos/Distributor-14-line.jpg';
import distributorClose from '../../../photos/Distributor-close-up-Edit-1.jpg';
import distributor40 from '../../../photos/Distributor-40-line.jpg';
import brassDistributor from '../../../photos/Brass-Distributor-Assembly.jpg';
import MyWave from '../../shared/MyWave/MyWave';
import MyNavbar from '../../shared/MyNavbar/MyNavbar';
// import curvedCopper from '../../../photos/copperCurved';
import background from '../../../photos/textureCopper.jpg';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Container,
  Col
} from 'reactstrap';


// import {
//   Card, CardImg, CardTitle,CardBody, 
// } from 'reactstrap';

class Home extends React.Component {
  state = {
    MyCarousel: [],
    favicon: [],
  }

  render() {
   
    

    return (
    

   <div className="home">
     <section class="hero">
      
       {/* <MyNavbar /> */}
       
       <div className="heroarea">

  <h1 className="typewriter">Let us fabricate your future</h1>
  <h1 className="typewriter">Form your own opinion</h1>
  <article>
    <p className="intro">No Matter Your Industry.  No Matter Your Design.  We have a solution for You. Click below for a sampling of our custom fabrication.</p>
    <Link to='/products'><button className="intro-button" to='/products'>Browse Products</button></Link>
  </article>
</div>
</section>


    {/* <div className="carousel">
      < MyCarousel/>
    </div> */}
  </div>
             
    );   
    }
  }
  
  export default Home;