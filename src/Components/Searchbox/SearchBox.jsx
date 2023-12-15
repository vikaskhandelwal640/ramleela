// DatePicker component
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./SearchBox.css";

const SearchBox = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [availabilityMessage, setAvailabilityMessage] = useState("");

  const bookedDates = [
    new Date("2023-01-10"),
    new Date("2023-01-15"),
    new Date("2023-01-20"),
  ];

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
  };

  const handleSearch = () => {
    if (!checkInDate || !checkOutDate) {
      setAvailabilityMessage(
        "Please select both check-in and check-out dates."
      );
      return;
    }

    const overlappingDates = bookedDates.filter(
      (bookedDate) =>
        (checkInDate <= bookedDate && bookedDate <= checkOutDate) ||
        (bookedDate <= checkInDate && checkInDate <= bookedDate)
    );

    if (overlappingDates.length > 0) {
      setAvailabilityMessage(
        "Selected date range is not available. Please choose different dates."
      );
    } else {
      setAvailabilityMessage(
        "Selected date range is available. You can proceed with the booking."
      );
    }
  };

  return (
    <>
    <div className="date-range-picker">
      <div className="date-picker">
        <label>Check-in Date:</label>
        <DatePicker
          selected={checkInDate}
          className="input-date"
          onChange={handleCheckInChange}
        />
      </div>
      <div className="date-picker">
        <label>Check-out Date:</label>
        <DatePicker
          selected={checkOutDate}
          className="input-date"
          onChange={handleCheckOutChange}
        />
      </div>
      <button onClick={handleSearch} className="search-btn">
        Check Availability
    
      </button>
    </div>
    <div className="message-container">

        <div className="availability-message">{availabilityMessage}</div>
    </div>
        </>
  );
};

export default SearchBox;
