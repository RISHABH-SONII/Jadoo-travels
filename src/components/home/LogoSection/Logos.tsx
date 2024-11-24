import React from "react";
import classes from "./Logos.module.css";
import logo1 from "../../../assets/LogoSectionImages/Logo1.png";
import logo2 from "../../../assets/LogoSectionImages/Logo2.png";
import logo3 from "../../../assets/LogoSectionImages/Logo3.png";
import logo4 from "../../../assets/LogoSectionImages/Logo4.png";
import logo5 from "../../../assets/LogoSectionImages/Logo5.png";
const Logos = () => {
  return (
    <div className={classes.logoSection}>
      <img src={logo1} alt="logo1" />
      <img src={logo2} alt="logo2" />
      <img src={logo3} alt="logo3" />
      <img src={logo4} alt="logo4" />
      <img src={logo5} alt="logo5" />
    </div>
  );
};

export default Logos;
