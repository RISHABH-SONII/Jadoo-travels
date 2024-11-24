// import React from "react";
// import classes from "./TestimonialsCard.module.css";

// interface IProps {
//   image: string;
//   carddescription: string;
//   name: string;
//   place: string;
// }
// const TestimonialsCard: React.FC<IProps> = ({
//   image,
//   carddescription,
//   name,
//   place,
// }) => {
//   return (
//     <>
//       <div className={classes.testimonialCardActive}>
//         <div className={classes.imageContainer}>
//           <img src={image} alt="testimoinalCardImage" />
//         </div>
//         <p className={classes.description}>{carddescription}</p>
//         <h5 className={classes.name}>{name}</h5>
//         <p className={classes.Place}>{place}</p>
//       </div>
//     </>
//   );
// };

// export default TestimonialsCard;

import React from "react";
import classes from "./TestimonialsCard.module.css";

interface IProps {
  image: string;
  carddescription: string;
  name: string;
  place: string;
  isActive: boolean; // Add isActive prop
}

const TestimonialsCard: React.FC<IProps> = ({
  image,
  carddescription,
  name,
  place,
  isActive, // Use the isActive prop
}) => {
  return (
    <>
      <div
        className={
          isActive
            ? classes.testimonialCardActive
            : classes.testimonialCardUnActive
        }
      >
        <div className={classes.imageContainer}>
          <img src={image} alt="testimoinalCardImage" />
        </div>
        <p className={classes.description}>{carddescription}</p>
        <h5 className={classes.name}>{name}</h5>
        <p className={classes.Place}>{place}</p>
      </div>
    </>
  );
};

export default TestimonialsCard;
