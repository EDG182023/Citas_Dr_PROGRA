import React from "react";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="site-header">
      <div className="logo">
        <h1>Dr. Fernández</h1>
      </div>

      {/* Botón para menú móvil */}
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Abrir menú de navegación"
      >
        ☰
      </button>

      {/* Menú de navegación */}
      <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>Servicios</a></li>
          <li><a href="#reserva" onClick={() => setMenuOpen(false)}>Reserva</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contactos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
