import React from "react";


import {
  AboutUs,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Menu,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import MapPage from "./container/FindUs/FindUs";


const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Intro />
    <Gallery />
    <MapPage />
    <Footer />
  </div>
);

export default App;
