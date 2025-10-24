import React, { useRef } from "react";
import Lottie from "lottie-react";
import twitterAnim from "../../assets/icons/twitter.json";
import linkedinAnim from "../../assets/icons/linkedin.json";
import whatsAppAnim from "../../assets/icons/whatsApp.json";
import instagramAnim from "../../assets/icons/instagram.json";
import facebookAnim from "../../assets/icons/facebook.json";
import emailAnim from "../../assets/icons/email.json";
import whatsAppPng from "../../assets/icons/whatsapp.png";
import mailPng from "../../assets/icons/mail.png";
import {
  FooterContainer,
  SocialIcons,
  IconWrapper,
  FooterText,
  QuickLinks,
  QuickLinkItem,
  FooterLogoImg,
  ReachUs,
  ReachUsItem,
  FirstContainer,
  SecondContainer,
  FooterInnerContainer,
  ThirdContainer,
  PolicyLinks,
  QuickLinksContainer,
  PolicyLinksContainer,
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
      {" "}
      <FooterInnerContainer>
        <FirstContainer>
          <FooterLogoImg
            onClick={() => navigate("/")}
            src="/nav-logo1.svg"
            alt="Logo"
          />
          <ReachUs>
            <ReachUsItem>
              <img src={whatsAppPng} alt="whats-app" />
              <a
                href="https://chat.whatsapp.com/CgyOsfwFMhNEjL80bofQxT"
                target="_blank"
                rel="noreferrer"
              >
                Chat on WhatsApp
              </a>
            </ReachUsItem>
            <ReachUsItem>
              <img src={mailPng} alt="mail-icon" />
              <a href="mailto:support@talentsjunction.com">
                support@talentsjunction.com
              </a>
            </ReachUsItem>
          </ReachUs>
        </FirstContainer>
        <SecondContainer>
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
          <QuickLinksContainer>
            <h3>Quick Links</h3>
            <QuickLinks>
              <QuickLinkItem href="/">Home</QuickLinkItem>
              <QuickLinkItem href="/about-us">About Us</QuickLinkItem>
              <QuickLinkItem href="/programs-courses">
                Programs / Courses
              </QuickLinkItem>
              <QuickLinkItem href="/workshops-events">
                Workshops / Events
              </QuickLinkItem>
              <QuickLinkItem href="enroll-now">
                Admissions / Enroll Now
              </QuickLinkItem>
              <QuickLinkItem href="/blog">Blog / Articles</QuickLinkItem>
              <QuickLinkItem href="/testimonials">
                Testimonials / Success Stories
              </QuickLinkItem>
              <QuickLinkItem href="/careers">
                Careers / Join Our Team
              </QuickLinkItem>
              <QuickLinkItem href="/faqs">FAQs</QuickLinkItem>
              <QuickLinkItem href="/contact-us">Contact Us</QuickLinkItem>
            </QuickLinks>
          </QuickLinksContainer>
        </SecondContainer>
        <ThirdContainer>
          <PolicyLinksContainer>
            <h3>Policies & Resources</h3>
            <PolicyLinks>
              <QuickLinkItem href="/">Privacy Policy</QuickLinkItem>
              <QuickLinkItem href="/about-us">Terms & Conditions</QuickLinkItem>
              <QuickLinkItem href="/programs-courses">
                Refund Policy
              </QuickLinkItem>
              <QuickLinkItem href="/workshops-events">
                Help Center
              </QuickLinkItem>
              <QuickLinkItem href="enroll-now">Student Login</QuickLinkItem>
              <QuickLinkItem href="/blog">Brochures</QuickLinkItem>
              <QuickLinkItem href="/testimonials">Gallery </QuickLinkItem>
            </PolicyLinks>
          </PolicyLinksContainer>
        </ThirdContainer>
      </FooterInnerContainer>
      <FooterText>
        © {new Date().getFullYear()} talentsjunction.com. developed by
        ALETNAG❤️.
      </FooterText>
    </FooterContainer>
  );
}
