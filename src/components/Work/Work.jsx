// src/components/Work/Work.jsx

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { animate, scroll } from "motion";
import {
  Carousel,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import BoxReveal from "@/components/ui/box-reveal";
import Footer from "../Footer/Footer";
import ButtonLigth from "../Buttons/ButtonLigth";
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
      title: "Coffe Fest",
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

  // Abre/Cierra el modal
  const handleOpen = (project) => {
    if (project) setSelectedProject(project);
    setOpen((prev) => !prev);
  };

  // === Efecto de Parallax + Progreso ===
  useEffect(() => {
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
    <div>
      {/* Sección 1: Hero oscuro */}
      <motion.section
        className="h-screen bg-[#212121] flex flex-col justify-center items-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h1
          variants={itemVariants}
          data-parallax-work
          className="text-6xl text-[#e8e8e8] font-extrabold mb-4 border-b-[3px] border-[#e0e0e0]"
        >
          Nuestro Trabajo
        </motion.h1>
        <motion.p
          variants={itemVariants}
          data-parallax-work
          className="text-xl md:text-2xl text-gray-300 max-w-[800px] text-center"
        >
          Hemos colaborado con diversos festivales y eventos, siempre entregando
          la mejor calidad audiovisual. Explora nuestro portafolio.
        </motion.p>
      </motion.section>

      {/* Sección 2: Carrusel Claro */}
      <motion.section
        className="min-h-screen py-[100px] px-4 md:px-12 bg-[#e8e8e8]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[900px] w-full mx-auto">
          {/* Carrusel con thumbnails en la navegación */}
          <motion.div variants={itemVariants} data-parallax-work>
            <Carousel
              className="rounded-xl"
              prevArrow={({ handlePrev }) => (
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-black/30 text-white p-2 rounded-full"
                >
                  ←
                </button>
              )}
              nextArrow={({ handleNext }) => (
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-black/30 text-white p-2 rounded-full"
                >
                  →
                </button>
              )}
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-0 left-1/2 z-50 flex -translate-x-1/2 gap-2 pb-8">
                  {new Array(length).fill("").map((_, i) => {
                    // Thumbnail = la imagen del proyecto
                    // en la posición i (si existe)
                    const thumb = projectsData[i]
                      ? projectsData[i].thumbnail
                      : "/assets/images/default.jpg";

                    return (
                      <img
                        key={`thumb-${i}`}
                        src={thumb}
                        alt={`thumb-${i}`}
                        className={`h-12 w-12 object-cover rounded-xl border-2 cursor-pointer ${
                          activeIndex === i
                            ? "border-[#1400c6]"
                            : "border-gray-300 opacity-60"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    );
                  })}
                </div>
              )}
            >
              {projectsData.map((proj) => (
                <img
                  key={proj.id}
                  src={proj.thumbnail}
                  alt={proj.title}
                  // Forzando 900x700
                  className="
                    w-[900px] h-[700px]
                    object-cover
                    mx-auto
                    rounded-xl
                    cursor-pointer
                  "
                  onClick={() => handleOpen(proj)}
                />
              ))}
            </Carousel>
          </motion.div>
        </div>
      </motion.section>

      {/* Barra de Progreso */}
      <div
        className="
          progress-bar-work
          fixed bottom-0 left-0
          w-full h-[3px]
          bg-[#1400c6]
          transform scale-x-0 origin-left
        "
      />

      {/* Modal (Tamaño MD) */}
      <Dialog
        open={open}
        handler={handleOpen}
        size="md" // ← Ajustamos a "md"
      >
        <DialogHeader>
          {selectedProject && (
            <BoxReveal boxColor="#1400c6" duration={0.6}>
              <Typography variant="h5" color="blue-gray">
                {selectedProject.title}
              </Typography>
            </BoxReveal>
          )}
        </DialogHeader>
        <DialogBody divider>
          {selectedProject && (
            <div className="flex flex-col items-center">
              <img
                alt={selectedProject.title}
                className="w-full max-w-[400px] h-[250px] object-cover rounded-md"
                src={selectedProject.thumbnail}
              />
              <BoxReveal boxColor="#1400c6" duration={0.5}>
                <p className="text-base text-gray-700 mt-6 text-left">
                  {selectedProject.description}
                </p>
              </BoxReveal>
            </div>
          )}
        </DialogBody>
        <DialogFooter>
          <ButtonLigth onClick={handleOpen}>Cerrar</ButtonLigth>
        </DialogFooter>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Work;
