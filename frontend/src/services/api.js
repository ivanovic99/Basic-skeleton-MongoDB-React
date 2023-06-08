import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api'; // La URL del servidor backend

// Obtener lista de tickets
export const getTickets = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/tickets/`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener la lista de tickets:', error);
    throw error;
  }
};

// Crear un nuevo ticket
export const createTicket = async (ticketData) => {
  try {
    const response = await axios.post(`${BASE_URL}/tickets`, ticketData);
    return response.data;
  } catch (error) {
    console.error('Error al crear el ticket:', error);
    throw error;
  }
};

// Otras funciones para actualizar o eliminar tickets, si es necesario

