import './AboutPage.css';
import { bioParagraphs, skillsData, experienceData, sectionTitles } from '../../utils/AboutSectionDatasource';

const AboutPage = () => {
    return (
        <main className="main">
            <section className="about-section">
                <h2 className="section-title">{sectionTitles.main}</h2>
                <div className="about-content">
                    {bioParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

                    <div className="skills-section">
                        <h3>{sectionTitles.skills}</h3>
                        <div className="skills-grid">
                            <div className="skill-category">
                                <h4>{sectionTitles.skillCategories.languages}</h4>
                                <div className="skills-list">
                                    {skillsData.languages.map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-category">
                                <h4>{sectionTitles.skillCategories.frameworks}</h4>
                                <div className="skills-list">
                                    {skillsData.frameworks.map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="skill-category">
                                <h4>{sectionTitles.skillCategories.tools}</h4>
                                <div className="skills-list">
                                    {skillsData.tools.map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="experience-section">
                        <h3>{sectionTitles.experience}</h3>
                        <div className="timeline">
                            {experienceData.map((job, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h4>{job.title}</h4>
                                            <span className="timeline-date">{job.period}</span>
                                        </div>
                                        <h5>{job.company}</h5>
                                        <p>{job.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AboutPage;