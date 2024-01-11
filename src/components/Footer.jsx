import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <h2>Contact Us</h2>
        <p>New York Street, st.193</p>
        <p>Call +01 1234567890</p>
        <p>mealtoken@gmail.com</p>
      </div>
      <div className="footer-item">
        <h2>Meal Token</h2>
        <p>
          Welcome to the Meal Token restaurant. <br /> We prepare only the best
          and tastiest for you. <br /> Order what you like and it will <br />{" "}
          arrive as soon as possible. We thank you.
        </p>
      </div>
      <div className="footer-item">
        <h2>Opening Hours</h2>
        <p>Everyday</p>
        <p>10.00 Am -10.00 Pm</p>
      </div>
    </footer>
  );
};

export default Footer;
