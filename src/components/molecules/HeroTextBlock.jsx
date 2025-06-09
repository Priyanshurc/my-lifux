import Heading from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import Button from "../atoms/Button";

const HeroTextBlock = () => (
  <div className="text-left space-y-6">
    <Heading text="Your API: enterprise-ready in a click /" />
    <Paragraph text="Everything you need to create great integration experiences for your APIs—from native-language SDKs and Terraform providers, to friction-free docs." />
    <div className="flex gap-4">
      <Button text="Try it now ➜" variant="primary" />
      <Button text="Watch Demo" variant="secondary" />
    </div>
  </div>
);

export default HeroTextBlock;
