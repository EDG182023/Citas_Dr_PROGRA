import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home-section">
      <div className="overlay">
        <div className="home-content">
          <h1>Bienvenido al Consultorio Médico</h1>
          <p>Cuidamos tu salud con profesionalismo y compromiso</p>
          <a href="#services" className="btn-home">Ver Servicios</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
