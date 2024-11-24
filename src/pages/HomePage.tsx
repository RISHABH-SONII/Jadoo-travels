import React from "react";
import classes from "./HomePage.module.css";
import Herosection from "../components/home/HeroSection/Herosection";
import OfferServices from "../components/home/OfferServiceSection/OfferServices";
import SellingSection from "../components/home/SellingSection/SellingSection";
import BookingSection from "../components/home/BookingSection/BookingSection";
import Testimonials from "../components/home/TestimonialsSection/Testimonials";
import Logos from "../components/home/LogoSection/Logos";
import SubscribeSec from "../components/home/SubscribeSection/SubscribeSec";
import Footer from "../components/common/Footer/Footer";

const HomePage = () => {
  return (
    <div className={classes.mainroot}>
      <Herosection />
      <OfferServices />
      <SellingSection />
      <BookingSection />
      <Testimonials />
      <Logos />
      <SubscribeSec />
      <Footer />
    </div>
  );
};

export default HomePage;
