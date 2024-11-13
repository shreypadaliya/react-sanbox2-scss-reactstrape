import React from "react";
import { Button, Container } from "reactstrap";

const Joincom = () => {
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
    <Container className="joincommain">
      <div>
        <h6 className="joinchead">Join Our Community</h6>
        <h2 className="joincomsubhead">
          We are trusted by over 5000+ clients. Join them now and grow your
          business.
        </h2>
        <Button className="custom-btn" onClick={handleRippleEffect}>
          Get Started
        </Button>
      </div>
    </Container>
  );
};

export default Joincom;