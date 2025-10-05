import React from "react";
import HomeBanner from "../../components/HomeBanner";
import { HomeContainer } from "./styledComponents";
import Owners from "../../components/Owners";

const Home = () => {
  return (
    <HomeContainer>
      <HomeBanner />

      <div>
        <h1>Welcome to Talents Junction</h1>
        <p>Your gateway to discovering and showcasing talent.</p>
      </div>
      <Owners />
    </HomeContainer>
  );
};

export default Home;
