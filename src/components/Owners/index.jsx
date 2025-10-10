import React, { useRef, useState, useEffect } from "react";
import {
  OwnersSection,
  TextSection,
  ShortHeadLine,
  HeadLine,
  Description1,
  Description2,
  PhotosSection,
  CarouselTrack,
  CarouselItem,
  NormalTrack,
  NormalItem,
} from "./styledComponents";
const images = ["/founder1.jpg", "/founder2.jpg"];

const Owners = () => {
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

  const duplicatedImages = [
    ...images,
    ...images,
    ...images,
    ...images,
    ...images,
  ]; // Duplicate for seamless loop

  return (
    <OwnersSection ref={sectionRef} isVisible={isVisible}>
      <TextSection>
        <ShortHeadLine>Our Team</ShortHeadLine>
        <HeadLine>Meet the Minds Behind the Creativity</HeadLine>
        <Description1>
          Our team's synergy is the key to bringing your ideas to life.
        </Description1>
      </TextSection>
      <PhotosSection>
        {images.length >= 4 ? (
          <CarouselTrack>
            {duplicatedImages.map((src, idx) => (
              <CarouselItem key={idx}>
                <img src={src} alt={`Founder ${idx + 1}`} />
              </CarouselItem>
            ))}
          </CarouselTrack>
        ) : (
          <NormalTrack>
            {images.map((src, idx) => (
              <NormalItem key={idx}>
                <img src={src} alt={`Founder ${idx + 1}`} />
              </NormalItem>
            ))}
          </NormalTrack>
        )}
      </PhotosSection>
      <Description2>
        Our team's synergy is the key to bringing your ideas to life.
      </Description2>
    </OwnersSection>
  );
};

export default Owners;
