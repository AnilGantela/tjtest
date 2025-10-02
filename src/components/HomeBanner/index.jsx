import React from "react";
import { HomeBannerContainer } from "./styledComponents";

const HomeBanner = () => {
  return (
    <HomeBannerContainer>
      <div className="home-banner__content">
        <h1>Welcome to Talents Junction</h1>
        <p>Your gateway to discovering and connecting with top talent.</p>
        <button className="home-banner__cta">Get Started</button>
      </div>
    </HomeBannerContainer>
  );
};

export default HomeBanner;
