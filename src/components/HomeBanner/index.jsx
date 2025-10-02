// HomeDashboard.jsx
import React from "react";
import {
  HeroSection,
  Overlay,
  Tagline,
  HomeDashboardContainer,
  CornerImage,
} from "./styledComponents";

const HomeDashboard = () => {
  return (
    <HomeDashboardContainer>
      <HeroSection>
        {/* Top-left image */}
        <CornerImage
          src="/home-banner2.svg"
          alt="IoT & Robotics Top"
          position="top-left"
        />

        {/* Bottom-right image */}
        <CornerImage
          src="/home-banner1.svg"
          alt="IoT & Robotics Bottom"
          position="bottom-right"
        />

        <Overlay />
        <Tagline>
          “Building the Next Generation of Innovators through IoT & Robotics”
        </Tagline>
      </HeroSection>
    </HomeDashboardContainer>
  );
};

export default HomeDashboard;
