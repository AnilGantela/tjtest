import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet"; // <-- import Helmet

import HomeBanner from "../../components/HomeBanner";
import { HomeContainer } from "./styledComponents";
import Owners from "../../components/Owners";
import WhyChooseUS from "../../components/WhyChooseUS";
import Highlights from "../../components/Highlights";
import Services from "../../components/Services";
import Courses from "../../components/Courses";
import Workshop from "../../components/Workshop";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <>
      <Helmet>
        <title>Home | TalentsJunction</title>
        <meta
          name="description"
          content="Talents Junction - Empowering learners with top robotics, IoT, and tech courses and workshops. Join us to build your future today!"
        />
      </Helmet>

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
    </>
  );
}

export default Home;
