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
        <div className="title">
        <h1 classNme="title">Spun Products</h1>
        <a className = "home-return" href='/home'> Back Home</a>
      <a className = "product-return"href='/products'> Back to Products</a>
      <a className = "quote-request"href='/requestquote'> Request A Quote</a>
        </div>
        <p className="spunText">We manufacture a variety of UL/CSA certified copper spun driers for use in fractional horsepower air conditioning and refrigeration applications.
        Driers utilizing copper as the body are resistant to corrosion and offer ease of installation due to the presence of copper to copper braze joint.  Both benefits lead to fewer leaks in the field.  
        Inlets and Outlets are tooled to customer specifications.  </p>
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