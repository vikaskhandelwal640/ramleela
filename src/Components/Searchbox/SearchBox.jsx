// DatePicker component
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchBox.css';

const SearchBox = () => {
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
  
    const handleCheckInChange = (date) => {
      setCheckInDate(date);
    };
  
    const handleCheckOutChange = (date) => {
      setCheckOutDate(date);
    };
  
    const handleSearch = () => {
      // Implement your search logic here using checkInDate and checkOutDate
      console.log('Check-in Date:', checkInDate);
      console.log('Check-out Date:', checkOutDate);
    };
  return (
    <div className="date-range-picker">
      <div className="date-picker">
        <label>Check-in Date:</label>
        <DatePicker selected={checkInDate} className='input-date' onChange={handleCheckInChange} />
      </div>
      <div className="date-picker">
        <label>Check-out Date:</label>
        <DatePicker selected={checkOutDate} className='input-date' onChange={handleCheckOutChange} />
      </div>
      <button onClick={handleSearch} className='search-btn'>Check Availibility</button>
    </div>
  );
};

export default SearchBox;
