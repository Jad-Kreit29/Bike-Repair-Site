// components/BookingConfirmation.jsx
import React from 'react';

function BookingConfirmation({ bookingDetails }) {
  if (!bookingDetails) {
    // Optionally handle cases where no bookingDetails are passed,
    // though in this flow, it should always have data.
    return null;
  }

  // Format the date for display
  const formattedDate = bookingDetails.appointmentDate
    ? new Date(bookingDetails.appointmentDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : 'N/A';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-700 p-8 text-white text-center">
      <div className="text-8xl mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-check-circle"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14 9 11" />
        </svg>
      </div>
      <h2 className="text-4xl font-bold mb-4">Booking confirmed!</h2>
      <p className="text-lg mb-6">
        You will receive an email shortly with the booking information. Thank you for choosing Bikemate.
      </p>

      {/* Display Booking Information */}
      <div className="bg-slate-600 p-6 rounded-lg text-left max-w-md w-full shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">Your Booking Details:</h3>
        <p className="mb-2"><strong>Name:</strong> {bookingDetails.name}</p>
        <p className="mb-2"><strong>Email:</strong> {bookingDetails.email}</p>
        <p className="mb-2"><strong>Phone:</strong> {bookingDetails.phone}</p>
        <p className="mb-2"><strong>Date:</strong> {formattedDate}</p>
        <p className="mb-2"><strong>Service Type:</strong> {bookingDetails.serviceType}</p>
        <p className="mb-2"><strong>Time:</strong> {bookingDetails.time}</p>
        {bookingDetails.notes && <p className="mb-2"><strong>Notes:</strong> {bookingDetails.notes}</p>}
      </div>

      <p className="mt-8 text-md">You are safe to close this window.</p>
    </div>
  );
}

export default BookingConfirmation;