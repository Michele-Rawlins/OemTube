import React from 'react';

import { Link } from 'react-router-dom'
import serpentine from '../../../photos/serpentine.jpg';
import coil from '../../../photos/coil.png';
import helical from '../../../photos/Helical-Coil-Double-wrap.jpg';
import square from '../../../photos/Square-coil-assembly.jpg';
import stainless from '../../../photos/Stainless-steel-coil.jpg';
import stainlessSquare from '../../../photos/Stainless-steel-square-coil.jpg';
import './SerpentineHelical.scss';

class SerpentineHelical extends React.Component {



render() {



  return (
<div className="SerpentineHelicalSections d-flex flex-wrap">
<h1 className="title">Serpentine and Helical Coils</h1>
<a className = "home-return" href='/home'> Back Home</a>
      <a className = "product-return"href='/products'> Back to Products</a>
      <a className = "quote-request"href='/requestQuote'> Request A Quote</a>
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={serpentine} />
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={coil} />
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={helical} />
<p className="serpetine-text">We manufacture a line of custom Serpentine and Helical Coils used primarily in Refrigeration applications.  Serpentine Coils can enhance refrigeration over wide flat 
surface areas, while Helical Coils find applications on both the evaporation and condensing side of the refrigeration cycle.
The OEM Team works with each individual customer to ensure the most effective product application possible.  OEM can manufacture coils with a variety of tube end treatments:  swage, desize and bends are several of the 
options.  We can braze the coils together and ship as a pair. </p>
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={square} />
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={stainless} />
<img className="p-2 col-example text-center d-flex  serpentine-pic col-3 d-flex"src={stainlessSquare} />

</div>
  );
}
}

export default SerpentineHelical;