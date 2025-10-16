import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
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
} from "./styledComponents";

const courses = [
  {
    id: 1,
    image: "/robotics-course.svg",
    title: "Robotics",
    description: [
      "Duration: 3 months",
      "Schedule: 3 classes per week",
      "Tutor: On-site visits twice a month",
      "Course Kit: Includes materials worth ₹1,500",
    ],
    link: "/courses/robotics",
  },
  {
    id: 2,
    image: "/iot-course.svg",
    title: "Internet Of Things (IoT)",
    description: [
      "Duration: 3 months",
      "Schedule: 3 classes per week",
      "Tutor: On-site visits twice a month",
      "Course Kit: Includes materials worth ₹1,500",
    ],
    link: "/courses/iot",
  },
];

const Courses = () => {
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
    <>
      <CoursesContainer ref={containerRef} containervisible={containerVisible}>
        <TextContainer1>
          <SecondaryTitle>We Offer</SecondaryTitle>
          <PrimaryTitle>Courses</PrimaryTitle>
        </TextContainer1>
        <CardsContainer>
          {" "}
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              data-index={index}
              ref={(el) => (cardRefs.current[index] = el)}
              isvisible={visibleCards.includes(String(index))}
              onClick={() => navigate(course.link)}
            >
              <ImageContainer>
                <img src={course.image} alt={course.title} />
              </ImageContainer>
              <TextContainer>
                <CourseTitle>{course.title}</CourseTitle>
                <CourseDescription>
                  {course.description.map((each, idx) => {
                    return <li key={idx}>{each}</li>;
                  })}
                </CourseDescription>
                <CardPara>Click for full details</CardPara>
              </TextContainer>
            </CourseCard>
          ))}
        </CardsContainer>
      </CoursesContainer>
    </>
  );
};

export default Courses;
