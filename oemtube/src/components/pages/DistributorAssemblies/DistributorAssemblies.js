import React from 'react';
import distributor14 from '../../../photos/Distributor-14-line.jpg';
import distributor40 from '../../../photos/Distributor-40-line.jpg';
import distributorSmall from '../../../photos/Small-Distributor-Assembly.jpg';
import distributor from '../../../photos/distributor.jpg';
import './DistributorAssemblies.scss';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  
  NavLink,
 } from 'reactstrap';

class DistributorAssemblies extends React.Component {
  state = {
   DistributorAssemblies:{},
  
  }

  render() {
    // const { DistributorAssemblies } = this.state;
   
    return (
      <div className="distributorAssembliesSections">
        <div className = "title">
              <h1 className="title">Distributor Assemblies</h1>
              <NavLink className = "home-return" tag={RRNavLink} to='/home'> Back Home</NavLink>
      <NavLink className = "product-return" tag={RRNavLink} to='/products'> Back to Products</NavLink>
      <NavLink className = "quote-request" tag={RRNavLink} to='/requestQuote'> Request A Quote</NavLink>
        </div>
      <div className="distributorAssemblies">
      <p className="distributorAssemblies" id="distributor-text">OEM is pleased to announce the introduction of brazed distributor assemblies targeted at the HVAC/R market.
          Utilizing proprietary brazing and testing processes, we manufacture leak free distributor assemblies that meet our customer’s specification.  Our process allows for the prefabrication of complex bent distributor tubes.  </p>
      <div className="firstrow center container-fluid d-flex flex wrap">
      <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributor14} alt="distributor"/>
      <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributor40} alt="distributor" />
      </div>
      <p className="distributorAssemblies"id="distributor-text">Braze rings, installed on distributor tubes prior to braze operation, offer precise amount of filler material with repeatable results.  The assembly is purged with inert gas during the braze operation.  Complete assembly can be tested to verify flow and leak free production.</p>
      <div className="firstrow center container-fluid d-flex flex wrap">
      <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributorSmall} alt="distributor"/>
      <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributor} alt="distributor" />
      </div>
      </div>
      </div>
    );
  }
}

  export default DistributorAssemblies;