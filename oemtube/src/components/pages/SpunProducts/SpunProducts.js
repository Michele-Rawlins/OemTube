import React from 'react';

import { Link } from 'react-router-dom'
import BifurcatedAccumulator from '../../../photos/Bifurcated-Accumulator-edit-1.jpg';
import BifurcatedDrier from '../../../photos/Bifurcated-drier-with-tails-Edited-1.jpg';
import DrierWithCoil from '../../../photos/Drier-with-coil.jpg';
import OffsetAccumulator from '../../../photos/Offset-Accumulator.jpg';
import SpunDrier from '../../../photos/Spun-Drier.jpg';



import './SpunProducts.scss';



class SpunProducts extends React.Component {



  render() {
  
  
  
    return (
      <div className="SpunProductsSections d-flex flex-wrap">
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={BifurcatedAccumulator} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={BifurcatedDrier} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={DrierWithCoil} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={OffsetAccumulator} />
<img className="p-2 col-example text-center d-flex  spunProduct-pic col-3 d-flex"src={SpunDrier} />
</div>
      );
    }
    }
    
    export default SpunProducts;