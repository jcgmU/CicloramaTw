// src/components/About/About.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { animate, scroll } from "motion"; // Asegúrate de tener '@motionone/animations' instalado
import Footer from "../Footer/Footer"; // Ajusta la ruta según la estructura de tu proyecto

// Datos de ejemplo
const experienciaData = [
  {
    id: 1,
    puesto: "Director de Fotografía",
    empresa: "Ciclorama Inc.",
    periodo: "2018 - Presente",
    descripcion:
      "Lidero la producción audiovisual asegurando la más alta calidad de imagen y narrativa.",
  },
  {
    id: 2,
    puesto: "Editor Senior",
    empresa: "Freelance",
    periodo: "2015 - 2018",
    descripcion:
      "Colaboré en proyectos de cine independiente y spots publicitarios para diversas marcas.",
  },
];

const skillsData = [
  { categoria: "Software", items: ["Premiere", "After Effects", "Photoshop"] },
  { categoria: "Producción", items: ["Iluminación", "Edición", "Dirección"] },
  { categoria: "Otras Herramientas", items: ["Cinema 4D", "DaVinci Resolve"] },
];

const valoresData = [
  "Creatividad e innovación constante",
  "Compromiso con la excelencia",
  "Trabajo en equipo y colaboración",
  "Pasión por contar historias auténticas",
];

// Variants de Framer Motion
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const About = () => {
  useEffect(() => {
    // 1. Barra de progreso
    scroll(animate(".progress-bar", { scaleX: [0, 1] }, { ease: "linear" }));

    // 2. Efecto Parallax (target: elementos con data-parallax)
    document.querySelectorAll("[data-parallax]").forEach((element) => {
      scroll(animate(element, { y: [-100, 100] }, { ease: "linear" }), {
        target: element,
      });
    });
  }, []);

  return (
    <div>
      {/* Sección 1: Introducción */}
      <motion.section
        className="
          min-h-screen py-[150px] px-4 md:px-12 
          bg-[#e8e8e8] text-[#212121] 
          flex flex-col items-center
        "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[1500px] w-full mx-auto flex flex-col gap-16">
          {/* HERO / INTRODUCCIÓN */}
          <motion.div
            variants={itemVariants}
            data-parallax
            className="text-center"
          >
            <h1 className="block text-4xl md:text-6xl font-extrabold leading-tight">
              Hola, somos{" "}
              <span className="text-4xl md:text-6xl font-extrabold leading-tight text-[#1400c6]">
                Ciclorama
              </span>
            </h1>

            <p className="text-lg md:text-4xl text-gray-700 mt-4 max-w-screen-xl mx-auto">
              Producimos contenido audiovisual de alta calidad que captura la
              esencia de cada marca. Creemos en la innovación, la pasión y la
              excelencia para dar vida a historias únicas.
            </p>
          </motion.div>

          {/* Sección 2: Experiencia Profesional */}
          <motion.div
            variants={itemVariants}
            data-parallax
            className="flex flex-col gap-12"
          >
            <hr className="w-full h-px bg-[#e0e0e0] border-0 my-4" />
            <h2 className="text-4xl font-bold text-left mb-auto">
              Experiencia Profesional
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experienciaData.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="bg-[#f9f9f9] p-6 rounded-lg 
                             shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-1">{exp.puesto}</h3>
                  <p className="text-sm text-gray-600 italic">
                    {exp.empresa} | {exp.periodo}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-800">
                    {exp.descripcion}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sección 3: Habilidades y Herramientas */}
          <motion.div
            variants={itemVariants}
            data-parallax
            className="flex flex-col gap-12"
          >
            <hr className="w-full h-px bg-[#e0e0e0] border-0 my-4" />
            <h2 className="text-3xl font-bold">Habilidades & Herramientas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {skillsData.map((skillBlock, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg 
                             shadow-md transition-all hover:shadow-xl"
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {skillBlock.categoria}
                  </h3>
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {skillBlock.items.map((itemSkill, i) => (
                      <li key={`${itemSkill}-${i}`}>{itemSkill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sección 4: Valores */}
          <motion.div
            variants={itemVariants}
            data-parallax
            className="flex flex-col gap-12"
          >
            <hr className="w-full h-px bg-[#e0e0e0] border-0 my-4" />
            <h2 className="text-3xl font-bold">Nuestros Valores</h2>
            <div className="max-w-2xl mx-auto text-center flex flex-col gap-4">
              {valoresData.map((valor, idx) => (
                <motion.p
                  key={idx}
                  variants={itemVariants}
                  className="text-base md:text-lg text-gray-800 leading-relaxed"
                >
                  {valor}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Sección 5: Llamado a la Acción */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col items-center"
          >
            <hr className="w-full h-px bg-[#e0e0e0] border-0 my-8 mb-5" />
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              ¿Listo para crear algo increíble juntos?
            </h3>
            <button
              className="bg-[#212121] text-[#e8e8e8] 
                               font-bold py-3 px-6 rounded-lg 
                               transition-all hover:bg-[#1400c6]"
            >
              ¡Hablemos!
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Barra de Progreso (Progress Bar) */}
      <div
        className="
            progress-bar 
            fixed bottom-0 left-0 
            w-full h-[6px] 
            bg-[#1400c6] 
            transform scale-x-0 
            origin-left
            radius-t-lg
          "
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
