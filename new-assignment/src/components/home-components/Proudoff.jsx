import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { Icon } from "../../components/common-componets/Svgicon";

const Proudoff = () => {
  const testimonials = [
    {
      frontQuote:
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.",
      name: "Coriss Ambady",
      role: "Financial Analyst",
      backContent:
        "Additional details about our successful collaboration and the specific results we achieved together. We implemented innovative solutions that drove measurable business growth.",
    },
    {
      frontQuote:
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.",
      name: "Coriss Ambady",
      role: "Financial Analyst",
      backContent:
        "Detailed breakdown of the financial strategies we developed and their impact on organizational efficiency and revenue growth.",
    },
    {
      frontQuote:
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.",
      name: "Coriss Ambady",
      role: "Financial Analyst",
      backContent:
        "In-depth analysis of the project outcomes and the long-term benefits realized through our partnership and innovative solutions.",
    },
    {
      frontQuote:
        "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta. Cras mattis consectetur.",
      name: "Coriss Ambady",
      role: "Financial Analyst",
      backContent:
        "Comprehensive overview of the transformation achieved and the sustainable improvements implemented in their business processes.",
    },
  ];

  const [completedProjects, setCompletedProjects] = useState(0);
  const [revenueGrowth, setRevenueGrowth] = useState(0);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(0);

  // Function to animate numbers
  const animateNumber = (setState, targetValue, intervalTime, increment) => {
    let count = 0;
    const interval = setInterval(() => {
      count += increment;
      if (count >= targetValue) {
        clearInterval(interval);
        setState(targetValue); // Ensure final value is set
      } else {
        setState(Math.floor(count));
      }
    }, intervalTime);
  };

  useEffect(() => {
    const targetValues = {
      completedProjects: 1000,
      revenueGrowth: 4,
      customerSatisfaction: 99.7,
    };

    // Set intervals to animate numbers
    animateNumber(setCompletedProjects, targetValues.completedProjects, 20, 10);
    animateNumber(setRevenueGrowth, targetValues.revenueGrowth, 100, 0.1);
    animateNumber(
      setCustomerSatisfaction,
      targetValues.customerSatisfaction,
      50,
      0.1
    );
  }, []);

  return (
    <>
      <div className="proudof-section">
        <div className="proudof-infosection">
          <Container className="proudcon">
            <div className="proudsemimain">
              <div>
                <h2 className="proudhead">We are proud of our works</h2>
              </div>
              <div>
                <h4 className="proudsubhead">
                  We bring solutions to make life easier for our customers.
                </h4>
              </div>
            </div>
            <Row className="proudgrid">
              <Col>
                <div className="proudgridwrap">
                  <Icon name="icon7" />
                  <div className="proudgridtexthead">{completedProjects}+ </div>
                  <div className="proudgridtextsubtitele">
                    Completed Projects
                  </div>
                </div>
              </Col>
              <Col>
                <div className="proudgridwrap">
                  <Icon name="icon8" />
                  <div className="proudgridtexthead">{revenueGrowth}x</div>
                  <div className="proudgridtextsubtitele">Revenue Growth</div>
                </div>
              </Col>
              <Col>
                <div className="proudgridwrap">
                  <Icon name="icon9" />
                  <div className="proudgridtexthead">
                    {customerSatisfaction}%
                  </div>
                  <div className="proudgridtextsubtitele">
                    Customer Satisfaction
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container >
        <div className="proudoff-cardsection">
        <Row className="proudcardmain">
          {testimonials.map((testimonial, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={6}
              lg={6}
              xl={3}
              className="pcardcolmain"
            >
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="pcardholder">
                      <div className="pcardtitle">{testimonial.frontQuote}</div>
                      <div className="pcardsubholder">
                        <div className="pclassname">{testimonial.name}</div>
                        <div className="pclassrole">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="pcardholder">
                      <div className="pcardtitle">
                        {testimonial.backContent}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        </div>
      </Container>
    </>
  );
};

export default Proudoff;

