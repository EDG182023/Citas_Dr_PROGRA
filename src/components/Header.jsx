import React from 'react';
import '../styles/Header.css'; // Asegúrate de crear este archivo para los estilos

function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header classname="site-header">
            <div className="logo">
                <h1>Dr. Fernández</h1>
            </div>

            {/* Botón para menú móvil */}
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            {/* Menú de navegación */}
            <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#home">Inicio</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Servicios</a></li>
                    <li><a href="#contact">Contactos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
