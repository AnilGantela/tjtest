import React from "react";
import { Container, Title, Message } from "./styledComponents";

const ThankYou = () => {
  return (
    <Container>
      <div className="thank-you-container">
        <img src="/nav-logo1.svg" alt="Talents Junction Logo" />
        <Title>Thank You!</Title>
        <Message>
          Your application has been successfully submitted.
          <br />
          We will review your details and get back to you soon.
        </Message>
      </div>
    </Container>
  );
};

export default ThankYou;
