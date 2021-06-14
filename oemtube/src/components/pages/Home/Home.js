import React from 'react';



import './Home.scss';
import { NavLink as RRNavLink } from 'react-router-dom';


import { NavLink } from 'reactstrap';

class Home extends React.Component {
  state = {
    
    favicon: [],
  }

  componentDidMount() {
    window.scrollTo(0, 0);
}

  render() {
   
    

    return (
    

   <div className="home container">
     <section class="hero">
      
   
       
       <div className="heroarea">

  <h1 className="typewriter">Let us <span>&#163;</span>abricate <span>&#163;</span>or you</h1>
 
  <article>
    <p className="intro">No Matter Your Industry.  No Matter Your Design.  We have a solution for You. Click below for a sampling of our custom fabrication.</p>
<button className="intro-button"><NavLink tag={RRNavLink} to='/products'>Browse Products</NavLink></button>
  </article>
</div>
</section>


   
  </div>
             
    );   
    }
  }
  
  export default Home;