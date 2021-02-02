import React from 'react';
import MyCarousel from '../../../components/shared/MyCarousel/MyCarousel';
// import { Link } from 'react-router-dom'
import './Home.scss';

// import {
//   Card, CardImg, CardTitle,CardBody, 
// } from 'reactstrap';

class Home extends React.Component {
  state = {
    MyCarousel: [],
  }

  render() {
   
    

    return (
     

   <div className="Home container">
      <h1 className ="title">Welcome</h1>
      < MyCarousel/>
  
  </div>
 
         
    );   
    }
  }
  
  export default Home;