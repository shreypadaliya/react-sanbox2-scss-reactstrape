import React, { useState, useEffect, useRef } from "react";
import { Navbar, Container, Button } from "reactstrap";
import navlogo from "../assets/LOGO/div.navbar-brand.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <Container>
      <Navbar className="navmain">
        <div className="navlogoimgholder">
          <img src={navlogo} alt="Logo" className="navimg" />
        </div>
        <div ref={menuRef} className={`navlinkholder ${isMenuOpen ? "active" : ""}`}>
          <div className="navlinkdiv">
            <a href="#" className="navlink">
              Demos
            </a>
          </div>
          <div className="navlinkdiv">
            <a href="#" className="navlink">
              Pages
            </a>
          </div>
          <div className="navlinkdiv">
            <a href="#" className="navlink">
              Project
            </a>
          </div>
          <div className="navlinkdiv">
            <a href="#" className="navlink">
              Blog
            </a>
          </div>
          <div className="navlinkdiv">
            <a href="#" className="navlink">
              Blocks
            </a>
          </div>
          <div className="navlinkdiv">
            <a href="#" className="navlink">
              Documentation
            </a>
          </div>
          <div className="navbuttonholder navsmallholder">
            <Button className="navbarbutton">SignIn</Button>
            <Button className="navbarbutton">SignUp</Button>
          </div>
        </div>
        <div className="navbuttonholder navlargeholder">
          <Button className="navbarbutton">SignIn</Button>
          <Button className="navbarbutton">SignUp</Button>
        </div>
        <div ref={hamburgerRef} className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;

// import React, { useState } from "react";
// import { Navbar, Container, Button } from "reactstrap";
// import navlogo from "../assets/LOGO/div.navbar-brand.png";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

//   return (
//     <Container>
//       <Navbar className="navmain">
//         <div className="navlogoimgholder">
//           <img src={navlogo} alt="Logo" className="navimg" />
//         </div>
//         <div className={`navlinkholder ${isMenuOpen ? "active" : ""}`}>
//           <div className="navlinkdiv">
//             <a href="#" className="navlink">
//               Demos
//             </a>
//           </div>
//           <div className="navlinkdiv">
//             <a href="#" className="navlink">
//               Pages
//             </a>
//           </div>
//           <div className="navlinkdiv">
//             <a href="#" className="navlink">
//               Project
//             </a>
//           </div>
//           <div className="navlinkdiv">
//             <a href="#" className="navlink">
//               Blog
//             </a>
//           </div>
//           <div className="navlinkdiv">
//             <a href="#" className="navlink">
//               Blocks
//             </a>
//           </div>
//           <div className="navlinkdiv">
//             <a href="#" className="navlink">
//               Documentation
//             </a>
//           </div>
//           <div className="navbuttonholder navsmallholder">
//             <Button className="navbarbutton">SignIn</Button>
//             <Button className="navbarbutton">SignUp</Button>
//           </div>
//         </div>
//         <div className="navbuttonholder navlargeholder">
//           <Button className="navbarbutton">SignIn</Button>
//           <Button className="navbarbutton">SignUp</Button>
//         </div>
//         <div className="hamburger" onClick={toggleMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//       </Navbar>
//     </Container>
//   );
// };

// export default Header;


