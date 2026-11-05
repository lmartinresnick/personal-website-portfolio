import profilePic from '../../assets/images/profile-pic.jpeg';
import Link from 'next/link';

const HomePage = () => {
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
                        <Link className="primary-button" href="/about/">
                            view work history
                        </Link>
                        <Link className="secondary-button" href="/contact/">
                            contact me
                        </Link>
                    </div>
                </div>
                <div className="profile-image-container">
                    <div className="profile-image">
                        <img src={profilePic.src} width={profilePic.width} height={profilePic.height} alt="profile" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
