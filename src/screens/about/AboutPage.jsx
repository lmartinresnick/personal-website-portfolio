import { useState, useEffect } from 'react';
import './AboutPage.css';
import {
    bioParagraphs,
    skillsData,
    experienceData as initialExperienceData,
    contractExperienceData as initialContractExperienceData,
    sectionTitles,
    initializeWithLinkPreviews
} from '../../utils/AboutSectionDatasource';

const AboutPage = () => {
    const [experienceData, setExperienceData] = useState(initialExperienceData);
    const [contractExperienceData, setContractExperienceData] = useState(initialContractExperienceData);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadLinkPreviews() {
            setLoading(true);
            try {
                const { experienceData: updatedExperience, contractExperienceData: updatedContract } =
                    await initializeWithLinkPreviews();

                setExperienceData(updatedExperience);
                setContractExperienceData(updatedContract);
            } catch (error) {
                console.error('Failed to load link previews:', error);
                // On error, keep using the initial data
                setExperienceData(initialExperienceData);
                setContractExperienceData(initialContractExperienceData);
            } finally {
                setLoading(false);
            }
        }

        loadLinkPreviews();
    }, []);

    return (
        <main className="main">
            <section className="about-section">
                <h2 className="section-title">{sectionTitles.main}</h2>
                <div className="about-content">
                    {bioParagraphs.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}

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
                                        <div className="timeline-description">
                                            {job.description.map((line, index) => (
                                                <p key={index}>{line}</p>
                                            ))}
                                        </div>
                                        {job.links && job.links.length > 0 && (
                                            <div className="job-links-grid">
                                                {job.links.map((link, index) => (
                                                    <a
                                                        href={link.url}
                                                        key={index}
                                                        className={`job-link-item ${loading ? 'loading' : ''}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {!loading && (
                                                            <>
                                                                <img
                                                                    src={link.preview?.image || link.image}
                                                                    alt={link.preview?.title || link.text}
                                                                    className="preview-image"
                                                                />
                                                                <div className="job-link-overlay">
                                                                    <div className="preview-content">
                                                                        <h6 className="preview-title">
                                                                            {link.preview?.title || link.text}
                                                                        </h6>
                                                                    </div>
                                                                    <span className="link-icon">↗</span>
                                                                </div>
                                                            </>
                                                        )}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="experience-section">
                        <h3>{sectionTitles.contractExperience}</h3>
                        <div className="timeline">
                            {contractExperienceData.map((job, index) => (
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <div className="timeline-header">
                                            <h4>{job.title}</h4>
                                            <span className="timeline-date">{job.period}</span>
                                        </div>
                                        <h5>{job.company}</h5>
                                        <div className="timeline-description">
                                            {job.description.map((line, index) => (
                                                <p key={index}>{line}</p>
                                            ))}
                                        </div>
                                        {job.links && job.links.length > 0 && (
                                            <div className="job-links-grid">
                                                {job.links.map((link, index) => (
                                                    <a
                                                        href={link.url}
                                                        key={index}
                                                        className={`job-link-item ${loading ? 'loading' : ''}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {!loading && (
                                                            <>
                                                                <img
                                                                    src={link.preview?.image || link.image}
                                                                    alt={link.preview?.title || link.text}
                                                                    className="preview-image"
                                                                />
                                                                <div className="job-link-overlay">
                                                                    <div className="preview-content">
                                                                        <h6 className="preview-title">
                                                                            {link.preview?.title || link.text}
                                                                        </h6>
                                                                    </div>
                                                                    <span className="link-icon">↗</span>
                                                                </div>
                                                            </>
                                                        )}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

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
                </div>
            </section>
        </main>
    )
}

export default AboutPage;