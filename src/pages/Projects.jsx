const Projects = () => {
    return (
        <section id="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                    <div className="project-image">Project 1 Image</div>
                    <h3>Project Name 1</h3>
                    <p>Short description of the project. What technologies were used and what was accomplished.</p>
                    <div className="project-links">
                        <a href="#" className="project-link">Live Demo</a>
                        <a href="#" className="project-link">GitHub</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">Project 2 Image</div>
                    <h3>Project Name 2</h3>
                    <p>Short description of the project. What technologies were used and what was accomplished.</p>
                    <div className="project-links">
                        <a href="#" className="project-link">Live Demo</a>
                        <a href="#" className="project-link">GitHub</a>
                    </div>
                </div>
                <div className="project-card">
                    <div className="project-image">Project 3 Image</div>
                    <h3>Project Name 3</h3>
                    <p>Short description of the project. What technologies were used and what was accomplished.</p>
                    <div className="project-links">
                        <a href="#" className="project-link">Live Demo</a>
                        <a href="#" className="project-link">GitHub</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;