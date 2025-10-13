// src/pages/HiringForm/index.jsx
import React, { useState } from "react";
import {
  PageWrapper,
  Header,
  Title,
  SubTitle,
  FormContainer,
  Label,
  Input,
  Select,
  TextArea,
  Button,
  FileUploadWrapper,
  FileUploadButton,
  FileInfo,
  RobotComponent,
  SensorIcon,
  CircuitLine,
} from "./styledComponents";

const HiringForm = () => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  return (
    <PageWrapper>
      <Header>
        <Title>
          <img src="/nav-logo1.svg" alt="Talents Junction Logo" />
          Talents Junction
        </Title>
        <SubTitle>Connecting talents with tomorrow.</SubTitle>
      </Header>

      <FormContainer
        action="https://formsubmit.co/myselfarjun449@gmail.com"
        method="POST"
        encType="multipart/form-data"
      >
        {/* Hidden Fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://tjtest.vercel.app/thankyou"
        />

        <h2>Join Our Team</h2>

        <Label htmlFor="name">Full Name</Label>
        <Input
          type="text"
          id="name"
          name="Name"
          placeholder="Enter your name"
          required
        />

        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="Email"
          placeholder="Enter your email"
          required
        />

        <Label htmlFor="role">Select Role</Label>
        <Select id="role" name="Role Applied" required>
          <option value="">-- Choose a role --</option>
          <option>AI Prompt & Tool Specialist</option>
          <option>IoT Engineer</option>
          <option>Web Developer</option>
        </Select>

        <Label htmlFor="resume">
          Upload Resume (PDF) <span style={{ color: "red" }}>{"<"}50kb</span>
        </Label>
        <FileUploadWrapper>
          <FileUploadButton>Click to upload your resume</FileUploadButton>
          <input
            type="file"
            id="resume"
            name="attachment"
            accept=".pdf"
            onChange={handleFileChange}
            required
          />
          <FileInfo>{fileName}</FileInfo>
        </FileUploadWrapper>

        <Label htmlFor="message">Why Should We Hire You</Label>
        <TextArea
          id="message"
          name="Message"
          rows="4"
          placeholder="Tell us why you're the right fit..."
        />

        <Button type="submit">Submit Application</Button>
      </FormContainer>

      {/* Background Animated Elements */}
      <RobotComponent style={{ top: "20%", left: "5%", animationDelay: "1s" }}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect
            x="10"
            y="15"
            width="20"
            height="15"
            rx="2"
            fill="rgba(255,195,0,0.6)"
          />
          <circle cx="15" cy="22" r="2" fill="white" />
          <circle cx="25" cy="22" r="2" fill="white" />
          <rect x="18" y="10" width="4" height="8" fill="rgba(255,195,0,0.6)" />
          <circle cx="20" cy="8" r="3" fill="rgba(255,195,0,0.7)" />
        </svg>
      </RobotComponent>

      <RobotComponent style={{ top: "50%", right: "8%", animationDelay: "3s" }}>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
          <rect
            x="8"
            y="12"
            width="18"
            height="12"
            rx="3"
            fill="rgba(255,195,0,0.5)"
          />
          <circle cx="13" cy="18" r="1.5" fill="white" />
          <circle cx="21" cy="18" r="1.5" fill="white" />
        </svg>
      </RobotComponent>

      <SensorIcon style={{ top: "35%", left: "85%", animationDelay: "2s" }}>
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
          <rect
            x="8"
            y="8"
            width="9"
            height="9"
            rx="1"
            fill="rgba(255,195,0,0.5)"
          />
          <circle cx="12.5" cy="12.5" r="2" fill="white" />
        </svg>
      </SensorIcon>

      <CircuitLine
        style={{ top: "30%", width: "150px", animationDelay: "1s" }}
      />
      <CircuitLine
        style={{ top: "65%", width: "200px", animationDelay: "8s" }}
      />
      <CircuitLine
        style={{ bottom: "40%", width: "120px", animationDelay: "12s" }}
      />
    </PageWrapper>
  );
};

export default HiringForm;
