import React, { useState } from 'react';
import '../css/BookingForm.css'

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuest] = useState("");
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.SubmitForm(e);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setDate(value);
    props.dispatch(e);
  };

  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTimes(value);
  };

  const renderAvailableTimes = () => {
    console.log("Available Times:", props.availableTimes);
    if (!Array.isArray(props.availableTimes) || props.availableTimes.length === 0) {
      return <option value="">{props.availableTimes}</option>;
    }
    return props.availableTimes.map((time, index) => (
      <option key={index} value={time}>
        {time}
      </option>
    ));
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div>
              <label htmlFor='book-date'>Choose Date</label>
              <input id='book-data' value={date} onChange={handleChange} type='date' required/>
            </div>
            <div>
              <label htmlFor='book-time'>Choose Time:</label>
              <select id="book-time" value={times} onChange={handleTimeChange}>
                <option value="">Select a Time</option>
                {renderAvailableTimes()}
              </select>
            </div>
            <div>
              <label htmlFor='book-guests'>Number of Guests:</label>
              <input id='book-guests' min='1' value={guests} onChange={(e) => setGuest(e.target.value)}/>
            </div>
            <div>
              <label htmlFor='book-occasion'>Occasion:</label>
              <select id='book-occasion' key={occasion} value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </div>
            <div className='btnReceive'>
              <input aria-label='On Click' type='submit' value={"Make Your Reservation"}/>
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;

