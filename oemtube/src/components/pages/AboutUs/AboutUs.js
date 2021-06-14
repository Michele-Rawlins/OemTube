/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

import CopperNickle from '../../../photos/copperNickle.jpg';
import Coils from '../../../photos/coils.PNG';
import Parts from '../../../photos/parts.PNG';
import StainlessSteelCoil from '../../../photos/Stainless-steel-coil.jpg';
import copperCoil from '../../../photos/Copper-coil-bent-tube.jpg';
import loch from '../../../photos/lochinvar.jpg';
import apc from '../../../photos/APC-Assembly-Blurr.jpg';
import Clarksville from '../../../photos/clarksville1.png';
import Chipley from '../../../photos/Chipley1.png';
import spun from '../../../photos/Spun-Drier.jpg';
import './AboutUs.scss';


class AboutUs extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
}
  render() {
   
    

    return (
      <div className="aboutUs">
        <div className="about-us-text">
        <p className="about-us-text">Founded in 1995, we have locations in Clarksville, TN and Chipley, FL.  We offer many services to our customers, from 
        complicated design solutions and engineering capabilities, to educating our associates about your company and specific needs, to outstanding customer service, 
        to an extensive quality check.  Our team is committed to meeting your exact specifications.   </p>
        </div>
        <div className="pic-header">
          <img className="header-pic"src ={spun} alt="spun copper cylinder"></img>
          <img className="header-pic"src ={CopperNickle} alt="copper nickle pipe"></img>
          <img className="header-pic"src ={Coils} alt="copper coils"></img>
          <img className="header-pic"src ={Parts} alt="miscellanous parts"></img>
          <img className="header-pic"src ={StainlessSteelCoil} alt="stainless steel coil"></img>
          <img className="header-pic"src ={copperCoil} alt="copper coil"></img>
          <img className="header-pic"src ={loch} alt="boiler part"></img>
          <img className="header-pic"src ={apc} alt="copper assembly"></img>
         </div>
      <div className="Location-container">
        <div className="location-pics-container d-flex flex-wrap">
          <img className="p-2 col-example text-center d-flex  col-3 clarksville-pic d-flex" src={Clarksville} alt="Clarksville location" />
          <img className="p-2 col-example text-center d-flex  col-3 chipley-pic d-flex" src={Chipley} alt="Chipley location"/>
          <iframe className="locationMap"src="https://www.google.com/maps/d/embed?mid=17zfsegrgiA3c4nkRDmMsLhph6jW4M9lQ&hl=en" width="640" height="480"></iframe>
         </div>
         </div>
        

</div>



    );
}
}

export default AboutUs;