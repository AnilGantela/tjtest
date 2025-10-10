import React from "react";
import { useRef, useEffect } from "react";
import HomeBanner from "../../components/HomeBanner";
import { HomeContainer } from "./styledComponents";
import Owners from "../../components/Owners";
import WhyChooseUS from "../../components/WhyChooseUS";
import Highlights from "../../components/Highlights";
import Services from "../../components/Services";
import Courses from "../../components/Courses";
import Workshop from "../../components/Workshop";

import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();

  // Smooth scroll after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <HomeContainer>
      <HomeBanner />
      <section id="courses">
        <Courses />
      </section>
      <section id="workshop">
        <Workshop />
      </section>
      <Highlights />
      <WhyChooseUS />
      <Services />

      <Owners />
    </HomeContainer>
  );
}

export default Home;
