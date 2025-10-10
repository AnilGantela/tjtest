import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CoursesContainer,
  CourseCard,
  CourseTitle,
  CourseDescription,
  TextContainer,
  ImageContainer,
  CardPara,
  TextContainer1,
  PrimaryTitle,
  SecondaryTitle,
  CardsContainer,
  ProjectsItem,
} from "./styledComponents";

const workshops = [
  {
    id: 1,
    image: "/robotics-course.svg",
    title: "ROBOTICS WORKSHOP",
    projects: [
      {
        title: "BLUETOOTH DRIVING CAR",
        link: "/workshops/bluetooth-driving-car",
      },
      { title: "SELF DRIVING CAR", link: "/workshops/self-driving-car" },
    ],
    borderyes: true,
  },
  {
    id: 2,
    image: "/iot-course.svg",
    title: "Internet Of Things (IoT)",
    projects: [
      { title: "HOME AUTOMATION", link: "/workshops/home-automation" },
      { title: "OBSTACLE DETECTION", link: "/workshops/obstacle-detection" },
      { title: "SMOKE DETECTION", link: "/workshops/smoke-detection" },
      {
        title: "BLUETOOTH CONTROL FOR HOME",
        link: "/workshops/bluetooth-control",
      },
    ],
  },
];

const Workshop = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [containerVisible, setContainerVisible] = useState(false);

  useEffect(() => {
    // For desktop - animate whole container
    const containerObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setContainerVisible(true);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      containerObserver.observe(containerRef.current);
    }

    // For mobile - animate individual cards
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    cardRefs.current.forEach((ref) => ref && cardObserver.observe(ref));

    return () => {
      if (containerRef.current)
        containerObserver.unobserve(containerRef.current);
      cardRefs.current.forEach((ref) => ref && cardObserver.unobserve(ref));
    };
  }, []);

  return (
    <CoursesContainer ref={containerRef} containervisible={containerVisible}>
      <TextContainer1>
        <SecondaryTitle>Our present </SecondaryTitle>
        <PrimaryTitle>Workshops</PrimaryTitle>
      </TextContainer1>
      <CardsContainer>
        {" "}
        {workshops.map((workshop, index) => (
          <CourseCard
            key={index}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
            isvisible={visibleCards.includes(String(index))}
            borderyes={workshop.borderyes}
          >
            <ImageContainer>
              <img src={workshop.image} alt={workshop.title} />
            </ImageContainer>
            <TextContainer>
              <CourseTitle>{workshop.title}</CourseTitle>
              <CourseDescription>
                {workshop.projects.map((each, idx) => {
                  return (
                    <ProjectsItem onClick={() => navigate(each.link)} key={idx}>
                      {each.title}
                    </ProjectsItem>
                  );
                })}
              </CourseDescription>
            </TextContainer>
          </CourseCard>
        ))}
      </CardsContainer>
    </CoursesContainer>
  );
};

export default Workshop;
