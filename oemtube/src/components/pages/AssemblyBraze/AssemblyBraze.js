import React from 'react';
import header from '../../../photos/header-tubes.jpg';
import smallHeader from '../../../photos/Small-Header-Edit-1.jpg';
import tubeAssemblyTee from '../../../photos/Tube-assembly-tee-Edit-1.jpg';
import tubeAssemblyAbsorb from '../../../photos/Tube-assembly-vibration-absorber.jpg';

import { Link } from 'react-router-dom'
import './AssemblyBraze.scss';

class AssemblyBraze extends React.Component {
 

  render() {

    return (
      <div className="AssembyBrazeSections d-flex flex-wrap">
      <div className="title">
      <h1 classNme="title">Assembly and Braze Products</h1>
      </div>
      <p className="spunText">We manufacture a variety   </p>
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={header} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={smallHeader} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={tubeAssemblyTee} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={tubeAssemblyAbsorb} />

</div>
      );
    }
  }
  
    export default AssemblyBraze;