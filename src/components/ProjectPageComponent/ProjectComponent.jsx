import React from "react";
import "./ProjectComponent.css"; // We'll write styling here

const projectData = [
    {
        title: "Project One",
        description: "This is the first project. It showcases our frontend work.",
        image: "https://via.placeholder.com/150",
        link: "https://google.com",
    },
    {
        title: "Project Two",
        description: "This is the second project. It focuses on backend systems.",
        image: "https://via.placeholder.com/150",
        link: "https://google.com",
    },
    {
        title: "Project Three",
        description: "This is the third project. A full-stack solution example.",
        image: "https://via.placeholder.com/150",
        link: "https://google.com",
    },
];

function ProjectComponent() {
    return (
        <div className="project-container">
            <h1>Our Projects</h1>
            {projectData.map((project, index) => (
                <div
                    key={index}
                    className={`project-card ${index % 2 === 0 ? "left-img" : "right-img"}`}
                    onClick={() => window.open(project.link, "_blank")}
                >
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-description">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProjectComponent;
