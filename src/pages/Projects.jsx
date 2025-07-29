import React from 'react';
import './Projects.css';

const projectList = [
  {
    title: 'AI-based Virtual Job Interview Coach',
    description: 'A smart virtual assistant that helps users practice and improve their interview skills using AI feedback.',
    link: '', 
  },
  {
    title: 'Portfolio Website',
    description: 'Personal website showcasing my projects, skills, and certificates with animations using React and Framer Motion.',
    link: '', 
  },
  {
    title: 'AI-based Early Diagnosis of Diabetic Retinopathy',
    description: 'Machine learning project for detecting diabetic retinopathy from retinal images for early diagnosis.',
    link: '',
  },
  {
    title: 'Tic-Tac-Toe Game',
    description: 'A fun and interactive web-based tic-tac-toe game built with HTML, CSS, and JavaScript.',
    link: '',
  },
  {
    title: 'Currency Converter using JavaScript',
    description: 'Simple real-time currency converter using JavaScript and an external currency API.',
    link: '',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
