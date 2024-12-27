import Calculator from "./Features/Calculator/Calculator";
import QuickTips from "./Features/Sections/QuickTips";
import ToolFeatures from "./Features/Sections/ToolFeatures";
import About from "./Features/Sections/About";

const Home = () => {
  return (
    <div className="flex flex-col max-sm:px-3 max-sm:w-[90%]">
      <Calculator />
      <QuickTips />
      <ToolFeatures />
      <About />
    </div>
  );
};

export default Home;
