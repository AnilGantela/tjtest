import React from "react";

const Footer = () => (
  <footer
    style={{
      background: "#222",
      color: "#fff",
      padding: "1rem 0",
      textAlign: "center",
      marginTop: "auto",
    }}
  >
    <div>
      &copy; {new Date().getFullYear()} Talents Junction. All rights reserved.
    </div>
  </footer>
);

export default Footer;
