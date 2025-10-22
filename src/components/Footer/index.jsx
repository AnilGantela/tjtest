import React, { useRef } from "react";
import Lottie from "lottie-react";
import twitterAnim from "../../assets/icons/twitter.json";
import linkedinAnim from "../../assets/icons/linkedin.json";
import whatsAppAnim from "../../assets/icons/whatsApp.json";
import instagramAnim from "../../assets/icons/instagram.json";
import facebookAnim from "../../assets/icons/facebook.json";
import {
  FooterContainer,
  SocialIcons,
  IconWrapper,
  ContactButton,
  FooterText,
  QuickLinks,
  QuickLinkItem,
} from "./styledComponents";

// ---- reusable animated icon ----
function AnimatedIcon({ animationData, link, hoverBackground }) {
  const lottieRef = useRef();

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <IconWrapper
        onMouseEnter={() => lottieRef.current.play()}
        onMouseLeave={() => lottieRef.current.stop()}
        hoverBackground={hoverBackground}
      >
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
        />
      </IconWrapper>
    </a>
  );
}

// ---- footer component ----
export default function Footer() {
  return (
    <FooterContainer>
      <h3>Stay Connected</h3>

      <SocialIcons>
        <AnimatedIcon
          animationData={twitterAnim}
          link="https://x.com/JunctionTalents"
        />
        <AnimatedIcon
          animationData={linkedinAnim}
          link="https://www.linkedin.com/company/109068773/admin/dashboard/"
        />
        <AnimatedIcon
          animationData={facebookAnim}
          link="https://www.facebook.com/profile.php?id=61582184882442"
        />
        <AnimatedIcon
          animationData={instagramAnim}
          link="https://www.instagram.com/talents_junction_2023/"
        />
        <AnimatedIcon
          animationData={whatsAppAnim}
          link="https://whatsapp.com/channel/0029VbAvMiV17EmzTERjUr17"
        />
      </SocialIcons>

      <QuickLinks>
        <QuickLinkItem href="/about">About Us</QuickLinkItem>
        <QuickLinkItem href="/services">Services</QuickLinkItem>
        <QuickLinkItem href="/contact">Contact</QuickLinkItem>
        <QuickLinkItem href="/privacy">Privacy Policy</QuickLinkItem>
      </QuickLinks>

      <ContactButton href="mailto:youremail@example.com">
        Contact Us
      </ContactButton>

      <FooterText>© {new Date().getFullYear()} Your Company</FooterText>
    </FooterContainer>
  );
}
