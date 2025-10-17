import "./BookingForm.css";

function BookingForm() {
  return (
    <div id="box">
      <section className="book">
        <div className="container flex">
          <div className="input grid">
            <div className="box">
              <label>Check-in:</label>
              <input type="date" placeholder="Check-in-Date" />
            </div>

            <div className="box">
              <label>Check-out:</label>
              <input type="date" placeholder="Check-out-Date" />
            </div>

            <div className="box">
              <label>Adults:</label>
              <input type="number" placeholder="0" />
            </div>

            <div className="box">
              <label>Children:</label>
              <input type="number" placeholder="0" />
            </div>
          </div>

          <div className="search">
            <a href="#Rooms">
              <input type="submit" value="SEARCH" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookingForm;
