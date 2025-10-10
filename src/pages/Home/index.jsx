import React from "react";
import { useRef, useEffect } from "react";
import HomeBanner from "../../components/HomeBanner";
import { HomeContainer } from "./styledComponents";
import Owners from "../../components/Owners";
import WhyChooseUS from "../../components/WhyChooseUS";
import Highlights from "../../components/Highlights";
import Services from "../../components/Services";
import Courses from "../../components/Courses";

const Home = ({ scrollToCourses }) => {
  const coursesRef = useRef(null);

  // Scroll if requested
  useEffect(() => {
    if (scrollToCourses && coursesRef.current) {
      coursesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollToCourses]);

  return (
    <HomeContainer>
      <HomeBanner />
      <div ref={coursesRef}>
        <Courses />
      </div>
      <Highlights />
      <WhyChooseUS />
      <Services />

      <Owners />
    </HomeContainer>
  );
};

export default Home;
