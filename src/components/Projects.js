import React from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"]
    },
    {
      id: 2,
      title: "AI-Powered Analytics", 
      description: "Machine learning platform that processes large datasets to provide predictive insights and automated reporting for business intelligence.",
      tech: ["Python", "TensorFlow", "FastAPI", "Docker", "AWS"]
    },
    {
      id: 3,
      title: "Real-Time Chat System",
      description: "Scalable messaging application with end-to-end encryption, file sharing, and multi-platform synchronization capabilities.",
      tech: ["TypeScript", "Socket.io", "MongoDB", "React Native", "WebRTC"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="scroll-reveal">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card scroll-reveal" style={{animationDelay: `${index * 0.2}s`}}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;