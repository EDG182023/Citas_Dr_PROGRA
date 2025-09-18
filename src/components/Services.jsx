import React from "react";
import "../styles/Services.css";

function Services() {
  const services = [
    {
      icon: "🩺",
      title: "Consultas Médicas",
      description: "Atención personalizada para diagnósticos precisos y tratamientos adecuados."
    },
    {
      icon: "❤️",
      title: "Cardiología",
      description: "Estudios especializados para la prevención y cuidado de enfermedades cardíacas."
    },
    {
      icon: "💉",
      title: "Vacunación",
      description: "Aplicación de vacunas con estándares de seguridad y calidad."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
