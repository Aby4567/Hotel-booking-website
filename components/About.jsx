import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <div className="about-section">
      <div className="image-container">
        <img src="images/a1.jpg" className="img1" alt="Resort view 1" />
        <img src="images/a2.jpg" className="img2" alt="Resort view 2" />
      </div>

      <div id="About" className="about-text">
        <hr className="line1" />
        <p>RAISING COMFORT TO THE HIGHEST LEVEL</p>
        <h1>Welcome to StayEase Hotel & Resort</h1>
        <p className="welcome">
          At StayEase, we redefine comfort and elegance to provide you with an
          unforgettable stay. Whether you're here for leisure, business, or a
          weekend escape, our resort offers the perfect blend of luxury,
          convenience, and personalized service.
          <br />
          <br />
          From stylish rooms with stunning views to exceptional dining and
          modern amenities, everything is designed to make you feel at home.
          Relax in our serene atmosphere, explore local attractions, and indulge
          in experiences crafted just for you. Come, elevate your stay – only at
          StayEase.
        </p>
        <button className="button">More Info</button>
      </div>
    </div>
  );
};

export default About;
