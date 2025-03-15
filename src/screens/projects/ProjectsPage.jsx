import './ProjectsPage.css';

const ProjectsPage = () => {
    return (
        <main className="main">
            <section className="projects-section">
                <h2 className="section-title">projects</h2>
                <div className="projects-grid">
                    <div className="project-card">
                        <div className="project-image">
                            {/* Project image */}
                        </div>
                        <div className="project-content">
                            <h3>project name</h3>
                            <p className="project-description">
                                a brief description of the project, what it does, and the technologies used.
                            </p>
                            <div className="tech-stack">
                                <span className="tech-tag">react</span>
                                <span className="tech-tag">node.js</span>
                                <span className="tech-tag">mongodb</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link">view live</a>
                                <a href="#" className="project-link">github</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image">
                            {/* Project image */}
                        </div>
                        <div className="project-content">
                            <h3>project name</h3>
                            <p className="project-description">
                                a brief description of the project, what it does, and the technologies used.
                            </p>
                            <div className="tech-stack">
                                <span className="tech-tag">react</span>
                                <span className="tech-tag">firebase</span>
                                <span className="tech-tag">tailwind css</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link">view live</a>
                                <a href="#" className="project-link">github</a>
                            </div>
                        </div>
                    </div>

                    <div className="project-card">
                        <div className="project-image">
                            {/* Project image */}
                        </div>
                        <div className="project-content">
                            <h3>project name</h3>
                            <p className="project-description">
                                a brief description of the project, what it does, and the technologies used.
                            </p>
                            <div className="tech-stack">
                                <span className="tech-tag">vue.js</span>
                                <span className="tech-tag">express</span>
                                <span className="tech-tag">postgresql</span>
                            </div>
                            <div className="project-links">
                                <a href="#" className="project-link">view live</a>
                                <a href="#" className="project-link">github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}

export default ProjectsPage;