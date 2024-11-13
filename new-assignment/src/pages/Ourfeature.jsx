import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Icon } from "../components/Svgicon";

const Ourfeature = () => {
  return (
    <div className="ourfeaturemain">
      <div className="ourfeaturesemimain">
        <h6>Our Features</h6>
        <h2 className="ourfeaturesub">
          The service we offer is specifically designed to meet your needs.
        </h2>
        <Container>
          <Row style={{ margin: "0px" }}>
            <Col lg="4" md="6" sm="12" className="ourfeatcol">
              <div className="ourfeatinfo">
                <div>
                  <Icon name="icon1" />
                </div>
                <div>
                  <div>
                    <h4>Software & Integration</h4>
                  </div>
                  <div>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className="ourfeatcol">
              <div className="ourfeatinfo">
                <div>
                  <Icon name="icon2" />
                </div>
                <div>
                  <div>
                    <h4>Network Security</h4>
                  </div>
                  <div>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className="ourfeatcol">
              <div className="ourfeatinfo">
                <div>
                  <Icon name="icon3" />
                </div>
                <div>
                  <div>
                    <h4>Cloud Services</h4>
                  </div>
                  <div>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className="ourfeatcol">
              <div className="ourfeatinfo">
                <div>
                  <Icon name="icon4" />
                </div>
                <div>
                  <div>
                    <h4>Wireless Networking</h4>
                  </div>
                  <div>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className="ourfeatcol">
              <div className="ourfeatinfo">
                <div>
                  <Icon name="icon5" />
                </div>
                <div>
                  <div>
                    <h4>IT Solutions</h4>
                  </div>
                  <div>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="4" md="6" sm="12" className="ourfeatcol">
              <div className="ourfeatinfo">
                <div>
                  <Icon name="icon6" />
                </div>
                <div>
                  <div>
                    <h4>Server Configuration</h4>
                  </div>
                  <div>
                    <p>
                      Duis mollis gravida commodo id luctus erat porttitor
                      ligula, eget lacinia odio sem aget elit nullam quis risus
                      eget.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Ourfeature;
