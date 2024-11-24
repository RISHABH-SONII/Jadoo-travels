import React from "react";
import classes from "./SellingCard.module.css";
import { FaLocationArrow } from "react-icons/fa6";
interface IProps {
  image: string;
  placeName: string;
  amount: string;
  tripDays: string;
}
const SellingCard: React.FC<IProps> = ({
  image,
  placeName,
  amount,
  tripDays,
}) => {
  return (
    <div className={classes.Sellingcard}>
      <img src={image} alt={placeName} className={classes.destinationImage} />
      <div className={classes.cardData}>
        <div className={classes.locationPrice}>
          <h3 className={classes.location}>{placeName}</h3>
          <p className={classes.price}>{amount}</p>
        </div>
        <p className={classes.duration}>
          <span>
            <FaLocationArrow className={classes.icon} />{" "}
          </span>
          {tripDays}
        </p>
      </div>
    </div>
  );
};
export default SellingCard;
