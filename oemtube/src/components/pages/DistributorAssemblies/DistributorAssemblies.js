import React from 'react';
import distributor14 from '../../../photos/Distributor-14-line.jpg';
import distributor40 from '../../../photos/Distributor-40-line.jpg';
import distributorClose from '../../../photos/Distributor-close-up-Edit-1.jpg';
import distributorSmall from '../../../photos/Small-Distributor-Assembly.jpg';

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
               <h1 classNme="title">Distributor Assemblies</h1>
        <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributor14} />
        <p className="distributorAssemblies" id="distributor-text">OEM is pleased to announce the introduction of brazed distributor assemblies targeted at the HVAC/R market.</p>
        <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributor40} />
        <p className="distributorAssemblies" id="distributor-text">Utilizing proprietary brazing and testing processes, we manufacture leak free distributor assemblies that meet our customer’s specification.  Our process allows for the prefabrication of complex bent distributor tubes.  </p>
        <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributorClose} />
        <p className="distributorAssemblies"id="distributor-text">Braze rings, installed on distributor tubes prior to braze operation, offer precise amount of filler material with repeatable results.  The assembly is purged with inert gas during the braze operation.  Complete assembly can be tested to verify flow and leak free production.</p>
        <img className="distributorAssemblies" id="distributorAssemblies-pic"src={distributorSmall} />
      </div>
    );
  }
}

  export default DistributorAssemblies;