import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="Contact">
      <footer>
        <div className="cont">
          <h1 className="heading info">
            About <span style={{ color: "blue" }}>Us</span>
          </h1>
          <p>Easy bookings. Cozy stays. Your comfort is our priority.</p>
        </div>

        <div className="cont">
          <h1 className="heading info">
            Contact <span style={{ color: "blue" }}>Us</span>
          </h1>
          <p>
            📍 Mayiladuthurai <br />
            📧 StayEase@gmail.com
          </p>
        </div>
      </footer>

      <hr className="line4" />

      <p className="copyright">
        Copyright © 2025 WebDev | Provided by{" "}
        <span style={{ color: "blue" }}>Aby WebDev</span>
      </p>
    </div>
  );
}

export default Footer;
