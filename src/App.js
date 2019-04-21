import React, { Component } from 'react';
import RouteHandler from './RouterHandler';
// import Header from './common/Header';
// import Footer from './common/Footer';
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import * as firebase from "firebase/app";
import "firebase/database";
import { config } from "../src/constants/config";

class App extends Component {
  render() {
    return (
      <FirebaseDatabaseProvider firebase={firebase} {...config}>
        <div>
          {/* <Header/> */}
          <RouteHandler />
          {/* <Footer/> */}
        </div>
      </FirebaseDatabaseProvider>
    );
  }
}

export default App;
