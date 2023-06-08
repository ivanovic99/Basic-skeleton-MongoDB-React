import React, { useState, useEffect } from 'react';
import { getTickets } from '../services/api';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const ticketList = await getTickets();
      setTickets(ticketList);
    } catch (error) {
      console.error('Error al obtener la lista de tickets:', error);
    }
  };

  return (
    <div>
      <h2>Ticket List</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket._id}>
            <h3>{ticket.title}</h3>
            <p>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
            <p>Created at: {ticket.createdAt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TicketList;
