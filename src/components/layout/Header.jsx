import Logo from "../common/Logo/Logo";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { basicsOptsNavs } from "../../constants/basicsOptsNavs";

const Header = ({ showSidebar }) => {
  return (
    <div className="flex items-center justify-between px-5 w-full py-3 gap-3 fixed z-10 top-0 bg-primary/50 backdrop-blur-lg">
      <Logo />
      <Bars3Icon
        onClick={showSidebar}
        className="md:hidden text-white w-6 h-6 cursor-pointer transition-all rounded-lg hover:scale-95"
      />
      <nav className="max-md:hidden">
        <ul className="flex items-center gap-3 ">
          {basicsOptsNavs.map((opt, index) => (
            <li
              key={index}
              className="flex items-center px-3 py-1 transition-all rounded-lg hover:bg-primary"
            >
              <a href={`#${opt.href}`} className="text-white text-sm">
                {opt.titleOpt}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
