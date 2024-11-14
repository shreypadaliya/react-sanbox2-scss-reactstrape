import React from "react";
import { Container, Row, Col, Input, Button } from "reactstrap";
import footlogo from "../../assets/images/LOGO/logo-dark.png.png";

const Footer = () => {
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
    <footer className="footer-section" data-aos="fade-up">
      <Container>
        <div className="footcustomdiv">
          <Row className="">
            {/* Company Info */}
            <Col xs="12" md="6" lg="3">
              <div className="footdiv1">
                <div className="gootweblogo">
                  <img src={footlogo} alt="" />
                </div>
                <p>
                  © 2024 <span className="hoverbox">Sandbox</span>
                </p>
                <p>All rights reserved.</p>
              </div>
            </Col>

            {/* Contact Info */}
            <Col xs="12" md="6" lg="3">
              <div className="foothead">Get in Touch</div>
              <div>
                <p className="footlist">Moonshine St. 14/05</p>
                <p className="footlist">Light City, London,</p>
                <p className="footlist">United Kingdom</p>
                <p className="hoverbox footlist">info@email.com</p>
                <p className="hoverbox footlist">00 (123) 456 78 90</p>
              </div>
            </Col>

            {/* Links */}
            <Col xs="12" md="6" lg="3">
              <div className="foothead">Learn More</div>
              <ul style={{ padding: "0px" }}>
                <li className="no-bullets">
                  <a href="#" className="mailto ">
                    <p className="hoverbox">About Us</p>
                  </a>
                </li>
                <li className="no-bullets">
                  <a href="#" className="mailto ">
                    <p className="hoverbox">Our Story</p>
                  </a>
                </li>
                <li className="no-bullets">
                  <a href="#" className="mailto ">
                    <p className="hoverbox">Projects</p>
                  </a>
                </li>
                <li className="no-bullets">
                  <a href="#" className="mailto ">
                    <p className="hoverbox">Terms of Use</p>
                  </a>
                </li>
                <li className="no-bullets">
                  <a href="#" className="mailto ">
                    <p className="hoverbox">Privacy Policy</p>
                  </a>
                </li>
              </ul>
            </Col>

            {/* Newsletter */}
            <Col xs="12" md="6" lg="3">
              <div className="foothead">Our Newsletter</div>
              <p className="footformsub">
                Subscribe to our newsletter to get our news & deals delivered to
                you.
              </p>
              <div className="footform">
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="footer-input"
                  />
                </div>
                <div>
                  <Button className="form-btn" onClick={handleRippleEffect}>
                    Join
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
