import React from "react";
import classes from "./Footer.module.css";
import facebookImage from "../../../assets/FooterSectionImages/facebookImage.png";
import instagramImage from "../../../assets/FooterSectionImages/instagramImage.png";
import twitterImage from "../../../assets/FooterSectionImages/twitterImage.png";
import playStoreImage from "./../../../assets/FooterSectionImages/Google Play.png";
import appleStoreImage from "./../../../assets/FooterSectionImages/Play Store.png";
const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footer}>
        <div className={classes.container1}>
          <h1 className={classes.title}>Jadoo.</h1>
          <p className={classes.tagline}>
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        <div className={classes.container2}>
          <div className={classes.column1}>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div className={classes.column2}>
            <h3>Contact</h3>
            <ul>
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>
          <div className={classes.column3}>
            <h3>More</h3>
            <ul>
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
        </div>

        <div className={classes.container3}>
          <span className={classes.row1}>
            <a href="https://www.facebook.com/login/" target="_blank">
              <img src={facebookImage} alt="facebookImage" />
            </a>
            <a href="https://www.instagram.com/accounts/login/" target="_blank">
              <img src={instagramImage} alt="instagramImage" />
            </a>
            <a href="https://x.com/i/flow/login" target="_blank">
              <img src={twitterImage} alt="twitterImage" />
            </a>
          </span>
          <span className={classes.row2}>
            <p className={classes.footerText}>Discover our app</p>
          </span>
          <span className={classes.row3}>
            <img
              src={playStoreImage}
              alt="playStoreImage"
              className={classes.playStore}
            />
            <img
              src={appleStoreImage}
              alt="appleStoreImage"
              className={classes.appleStore}
            />
          </span>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>All rights reserved@jadoo.co</p>
      </div>
    </div>
  );
};

export default Footer;
