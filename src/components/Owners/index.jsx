import React, { useRef, useState, useEffect } from "react";
import { OwnersSection, FoundersImage } from "./styledComponents";

const Owners = () => {
  const sectionRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // trigger animation
          observer.unobserve(entry.target); // optional: only animate once
        }
      },
      {
        threshold: 0.3, // 30% visible triggers the animation
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <OwnersSection ref={sectionRef} isVisible={isVisible}>
      <FoundersImage src="/founders_image.jpg" alt="Founder" />
    </OwnersSection>
  );
};

export default Owners;
