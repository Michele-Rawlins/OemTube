import React from 'react';

import './MyFooter.scss';
class MyFooter extends React.Component {
  render() {
    return (
      <nav style={{backgroundColor: ' #B77333;', color: '#B0B0B0'}}
           className="navbar bottom">
             <div className="color-variant"></div>
          <i className="navbar-brand text-center mx-auto">@2021 OEM Tube Assemblies</i>
          
      </nav>
    );
  }
}

export default MyFooter;