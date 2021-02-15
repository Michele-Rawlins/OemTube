import React from 'react';
import favicon from '../../../photos/favicon.jpg';
import curvedCopper from '../../../photos/copperCurved.png';

import './MyFooter.scss';
class MyFooter extends React.Component {
  render() {
    return (
      <div className="footer">
             <img className="favicon" src={curvedCopper}/>
             <div className="color-variant"></div>
          <i className="navbar-brand text-center mx-auto">&copy 2021 OEM Tube Assemblies</i>
          
      </div>
    );
  }
}

export default MyFooter;