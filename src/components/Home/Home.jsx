import React, { useState, useRef, useEffect } from "react"; // Añadir useEffect
import { Link } from "react-router-dom";
import Logo from "/assets/images/logo.svg";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import WordRotate from "@/components/ui/word-rotate";
import TextReveal from "@/components/ui/text-reveal";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import ButtonLigth from "../Buttons/ButtonLigth";
import ButtonDark from "../Buttons/ButtonDark";
import ContactInfoButton from "../Buttons/ContactInfoButton";
import ModalContact from "../Modal/ModalContact";

// Animaciones más sutiles y fluidas
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Curva de bezier más suave
    },
  },
};

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // Curva de bezier más suave
    },
  },
};

const logos = [
  { src: "/assets/images/Mazda.svg", alt: "Mazda" },
  { src: "/assets/images/WarnerBros.svg", alt: "Warner Bros" },
  { src: "/assets/images/Ford.svg", alt: "Ford" },
  { src: "/assets/images/Max.svg", alt: "Max" },
];

const LogoCard = ({ src, alt }) => {
  return (
    <div className="w-[120px] sm:w-[150px] md:w-[170px] lg:w-[200px] mr-6 sm:mr-8 lg:mr-10 xl:mr-12 flex-shrink-0 flex items-center justify-center py-4">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto max-h-16 sm:max-h-20 lg:max-h-24 object-contain filter brightness-75 hover:brightness-100 transition-all duration-300"
      />
    </div>
  );
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const handleOpenModal = () => setOpenModal(!openModal);

  // Agregar este useEffect para restablecer la posición del scroll al inicio
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full relative">
      {/* Sección 1: Logo */}
      <section className="h-screen grid place-items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1500px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            className="flex justify-center"
          >
            <img
              src={Logo}
              alt="Ciclorama Logo"
              className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] max-w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Sección 2: Información */}
      <motion.section
        className="min-h-screen bg-light text-dark flex items-center justify-center py-8 sm:py-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="w-full flex justify-center">
            <TextReveal
              text="Nos dedicamos a hacer tus proyectos realidad"
              className="w-full font-montreal font-normal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-center text-black leading-tight"
            />
          </div>
        </div>
      </motion.section>

      {/* Sección 3: Proyectos */}
      <motion.section
        className="min-h-screen flex items-center bg-[#212121] text-[#e8e8e8] py-8 sm:py-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <h2 className="font-montreal-light font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 sm:mb-8 text-left">
            Últimos Proyectos
          </h2>

          <Marquee pauseOnHover repeat={2} className="[--duration:18s]">
            {[
              {
                name: "Bogotá Eats",
                image: "/assets/images/imgProjects/Bogotaeats.png",
                details: ["Experiencial", "Directo", "Diverso"],
              },
              {
                name: "Coffee Fest",
                image: "/assets/images/imgProjects/CoffeeFest.webp",
                details: ["Tradicional", "Sencillo", "Cultural"],
              },
              {
                name: "Papá de los Asados",
                image: "/assets/images/imgProjects/papaDeLosAsados.png",
                details: ["Minimalista", "Rústico", "Auténtico"],
              },
            ].map((project, index) => (
              <motion.div
                key={project.name}
                className="flex flex-col items-center justify-center min-w-[250px] sm:min-w-[280px] lg:min-w-[300px] p-3 sm:p-4 gap-3 sm:gap-4 mx-4 sm:mx-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-[250px] sm:w-[280px] lg:w-[300px] h-[250px] sm:h-[280px] lg:h-[300px] object-cover rounded-lg"
                />
                <h3 className="font-montreal-light font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
                  {project.name}
                </h3>
                <WordRotate
                  className="text-lg sm:text-xl lg:text-2xl font-montreal font-light text-center gap-2 whitespace-nowrap"
                  words={project.details}
                />
              </motion.div>
            ))}
          </Marquee>

          <div className="mt-8 sm:mt-12 text-center">
            <Link to="/work">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonDark>Ver más proyectos</ButtonDark>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Sección 4: Marcas */}
      <motion.section
        className="min-h-screen bg-[#e0e0e0] flex flex-col justify-center items-center py-8 sm:py-12 lg:py-16"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <h2 className="font-montreal font-light text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 text-dark text-center leading-tight">
            Marcas con las que hemos trabajado
          </h2>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:20s] py-4">
              {logos.map((logo, index) => (
                <motion.div
                  key={`brand-top-${index}`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <LogoCard {...logo} />
                </motion.div>
              ))}
            </Marquee>

            {/* Gradientes laterales para efecto de desvanecimiento */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-[#e0e0e0] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-[#e0e0e0] to-transparent z-10" />
          </div>
        </div>
      </motion.section>

      {/* Sección 5: Perfil del Productor */}
      <motion.section
        className="min-h-screen bg-[#212121] text-[#e8e8e8] py-8 sm:py-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header de la sección */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-montreal font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6">
              El Productor
            </h2>
            <p className="font-montreal font-thin text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
              Detrás de cada proyecto audiovisual exitoso hay una visión
              creativa y técnica que da vida a las ideas más ambiciosas.
            </p>
          </div>

          {/* Grid principal del perfil */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Imagen del productor */}
            <motion.div
              className="relative order-2 lg:order-1"
              variants={slideIn}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-[#e8e8e8] rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <svg
                        className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="font-montreal font-normal text-lg sm:text-xl lg:text-2xl text-white">
                      Productor Audiovisual
                    </p>
                    <p className="font-montreal font-light text-gray-300 mt-1 sm:mt-2 text-sm sm:text-base">
                      Perfil Profesional
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Badge flotante */}
              <div className="font-montreal font-normal absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-[#e8e8e8] text-black px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full shadow-lg text-sm sm:text-base">
                +10 años de experiencia
              </div>
            </motion.div>

            {/* Información del perfil */}
            <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div>
                <h3 className="font-montreal font-normal text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4">
                  David Sepulveda
                </h3>
                <p className="font-montreal font-light text-lg sm:text-xl text-[#e8e8e8] mb-4 sm:mb-6">
                  Director de Producción Audiovisual
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-montreal font-normal mb-2 sm:mb-3 text-gray-200">
                    Especialidades
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {[
                      "Transmisiones en Vivo",
                      "Documentales",
                      "Eventos Corporativos",
                      "Contenido Digital",
                      "Post-Producción",
                      "Dirección Creativa",
                    ].map((specialty, index) => (
                      <motion.div
                        key={specialty}
                        className="bg-gray-800 px-3 sm:px-4 py-2 rounded-lg text-center border border-gray-700 hover:border-[#e8e8e8] transition-colors duration-300 text-sm sm:text-base"
                        whileHover={{ scale: 1.05 }}
                      >
                        {specialty}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-montreal font-normal mb-2 sm:mb-3 text-gray-200">
                    Filosofía de Trabajo
                  </h4>
                  <p className="text-base sm:text-lg font-montreal font-light text-gray-300 leading-relaxed">
                    "Cada proyecto es una oportunidad única para contar una
                    historia. Mi enfoque combina la precisión técnica con la
                    creatividad artística, asegurando que cada frame capture la
                    esencia del mensaje que queremos transmitir."
                  </p>
                </div>

                <div>
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-montreal font-normal mb-2 sm:mb-3 text-gray-200">
                    Reconocimientos
                  </h4>
                  <ul className="space-y-2 font-montreal font-light text-gray-300 text-sm sm:text-base">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-200 rounded-full mr-3 flex-shrink-0"></span>
                      Premio Nacional de Producción Audiovisual 2023
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-200 rounded-full mr-3 flex-shrink-0"></span>
                      Mejor Transmisión en Vivo - Festival Digital 2022
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-gray-200 rounded-full mr-3 flex-shrink-0"></span>
                      Certificación Internacional en Producción 4K
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sección 6: Contacto */}
      <motion.section
        className="min-h-screen grid place-items-center py-8 sm:py-12 bg-[#e8e8e8]"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "-50px 0px" }}
      >
        <div className="max-w-[1500px] mx-auto w-full px-4 sm:px-6 lg:px-12">
          {/* Layout responsivo usando flex en lugar de grid para móvil */}
          <div className="flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-5 gap-4 lg:gap-4">
            {/* Título */}
            <div className="lg:col-span-3 lg:row-span-2 lg:row-start-2 mb-6 lg:mb-0">
              <h1 className="font-montreal-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-[#212121] text-center lg:text-left leading-tight">
                ¿Listo para trabajar juntos?
              </h1>
            </div>

            {/* Información de contacto */}
            <div className="lg:col-span-3 lg:col-start-1 lg:row-start-4 mb-6 lg:mb-0 hidden sm:block">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <motion.div whileHover={{ scale: 1.05 }}>
                  <ContactInfoButton className="text-[#212121] text-sm sm:text-base">
                    Email: contacto@ciclorama.com
                  </ContactInfoButton>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <ContactInfoButton className="text-sm sm:text-base">
                    Teléfono: +1 234 567 890
                  </ContactInfoButton>
                </motion.div>
              </div>
            </div>

            {/* Botón de contacto */}
            <div className="lg:col-start-5 lg:row-start-3 flex justify-center lg:justify-end lg:items-start">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <ButtonLigth onClick={handleOpenModal}>¡Hablemos!</ButtonLigth>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Modal con el formulario */}
        <ModalContact open={openModal} onClose={handleOpenModal} />
      </motion.section>

      <Footer />
    </div>
  );
};

export default Home;
