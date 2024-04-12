import React from 'react';
import BookingForm from './BookingForm';

const Booking = (props) => {
  return <BookingForm availableTimes={props.availableTimes} SubmitForm={props.SubmitForm} />;
};

export default Booking;