import React from 'react';
import AluminumHeader from '../../../photos/Aluminum-Header.jpg';
import CopperNickle from '../../../photos/copperNickle.jpg';
import Coils from '../../../photos/coils.PNG';
import Parts from '../../../photos/parts.PNG';
import StainlessSteelCoil from '../../../photos/Stainless-steel-coil.jpg';
import './AboutUs.scss';


class AboutUs extends React.Component {


  render() {
   
    

    return (
      <div className="aboutUs">
        <div className="pic-header">
          <img className="header-pic"src ={AluminumHeader}></img>
          <img className="header-pic"src ={CopperNickle}></img>
          <img className="header-pic"src ={Coils}></img>
          <img className="header-pic"src ={Parts}></img>
          <img className="header-pic"src ={StainlessSteelCoil}></img>
          <div className="text">
            
          </div>



        </div>
        <p className="about-us-text">Founded in 1995 </p>
        </div>




    );
}
}

export default AboutUs;