import React from "react";
import whoweimg1 from "../assets/Figure g13.png";
import whoweimg2 from "../assets/Figure g12.png";
import whoweimg3 from "../assets/Figure g11.png";
import { Container, Row, Col } from "reactstrap";
import rcircle from "../assets/List  Item.png";

const Whoweare = () => {
  return (
    <>
      <Container>
        <div className="whomain">
          <div className="whoimgmain">
            <div className="whowrap1">
              <div>
                <img src={whoweimg2} alt="" className="whoimg1" />
              </div>
              <div>
                <img src={whoweimg1} alt="" className="whoimg2" />
              </div>
            </div>
            <div>
              <img src={whoweimg3} alt="" className="whoimg3" />
            </div>
          </div>
          <div className="pconinfomain">
            <div className="whoweinfosemimain">
              <h6 className="pconinfohead">Who Are We?</h6>
              <h2 className="whoweinfosemihead">
                Company that believes in the power of creative strategy.
              </h2>
              <p className="whoweinfosubtitle">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis
                in, egestas eget quam. Praesent commodo cursus magna, vel
                scelerisque nisl consectetur et. Cum sociis natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Aenean
                lacinia bibendum nulla sed.
              </p>
              <Row style={{ margin: "0px" }}>
                <Col xs="12" sm="6" className="pcongrid">
                  <div className="pconinfosemigrid">
                    <div>
                      <img src={rcircle} alt="" />
                    </div>
                    <div>
                      <p>
                        Aenean eu leo quam ornare <br />
                        curabitur blandit tempus.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs="12" sm="6" className="pcongrid">
                  <div className="pconinfosemigrid">
                    <div>
                      <img src={rcircle} alt="" />
                    </div>
                    <div>
                      <p>
                        Etiam porta sem malesuada <br />
                        magna mollis euismod.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs="12" sm="6" className="pcongrid">
                  <div className="pconinfosemigrid">
                    <div>
                      <img src={rcircle} alt="" />
                    </div>
                    <div>
                      <p>
                        Nullam quis risus eget urna mollis <br />
                        ornare donec elit.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col xs="12" sm="6" className="pcongrid">
                  <div className="pconinfosemigrid">
                    <div>
                      <img src={rcircle} alt="" />
                    </div>
                    <div>
                      <p>
                        Fermentum massa vivamus <br />
                        faucibus amet euismod.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
      {/* <Container className="semiwhatcon">
        <Row style={{ margin: "0px" }} className="semiwhatconrow">
          <Col>
            <div className="visionmain">
              <div>
                <div className="oneholder">1</div>
              </div>
              <div>
                <div className="visiontitle">Our Vision</div>
                <p className="visionsubtitle">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget. Fusce dapibus tellus.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="visionmain">
              <div>
                <div className="oneholder">2</div>
              </div>
              <div>
                <div className="visiontitle">Our Mission</div>
                <p className="visionsubtitle">
                  Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel
                  augue laoreet. Sed posuere consectetur.
                </p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="visionmain">
              <div>
                <div className="oneholder">3</div>
              </div>
              <div>
                <div className="visiontitle">Our Values</div>
                <p className="visionsubtitle">
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Praesent commodo cursus magna scelerisque.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container> */}
      <Container className="semiwhatcon">
        <Row style={{ margin: "0px" }} className="semiwhatconrow">
          <Col xs="12" sm="6" lg="4" className="semiwhatconrow">
            <div className="visionmain">
              <div>
                <div className="oneholder">1</div>
              </div>
              <div>
                <div className="visiontitle">Our Vision</div>
                <p className="visionsubtitle">
                  Nulla vitae elit libero, a pharetra augue. Donec id elit non
                  mi porta gravida at eget. Fusce dapibus tellus.
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" lg="4" className="semiwhatconrow">
            <div className="visionmain">
              <div>
                <div className="oneholder">2</div>
              </div>
              <div>
                <div className="visiontitle">Our Mission</div>
                <p className="visionsubtitle">
                  Maecenas faucibus mollis interdum. Vivamus sagittis lacus vel
                  augue laoreet. Sed posuere consectetur.
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="6" lg="4" className="semiwhatconrow">
            <div className="visionmain">
              <div>
                <div className="oneholder">3</div>
              </div>
              <div>
                <div className="visiontitle">Our Values</div>
                <p className="visionsubtitle">
                  Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                  Praesent commodo cursus magna scelerisque.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Whoweare;
