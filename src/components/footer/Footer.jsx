import './Footer.css';

const Footer = () => {
    return (
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
    )
}

export default Footer;