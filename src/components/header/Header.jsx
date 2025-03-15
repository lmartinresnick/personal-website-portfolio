import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoute } from '../../utils/RouteContext';
import './Header.css';
const Header = () => {
    const [activeSection, setActiveSection] = useState('home');
    const navigate = useNavigate();
    const { determineRoute, RouteEnum } = useRoute();

    const handleNavClick = (section) => {
        setActiveSection(section);

        const path = determineRoute(section);
        navigate(path);
    };
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">luke martin-resnick</div>
                <nav className="nav">
                    <ul className="nav-links">
                        <li>
                            <button
                                className={activeSection === RouteEnum.HOME ? 'active' : ''}
                                onClick={() => handleNavClick(RouteEnum.HOME)}
                            >
                                home
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeSection === RouteEnum.ABOUT ? 'active' : ''}
                                onClick={() => handleNavClick(RouteEnum.ABOUT)}
                            >
                                about
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeSection === RouteEnum.PROJECTS ? 'active' : ''}
                                onClick={() => handleNavClick(RouteEnum.PROJECTS)}
                            >
                                projects
                            </button>
                        </li>
                        <li>
                            <button
                                className={activeSection === RouteEnum.CONTACT ? 'active' : ''}
                                onClick={() => handleNavClick(RouteEnum.CONTACT)}
                            >
                                contact
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;