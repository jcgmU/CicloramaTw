// src/components/Work/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="bg-[#e8e8e8] rounded-lg overflow-hidden cursor-pointer relative transition-transform duration-300 ease-in-out hover:scale-105"
      onClick={() => onClick(project)}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-5">
        <h3 className="text-[1.2rem] mb-2.5 text-dark font-bold">
          {project.title}
        </h3>
        <p className="text-[1rem] text-gray-800">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
