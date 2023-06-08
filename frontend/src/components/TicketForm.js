import React, { useState } from 'react';
import { createTicket } from '../services/api';

const TicketForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTicket({ title, description });
      // Limpiar el formulario después de crear el ticket
      setTitle('');
      setDescription('');
      // Actualizar la lista de tickets (puedes pasar una función de actualización desde el padre)
      // updateTicketList();
    } catch (error) {
      // Manejo de errores
      console.error('Error al crear el ticket:', error);
    }
  };

  return (
    <div>
      <h2>Create Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label htmlFor="description">Description:</label>
        <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default TicketForm;
