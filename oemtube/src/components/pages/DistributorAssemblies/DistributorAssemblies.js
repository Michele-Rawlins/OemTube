import React from 'react';
import distributor14 from '../../../photos/Distributor-14-line.jpg';
import distributor40 from '../../../photos/Distributor-40-line.jpg';
import distributorClose from '../../../photos/Distributor-close-up-Edit-1.jpg';
import distributorSmall from '../../../photos/Small-Distributor-Assembly.jpg';
import distributor from '../../../photos/distributor.jpg';
import { Link } from 'react-router-dom'
import './DistributorAssemblies.scss';

class DistributorAssemblies extends React.Component {
  state = {
   DistributorAssemblies:{},
  
  }

  render() {
    const { DistributorAssemblies } = this.state;
   
    return (
      <div className="distributorAssembliesSections">
        <div className = "title">
              <h1 className="title">Distributor Assemblies</h1>
              <a className = "home-return" href='/home'> Back Home</a>
              <a className = "product-return"href='/products'> Back to Products</a>
              <a className = "quote-request"href='/requestquote'> Request A Quote</a>
        </div>
      <div className="distributorAssemblies">
      <p className="distributorAssemblies" id="distributor-text">OEM is pleased to announce the introduction of brazed distributor assemblies targeted at the HVAC/R market.
          Utilizing proprietary brazing and testing processes, we manufacture leak free distributor assemblies that meet our customer’s specification.  Our process allows for the prefabrication of complex bent distributor tubes.  </p>
      <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributor14} />
      <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributor40} />
      <p className="distributorAssemblies"id="distributor-text">Braze rings, installed on distributor tubes prior to braze operation, offer precise amount of filler material with repeatable results.  The assembly is purged with inert gas during the braze operation.  Complete assembly can be tested to verify flow and leak free production.</p>
      <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributorSmall} />
      <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributor} />
      </div>
      </div>
    );
  }
}

  export default DistributorAssemblies;