import React from "react";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";
import FeaturedProperties from "@/components/FeaturedProperties";
import { cookies } from "next/headers";

async function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}

const HomePage = async () => {
  const cookieData = await getCookieData();
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
