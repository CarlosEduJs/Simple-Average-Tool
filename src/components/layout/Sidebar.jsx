import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { basicsOptsNavs } from "../../constants/basicsOptsNavs";
import Logo from "../common/Logo/Logo";

const Sidebar = ({ isOpen, close }) => {
  if (!isOpen) return null;

  return (
    <div className="w-72 h-full bg-primary md:hidden rounded-tl-2xl py-4 px-5 flex flex-col gap-5 fixed top-0 right-0 z-10">
      <ChevronLeftIcon
        onClick={close}
        className="w-6 text-white cursor-pointer"
      />
      <nav>
        <ul className="flex flex-col gap-2">
          {basicsOptsNavs.map((opt, index) => (
            <li
              key={index}
              className="flex items-center px-3 py-2 w-full transition-all rounded-lg hover:bg-primary"
              onClick={close}
            >
              <a href={`#${opt.href}`} className="text-white text-sm">
                {opt.titleOpt}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Logo/>
    </div>
  );
};

export default Sidebar;
