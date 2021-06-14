import React from 'react';

import doubleFlare from '../../../photos/Double-Flare.jpg';
import collars from '../../../photos/Collars-Edit-1.jpg';
import tubeBeadAndBell from '../../../photos/Tube-Bead-and-bell.jpg';
import parts from '../../../photos/parts.PNG';
import aluminum from '../../../photos/aluminum.png';
import fabParts from '../../../photos/fabParts.jpg';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  
  NavLink,
 } from 'reactstrap';


import './TubeFabrication.scss';

class TubeFabrication extends React.Component {
 
  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {

    return (
      <div className="TubeFabrication d-flex flex-wrap">
      <div className="title">
      <h1 classNme="title">Tube Fabrication Products</h1>
        <NavLink className = "home-return" tag={RRNavLink} to='/home'> Back Home</NavLink>
        <NavLink className = "product-return" tag={RRNavLink} to='/products'> Back to Products</NavLink>
        <NavLink className = "quote-request" tag={RRNavLink} to='/requestQuote'> Request A Quote</NavLink>
      </div>
      <p className="fabricationText">OEM uses CNC bending equipment to provide repeatable bends.  Various end forms and sizing operations are available for example:  Expansion,
      Crimp, Bifurcation,Reduction,End Spin (with or without hole), Flare, Double Flare, Saddle, Bead, Notch and Dimple.  Please ask if you have a 
      process not listed here.  We can also provide flat or conical end spinning.  We can provide hole punch and collar extrusion processes. Tube Materials include:  Copper, Steel, Aluminum, Brass and PVC.  </p>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={doubleFlare} alt="double flare part" />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={collars} alt="collar"/>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={tubeBeadAndBell}alt="tube with bead and bell" />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={parts}  alt="products"/>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={aluminum} alt="aluminum parts"/>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={fabParts} alt="fabricated parts"/>
</div>
      );
    }
  }
  
    export default TubeFabrication;