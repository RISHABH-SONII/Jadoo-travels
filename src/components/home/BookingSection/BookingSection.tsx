import React from "react";
import classes from "./BookingSection.module.css";
import icon1 from "../../../assets/BookingSectionImages/Icon1.png";
import icon2 from "../../../assets/BookingSectionImages/Icon2.png";
import icon3 from "../../../assets/BookingSectionImages/Icon3.png";
import bookingCardImage from "../../../assets/BookingSectionImages/BookingCardImage.jpg";
import leafImage from "../../../assets/BookingSectionImages/LEAF.png";
import mapImage from "../../../assets/BookingSectionImages/map icon.png";
import sendImage from "../../../assets/BookingSectionImages/send.png";
import buidingImage from "../../../assets/BookingSectionImages/building 1.png";
import heartImage from "../../../assets/BookingSectionImages/heart (6) 1.png";
import subCardImage from "../../../assets/BookingSectionImages/subCardImage.png";
import shadowImage from "../../../assets/BookingSectionImages/blueShadow.png";
const BookingSection = () => {
  return (
    <div className={classes.bookingSection}>
      <div className={classes.column1}>
        <h3 className={classes.subtitle}>Easy and Fast</h3>
        <h1 className={classes.title}>
          Book Your Next Trip
          <br /> In 3 Easy Steps
        </h1>

        <div className={classes.pointSectionContainer}>
          <div className={classes.pointSection}>
            <div className={classes.Icon1Container}>
              <img src={icon1} alt="Destination" />
            </div>
            <div className={classes.pointContent}>
              <h3 className={classes.pointTitle}>Choose Destination</h3>
              <p className={classes.pointDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className={classes.pointSection}>
            <div className={classes.Icon2Container}>
              <img src={icon2} alt="Payment" />
            </div>
            <div className={classes.pointContent}>
              <h3 className={classes.pointTitle}>Make Payment</h3>
              <p className={classes.pointDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>

          <div className={classes.pointSection}>
            <div className={classes.Icon3Container}>
              <img src={icon3} alt="Flight" />
            </div>
            <div className={classes.pointContent}>
              <h3 className={classes.pointTitle}>
                Reach Airport on Selected Date
              </h3>
              <p className={classes.pointDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.column2}>
        <div className={classes.shadow}>
          <img
            src={shadowImage}
            alt="shadowImage"
            className={classes.shadowImage}
          />
        </div>
        <div className={classes.bookingCard}>
          <img
            src={bookingCardImage}
            alt="bookingCardImage"
            className={classes.cardImage}
          />
          <div className={classes.cardDescription}>
            <h3 className={classes.cardTitle}>Trip To Greece</h3>
            <p className={classes.cardDateName}>
              14-29 June | by Robbin joseph
            </p>
            <span>
              <img src={leafImage} alt="LeafImage" />{" "}
              <img src={mapImage} alt="MapImage" />{" "}
              <img src={sendImage} alt="SendImage" />
            </span>
            <div className={classes.likeSection}>
              <span className={classes.peopleIcon}>
                <img src={buidingImage} alt="buidingImage" />{" "}
                <p className={classes.peopleCount}>24 people going</p>
              </span>
              <span className={classes.likeIcon}>
                <img src={heartImage} alt="heartImage" />
              </span>
            </div>
          </div>
        </div>
        <div className={classes.NotifyTab}>
          <img src={subCardImage} alt="subCardImage" />
          <div className={classes.contentSection}>
            <p className={classes.status}>Ongoing</p>
            <h6 className={classes.reachingPlace}>Trip to rome</h6>
            <p className={classes.progressBar}>
              <span className={classes.percentage}>40%</span>
              {""} <b>completed</b>
              <div className={classes.bar}>
                <div className={classes.barIndicator}>{""}progressBar</div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
