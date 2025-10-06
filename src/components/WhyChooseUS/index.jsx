import React, { useRef, useEffect, useState } from "react";
import {
  WhyChooseUsContainer,
  TextContainer,
  SecondaryTitle,
  PrimaryTitle,
  CardContainer,
  Card,
  CardTitle,
  CardDescription,
} from "./styledComponents";

const WhyChooseUs = () => {
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

  const cardData = [
    {
      title: "Creative Excellence",
      color: "#7801e7",
      desc: "We turn our robotics experience into fun, hands-on learning for every student.",
    },
    {
      title: "Experienced Professionals",
      color: "#a20cdf",
      desc: "Founded by competition-winning innovators with real-world Robotics & IoT expertise.",
    },
    {
      title: "Tailored Solutions",
      color: "#f10f7f",
      desc: "Courses and kits designed to suit school kids and college students alike.",
    },
    {
      title: "Innovative Approach",
      color: "#fe6306",
      desc: "We combine practical projects, competitions, and mentorship to spark true innovation.",
    },
  ];

  return (
    <WhyChooseUsContainer
      ref={containerRef}
      containerVisible={containerVisible}
    >
      <TextContainer>
        <SecondaryTitle>Why Choose</SecondaryTitle>
        <PrimaryTitle>Talents Junction?</PrimaryTitle>
      </TextContainer>

      <CardContainer>
        {cardData.map((card, index) => (
          <Card
            key={index}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
            isVisible={visibleCards.includes(String(index))}
            backgroundColor="rgba(20, 20, 40, 0.75)"
          >
            <CardTitle textColor={card.color}>{card.title}</CardTitle>
            <CardDescription>{card.desc}</CardDescription>
          </Card>
        ))}
      </CardContainer>
    </WhyChooseUsContainer>
  );
};

export default WhyChooseUs;
