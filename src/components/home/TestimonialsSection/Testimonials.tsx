// import React, { useState } from "react";
// import classes from "./Testimonials.module.css";
// import TestimonialsCard from "./TestimonialsCards/TestimonialsCard";
// import { TestimonialsCardData } from "./TestimonialsCards/TestimonialsCardData";
// import { IoIosArrowUp } from "react-icons/io";

// import { IoIosArrowDown } from "react-icons/io";

// const Testimonials = () => {
//   return (
//     <div className={classes.testimonialS}>
//       <div className={classes.column1}>
//         <h3 className={classes.subtitle}>Testimonials</h3>
//         <h1 className={classes.title}>
//           What People Say
//           <br /> About Us.
//         </h1>
//         <div className={classes.dotList}>
//           <span className={classes.dot}></span>
//           <span className={classes.dot}></span>
//           <span className={classes.dot}></span>
//         </div>
//       </div>
//       <div className={classes.column2}>
//         {TestimonialsCardData.map((data, index) => (
//           <TestimonialsCard
//             key={index}
//             image={data.image}
//             carddescription={data.carddescription}
//             name={data.name}
//             place={data.place}
//           />
//         ))}
//       </div>
//       <div className={classes.column3}>
//         <button className={classes.button}>
//           <IoIosArrowUp className={classes.arrow} />
//         </button>
//         <button className={classes.button}>
//           <IoIosArrowDown className={classes.arrow} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React, { useState } from "react";
import classes from "./Testimonials.module.css";
import TestimonialsCard from "./TestimonialsCards/TestimonialsCard";
import { TestimonialsCardData } from "./TestimonialsCards/TestimonialsCardData";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Handle Next Button Click
  const handleNext = () => {
    if (activeIndex < TestimonialsCardData.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  // Handle Previous Button Click
  const handlePrevious = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <div className={classes.testimonialS}>
      <div className={classes.column1}>
        <h3 className={classes.subtitle}>Testimonials</h3>
        <h1 className={classes.title}>
          What People Say
          <br /> About Us.
        </h1>
        <div className={classes.dotList}>
          <span
            className={
              activeIndex === 0 ? classes.dotEnabled : classes.dotDisabled
            }
          ></span>
          <span
            className={
              activeIndex === 1 ? classes.dotEnabled : classes.dotDisabled
            }
          ></span>
          <span
            className={
              activeIndex === 2 ? classes.dotEnabled : classes.dotDisabled
            }
          ></span>
        </div>
      </div>
      <div className={classes.column2}>
        {TestimonialsCardData.map((data, index) => (
          <TestimonialsCard
            key={index}
            image={data.image}
            carddescription={data.carddescription}
            name={data.name}
            place={data.place}
            isActive={index === activeIndex} // Pass active state to the card
          />
        ))}
      </div>
      <div className={classes.column3}>
        <button
          className={classes.button}
          onClick={handlePrevious}
          disabled={activeIndex === 0} // Disable if first card is active
        >
          <IoIosArrowUp
            className={
              activeIndex === 0 ? classes.arrowDisabled : classes.arrowEnabled
            }
          />
        </button>
        <button
          className={classes.button}
          onClick={handleNext}
          disabled={activeIndex === TestimonialsCardData.length - 1} // Disable if last card is active
        >
          <IoIosArrowDown
            className={
              activeIndex === TestimonialsCardData.length - 1
                ? classes.arrowDisabled
                : classes.arrowEnabled
            }
          />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
