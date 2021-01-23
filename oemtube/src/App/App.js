import React from 'react';

import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import MyNavbar from '../components/shared/MyNavbar/MyNavbar';
import Home from '../components/pages/Home/Home';

class App extends React.Component {



render() {
      return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <MyNavbar />
              <div className="container">
                <div className="row">
              <Switch>
              <Route path='/home' component={Home} />
              <Redirect from="*" to='/home'/>
              </Switch>
     </div>
    </div>
     </React.Fragment>
        </BrowserRouter>
        </div>
  );
}
}

export default App;
