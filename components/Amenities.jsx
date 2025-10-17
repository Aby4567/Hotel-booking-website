import React from "react";
import "./Amenities.css";

function Amenities() {
  return (
    <div id="ame">
      <section className="wrapper top">
        <div className="container">
          <div className="text">
            <h2>Our Amenities</h2>
            <p>
              At StayEase Hotel & Resort, we offer world-class amenities
              designed for comfort, relaxation, and luxury. Unwind and enjoy
              exceptional services that make your stay truly unforgettable.
            </p>
            <div className="content">
              <div className="box flex">
                <i className="fas fa-swimming-pool"></i>
                <span>Swimming pool</span>
              </div>
              <div className="box flex">
                <i className="fas fa-dumbbell"></i>
                <span>Gym & yoga</span>
              </div>
              <div className="box flex">
                <i className="fas fa-spa"></i>
                <span>Spa & massage</span>
              </div>
              <div className="box flex">
                <i className="fas fa-ship"></i>
                <span>Boat Tours</span>
              </div>
              <div className="box flex">
                <i className="fas fa-swimmer"></i>
                <span>Surfing Lessons</span>
              </div>
              <div className="box flex">
                <i className="fas fa-microphone"></i>
                <span>Conference room</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Amenities;

