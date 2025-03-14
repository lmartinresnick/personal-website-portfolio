import React, { useState } from 'react';
import './App.css';
import profilePic from './assets/images/profile-pic.jpeg';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="portfolio">
      <header className="header">
        <div className="header-content">
          <div className="logo">luke martin-resnick</div>
          <nav className="nav">
            <ul className="nav-links">
              <li>
                <button
                  className={activeSection === 'home' ? 'active' : ''}
                  onClick={() => handleNavClick('home')}
                >
                  home
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'about' ? 'active' : ''}
                  onClick={() => handleNavClick('about')}
                >
                  about
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'projects' ? 'active' : ''}
                  onClick={() => handleNavClick('projects')}
                >
                  projects
                </button>
              </li>
              <li>
                <button
                  className={activeSection === 'contact' ? 'active' : ''}
                  onClick={() => handleNavClick('contact')}
                >
                  contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        {activeSection === 'home' && (
          <section className="home-section">
            <div className="intro">
              <h1>hi, i'm <span className="highlight">luke martin-resnick</span></h1>
              <h2>software engineer</h2>
              <p className="bio">
                i build exceptional digital experiences with a focus on performance and user experience.
                currently working at <a href="https://santasailab.com/" className="highlight">santa's ai lab</a> as a founding engineer.
              </p>
              <div className="cta-buttons">
                <button className="primary-button" onClick={() => handleNavClick('projects')}>
                  view projects
                </button>
                <button className="secondary-button" onClick={() => handleNavClick('contact')}>
                  contact me
                </button>
              </div>
            </div>
            <div className="profile-image-container">
              <div className="profile-image">
                <img src={profilePic} alt="profile" />
              </div>
            </div>
          </section>
        )}

        {activeSection === 'about' && (
          <section className="about-section">
            <h2 className="section-title">about me</h2>
            <div className="about-content">
              <p>
                i'm an innovative software engineer with 5+ years of experience in ios apps, web apps, backend systems, and ai-driven solutions.
                i have a proven ability to build and scale sophisticated products in fast-paced startup environments, leveraging modern development
                frameworks, cloud services, and machine learning integrations.
              </p>
              <p>
                as a former ncaa division i dual-sport athlete in basketball and baseball, i bring exceptional teamwork and
                performance excellence to technical leadership. my approach to development is centered around creating clean,
                maintainable code that delivers exceptional user experiences.
              </p>
              <p>
                when i'm not coding, you can find me exploring new technologies, staying active through sports, and contributing to
                innovative ai-driven solutions.
              </p>

              <div className="skills-section">
                <h3>skills & technologies</h3>
                <div className="skills-grid">
                  <div className="skill-category">
                    <h4>languages</h4>
                    <div className="skills-list">
                      <span className="skill-tag">javascript</span>
                      <span className="skill-tag">typescript</span>
                      <span className="skill-tag">python</span>
                      <span className="skill-tag">html/css</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <h4>frameworks & libraries</h4>
                    <div className="skills-list">
                      <span className="skill-tag">react</span>
                      <span className="skill-tag">node.js</span>
                      <span className="skill-tag">express</span>
                      <span className="skill-tag">next.js</span>
                    </div>
                  </div>

                  <div className="skill-category">
                    <h4>tools & platforms</h4>
                    <div className="skills-list">
                      <span className="skill-tag">git</span>
                      <span className="skill-tag">aws</span>
                      <span className="skill-tag">docker</span>
                      <span className="skill-tag">figma</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="experience-section">
                <h3>work experience</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>founding engineer, full-stack</h4>
                        <span className="timeline-date">mar 2024 - mar 2025</span>
                      </div>
                      <h5>santa's ai lab</h5>
                      <p>
                        led technical development across multiple consumer ai products spanning healthcare navigation,
                        communication systems, content creation tools, and computer vision applications. architected
                        and implemented full-stack solutions using swift 6 and swiftui for ios, react.js for web interfaces,
                        and node.js for backend systems. integrated openai, anthropic, and google gemini llms.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>senior ios engineer</h4>
                        <span className="timeline-date">dec 2022 - feb 2024</span>
                      </div>
                      <h5>feels music messaging</h5>
                      <p>
                        executed comprehensive ios codebase rewrite using clean architecture and migrating from
                        storyboard to autolayout and swiftui. launched the app's public beta release with open
                        invites via testflight. engineered optimizations that reduced startup latency by 70%
                        while enhancing video and scroll performance.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>software engineer ii, ios</h4>
                        <span className="timeline-date">jun 2022 - feb 2024</span>
                      </div>
                      <h5>ltk (formerly rewardstyle, inc.)</h5>
                      <p>
                        integrated a modernized update to the creator app's product links, product search, and
                        fast pay features. led uat sessions to optimize app performance. directed the successful
                        migration from objective-c to swift while implementing solid principles and test driven
                        development. created a reusable swiftui component library.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>ios engineer</h4>
                        <span className="timeline-date">nov 2021 - jun 2022</span>
                      </div>
                      <h5>duffl</h5>
                      <p>
                        architected a native ios application using the mvc pattern with advanced design implementations.
                        implemented comprehensive quality assurance processes improving code coverage from 0.23% to 35.4%.
                        engineered a seamless payment processing system integrating multiple sdks to enable venmo,
                        apple pay, and card transactions.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>ios developer</h4>
                        <span className="timeline-date">mar 2021 - nov 2021</span>
                      </div>
                      <h5>yoke gaming</h5>
                      <p>
                        solely responsible for a complete architectural rebuild and ui/ux redesign of the version 3
                        application in 6 weeks. scaled the app to the top 10 of the sports chart in the app store
                        and gained 75k new users in two weeks, reaching over 200k total users.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>ios engineer</h4>
                        <span className="timeline-date">mar 2020 - mar 2021</span>
                      </div>
                      <h5>hidden labs, inc.</h5>
                      <p>
                        consulted with various clients such as fashion, beauty, and lifestyle in fl uencers to fully develop
                        personaliz ed ios apps from an idea to launc h
                        developed skills in uikit, ios sdks, following dry and solid principles and common architecture
                        styles like mvc and mvvm¬
                        established modular architecture enabling rapid feature iteration across multiple applications
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item">
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>full-stack engineer</h4>
                        <span className="timeline-date">jun 2019 - present</span>
                      </div>
                      <h5>brem llc</h5>
                      <p>
                        developed full-stack applications for high-pro fi le clients combining ios, web frontends, and backend
                        ser vices using swift, objective-c, react,js, and node.js¬
                        architected restful apis and responsive web applications with comprehensive analytics tracking and
                        automated testing frameworkx
                        created sophisticated mobile solutions with robust authentication systems and third-par ty integrations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
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
        )}

        {activeSection === 'contact' && (
          <section className="contact-section">
            <h2 className="section-title">get in touch</h2>
            <div className="contact-container">
              <div className="contact-info">
                <p>
                  i'm currently open to new opportunities and collaborations.
                  feel free to reach out if you'd like to work together or just say hello!
                </p>
                <div className="contact-methods">
                  <div className="contact-method">
                    <h4>email</h4>
                    <a href="mailto:lmartinresnick@gmail.com">lmartinresnick@gmail.com</a>
                  </div>
                  <div className="contact-method">
                    <h4>location</h4>
                    <p>los angeles, ca</p>
                  </div>
                </div>
                <div className="social-links">
                  <a href="https://github.com/lmartinresnick" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> github
                  </a>
                  <a href="https://linkedin.com/in/luke-mr" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> linkedin
                  </a>
                  <a href="https://twitter.com/lukeitbe" className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i> twitter
                  </a>
                </div>
              </div>
              <div className="contact-form-container">
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">message</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="submit-button">send message</button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} luke martin-resnick. all rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/lmartinresnick" target="_blank" rel="noopener noreferrer">github</a>
            <a href="https://linkedin.com/in/luke-mr" target="_blank" rel="noopener noreferrer">linkedin</a>
            <a href="https://twitter.com/lukeitbe" target="_blank" rel="noopener noreferrer">twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
