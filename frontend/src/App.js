import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import TicketForm from './components/TicketForm';
import TicketList from './components/TicketList';

function App() {
  return (
    <div className="App">
      <MainContent />
    </div>
  );
}

function MainContent() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeWithHeader />} />
        <Route path="/tickets" element={<TicketList />} />
        <Route path="/tickets/new" element={<TicketForm />} />
      </Routes>
    </Router>
  );
}

function HomeWithHeader() {
  return (
    <>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Home />
    </>
  );
}

export default App;
