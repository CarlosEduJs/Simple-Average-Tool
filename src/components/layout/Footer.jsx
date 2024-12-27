import Logo from "../common/Logo/Logo";

const Footer = () => {
  return (
    <footer className="w-full px-10 py-5 bg-primary">
      <div className="flex items-center justify-between max-sm:flex-col max-sm:gap-3">

        <Logo />
        <span style={{fontFamily: "Grand Hotel"}} className="text-xl text-white">Obrigado por usar o site</span>
        <div className="flex flex-col gap-2">
          <span className="text-white text-xs">Copyright 2024. All rights</span>
          <a target="_blank" href="https://github.com/CarlosEduJs" className="text-white text-xs">Criado por: CarlosEduJs</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
