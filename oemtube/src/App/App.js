import React from 'react';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';
import Products from '../components/pages/Products/Products';
import DistributorAssemblies from '../components/pages/DistributorAssemblies/DistributorAssemblies';
import MyFooter from '../components/shared/MyFooter/MyFooter';
import AboutUs from '../components/pages/AboutUs/AboutUs';
import RequestQuote from '../components/pages/RequestQuote/RequestQuote';
import ContactUs from '../components/pages/ContactUs/ContactUs';
import Serpentines from '../components/pages/SerpentineHelical/SerpentineHelical';


class App extends React.Component {



render() {
      return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar />
              {/* <div className="container"> */}
                {/* <div className="row"> */}
              <Switch>
              <Route path='/home' component={Home} />
              <Route path='/distributor' component={DistributorAssemblies} />
              <Route path='/serpentine-helical-coils' component={Serpentines} />
              <Route path='/products' component={Products} />
              <Route path='/aboutus' component={AboutUs} />
              <Route path='/contactUs' component={ContactUs} />
              <Redirect from="*" to='/home'/>
              </Switch>
              <MyFooter />

     {/* </div> */}
    {/* </div> */}
     </React.Fragment>
        </BrowserRouter>
        </div>
  );
}
}

export default App;
