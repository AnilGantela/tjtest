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

const Services = () => {
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
      backgroundColor: "linear-gradient(135deg, #f10f7f, #f9d423)",
      title: "Branding and Identity",
      color: "#fff",
      textColor: "#262626",
      desc: "Talents Junction stands Robotics for innovation, creativity, and growth in Robotics & IoT. Our identity reflects a fun yet professional space where young minds build the future.",
    },
    {
      title: "Robotics",
      color: "#a20cdf",
      desc: "Robotics is the science of designing and building machines that can think, move, and work like humans.",
    },
    {
      title: "Iot",
      color: "#f10f7f",
      desc: "IoT (Internet of Things) connects everyday devices to the internet, making them smart and able to communicate",
    },
  ];

  return (
    <WhyChooseUsContainer
      ref={containerRef}
      containerVisible={containerVisible}
    >
      <TextContainer>
        <SecondaryTitle>Our</SecondaryTitle>
        <PrimaryTitle>Services</PrimaryTitle>
      </TextContainer>

      <CardContainer>
        {cardData.map((card, index) => (
          <Card
            key={index}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
            isVisible={visibleCards.includes(String(index))}
            backgroundColor={card.backgroundColor ? card.backgroundColor : null}
          >
            <CardTitle textColor={card.color}>{card.title}</CardTitle>
            <CardDescription textColor={card.textColor && card.textColor}>
              {card.desc}
            </CardDescription>
          </Card>
        ))}
      </CardContainer>
    </WhyChooseUsContainer>
  );
};

export default Services;
