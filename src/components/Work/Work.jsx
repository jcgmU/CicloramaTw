// src/components/Work/Work.jsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animate, scroll } from "motion";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import BoxReveal from "@/components/ui/box-reveal";
import Footer from "../Footer/Footer";
import ButtonLigth from "../Buttons/ButtonLigth";

// Utilidad para la burbuja de imagen en hover
const Bubble = ({ img, x, y }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 1, scale: 1, x, y }}
    exit={{ opacity: 0, scale: 0.7 }}
    transition={{ type: "spring", stiffness: 300, damping: 25 }}
    className="pointer-events-none fixed z-[10000] top-0 left-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden shadow-lg border-2 border-[#2e2e2e] bg-white"
  >
    <img src={img} alt="thumb" className="w-full h-full object-cover" />
  </motion.div>
);

// Variants para Framer Motion
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Work = () => {
  // === Data de proyectos (7) ===
  const projectsData = [
    {
      id: 1,
      title: "BogotaEats a Cielo Abierto",
      thumbnail: "/assets/images/imgProjects/Bogotaeats.png",
      description:
        "El festival gastronómico de la ciudad, en su cuarta edición, reúne a los mejores exponentes de la escena restaurantera de la capital.",
      details:
        "minima quae facere dolores, labore vitae quaerat recusandae ratione atque placeat ducimus itaque",
    },
    {
      id: 2,
      title: "Coffee Fest",
      thumbnail: "/assets/images/imgProjects/CoffeeFest.webp",
      description:
        "Festival busca conectar a caficultores con apasionados por el mundo del café. La cuarta edición del festival más importante de la bebida tradicional.",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis rerum culpa ullam praesentium",
    },
    {
      id: 3,
      title: "El Papa de los Asados",
      thumbnail: "/assets/images/imgProjects/papaDeLosAsados.png",
      description:
        "Propuesta gastronómica que se enfoca en los asados más auténticos y deliciosos de la región.",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum culpa ullam praesentium",
    },
    {
      id: 4,
      title: "Cafés de Colombia Expo",
      thumbnail: "/assets/images/imgProjects/CafesColombiaExpo.jpg",
      description:
        "Cafés de Colombia Expo es la feria de cafés especiales más importante de nuestro país y de América Latina.",
      details:
        "Es el evento que integra toda la cadena de valor del café y ofrece un escenario para exponer.",
    },
    {
      id: 5,
      title: "Expo 2 Ruedas",
      thumbnail: "/assets/images/imgProjects/Expo2Ruedas.jpg",
      description:
        "Expo 2 Ruedas llega a la capital para dinamizar la industria de las motocicletas y la movilidad alternativa.",
      details:
        "El escenario que reúne a los amantes y apasionados de las 2 ruedas, con las marcas más importantes del mercado.",
    },
    {
      id: 6,
      title: "FILBo",
      thumbnail: "/assets/images/imgProjects/Filbo.jpg",
      description:
        "La Feria Internacional del Libro de Bogotá es el escenario natural para que los actores de la cadena den a conocer sus novedades.",
      details:
        "Acercando a los lectores a través de la programación cultural, con actividades e invitados especiales.",
    },
    {
      id: 7,
      title: "Salon Internacional Del Automovil",
      thumbnail: "/assets/images/imgProjects/SalonAutomovil.jpg",
      description:
        "La feria es el espacio ideal para el sector automotor de Colombia, con autos, motos, SUV y mucho más.",
      details:
        "Asisten interesados en la adquisición de vehículos, con las marcas más importantes y las últimas tendencias del sector.",
    },
  ];

  // === Estado para Modal ===
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // === Estados para el acordeón ===
  const [openId, setOpenId] = useState(null);
  // === Estados ===
  const [bubble, setBubble] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const hoverTimeoutRef = React.useRef(null);

  // Abre/Cierra el modal
  const handleOpen = (project) => {
    if (project) setSelectedProject(project);
    setOpen((prev) => !prev);
  };

  // Maneja expandir/replegar en acordeón
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Función de debounce para evitar parpadeos
  const useDebounce = (callback, delay) => {
    const timeoutRef = React.useRef(null);

    return (...args) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  };

  // === Manejadores de eventos ===
  const handleProjectHoverStart = (project) => (e) => {
    // Limpia cualquier timeout pendiente
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    // Establece el proyecto y la burbuja inmediatamente
    setHoveredProject(project);
    setBubble({
      img: project.thumbnail,
      x: e.clientX + 20,
      y: e.clientY - 40,
    });
  };

  const handleProjectHoverEnd = () => {
    // Usa timeout para evitar parpadeos al pasar entre elementos
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredProject(null);
      setBubble(null);
    }, 150); // Tiempo un poco mayor para permitir transiciones suaves
  };

  // Función para manejar el movimiento del mouse
  const handleMouseMove = (e) => {
    if (hoveredProject && bubble) {
      // Solo actualiza la posición cuando hay un proyecto en hover
      setBubble({
        img: hoveredProject.thumbnail,
        x: e.clientX + 20,
        y: e.clientY - 40,
      });
    }
  };

  // Limpia el timeout cuando el componente se desmonta
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // === Efecto de Parallax + Progreso ===
  useEffect(() => {
    // Resetear el scroll al inicio de la página
    window.scrollTo(0, 0);

    // Barra de progreso
    scroll(
      animate(".progress-bar-work", { scaleX: [0, 1] }, { ease: "linear" })
    );

    // Parallax
    document.querySelectorAll("[data-parallax-work]").forEach((el) => {
      scroll(animate(el, { y: [-60, 60] }, { ease: "linear" }), {
        target: el,
      });
    });
  }, []);

  return (
    <div onMouseMove={handleMouseMove}>
      {/* Sección 1: Hero oscuro */}
      <motion.section
        className="h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          data-parallax-work
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-montreal font-bold text-[#212121] mb-3 sm:mb-4 border-b-[2px] sm:border-b-[3px] border-[#212121] text-center"
        >
          Nuestro Trabajo
        </motion.h1>
        <motion.p
          variants={itemVariants}
          data-parallax-work
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-montreal font-light text-gray-600 max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] text-center leading-relaxed"
        >
          Hemos colaborado con diversos festivales y eventos, siempre entregando
          la mejor calidad audiovisual. Explora nuestro portafolio.
        </motion.p>
      </motion.section>

      {/* === SECCIÓN 2: ACORDEÓN DE PROYECTOS === */}

      <motion.section
        className="min-h-fit py-6 sm:py-8 lg:py-10 bg-white relative w-full overflow-visible"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="w-full pb-6 sm:pb-8 lg:pb-10">
          <motion.div variants={itemVariants} data-parallax-work>
            <div className="w-full space-y-0 px-0">
              {projectsData.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className={`relative bg-[#23232a] rounded-none shadow-lg cursor-pointer transition-all overflow-hidden w-full`}
                  whileHover={{ scale: openId === project.id ? 1 : 1.005 }}
                  onClick={() => handleToggle(project.id)}
                  onMouseEnter={handleProjectHoverStart(project)}
                  onMouseLeave={handleProjectHoverEnd}
                >
                  {/* Barra principal (cerrada) */}
                  <div className="flex my-4 sm:my-5 lg:my-7 ml-4 sm:ml-12 md:ml-32 lg:ml-64 items-center h-12 sm:h-16 lg:h-20 px-4 sm:px-8 lg:px-12 select-none z-10">
                    <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-thin text-[#e8e8e8] mr-2 sm:mr-3 lg:mr-4">
                      {idx + 1}
                    </span>
                    <span className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-thin text-[#e8e8e8] tracking-wide">
                      {project.title}
                    </span>
                  </div>

                  {/* Contenido expandido (simple) */}
                  <AnimatePresence>
                    {openId === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="bg-[#1c1c24] border-t border-[#e8e8e8] w-full"
                      >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-8 lg:p-12 max-w-7xl mx-auto">
                          {/* Imagen */}
                          <div className="w-full flex justify-center items-center order-2 lg:order-1">
                            <img
                              src={project.thumbnail}
                              alt={project.title}
                              className="max-w-full h-auto rounded-lg shadow-lg border-2 border-[#e8e8e8] transition-transform transform hover:scale-105"
                            />
                          </div>

                          {/* Información */}
                          <div className="flex flex-col justify-center order-1 lg:order-2">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-montreal font-normal text-[#e8e8e8] mb-3 sm:mb-4">
                              {project.title}
                            </h3>
                            <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-montreal font-light mb-3 sm:mb-4 leading-relaxed">
                              {project.description}
                            </p>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl font-montreal font-thin leading-relaxed">
                              {project.details}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Barra de Progreso */}
      <div
        className="
          progress-bar-work
          fixed bottom-0 left-0
          w-full h-[3px] sm:h-[4px] lg:h-[6px]
          bg-[#1400c6]
          transform scale-x-0 origin-left
        "
      />

      {/* Burbuja de hover */}
      <AnimatePresence>
        {bubble && <Bubble img={bubble.img} x={bubble.x} y={bubble.y} />}
      </AnimatePresence>

      {/* Modal con validación para evitar error */}
      {selectedProject && (
        <Dialog
          open={open}
          handler={handleOpen}
          size="md"
          className="max-w-[95vw] sm:max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw]"
        >
          <DialogHeader className="px-4 sm:px-6">
            <BoxReveal boxColor="#1400c6" duration={0.6}>
              <Typography
                variant="h5"
                color="blue-gray"
                className="text-lg sm:text-xl md:text-2xl"
              >
                {selectedProject.title}
              </Typography>
            </BoxReveal>
          </DialogHeader>
          <DialogBody
            divider
            className="px-4 sm:px-6 max-h-[60vh] overflow-y-auto"
          >
            <div className="flex flex-col items-center">
              <img
                alt={selectedProject.title}
                className="w-full max-w-[300px] sm:max-w-[400px] h-auto object-cover rounded-md"
                src={selectedProject.thumbnail}
              />
              <BoxReveal boxColor="#1400c6" duration={0.5}>
                <p className="text-sm sm:text-base text-gray-700 mt-4 sm:mt-6 text-left leading-relaxed">
                  {selectedProject.description}
                </p>
              </BoxReveal>
            </div>
          </DialogBody>
          <DialogFooter className="px-4 sm:px-6">
            <ButtonLigth onClick={handleOpen}>Cerrar</ButtonLigth>
          </DialogFooter>
        </Dialog>
      )}
      <Footer />
    </div>
  );
};

export default Work;
