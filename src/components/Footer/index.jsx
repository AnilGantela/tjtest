import React from "react";

const Footer = () => (
  <footer
    style={{
      background: "#222",
      color: "#fff",
      padding: "1rem 0",
      textAlign: "center",
      bottom: 0,
      width: "100%",
      position: "fixed",
      marginTop: "2vh",
    }}
  >
    <div>
      &copy; {new Date().getFullYear()} Talents Junction. All rights reserved.
    </div>
  </footer>
);

export default Footer;
