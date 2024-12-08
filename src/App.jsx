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

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Intro />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
