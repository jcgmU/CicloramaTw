// src/components/Work/ProjectCard.jsx
import React from "react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      onClick={() => onClick(project)}
      className="
        bg-white border border-[#e0e0e0] 
        rounded-lg overflow-hidden 
        cursor-pointer relative 
        transition-transform duration-300 ease-in-out 
        hover:scale-105
      "
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-5">
        <h3 className="text-[1.2rem] mb-2.5 text-[#212121] font-bold">
          {project.title}
        </h3>
        <p className="text-[1rem] text-gray-800">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
