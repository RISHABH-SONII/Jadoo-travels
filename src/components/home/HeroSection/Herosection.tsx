import React from "react";
import classes from "./HeroSection.module.css";
import Header from "../../common/Header/Header";
import BackgroundImage from "../../../assets/HeroSectionImages/BackgroundImages/TravellerBackgroundImage.png";
import FrontImage from "../../../assets/HeroSectionImages/FrontImages/TravellerImage.png";
import plan1 from "../../../assets/HeroSectionImages/FrontImages/LeftplanImage.png";
import plan2 from "../../../assets/HeroSectionImages/FrontImages/RightPlanImage.png";
import { IoIosPlay } from "react-icons/io";

const Herosection = () => {
  return (
    <div className={classes.mainContainer}>
      <Header />
      <div className={classes.contentSection}>
        <h3>BEST DESTINATIONS AROUND THE WORLD</h3>
        <h1>
          Travel,<span className={classes.underline}> enjoy</span> and live a
          new and full life
        </h1>
        <p>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className={classes.buttons}>
          <button className={classes.FindOutMore}>Find out more</button>
          <button className={classes.playdemo}>
            <div className={classes.playDemoIcon}>
              <IoIosPlay className={classes.playIcon} />
            </div>
            Play Demo
          </button>
        </div>
      </div>
      <div className={classes.imageSection}>
        <img
          src={BackgroundImage}
          alt="BackgroundImage"
          className={classes.backgroundImage}
        />
        <img src={plan1} alt="leftPlan" className={classes.leftPlan} />
        <img src={plan2} alt="rightPlan" className={classes.rightPlan} />
        <img src={FrontImage} alt="FrontImage" className={classes.frontImage} />
      </div>
    </div>
  );
};

export default Herosection;
