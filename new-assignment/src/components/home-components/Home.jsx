import React from "react";
import homeimg from "../../assets/images/3d6.png.png";
import Typewriter from "typewriter-effect";
import { Button } from "reactstrap";

const Home = () => {
  const handleRippleEffect = (e) => {
    const button = e.currentTarget;

    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = button.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    button.appendChild(ripple);
    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  };

  return (
    <section className="home-section" data-aos="fade-up">
      <div className="Homesemimain">
        <div className="home-left-section">
          {/* <h1 className="hometitle">
            Networking <span className="solution">solutions </span>for worldwide communication
          </h1> */}
          <h1 className="hometitle">
            Networking{" "}
            <span className="solution">
              <Typewriter
                options={{
                  strings: ["solutions"],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50, 
                  pauseFor: 1500,  
                }}
              />
            </span>{" "}
            for worldwide communication
          </h1>
          <h3 className="infosub">
            We're a company that focuses on establishing long-term relationships
            with customers.
          </h3>
          <div>
            <Button className="primary-btn" onClick={handleRippleEffect}>
              Explore Now
            </Button>
          </div>
        </div>
        <div className="home-right-section">
          <img src={homeimg} alt="" className="homemainimg" />
        </div>
      </div>
    </section>
  );
};

export default Home;
