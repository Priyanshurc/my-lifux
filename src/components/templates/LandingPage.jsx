import HeroSection from "../organisms/HeroSection";
import "../../styles/Landingpage.css";

const LandingPage = () => (
  <div className="landing-page">
    <main>
      <section id="home" className="section">
        <HeroSection />
      </section>

      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        {/* Add project cards here */}
      </section>

      <section id="about" className="about-section">
        <h2>About Me</h2>
        {/* Add about content here */}
      </section>

      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        {/* Add contact form/info here */}
      </section>
    </main>
  </div>
);

export default LandingPage;
