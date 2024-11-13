// import React from "react";
// import homeimg from "../assets/3d6.png.png";
// import { Button } from "reactstrap";


// const Home = () => {
//   return (
//     <div className="Homemain">
//       <div className="Homesemimain">
//         <div className="homeinfo">
//           <h1>
//             Networking <span>solutions </span>for worldwide communication
//           </h1>
//           <h3 className="infosub">
//             We're a company that focuses on establishing long-term relationships
//             with customers.
//           </h3>
//           <Button className="custom-btn">Explore Now</Button>
//         </div>
//         <div className="homeimgholder">
//           <img src={homeimg} alt="" className="homemainimg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React from "react";
import homeimg from "../assets/3d6.png.png";
import { Button } from "reactstrap";

const Home = () => {
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
    <div className="Homemain">
      <div className="Homesemimain">
        <div className="homeinfo">
          <h1 className="hometitle">
            Networking <span>solutions </span>for worldwide communication
          </h1>
          <h3 className="infosub">
            We're a company that focuses on establishing long-term relationships
            with customers.
          </h3>
          <div>
          <Button className="custom-btn" onClick={handleRippleEffect}>
            Explore Now
          </Button>
          </div>
        </div>
        <div className="homeimgholder">
          <img src={homeimg} alt="" className="homemainimg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
