import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import diffimg from "../../assets/images/Figure  about27.jpg.png";
import rounddiff from "../../assets/images/List  Item.png";
import CountUp from "react-countup";
import { Icon } from "../../components/common-componets/Svgicon";

const Different = () => {
  const [progress, setProgress] = useState(0);
  const targetProgress = 80;
  useEffect(() => {
    let progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < targetProgress) {
          return prev + 1;
        } else {
          clearInterval(progressInterval);
          return targetProgress;
        }
      });
    }, 20);
  }, [targetProgress]);

  return (
    <>
      <Container>
        <section className="difference-section" data-aos="fade-up">
          <div className="diffsemimain">
            <div className="difference-left-section">
              <h6 className="pconinfohead">What Makes Us Different?</h6>
              <h2 className="pconinfosemihead">
                We make spending stress free so you have the perfect control.
              </h2>
              <p className="pconinfosubtitle">
                Etiam porta sem malesuada magna mollis euismod. Donec
                ullamcorper nulla non metus auctor fringilla. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
                tellus ac cursus. Integer posuere erat a ante venenatis dapibus
                posuere velit.
              </p>

              <div className="diffcheckmain">
                <div className="diffchecksemi">
                  <div>
                    <img src={rounddiff} alt="" />
                  </div>
                  <div>
                    <p>Aenean eu leo quam. Pellentesque ornare.</p>
                  </div>
                </div>
                <div className="diffchecksemi">
                  <div>
                    <img src={rounddiff} alt="" />
                  </div>
                  <div>
                    <p>Aenean eu leo quam. Pellentesque ornare.</p>
                  </div>
                </div>
                <div className="diffchecksemi">
                  <div>
                    <img src={rounddiff} alt="" />
                  </div>
                  <div>
                    <p>Aenean eu leo quam. Pellentesque ornare.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="diffimg holder">
            <img src={diffimg} alt="" className="differnceimg" />
            {/* counter */}
            <div className="counter-container">
              <div className="icon">
                <Icon name="icon13" />
              </div>
              <div className="counter-text">
                <CountUp start={0} end={25000} duration={3} separator="," />
                <span>+</span>
                <h6>Happy Clients</h6>
              </div>
            </div>

            {/* chart */}
            <div className="chart-containermain">
              <div className="chart-container">
                <svg className="semi-circle-chart" viewBox="0 0 100 50">
                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#f0f0f0"
                    strokeWidth="10"
                  />

                  <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    fill="none"
                    stroke="#ff69b4"
                    strokeWidth="10"
                    strokeDasharray="126"
                    strokeDashoffset={(1 - progress / 100) * 126}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="chart-text">
                  <span className="percentage">
                    {progress} <span className="persentagesymbole">%</span>
                  </span>
                  <p>Time Saved</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Different;
