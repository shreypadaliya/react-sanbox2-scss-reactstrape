import React from "react";
import { Container } from "reactstrap";
import diffimg from "../assets/Figure  about27.jpg.png";
import rounddiff from "../assets/List  Item.png";

const Different = () => {
  return (
    <>
      <Container>
        <div className="diffmain">
          <div className="diffsemimain">
            <div className="diffsemisubmain">
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
                  <div><img src={rounddiff} alt="" /></div>
                  <div><p>Aenean eu leo quam. Pellentesque ornare.</p></div>
                </div>
                <div className="diffchecksemi">
                  <div><img src={rounddiff} alt="" /></div>
                  <div><p>Aenean eu leo quam. Pellentesque ornare.</p></div>
                </div>
                <div className="diffchecksemi">
                  <div><img src={rounddiff} alt="" /></div>
                  <div><p>Aenean eu leo quam. Pellentesque ornare.</p></div>
                </div>
              </div>
            </div>
          </div>
          <div className="diffimg holder">
            <img src={diffimg} alt="" className="differnceimg" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Different;


// import React from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


// const Different = () => {
//   const percentage = 80;

//   return (
//     <CircularProgressbar
//       value={percentage}
//       text={`${percentage}%`}
//       styles={buildStyles({
        
//         rotation: 0.25,

  
//         strokeLinecap: 'round',

        
//         textSize: '32px',

       
//         pathTransitionDuration: 0.5,

//         pathColor: '#F80D51',
//         textColor: '#F80D51',
//         trailColor: '#d6d6d6',
//         backgroundColor: '#3e98c7',
//       })}
//     />
//   );
// };

// export default Different;
