// src/components/Work/Work.js
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Proyecto Uno",
    thumbnail: "/assets/images/project1.jpg",
    description: "Descripción breve del Proyecto Uno.",
    details: "Detalles extensos sobre el Proyecto Uno.",
  },
  {
    id: 2,
    title: "Proyecto Dos",
    thumbnail: "/assets/images/project2.jpg",
    description: "Descripción breve del Proyecto Dos.",
    details: "Detalles extensos sobre el Proyecto Dos.",
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
          <ProjectCard key={project.id} project={project} onClick={handleProjectClick} />
        ))}
      </div>
      {selectedProject && (
        <div className="mt-12 w-full text-center">
          <h2 className="text-4xl text-white">{selectedProject.title}</h2>
          <p className="text-lg text-gray-300 mt-4">{selectedProject.details}</p>
        </div>
      )}
    </section>
  );
};

export default Work;
