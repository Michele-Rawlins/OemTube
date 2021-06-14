import React from 'react';
import header from '../../../photos/header-tubes.jpg';
import smallHeader from '../../../photos/Small-Header-Edit-1.jpg';
import tubeAssemblyTee from '../../../photos/Tube-assembly-tee-Edit-1.jpg';
import tubeAssemblyAbsorb from '../../../photos/Tube-assembly-vibration-absorber.jpg';
import apc from '../../../photos/APC-Assembly-Blurr.jpg';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  
  NavLink,
 } from 'reactstrap';


import './AssemblyBraze.scss';

class AssemblyBraze extends React.Component {
 
  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {

    return (
      <div className="AssembyBrazeSections d-flex flex-wrap">
      <div className="title">
      <h1 className="title-braze">Assembly and Braze Products</h1>
      <NavLink className = "home-return" tag={RRNavLink} to='/home'> Back Home</NavLink>
      <NavLink className = "product-return" tag={RRNavLink} to='/products'> Back to Products</NavLink>
      <NavLink className = "quote-request" tag={RRNavLink} to='/requestQuote'> Request A Quote</NavLink>

      </div>
      <p className="assemblyText">OEM can help you reduce your installation costs.  Let us supply your assemblies.  Whether its 4-way Expansion Valves, Your Industries Manifolds and Headers, Compressor Connecting Tubes,
      Filter Drier Assemblies,Flow Control Assemblies,  TXV Assemblies or something new.  We have the ability to supply your needs.  Some of the benefits for outsourcing your assembly needs: 
      <ul></ul> 
      <li>Reduce Connections and Brazing during Installation</li>
      <li>Leak-Free Assemblies</li>
      <li>Repeatable Fit-up</li>
      <li>SKU Reduction</li>
      <li>Assemblies are Barcode identifiable</li>
      <li>Aesthecially Pleasing</li></p>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={header} alt="header"/>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={smallHeader} alt="small Header"/>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={tubeAssemblyTee} alt="tube assembly"/>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={tubeAssemblyAbsorb} alt="tube assembly" />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={apc} alt="apc" />
</div>
      );
    }
  }
  
    export default AssemblyBraze;