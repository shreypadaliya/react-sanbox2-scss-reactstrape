import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Ourfeature from "./pages/Ourfeature";
import Pcontrol from "./pages/Pcontrol";
import Different from "./pages/Different";
import Proudoff from "./pages/Proudoff";
import Whoweare from "./pages/Whoweare";
import Joincom from "./pages/Joincom";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Casestudy from "./pages/Casestudy";

const App = () => {
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

export default App;
