import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { animate, scroll } from "motion"; // Motion One
import Footer from "../Footer/Footer"; // Ajusta la ruta según tu proyecto

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

// Framer Motion Variants
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
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const About = () => {
  useEffect(() => {
    // Barra de progreso (la "progress-bar" en About)
    scroll(
      animate(".progress-bar-about", { scaleX: [0, 1] }, { ease: "linear" })
    );
  }, []);

  return (
    <div className="w-full relative">
      {/* SECCIÓN 1 */}
      <section className="h-screen grid place-items-center">
        <div className="max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Sobre <span className="text-[#1400c6]">Ciclorama</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 2: bg-light text-dark */}
      <motion.section
        className="min-h-screen bg-light text-dark flex items-center py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[1500px] mx-auto px-12 grid grid-cols-1 gap-8 w-full">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hola, somos <span className="text-[#1400c6]">Ciclorama</span>
            </h2>
            <p className="text-lg md:text-3xl text-gray-700 mt-6 max-w-screen-xl mx-auto">
              Producimos contenido audiovisual de alta calidad que captura la
              esencia de cada marca. Creemos en la innovación, la pasión y la
              excelencia para dar vida a historias únicas.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* SECCIÓN 3: (Experiencia) */}
      {/*
        AQUÍ ESTÁ EL CAMBIO PRINCIPAL:
        1) Quitamos min-h-screen
        2) Reducimos py-12 a py-8 (o el valor que prefieras)
        3) Cambiamos gap-12 a gap-6 en el div interno
      */}
      <motion.section
        className="bg-[#212121] text-[#e8e8e8] py-8 px-4 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[1500px] w-full mx-auto flex flex-col gap-6">
          <motion.div variants={itemVariants} className="text-left">
            <hr className="w-full h-px bg-[#e0e0e0] border-0 my-4" />
            <h2 className="text-4xl font-bold mb-6">Experiencia Profesional</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experienciaData.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="bg-[#2c2c2c] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-1 text-[#e8e8e8]">
                    {exp.puesto}
                  </h3>
                  <p className="text-sm text-gray-400 italic">
                    {exp.empresa} | {exp.periodo}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    {exp.descripcion}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SECCIÓN 4:(Habilidades y Valores) */}
      <motion.section
        className="min-h-screen bg-[#e0e0e0] text-[#212121] py-12 px-4 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[1500px] mx-auto w-full flex flex-col gap-12">
          {/* Habilidades */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <hr className="w-full h-px bg-[#cccccc] border-0 my-4" />
            <h2 className="text-3xl font-bold mb-6">
              Habilidades & Herramientas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {skillsData.map((skillBlock, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl"
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

          {/* Valores */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <hr className="w-full h-px bg-[#cccccc] border-0 my-4" />
            <h2 className="text-3xl font-bold mb-6">Nuestros Valores</h2>
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
        </div>
      </motion.section>

      {/* SECCIÓN 5: (CTA final) */}
      <motion.section
        className="min-h-screen grid place-items-center py-12 bg-[#212121]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[1500px] mx-auto flex flex-col gap-8 px-8">
          <motion.div variants={itemVariants} className="text-left">
            <h1 className="text-[50px] md:text-[80px] text-[#e8e8e8] font-bold mb-4">
              ¿Listo para trabajar juntos?
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 max-w-[800px]">
              Contáctanos y descubre cómo podemos dar vida a tus ideas y
              proyectos audiovisuales.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-6"
          >
            <button className="bg-[#e8e8e8] text-[#212121] font-bold py-3 px-6 rounded-lg transition-all hover:bg-[#1400c6] hover:text-[#e8e8e8]">
              ¡Hablemos!
            </button>
            <button className="bg-transparent border border-[#e8e8e8] text-[#e8e8e8] font-bold py-3 px-6 rounded-lg transition-all hover:bg-[#1400c6] hover:border-[#1400c6] hover:text-white">
              Escríbenos
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Barra de Progreso (progress-bar-about) */}
      <div
        className="
          progress-bar-about
          fixed bottom-0 left-0
          w-full h-[6px]
          bg-[#1400c6]
          transform scale-x-0 origin-left
        "
      />

      <Footer />
    </div>
  );
};

export default About;
