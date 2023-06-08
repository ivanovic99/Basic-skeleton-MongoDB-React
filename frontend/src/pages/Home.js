import React, { useState, useEffect } from 'react';
import { getTickets } from '../services/api';

const Home = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de tickets al cargar el componente
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const ticketList = await getTickets();
      setTickets(ticketList);
    } catch (error) {
      // Manejo de errores
      console.error('Error al obtener la lista de tickets:', error);
    }
  };

  return (
    <div>
      <h1>Tickets</h1>
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

export default Home;
