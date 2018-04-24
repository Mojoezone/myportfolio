import React, { Component } from 'react';
import { Header } from './components/nav/header';
import{ BrowserRouter as Router, Route} from 'react-router-dom';
import {routes } from './components/nav/routes';
import {Footer } from './components/footer/footer';



class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <div>
        <Header />
        </div>
          <div style={{margin:'0 auto', textAlign: 'center'}}>
          {routes.map((route, index)=>(
            <Route 
            key={index} 
            exact={route.exact} 
            path={route.path} 
            component={route.main} 
            />
          ))}
          </div>

          <Footer />

        </div>
      </Router>
      
    );
  }
}

export default App;
