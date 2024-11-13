import React from "react";
import { Container, Row, Col } from "reactstrap";
import pcontrolimg from "../assets/Figure  3d2.png.png";
import rcircle from "../assets/List  Item.png";

const Pcontrol = () => {
  return (
    <Container className="pcontrolmain">
      <div className="pcontrolsemimain">
        <div>
          <img src={pcontrolimg} alt="" className="pconimage" />
        </div>
        <div className="pconinfomain">
          <div className="pconinfosemimain">
            <h6 className="pconinfohead">Have Perfect Control</h6>
            <h2 className="pconinfosemihead">
              We bring solutions to make life easier for our customers.
            </h2>
            <p className="pconinfosubtitle">
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in,
              egestas eget quam. Praesent commodo cursus magna, vel scelerisque
              nisl consectetur et. Vivamus sagittis lacus vel augue rutrum.
            </p>
            <Row style={{ margin: "0px" }}>
              <Col xs="12" sm="6" className="pcongrid">
                <div className="pconinfosemigrid">
                  <div>
                    <img src={rcircle} alt="" />
                  </div>
                  <div>
                    <p>
                      Aenean quam ornare.br <br /> Curabitur blandit.
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
                      Etiam porta euismod <br /> malesuada mollis.
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
                      Nullam quis risus eget urna <br /> mollis ornare.
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
                    <p>Vivamus sagittis lacus vel <br /> augue rutrum.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Pcontrol;
