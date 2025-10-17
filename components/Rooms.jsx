import { useState } from "react";
import "./Rooms.css";

function Rooms() {
  const [visibleToast, setVisibleToast] = useState(null);

  const handleBooking = (roomNumber) => {
    setVisibleToast(roomNumber);
    setTimeout(() => {
      setVisibleToast(null);
    }, 2000);
  };

  const rooms = [
    { id: 1, name: "Superior Soble Room", price: 129, img: "images/room1.jpg" },
    { id: 2, name: "Deluxe Suite", price: 159, img: "images/room2.jpg" },
    { id: 3, name: "Family Suite", price: 199, img: "images/room3.jpg" },
  ];

  return (
    <div id="Rooms">
      <div className="room-header">
        <hr className="line2" />
        <p>RAISING COMFORT TO THE HIGHEST LEVEL</p>
        <h1>Rooms & Suites</h1>
      </div>

      <div className="room-cards">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.img} alt={room.name} />
            <h2>{room.name}</h2>
            <p>${room.price} /per night</p>
            <button onClick={() => handleBooking(room.id)}>BOOK NOW</button>
            {visibleToast === room.id && (
              <div className="toast">Booking Successfully!</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
