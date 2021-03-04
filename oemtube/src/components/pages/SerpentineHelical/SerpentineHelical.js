import React from 'react';

import { Link } from 'react-router-dom'
import serpentine from '../../../photos/serpentine.jpg';
import './SerpentineHelical.scss';

class SerpentineHelical extends React.Component {



render() {



  return (
<div className="SerpentineHelical">
<img className="serpentine" id="serpentine-pic"src={serpentine} />
</div>
  );
}
}

export default SerpentineHelical;