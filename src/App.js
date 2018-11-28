import React, { Component } from "react";
import "./resources/styles.css";
import { Element } from "react-scroll";

import Header from "./components/header-footer/Header";
import Featured from "./components/featured/Featured";
import VenueInfo from "./components/venueInfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header-footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venueInfo">
          <VenueInfo />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;

//Jose Gonzalez - The Schnitz
//Sun. Mar 31, 2019 8:00 PM
