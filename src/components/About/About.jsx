// src/components/About/About.js
import React from "react";

const About = () => {
  return (
    <section className="min-h-screen py-[150px] px-12 bg-[#121212] flex flex-col items-center">
      <div className="max-w-[800px] text-center opacity-0 transform translate-y-12">
        <h2 className="text-4xl text-white">Sobre Nosotros</h2>
        <p className="text-lg text-gray-300 mt-4">
          En Ciclorama, nos dedicamos a producir contenido audiovisual de alta
          calidad que captura la esencia de tu marca. Nuestra filosofía se basa
          en la creatividad, la innovación y la excelencia en cada proyecto que
          emprendemos.
        </p>
      </div>
      <img
        src="/assets/images/about.jpg"
        alt="Sobre Ciclorama"
        className="w-[300px] mt-8 opacity-0 transform scale-75"
      />
    </section>
  );
};

export default About;
