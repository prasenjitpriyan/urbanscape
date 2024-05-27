import React from "react";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import FeaturedProperties from "@/components/FeaturedProperties";

const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </React.Fragment>
  );
};

export default HomePage;
