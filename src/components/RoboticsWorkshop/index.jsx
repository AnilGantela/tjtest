import React from "react";
import {
  PageWrapper,
  LogoSection,
  LogoImage,
  LogoText,
  Tagline,
  HeadingSmall,
  HeadingLarge,
  TopicsContainer,
  TopicCard,
  NumberCircle,
  TopicText,
  FooterText,
} from "./styledComponents";

const RoboticsWorkshop = () => {
  return (
    <PageWrapper>
      {/* Logo Section */}
      <LogoSection>
        <LogoImage src="/nav-logo1.svg" alt="Talents Junction Logo" />
        <LogoText>TALENTS JUNCTION</LogoText>
      </LogoSection>

      {/* Tagline */}
      <Tagline>“CONNECTING TALENT WITH TOMORROW.”</Tagline>

      {/* Headings */}
      <HeadingSmall>we invite you to</HeadingSmall>
      <HeadingLarge>ROBOTICS WORKSHOP</HeadingLarge>

      {/* Topics */}
      <TopicsContainer>
        <TopicCard bgColor="#f5e9da">
          <NumberCircle>1</NumberCircle>
          <TopicText>BLUETOOTH DRIVING CAR</TopicText>
        </TopicCard>

        <TopicCard bgColor="#b7c4c4">
          <NumberCircle>2</NumberCircle>
          <TopicText>SELF DRIVING CAR</TopicText>
        </TopicCard>
      </TopicsContainer>

      {/* Footer */}
      <FooterText>
        These projects we will work on in the Robotics Workshop
      </FooterText>
    </PageWrapper>
  );
};

export default RoboticsWorkshop;
