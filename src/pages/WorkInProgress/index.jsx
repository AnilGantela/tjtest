import React from "react";
import { WipContainer, WipTitle, WipText, WipImage } from "./styledComponents";
const WorkInProgress = () => {
  return (
    <WipContainer>
      <WipTitle>Work in Progress 🚧</WipTitle>
      <WipText>
        We are currently working on this feature. Stay tuned for updates!
        Meanwhile, explore other sections of our website.
      </WipText>
      <WipImage src="/wip.svg" alt="Work in Progress" />
    </WipContainer>
  );
};

export default WorkInProgress;
