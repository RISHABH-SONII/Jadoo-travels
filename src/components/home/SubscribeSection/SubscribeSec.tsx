import React from "react";
import classes from "./SubscribeSec.module.css";
import ringImage from "../../../assets/SubscribeSectionImages/ringImage.png";
import ringImage2 from "../../../assets/SubscribeSectionImages/ringImage2.png";
import { MdOutlineMail } from "react-icons/md";
import plusIconImage from "../../../assets/SubscribeSectionImages/subscribePlusImage.png";

import sendImage from "../../../assets/SubscribeSectionImages/SendImage.png";
const SubscribeSec = () => {
  return (
    <div className={classes.SubscribeSec}>
      <div className={classes.container}>
        <img src={sendImage} alt="" className={classes.sendImage} />
        <img src={ringImage2} alt="ringImage" className={classes.ringImage2} />
        <p className={classes.title}>
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </p>
        <div className={classes.emailContainer}>
          <div className={classes.inputIconWrapper}>
            <span className={classes.icon}>
              <MdOutlineMail className={classes.icon} />
            </span>
            <input
              type="email"
              placeholder="Your email"
              className={classes.emailInput}
            />
          </div>
          <button className={classes.subscribeButton}>Subscribe</button>
        </div>
        <img src={ringImage} alt="ringImage" className={classes.ringImage} />
        <img
          src={plusIconImage}
          alt="plusIconImage"
          className={classes.plusIcon}
        />
      </div>
    </div>
  );
};

export default SubscribeSec;

{
  /* <span className={classes.column1}>
            <FaEnvelope className={classes.inputIcon} />
          </span>
          <span className={classes.column2}>
            <input
              type="email"
              placeholder="Your Email"
              className={classes.inputFeild}
            />
          </span> */
}
{
  /* <input
            type="email"
            placeholder="Your Email"
            className={classes.inputFeild}
          /> */
}
