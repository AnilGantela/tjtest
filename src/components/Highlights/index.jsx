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
  CardImage,
} from "./styledComponents";

const Highlights = () => {
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
      image: "/highlights1.jpg",
      color: "#7801e7",
      desc: "“Turning our robotics expertise into engaging and practical learning for students.” ",
    },
    {
      title: "Innovative Approach",
      image: "/highlights2.jpg",
      color: "#a20cdf",
      desc: "“Combining interactive projects, kits, and mentorship to spark true innovation.”",
    },
    {
      title: "Impactful Learning",
      image: "/highlights3.jpg",
      color: "#f10f7f",
      desc: "“Empowering students to compete, create, and earn recognition with confidence.”",
    },
  ];

  return (
    <WhyChooseUsContainer
      ref={containerRef}
      containervisible={containerVisible}
    >
      <TextContainer>
        <SecondaryTitle>Portfolio</SecondaryTitle>
        <PrimaryTitle>Highlights</PrimaryTitle>
      </TextContainer>

      <CardContainer>
        {cardData.map((card, index) => (
          <Card
            key={index}
            data-index={index}
            ref={(el) => (cardRefs.current[index] = el)}
            isvisible={visibleCards.includes(String(index))}
            backgroundcolor="rgba(20, 20, 40, 0.75)"
          >
            <CardImage src={card.image} alt={card.title} />
            <CardTitle textcolor={card.color}>{card.title}</CardTitle>
            <CardDescription>{card.desc}</CardDescription>
          </Card>
        ))}
      </CardContainer>
    </WhyChooseUsContainer>
  );
};

export default Highlights;
