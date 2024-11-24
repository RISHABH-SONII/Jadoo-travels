import React from "react";
import classes from "./OfferServices.module.css";
import starImage from "../../../assets/ServicesSectionImages/OfferServiceImage6.png";
import { CardData } from "./Card/CardData";
import CardLayout from "./Card/CardLayout";
const OfferServices = () => {
  return (
    <div className={classes.offerServices}>
      <div className={classes.container1}>
        <h3>CATEGORY</h3>
        <h1>We Offer Best Services</h1>
        <img src={starImage} alt="starImage" />
      </div>
      <div className={classes.container2}>
        {CardData.map((data, index) => (
          <CardLayout
            key={index}
            image={data.image}
            cardHeader={data.cardHeader}
            cardDescription={data.cardDescription}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferServices;
