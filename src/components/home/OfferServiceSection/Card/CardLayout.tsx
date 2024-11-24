import React from "react";
import classes from "./CardLayout.module.css";
interface IProps {
  image: string;
  cardHeader: string;
  cardDescription: string;
}
const CardLayout: React.FC<IProps> = ({
  image,
  cardHeader,
  cardDescription,
}) => {
  return (
    <div className={classes.card}>
      <img src={image} alt="ServiceImage" />
      <h3>{cardHeader}</h3>
      <p>{cardDescription}</p>
    </div>
  );
};

export default CardLayout;
