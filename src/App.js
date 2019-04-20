import React, { Component } from 'react';
import RouteHandler from './RouterHandler';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <RouteHandler/>
        <Footer/>
      </div>
    );
  }
}

export default App;
