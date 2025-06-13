import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { animate, scroll } from "motion"; // Motion One
import Footer from "../Footer/Footer"; // Ajusta la ruta según tu proyecto
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import ButtonLigth from "../Buttons/ButtonLigth";
import Logo from "/assets/Ciclorama-2.svg";
import ModalContact from "../Modal/ModalContact"; // Importa el modal

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
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Resetear el scroll al inicio de la página
    window.scrollTo(0, 0);

    // Código existente para la barra de progreso
    scroll(
      animate(".progress-bar-about", { scaleX: [0, 1] }, { ease: "linear" })
    );
  }, []);

  return (
    <div className="w-full relative">
      {/* SECCIÓN 1 */}
      {/* Sección 1: Logo */}
      <section className="h-screen grid place-items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <img
              src={Logo}
              alt="Ciclorama Logo"
              className="w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN 2: bg-light text-dark */}
      <motion.section
        className="min-h-screen bg-light text-dark flex items-center py-8 sm:py-12 lg:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 gap-6 sm:gap-8 w-full">
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="font-montreal font-medium text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight">
              Hola, somos <span className="text-[#1400c6]">Ciclorama</span>
            </h2>
            <p className="font-montreal font-light text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl text-gray-700 mt-4 sm:mt-6 max-w-screen-xl mx-auto leading-relaxed">
              Producimos contenido audiovisual de alta calidad que captura la
              esencia de cada marca. Creemos en la innovación, la pasión y la
              excelencia para dar vida a historias únicas.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Sección 3 con VelocityScroll (Opción 2) */}
      <motion.section
        className="bg-[#212121] text-[#e8e8e8] py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[1500px] w-full mx-auto flex flex-col gap-4 sm:gap-6">
          <motion.div variants={itemVariants} className="text-left">
            {/* Párrafo único envuelto en VelocityScroll */}
            <VelocityScroll
              defaultVelocity={1} // Velocidad positiva consistente
              numRows={1}
              className="flex flex-col gap-4 my-12 sm:my-24 lg:my-44"
            >
              <p className="text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-9xl font-montreal font-thin leading-tight">
                Ciclorama ofrece soluciones integrales en producciones
                audiovisuales, colaborando con clientes para proyectos
                innovadores y memorables.
              </p>
            </VelocityScroll>
          </motion.div>
        </div>
      </motion.section>

      {/* SECCIÓN 5: (CTA final) */}
      <motion.section
        className="min-h-screen grid place-items-center py-8 sm:py-12 lg:py-16 bg-[#e8e8e8]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[1500px] mx-auto flex flex-col gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-left">
            <h1 className="font-montreal font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-[#212121] mb-3 sm:mb-4 leading-tight">
              ¿Listo para trabajar juntos?
            </h1>
            <p className="font-montreal font-light text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-black max-w-[800px] leading-relaxed">
              Contáctanos y descubre cómo podemos dar vida a tus ideas y
              proyectos audiovisuales.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            {/* Botón que despliega el modal */}
            <ButtonLigth onClick={() => setModalOpen(true)}>
              ¡Hablemos!
            </ButtonLigth>
          </motion.div>
        </div>
      </motion.section>

      {/* Barra de Progreso (progress-bar-about) */}
      <div
        className="
          progress-bar-about
          fixed bottom-0 left-0
          w-full h-[3px] sm:h-[4px] lg:h-[6px]
          bg-[#1400c6]
          transform scale-x-0 origin-left
        "
      />

      <Footer />

      {/* Modal de contacto */}
      <ModalContact open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default About;
