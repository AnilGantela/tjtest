import React, { useRef, useState, useEffect } from "react";
import {
  WhyChooseUsContainer,
  SecondaryTitle,
  PrimaryTitle,
  TextContainer,
  CardContainer,
  Card,
  CardTitle,
  CardDescription,
} from "./styledComponents";

const WhyChooseUS = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll-triggered visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // animate only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <WhyChooseUsContainer ref={sectionRef} isVisible={isVisible}>
      <TextContainer>
        <SecondaryTitle>Why Choose </SecondaryTitle>
        <PrimaryTitle>Talents Junction?</PrimaryTitle>
      </TextContainer>
      <CardContainer>
        <Card
          backgroundColor="rgba(10, 10, 30, 0.75)"
          ref={sectionRef}
          isVisible={isVisible}
        >
          <CardTitle textColor="#7801e7">Creative Excellence</CardTitle>
          <CardDescription>
            “We turn our robotics experience into fun, hands-on learning for
            every student. ”
          </CardDescription>
        </Card>
        <Card
          backgroundColor="rgba(10, 10, 30, 0.75)"
          ref={sectionRef}
          isVisible={isVisible}
        >
          <CardTitle textColor="#a20cdf">Experienced Professionals</CardTitle>
          <CardDescription>
            “Founded by competitionwinning innovators with realworld Robotics &
            IoT expertise. ”
          </CardDescription>
        </Card>
        <Card
          backgroundColor="rgba(10, 10, 30, 0.75)"
          ref={sectionRef}
          isVisible={isVisible}
        >
          <CardTitle textColor="#f10f7f">Tailored Solutions</CardTitle>
          <CardDescription>
            “Courses and kits designed to suit school kids and college students
            alike. ”
          </CardDescription>
        </Card>
        <Card
          backgroundColor="rgba(10, 10, 30, 0.75)"
          ref={sectionRef}
          isVisible={isVisible}
        >
          <CardTitle textColor="#fe6306">Innovative Approach</CardTitle>
          <CardDescription>
            “We combine practical projects, competitions, and mentorship to
            spark true innovation. ”
          </CardDescription>
        </Card>
      </CardContainer>
    </WhyChooseUsContainer>
  );
};

export default WhyChooseUS;
