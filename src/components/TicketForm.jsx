import React, { useState } from 'react';
import './TicketForm.css'; // Import your CSS file

const TicketForm = () => {
  const [numberOfTickets, setNumberOfTickets] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  

  const handleChange = (e) => {
    setNumberOfTickets(e.target.value);
    setError(''); // Clear error message on input change
    setMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tickets = parseInt(numberOfTickets, 10);
    
    if (isNaN(tickets) || tickets <= 0 || tickets >100) {
      setError('Please enter a valid number of tickets.');
      return;
    }
    else{
        setMsg("Tickets booked successfully")
    }

    // Simulate ticket purchase
    console.log('Number of Tickets:', tickets);
    // Add your ticket purchase logic here (e.g., API call)

    // Reset the form or redirect as needed
    setNumberOfTickets('');
  };

  return (
    <div className="container">
      <h1>Ticket Purchase</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="number"
          value={numberOfTickets}
          onChange={handleChange}
          placeholder="Enter number of tickets"
          className="input"
          required
        />
        <button type="submit" className="button">Purchase Tickets</button>
      </form>
      {error && <p className="error">{error}</p>}
      {msg && <p>{msg}</p>}
    </div>
  );
};

export default TicketForm;
