import React from 'react';
import headerPic from '../../../photos/Collage-for-home-screen-1.jpg';
import './Products.scss';
import { Link } from 'react-router-dom'
import { NavLink as RRNavLink } from 'react-router-dom';
import distributor40 from '../../../photos/Distributor-40-line.jpg';
import coil from '../../../photos/coil.png';
import spun from '../../../photos/spun.png';
import header from '../../../photos/header-tubes.jpg'
import parts from '../../../photos/parts.PNG'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

class Products extends React.Component {
  state = {
 DistributorAssemblies:{},
    flavicon: [],
  }

  render() {
    const { DistributorAssemblies } = this.state; 
   
    return (
        <div className="products">
          <div className="sidebar">
      {/* <div className="links">
          <Link className="links-products"to='/distributor'>Distributor Assemblies</Link>
          <br></br>
          <Link className="links-products"to='/serpentine-helical-coils'>Serpentine & Helical Coils</Link>
          <br></br>
          <Link className="links-products"to='/spun-products'>Spun Products</Link>
          <br></br>
          <Link className="links-products"to='/assembly-braze'>Assembly & Braze</Link>
          <br></br>
          <Link className="links-products"to='/tube-fabrication'>Tube Fabrication</Link>          
          <br></br>
          </div>    */}
      </div>
         <div className="company-intro article">
        <p className="product-intro">OEM Tube is focused on providing high quality fabricated tubing to the HVAC and Refrigeration Industries.  We supply custom fabrication with copper, brass, aluminum and stainless steel.  Processes range from simple cut to length parts to complex brazed assemblies to fit your specific design requirements.  OEM Tube offers a high level of Quality and Customer Service . We believe in growth by investing in state of the art equipment, expanding our capabilities and supplier relationships globally. We are the source, you should consider first.</p>
      <img className="column-8" id="headerpic"src={headerPic}></img>
      </div>
<div className="product-cards d-flex col-10">

<Card className="p-2 col-example text-center d-flex col-3 dashCard">
          <CardTitle tag="h4">Distributors</CardTitle>
          <CardImg className="cardPic"src={distributor40} alt="Card image cap" />
          <CardBody>
          <Link to='/distributor'>Distributors</Link>
      </CardBody>
      </Card>
      <Card className="p-2 col-example text-center d-flex col-3 dashCard">
          <CardTitle tag="h4">Serpentines and Helical Coils</CardTitle>
          <CardImg className="cardPic"src={coil} alt="Card image cap" />
          <CardBody>
          <Link to='/serpentine-helical-coils'>Serpentines and Helical Coils</Link>
      </CardBody>
      </Card>
      <Card className="p-2 col-example text-center d-flex col-3 dashCard">
          <CardTitle tag="h4">Spun Products</CardTitle>
          <CardImg className="cardPic"src={spun} alt="Card image cap" />
          <CardBody>
          <Link to='/spun-products'>Spun Products</Link>
      </CardBody>
      </Card>
      <Card className="p-2 col-example text-center d-flex col-3 dashCard">
          <CardTitle tag="h4">Assembly and Braze</CardTitle>
          <CardImg className="cardPic"src={header} alt="Card image cap" />
          <CardBody>
          <Link to='/assembly-braze'>Assembly and Braze</Link>
      </CardBody>
      </Card>
      <Card className="p-2 col-example text-center d-flex col-3 dashCard">
          <CardTitle tag="h4">Tube Fabrication</CardTitle>
          <CardImg className="cardPic"src={parts} alt="Card image cap" />
          <CardBody>
          <Link to='/tube-fabrication'>Tube Fabrication</Link>
      </CardBody>
      </Card>
</div>







      
      </div>
    );

    }

  }
  
  export default Products;