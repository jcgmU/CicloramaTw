// src/components/Work/Work.js
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import BoxReveal from "@/components/ui/box-reveal";

const projectsData = [
  {
    id: 1,
    title: "Bogotá Eats",
    thumbnail: "src/assets/images/imgProjects/Bogotaeats.png",
    description: "Lorem ipsum dolor sit amet consectetur ",
    details:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima accusamus placeat consequuntur sed suscipit, repudiandae vel, non minus temporibus excepturi numquam est, dolorem exercitationem sequi ex recusandae nemo quod earum!",
  },
  {
    id: 2,
    title: "Coffe Fest",
    thumbnail: "src/assets/images/imgProjects/CoffeeFest.webp",
    description: "Adipisicing elit. Quia quaerat quidem ",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi est quae quisquam totam nemo repellat similique minima ",
  },
  {
    id: 2,
    title: "El papa de los asados",
    thumbnail: "src/assets/images/imgProjects/papaDeLosAsados.png",
    description: "Ipsum provident mollitia commodi cum doloribus",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium id ducimus doloribus at dolore ",
  },
  // Añade más proyectos según sea necesario
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="min-h-screen py-[150px] px-12 bg-[#1e1e1e] flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleProjectClick}
          />
        ))}
      </div>
      {selectedProject && (
        <div
          key={`${selectedProject.id}-${Date.now()}`}
          className="mt-12 w-full text-center"
        >
          <BoxReveal boxColor="#1400c6" duration={0.6}>
            <h2 className="text-6xl text-white">{selectedProject.title}</h2>
          </BoxReveal>
          <BoxReveal boxColor="#1400c6" duration={0.5}>
            <p className="text-3xl text-left text-gray-300 mt-10">
              {selectedProject.details}
            </p>
          </BoxReveal>
        </div>
      )}
    </section>
  );
};

export default Work;
