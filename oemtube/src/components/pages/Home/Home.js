import React from 'react';
import MyCarousel from '../../../components/shared/MyCarousel/MyCarousel';
import favicon from '../../../photos/favicon.jpg';
// import { Link } from 'react-router-dom'
import './Home.scss';

// import {
//   Card, CardImg, CardTitle,CardBody, 
// } from 'reactstrap';

class Home extends React.Component {
  state = {
    MyCarousel: [],
    flavicon: [],
  }

  render() {
   
    

    return (
     

   <div className="Home container">
     <section class="hero">
  <h1 className="intro-fabricate">Let us Fabricate your Future</h1>
  <article>
    <p className="intro">Explore our product lines.  Click the button below to begin your journey.</p>
    <button className="intro-button" a href="#products">Browse Products</button>
  </article>
</section>
      <img className ="home-title" src={favicon}></img>
      < MyCarousel/>
  
  </div>
 
         
    );   
    }
  }
  
  export default Home;