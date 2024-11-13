import React from "react";
import { Container } from "reactstrap";
import cintactimg from "../assets/Figure  3d3.png.png";
import { Icon } from "../components/Svgicon";

const Contact = () => {
  return (
    <Container>
      <div className="conmain">
        <div className="conimgmain">
          <img src={cintactimg} alt="" className="conimg" />
        </div>
        <div className="coninfomain">
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
              <p>Moonshine St. 14/05 Light City, London</p>
            </div>
          </div>
          <div className="consubinfo consecondmar">
            <div>
              <Icon name="icon11" />
            </div>
            <div>
              <h5>Phone</h5>
              <p>
                <a href="tel:+001234567890" className="callto">00 (123) 456 78 90</a>
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
                <a href="mailto:sandbox@email.com" className="mailto">sandbox@email.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;




// import React from "react";
// import { Container } from "reactstrap";
// import cintactimg from "../assets/Figure  3d3.png.png";
// import { Icon } from "../components/Svgicon";

// const Contact = () => {
//   return (
//     <Container>
//       <div className="conmain">
//         <div className="conimgmain">
//           <img src={cintactimg} alt="" className="conimg" />
//         </div>
//         <div className="coninfomain">
//           <h6 className="conhead">Contact Us</h6>
//           <h2 className="consubhead">
//             Got any questions? Don't hesitate to get in touch.
//           </h2>
//           <div className="consubinfo">
//             <div>
//               <Icon name="icon10" />
//             </div>
//             <div>
//               <h5>Address</h5>
//               <p>Moonshine St. 14/05 Light City, London</p>
//             </div>
//           </div>
//           <div className="consubinfo consecondmar">
//             <div>
//               <Icon name="icon11" />
//             </div>
//             <div>
//               <h5>Phone</h5>
//               <p>00 (123) 456 78 90</p>
//             </div>
//           </div>
//           <div className="consubinfo">
//             <div>
//               <Icon name="icon12" />
//             </div>
//             <div>
//               <h5>E-mail</h5>
//               <p>sandbox@email.com</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Contact;
