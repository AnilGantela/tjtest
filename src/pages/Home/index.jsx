import React from "react";
import HomeBanner from "../../components/HomeBanner";
import { HomeContainer } from "./styledComponents";
import Owners from "../../components/Owners";
import WhyChooseUS from "../../components/WhyChooseUS";
import RoboticsWorkshop from "../../components/RoboticsWorkshop";
import Services from "../../components/Services";
import Courses from "../../components/Courses";

const Home = () => {
  return (
    <HomeContainer>
      <HomeBanner />
      <Courses />

      <WhyChooseUS />
      <Services />

      <Owners />
    </HomeContainer>
  );
};

export default Home;
