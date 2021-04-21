import React from 'react';

import doubleFlare from '../../../photos/Double-Flare.jpg';
import collars from '../../../photos/Collars-Edit-1.jpg';
import tubeBeadAndBell from '../../../photos/Tube-Bead-and-bell.jpg';
import parts from '../../../photos/parts.PNG';
import aluminum from '../../../photos/aluminum.png';
import fabParts from '../../../photos/fabParts.jpg';

import { Link } from 'react-router-dom'
import './TubeFabrication.scss';

class TubeFabrication extends React.Component {
 

  render() {

    return (
      <div className="TubeFabrication d-flex flex-wrap">
      <div className="title">
      <h1 classNme="title">Tube Fabrication Products</h1>
      <a className = "home-return" href='/home'> Back Home</a>
      <a className = "product-return"href='/products'> Back to Products</a>
      <a className = "quote-request"href='/requestquote'> Request A Quote</a>
      </div>
      <p className="fabricationText">OEM uses CNC bending equipment to provide repeatable bends.  Various end forms and sizing operations are available for example:  Expansion,
      Crimp, Bifurcation,Reduction,End Spin (with or without hole), Flare, Double Flare, Saddle, Bead, Notch and Dimple.  Please ask if you have a 
      process not listed here.  We can also provide flat or conical end spinning.  We can provide hole punch and collar extrusion processes. Tube Materials include:  Copper, Steel, Aluminum, Brass and PVC.  </p>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={doubleFlare} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={collars} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={tubeBeadAndBell} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={parts} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={aluminum} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={fabParts} />
</div>
      );
    }
  }
  
    export default TubeFabrication;