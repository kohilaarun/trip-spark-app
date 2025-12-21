import React, { createContext, useState } from "react";

export const bookingContext = createContext();

const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  return (
    <bookingContext.Provider
      value={{ bookings, setBookings, editIndex, setEditIndex }}
    >
      {children}
    </bookingContext.Provider>
  );
};
export default BookingProvider;
