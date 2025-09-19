import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../styles/Reserva.css";

function Reserva() {
  // Estados para cada campo del formulario
  const [selectedDate, setSelectedDate] = useState(undefined);
  const [hora, setHora] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [obraSocial, setObraSocial] = useState("");

  // Obtener reservas guardadas en localStorage
  const getReservas = () => {
    const reservasEnStr = localStorage.getItem("reservas");
    if (!reservasEnStr) return [];
    try {
      return JSON.parse(reservasEnStr);
    } catch (err) {
      return [];
    }
  };

  // Guardar una nueva reserva en localStorage
  const saveReserva = (reserva) => {
    const actuales = getReservas();
    actuales.push(reserva);
    localStorage.setItem("reservas", JSON.stringify(actuales));
  };

  // Validar si una fecha + hora están disponibles
  const isHoraDisponible = (fecha, hora) => {
    if (!fecha) return false;
    const reservas = getReservas();
    const fechaStr = fecha.toISOString().split("T")[0]; // YYYY-MM-DD
    return !reservas.some(r => r.fecha === fechaStr && r.hora === hora);
  };

  // Manejar el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate) {
      alert("Por favor seleccioná una fecha.");
      return;
    }

    if (!isHoraDisponible(selectedDate, hora)) {
      alert("Esa fecha y hora ya están ocupadas.");
      return;
    }

    const reserva = {
      nombre,
      telefono,
      email,
      obraSocial,
      fecha: selectedDate.toISOString().split("T")[0],
      hora
    };

    saveReserva(reserva);
    alert("Reserva hecha con éxito!");

    // Limpiar formulario
    setNombre("");
    setTelefono("");
    setEmail("");
    setObraSocial("");
    setSelectedDate(undefined);
    setHora("");
  };

  return (
    <section id="reserva" className="reserva-section">
      <div className="container">
        <h2>Reservar Cita</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre y Apellido</label>
            <input
              type="text"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="tel"
              value={telefono}
              onChange={e => setTelefono(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Obra Social</label>
            <select
              value={obraSocial}
              onChange={e => setObraSocial(e.target.value)}
              required
            >
              <option value="">Seleccione...</option>
              <option value="OSDE">OSDE</option>
              <option value="Swiss Medical">Swiss Medical</option>
              <option value="Galeno">Galeno</option>
            </select>
          </div>

          <div className="form-group">
            <label>Fecha</label>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={{ before: new Date() }} // no permite fechas pasadas
            />
          </div>

          <div className="form-group">
            <label>Hora</label>
            <input
              type="time"
              value={hora}
              onChange={e => setHora(e.target.value)}
              required
            />
          </div>

          <button type="submit">Reservar</button>
        </form>
      </div>
    </section>
  );
}

export default Reserva;
