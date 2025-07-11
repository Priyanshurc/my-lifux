import HeroTextBlock from "../molecules/HeroTextBlock";

const HeroSection = () => (
  <section className="bg-black text-white px-8 py-20 flex flex-col md:flex-row items-center justify-between min-h-screen">
    
    <HeroTextBlock />
  </section>
);

export default HeroSection;
