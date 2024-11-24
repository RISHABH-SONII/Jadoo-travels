// import React from "react";
// import classes from "./Header.module.css";
// import logo from "../../../assets/HeroSectionImages/FrontImages/Logo.png";
// import { IoIosArrowDown } from "react-icons/io";

// const Header = () => {
//   return (
//     <nav className={classes.navBar}>
//       <img src={logo} alt="MainLogo" className={classes.headerLogo} />
//       <ul>
//         <li>Destinations</li>
//         <li>Hotels</li>
//         <li>Flights</li>
//         <li>Bookings</li>
//         <li>Login</li>
//         <li
//           style={{
//             padding: "0.5rem 1rem",
//             border: "0.1px solid rgba(33, 40, 50, 1)",
//             borderRadius: "5px",
//           }}
//         >
//           Sign up
//         </li>
//         <li>
//           EN
//           <IoIosArrowDown />
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Header;

import React from "react";
import classes from "./Header.module.css";
import logo from "../../../assets/HeroSectionImages/FrontImages/Logo.png";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  return (
    <nav className={classes.navBar}>
      <img src={logo} alt="MainLogo" className={classes.headerLogo} />
      <ul className={classes.navList}>
        <li>Destinations</li>
        <li>Hotels</li>
        <li>Flights</li>
        <li>Bookings</li>
        <li>Login</li>
        <li className={classes.signUpButton}>Sign up</li>
        <li className={classes.languageSelector}>
          EN <IoIosArrowDown />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
