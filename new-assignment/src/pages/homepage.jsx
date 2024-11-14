import React from "react";
import Navbar from "../components/common-componets/Navbar";
import Home from "../components/home-components/Home";
import Ourfeature from "../components/home-components/Ourfeature";
import Pcontrol from "../components/home-components/Pcontrol";
import Different from "../components/home-components/Different";
import Proudoff from "../components/home-components/Proudoff";
import Whoweare from "../components/home-components/Whoweare";
import Joincom from "../components/home-components/Joincom";
import Contact from "../components/home-components/Contact";
import Casestudy from "../components/home-components/Casestudy";
import Footer from "../components/common-componets/Footer";

const homepage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Ourfeature />
      <Pcontrol />
      <Different />
      <Proudoff />
      <Casestudy />
      <Whoweare />
      <Contact />
      <Joincom />
      <Footer />
    </div>
  );
};

export default homepage;

