import React from 'react';


import BifurcatedAccumulator from '../../../photos/Bifurcated-Accumulator-edit-1.jpg';
import BifurcatedDrier from '../../../photos/Bifurcated-drier-with-tails-Edited-1.jpg';
import DrierWithCoil from '../../../photos/Drier-with-coil.jpg';
import OffsetAccumulator from '../../../photos/Offset-Accumulator.jpg';
import SpunDrier from '../../../photos/Spun-Drier.jpg';
import { NavLink as RRNavLink } from 'react-router-dom';

import {
  
  NavLink,
 } from 'reactstrap';


import './SpunProducts.scss';



class SpunProducts extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
}


  render() {
  
  
  
    return (
      <div className="SpunProductsSections d-flex flex-wrap">
        <div className="title">
        <h1 className="title">Spun Products</h1>
          <NavLink className = "home-return" tag={RRNavLink} to='/home'> Back Home</NavLink>
          <NavLink className = "product-return" tag={RRNavLink} to='/products'> Back to Products</NavLink>
          <NavLink className = "quote-request" tag={RRNavLink} to='/requestQuote'> Request A Quote</NavLink>
        </div>
        <p className="spunText">We manufacture a variety of UL/CSA certified copper spun driers for use in fractional horsepower air conditioning and refrigeration applications.
        Driers utilizing copper as the body are resistant to corrosion and offer ease of installation due to the presence of copper to copper braze joint.  Both benefits lead to fewer leaks in the field.  
        Inlets and Outlets are tooled to customer specifications.  </p>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={BifurcatedAccumulator} alt="accumulator" />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={BifurcatedDrier} alt="drier" />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={DrierWithCoil} alt="drier with coil"/>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={OffsetAccumulator} alt="offset accumulaor"/>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={SpunDrier} alt="spun drier"/>
</div>
      );
    }
    }
    
    export default SpunProducts;