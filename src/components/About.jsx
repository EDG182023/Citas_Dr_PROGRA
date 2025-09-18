import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre el Dr. Fernández</h2>
            <p>
              Mi formación comenzó en la Facultad de Medicina de la Universidad de Buenos Aires (UBA) en el año 2010. Luego realice la residencia en Clínica Medica en el Hospital Italiano de Buenos Aires durante los años 2017 al 2021 y el posgrado de Medicina Legal en la Universidad del Salvador desde el 2023 al 2025. Desarrolle actividades como medico de planta en la central de emergencias de adultos del Sanatorio Las Lomas, en San Isidro, desde el 2021 hasta 2024. Actualmente me focalizo en la atención ambulatoria en consultorios como Medico de cabecera y como Medico Legista.
Durante mi formación he ganado conocimientos en patologías de internación como ambulatorias, tanto en adultos jovenes como en el ámbito de la geriatría.
            </p>
            <p>
              Considero la buena relación medico paciente como el pilar fundamental de todo acto medico, siendo la única herramienta para arribar a buenos resultados. Esta demostrado que el 70% de los diagnósticos se pueden lograr con una adecuada y minuciosa entrevista medica.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://s3.sa-east-1.amazonaws.com/doctoraliar.com/doctor/111d87/111d871cfa15abcd14fcaf3a8aa7bb4d_large.jpg"
              alt="Doctor"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
