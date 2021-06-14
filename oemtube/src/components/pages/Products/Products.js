import React from 'react';
import headerPic from '../../../photos/Collage-for-home-screen-1.jpg';
import './Products.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import distributor40 from '../../../photos/Distributor-40-line.jpg';
import coil from '../../../photos/coil.png';
import spun from '../../../photos/spun.png';
import header from '../../../photos/header-tubes.jpg'
import parts from '../../../photos/parts.PNG'
import {
   NavLink,
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from 'reactstrap';

class Products extends React.Component {
  state = {
 DistributorAssemblies:{},
    flavicon: [],
  }

  componentDidMount() {
    window.scrollTo(0, 0);
}
  render() {
    // const { DistributorAssemblies } = this.state; 
   
    return (
        <div className="products">
          <div className="sidebar">
     
      </div>
         <div className="company-intro article">
        <p className="product-intro">OEM Tube is focused on providing high quality fabricated tubing to the HVAC and Refrigeration Industries.  We supply custom fabrication with copper, brass, aluminum and stainless steel.  Processes range from simple cut to length parts to complex brazed assemblies that fit your specific design requirements.  OEM Tube offers a high level of Quality and Customer Service . We believe in growth by investing in state of the art equipment, expanding our capabilities and supplier relationships globally. We are the source, you should consider first.</p>
      <img className="md-5 xs-6" id="headerpic"src={headerPic} alt="header"/>
      </div>
<div className="product-cards d-flex md-5 xs-6">

<Card className="p-2 col-example text-center  md-5 xs-6 md-col d-flex col-3 dashCard">
          <CardTitle tag="h4">Distributors</CardTitle>
          <CardImg className="cardPic"src={distributor40} alt="Card image cap" />
          <CardBody>
          <NavLink tag={RRNavLink} to='/distributor'>Distributors</NavLink>
      </CardBody>
      </Card>
      <Card className="p-2 col-example md-5 xs-6 text-center d-flex col-3 dashCard">
          <CardTitle tag="h4">Serpentines and Helical Coils</CardTitle>
          <CardImg className="cardPic"src={coil} alt="Card image cap" />
          <CardBody>
          <NavLink tag={RRNavLink} to='/serpentine-helical-coils'>Serpentines and Helical Coils</NavLink>
      </CardBody>
      </Card>
      <Card className="p-2 col-example md-5 xs-6 text-center d-flex col-3 dashCard">
          <CardTitle tag="h4">Spun Products</CardTitle>
          <CardImg className="cardPic"src={spun} alt="Card image cap" />
          <CardBody>
          <NavLink tag={RRNavLink} to='/spun-products'>Spun Products</NavLink>
      </CardBody>
      </Card>
      <Card className="p-2 col-example text-center md-5 xs-6 d-flex col-3 dashCard">
          <CardTitle tag="h4">Assembly and Braze</CardTitle>
          <CardImg className="cardPic"src={header} alt="Card image cap" />
          <CardBody>
          <NavLink tag={RRNavLink} to='/assembly-braze'>Assembly and Braze</NavLink>
      </CardBody>
      </Card>
      <Card className="p-2 col-example text-center md-5 xs-6 d-flex col-3 dashCard">
          <CardTitle tag="h4">Tube Fabrication</CardTitle>
          <CardImg className="cardPic"src={parts} alt="Card image cap" />
          <CardBody>
          <NavLink tag={RRNavLink} to='/tube-fabrication'>Tube Fabrication</NavLink>
      </CardBody>
      </Card>
</div>







      
      </div>
    );

    }

  }
  
  export default Products;