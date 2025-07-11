import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";
import Tagline from "../atoms/Tagline";

const HeroTextBlock = () => (
  <div className="text-left space-y-6">
    <Heading />
    <Tagline />
    <Paragraph text="I create modular, scalable systems like MyLifUX — a personal life OS for learning, productivity, and wellness." />
    
    <div className="flex gap-4">
      <Button text="View Projects" link="#projects" />
      <Button text="Download Resume" link="/Priyanshu_Chauhan_Resume.pdf" />
      <Button text="Contact Me" link="#contact" variant="outline" />
    </div>
  </div>
);

export default HeroTextBlock;
