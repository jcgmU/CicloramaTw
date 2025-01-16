// src/components/Work/Work.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { animate, scroll } from "motion";
import BoxReveal from "@/components/ui/box-reveal";
import ProjectCard from "./ProjectCard";
import Footer from "../Footer/Footer";

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

function ProjectRow({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div className="mb-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleClick(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <div
          key={`${selectedProject.id}-${Date.now()}`}
          className="mt-12 w-full text-left"
        >
          <BoxReveal boxColor="#1400c6" duration={0.6}>
            <h2 className="text-5xl text-[#212121]">{selectedProject.title}</h2>
          </BoxReveal>
          <BoxReveal boxColor="#1400c6" duration={0.5}>
            <p className="text-2xl text-[#212121] mt-6">
              {selectedProject.details}
            </p>
          </BoxReveal>
        </div>
      )}
    </div>
  );
}

// Variants
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
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Work = () => {
  // Data
  const projectsData = [
    {
      id: 1,
      title: "BogotaEats a Cielo Abierto",
      thumbnail: "src/assets/images/imgProjects/Bogotaeats.png",
      description:
        "El festival gastronómico de la ciudad, en su cuarta edición, reúne a los mejores exponentes de la escena restaurantera de la capital.",
      details:
        "minima quae facere dolores, labore vitae quaerat recusandae ratione atque placeat ducimus itaque",
    },
    {
      id: 2,
      title: "Coffe Fest",
      thumbnail: "src/assets/images/imgProjects/CoffeeFest.webp",
      description:
        "festival busca conectar a caficultores con apasionados por el mundo del café. La cuarta edición del festival más importante de la bebida tradici...",
      details:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis rerum culpa ullam praesentium",
    },
    {
      id: 3,
      title: "El Papa de los Asados",
      thumbnail: "src/assets/images/imgProjects/papaDeLosAsados.png",
      description: "Lorem ipsum...",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis rerum culpa ullam praesentium",
    },
    {
      id: 4,
      title: "Cafés de Colombia Expo",
      thumbnail: "src/assets/images/imgProjects/CafesColombiaExpo.jpg",
      description:
        "Cafés de Colombia Expo es la feria de cafés especiales más importante...",
      details:
        "Cafés de Colombia Expo es la feria de cafés especiales más importante de nuestro país y de América Latina. Es el evento que integra toda la cadena de valor del café y ofrece un escenario para exponer ",
    },
    {
      id: 5,
      title: "Expo 2 Ruedas",
      thumbnail: "src/assets/images/imgProjects/Expo2Ruedas.jpg",
      description:
        "Expo 2 Ruedas llega a la capital del país para dinamizar la industria de las motocicletas y la...",
      details:
        "Expo 2 Ruedas llega a la capital del país para dinamizar la industria de las motocicletas y la movilidad alternativa, el escenario que reúne a los amantes y apasionados de las 2 ruedas, con las marcas más importantes del mercado, ",
    },
    {
      id: 6,
      title: "FILBo",
      thumbnail: "src/assets/images/imgProjects/Filbo.jpg",
      description:
        "La Feria Internacional del Libro de Bogotá es el escenario natural para que los actores",
      details:
        "La Feria Internacional del Libro de Bogotá es el escenario natural para que los actores de la cadena den a conocer sus novedades a sus lectores, acercándolos a través de la programación cultural, ",
    },
    {
      id: 7,
      title: "Salon Internacional Del Automovil",
      thumbnail: "src/assets/images/imgProjects/SalonAutomovil.jpg",
      description:
        "La feria es el espacio ideal para el sector automotor de Colombia, donde asisten interesados en la adquisición de autos, motos, SUV vehículos utilitarios y de carga ligera, entre otros.",
      details:
        "La feria es el espacio ideal para el sector automotor de Colombia, donde asisten interesados en la adquisición de autos, motos, SUV vehículos utilitarios y de carga ligera, entre otros. ",
    },
  ];

  const chunkedProjects = chunkArray(projectsData, 3);

  // Parallax + progress
  useEffect(() => {
    scroll(
      animate(".progress-bar-work", { scaleX: [0, 1] }, { ease: "linear" })
    );

    document.querySelectorAll("[data-parallax-work]").forEach((el) => {
      scroll(animate(el, { y: [-60, 60] }, { ease: "linear" }), {
        target: el,
      });
    });
  }, []);

  return (
    <div>
      {/* Sección oscura superior */}
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

      {/* Sección clara inferior */}
      <motion.section
        className="min-h-screen py-[100px] px-4 md:px-12 bg-[#e8e8e8]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="max-w-[1500px] w-full mx-auto">
          {chunkedProjects.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              variants={itemVariants}
              data-parallax-work
              className="mb-10"
            >
              <ProjectRow projects={row} />
              <hr className="w-full h-px bg-[#e0e0e0] border-0 my-8" />
            </motion.div>
          ))}
        </div>

        <div
          className="
            progress-bar-work
            fixed bottom-0 left-0
            w-full h-[3px]
            bg-[#1400c6]
            transform scale-x-0 origin-left
          "
        />
      </motion.section>

      <Footer />
    </div>
  );
};

export default Work;
