import React from 'react';


import serpentine from '../../../photos/serpentine.jpg';
import coil from '../../../photos/coil.png';
import helical from '../../../photos/Helical-Coil-Double-wrap.jpg';
import square from '../../../photos/Square-coil-assembly.jpg';
import stainless from '../../../photos/Stainless-steel-coil.jpg';
import stainlessSquare from '../../../photos/Stainless-steel-square-coil.jpg';
import './SerpentineHelical.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  
  NavLink,
 } from 'reactstrap';

class SerpentineHelical extends React.Component {


  componentDidMount() {
    window.scrollTo(0, 0);
}

render() {



  return (
<div className="SerpentineHelicalSections d-flex flex-wrap">
<h1 className="title">Serpentine and Helical Coils</h1>
      <NavLink className = "home-return" tag={RRNavLink} to='/home'> Back Home</NavLink>
      <NavLink className = "product-return" tag={RRNavLink} to='/products'> Back to Products</NavLink>
      <NavLink className = "quote-request" tag={RRNavLink} to='/requestQuote'> Request A Quote</NavLink>
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={serpentine} alt ="serpentine"/>
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={coil}  alt="coil"/>
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={helical} alt="helical coil"/>
<p className="serpetine-text">We manufacture a line of custom Serpentine and Helical Coils used primarily in Refrigeration applications.  Serpentine Coils can enhance refrigeration over wide flat 
surface areas, while Helical Coils find applications on both the evaporation and condensing side of the refrigeration cycle.
The OEM Team works with each individual customer to ensure the most effective product application possible.  OEM can manufacture coils with a variety of tube end treatments:  swage, desize and bends are several of the 
options.  We can braze the coils together and ship as a pair. </p>
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={square} alt="square coil"/>
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={stainless} alt ="stainless steel coil"/>
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={stainlessSquare}  alt="stainless square coil"/>

</div>
  );
}
}

export default SerpentineHelical;