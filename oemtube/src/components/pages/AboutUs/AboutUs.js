import React from 'react';
import AluminumHeader from '../../../photos/Aluminum-Header.jpg';
import CopperNickle from '../../../photos/copperNickle.jpg';
import Coils from '../../../photos/coils.PNG';
import Parts from '../../../photos/parts.PNG';
import StainlessSteelCoil from '../../../photos/Stainless-steel-coil.jpg';
import Clarksville from '../../../photos/clarksville1.png';
import Chipley from '../../../photos/Chipley1.png';
import favicon from '../../../photos/favicon.jpg';
import proto from '../../../photos/prototyping_repair.jpg';
import spun from '../../../photos/Spun-Drier.jpg';
import './AboutUs.scss';


class AboutUs extends React.Component {


  render() {
   
    

    return (
      <div className="aboutUs">
        <div className="about-us-text">
        <p className="about-us-text">Founded in 1995, we have locations in Clarksville, TN and Chipley, FL.  We offer many services to our customers, from 
        complicated design solutions and engineering capabilities, to educating our associates about your company and specific needs, to outstanding customer service, 
        to an extensive quality check.  Our team is committed to meeting your exact specifications.   </p>
        </div>
        <div className="pic-header">
          <img className="header-pic"src ={spun}></img>
          <img className="header-pic"src ={CopperNickle}></img>
          <img className="header-pic"src ={Coils}></img>
          <img className="header-pic"src ={Parts}></img>
          <img className="header-pic"src ={StainlessSteelCoil}></img>
         </div>
      <div className="Location-container">
        <div className="location-pics-container d-flex flex-wrap">
          <img className="p-2 col-example text-center d-flex  col-3 clarksville-pic d-flex" src={Clarksville}/>
          <img className="p-2 col-example text-center d-flex  col-3 chipley-pic d-flex" src={Chipley}/>
          <iframe className="locationMap"src="https://www.google.com/maps/d/embed?mid=17zfsegrgiA3c4nkRDmMsLhph6jW4M9lQ&hl=en" width="640" height="480"></iframe>
         </div>
         </div>
        

</div>



    );
}
}

export default AboutUs;