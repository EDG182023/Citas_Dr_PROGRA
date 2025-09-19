import React, { useState } from "react";
import "../styles/Contacto.css";

function Contact() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const mensajes = JSON.parse(localStorage.getItem("mensajes") || "[]");
    mensajes.push({ nombre, email, mensaje, fecha: new Date().toISOString() });
    localStorage.setItem("mensajes", JSON.stringify(mensajes));

    alert("Tu mensaje fue enviado con éxito!");
    setNombre("");
    setEmail("");
    setMensaje("");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-grid">
        
        {/* Información de contacto */}
        <div className="contact-info">
          <h2>Contacto</h2>
          <p><strong>Dirección:</strong> Av. Siempre Viva 123, CABA</p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/541164301924"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              📱 +54 11 6430-1924
            </a>
          </p>
          <p><strong>Email:</strong> dr.fernandez@example.com</p>

          {/* Mapa */}
          <div className="map-container">
            <iframe
              title="Ubicación del consultorio"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.1791394582386!2d-58.38155918477114!3d-34.60368458045921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacae0bbfdfd%3A0x9a6f6b76b5db1c9f!2sObelisco%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1634571183174!5m2!1ses!2sar"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Formulario */}
        <div className="contact-form">
          <h3>Envíanos un mensaje</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Mensaje</label>
              <textarea
                rows="4"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
