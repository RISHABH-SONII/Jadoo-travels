import React from "react";
import classes from "./SellingSection.module.css";
import { SellingCardData } from "./SellingCard/SellingCardData";
import SellingCard from "./SellingCard/SellingCard";
import SellingDecore from "../../../assets/SellingSectionImages/Decore.png";
const SellingSection = () => {
  return (
    <div className={classes.sellingSection}>
      <h3 className={classes.subtitle}>Top Selling</h3>
      <h1 className={classes.title}>Top Destinations</h1>
      <div className={classes.Cardcontainer}>
        {SellingCardData.map((data, index) => (
          <SellingCard
            key={index}
            image={data.image}
            placeName={data.placeName}
            amount={data.amount}
            tripDays={data.tripDays}
          />
        ))}
      </div>
      <img src={SellingDecore} alt="SellingDecore" className={classes.decore} />
    </div>
  );
};

export default SellingSection;
