import React from "react";
import HomeBanner from "../../components/HomeBanner";
import { HomeContainer } from "./styledComponents";
import Owners from "../../components/Owners";
import WhyChooseUS from "../../components/WhyChooseUS";
import RoboticsWorkshop from "../../components/RoboticsWorkshop";
import Services from "../../components/Services";

const Home = () => {
  return (
    <HomeContainer>
      <HomeBanner />
      <Services />

      <div>
        <h1>Welcome to Talents Junction</h1>
        <p>Your gateway to discovering and showcasing talent.</p>
      </div>

      <RoboticsWorkshop />
      <WhyChooseUS />
      <Owners />
    </HomeContainer>
  );
};

export default Home;
