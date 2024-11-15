import React from "react";
import { Container } from "reactstrap";
import cintactimg from "../../assets/images/Figure  3d3.png.png";
import { Icon } from "../../components/common-componets/Svgicon";

const Contact = () => {
  return (
    <Container>
      <section className="contact-section" data-aos="fade-up" id="blocks">
        <div className="contact-left-section">
          <img src={cintactimg} alt="" className="conimg" />
        </div>
        <div className="contact-right-section">
          <h6 className="conhead">Contact Us</h6>
          <h2 className="consubhead">
            Got any questions? Don't hesitate to get in touch.
          </h2>
          <div className="consubinfo">
            <div>
              <Icon name="icon10" />
            </div>
            <div>
              <h5>Address</h5>
              <p><a href="https://maps.app.goo.gl/sdZ75g3esMfMRQaM6" className="conaddress">Moonshine St. 14/05 Light City, London</a></p>
            </div>
          </div>
          <div className="consubinfo consecondmar">
            <div>
              <Icon name="icon11" />
            </div>
            <div>
              <h5>Phone</h5>
              <p>
                <a href="tel:+001234567890" className="callto">
                  00 (123) 456 78 90
                </a>
              </p>
            </div>
          </div>
          <div className="consubinfo">
            <div>
              <Icon name="icon12" />
            </div>
            <div>
              <h5>E-mail</h5>
              <p>
                <a href="mailto:sandbox@email.com" className="mailto">
                  sandbox@email.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Contact;
