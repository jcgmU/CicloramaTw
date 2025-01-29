import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { animate, scroll } from "motion"; // Motion One
import Footer from "../Footer/Footer"; // Ajusta la ruta según tu proyecto
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import ButtonDark from "../Buttons/ButtonDark";
import ButtonLigth from "../Buttons/ButtonLigth";
import Logo from "/assets/Ciclorama-2.svg";
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
      {/* Sección 1: Logo */}
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
            <img src={Logo} alt="Ciclorama Logo" className="w-[1000px]" />
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

      {/* Sección 3 con VelocityScroll (Opción 2) */}
      <motion.section
        className="bg-[#212121] text-[#e8e8e8] py-8 px-4 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[1500px] w-full mx-auto flex flex-col gap-6">
          <motion.div variants={itemVariants} className="text-left">
            {/* Párrafo único envuelto en VelocityScroll */}
            <VelocityScroll
              velocity={0.15}
              className="flex flex-col gap-4 my-44"
            >
              <p>
                <span className="font-semibold text-4xl">Ciclorama</span> ofrece
                soluciones integrales en producciones audiovisuales, colaborando
                con clientes para proyectos innovadores y memorables.
              </p>
            </VelocityScroll>
          </motion.div>
        </div>
      </motion.section>

      {/* SECCIÓN 5: (CTA final) */}
      <motion.section
        className="min-h-screen grid place-items-center py-12 bg-[#e8e8e8]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[1500px] mx-auto flex flex-col gap-8 px-8">
          <motion.div variants={itemVariants} className="text-left">
            <h1 className="text-[50px] md:text-[80px] text-[#212121] font-bold mb-4">
              ¿Listo para trabajar juntos?
            </h1>
            <p className="text-lg md:text-2xl text-black max-w-[800px]">
              Contáctanos y descubre cómo podemos dar vida a tus ideas y
              proyectos audiovisuales.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row gap-6"
          >
            <ButtonLigth>¡Hablemos!</ButtonLigth>
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
