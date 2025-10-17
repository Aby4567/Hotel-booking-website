import React from "react";
import "./Feedback.css";

function Feedback() {
  return (
    <div id="Feedback">
      <section className="wrapper wrapper2">
        <div className="container">
          <div className="text">
            <div className="heading">
              <hr className="line3" />
              <h5>AT THE HEART OF COMMUNICATION</h5>
              <h2>People Say</h2>
            </div>

            <div className="para">
              <p>
                Absolutely loved my stay at StayEase! The rooms were spotless,
                the staff was super friendly, and the spa experience was
                heavenly — can’t wait to come back! 🌟🌟🌟🌟🌟.
              </p>

              <div className="box flex">
                <div className="img">
                  <img src="/images/photo.jpg" alt="Customer Feedback" />
                </div>
                <div className="name">
                  <h5>MAXICAN</h5>
                  <h5>INDIA</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feedback;
