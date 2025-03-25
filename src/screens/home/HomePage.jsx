import profilePic from '../../assets/images/profile-pic.jpeg';
import { useRoute } from '../../utils/RouteContext';
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate()
    const { determineRoute, RouteEnum } = useRoute()

    const handleNavClick = (route) => {
        const path = determineRoute(route);
        navigate(path);
    };

    return (
        <main className="main">
            <section className="home-section">
                <div className="intro">
                    <h1>hi, i'm <span className="highlight">luke martin-resnick</span></h1>
                    <h2>software engineer</h2>
                    <p className="bio">
                        i build exceptional digital experiences with a focus on performance and user experience.
                        currently working at <a href="https://santasailab.com/" className="highlight">santa's ai lab</a> as a founding engineer.
                    </p>
                    <div className="cta-buttons">
                        <button className="primary-button" onClick={() => handleNavClick(RouteEnum.ABOUT)}>
                            view work history
                        </button>
                        <button className="secondary-button" onClick={() => handleNavClick(RouteEnum.CONTACT)}>
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
        </main>
    );
};

export default HomePage;