import React from 'react';
import Curtis from '../../../photos/curtisBraze.jpg';
import coilEmployee from '../../../photos/employeeCoil.jpg';

import './WorkWithUs.scss';

class WorkWithUs extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
}


render() {


return (
  <div className="WorkWithUs d-flex flex-wrap">
      <div className="employee-container-fluid"></div>
            <img className="p-2 col-example text-center d-flex  col-3 clarksville-pic d-flex" src={Curtis} alt="Clarksville location" />
          <img className="p-2 col-example text-center d-flex  col-3 chipley-pic d-flex" src={coilEmployee} alt="Chipley location"/>  

<p className="text d-flex flex-wrap">Come join our amazing team.  You can reach us at Contact Us.   Fill out the form and someone will be back in touch with you shortly.   

 </p>


  </div>

);
}
}

export default WorkWithUs;