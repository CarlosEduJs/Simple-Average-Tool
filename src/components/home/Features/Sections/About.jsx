const About = () => {
  return (
    <div id="about" className="flex flex-col gap-4 w-fit mx-auto text-center py-12">
      <h1 className="text-4xl font-bold text-white">Sobre o site</h1>
      <p className="text-start text-sm font-light text-slate-400 max-w-lg tracking-wider">
        O Simple Average Tool é uma ferramenta prática e intuitiva desenvolvida
        para facilitar o cálculo de médias de forma simples e rápida. Criado com
        o objetivo de atender diferentes necessidades, o site oferece uma
        interface amigável e recursos que permitem calcular médias simples e
        ponderadas com facilidade. <br /> Ideal para estudantes, professores e
        profissionais, o Simple Average Tool não apenas simplifica o processo de
        cálculo, mas também traz funcionalidades extras, como a organização de
        grupos de dados e personalização dos cálculos. <br /> Com design moderno e
        adaptado para dispositivos móveis, o site garante uma experiência
        eficiente e agradável, ajudando você a economizar tempo enquanto obtém
        resultados precisos. <br /> Experimente agora e descubra como é fácil calcular
        médias com o <span style={{fontFamily: "Grand Hotel"}} className="text-xl text-white">Simple Average Tool!</span>
      </p>
    </div>
  );
};

export default About;
