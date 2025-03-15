import './ContactPage.css';

const ContactPage = () => {
    return (
        <main className="main">
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
        </main>
    )
}

export default ContactPage;