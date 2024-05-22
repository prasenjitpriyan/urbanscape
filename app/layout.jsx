import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "UrbanScape",
  description: "A ReactJS based web application for urban landscape analysis.",
  keywords: "Rental, Find Rentals, Find Property",
  author: "Prasenjit Das",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
