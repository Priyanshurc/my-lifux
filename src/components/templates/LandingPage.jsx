import HeroSection from "../organisms/HeroSection";
import "../../styles/Landingpage.css"; 

const LandingPage = () => (
  <div className="min-h-screen" style={{ paddingLeft: '22rem' , paddingRight:'11rem', paddingTop: '4rem' }}>
    <main className="pt-20"> {/* Padding to offset fixed navbar height */}
      <HeroSection />
    </main>
  </div>
);

export default LandingPage;
