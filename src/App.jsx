import { useState } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Sidebar from "./components/layout/Sidebar";
import Home from "./components/home/Home";

import { Routes, Route } from "react-router-dom";

import SEO from "./components/Seo";

function App() {
  const [sidebarOpen, setIsSidebarOpen] = useState(false);

  const handleShowSidebar = () => {
    setIsSidebarOpen(true);
  };
  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <div className=" w-screen h-full pt-32 flex flex-col">
      <SEO
        title="Calcular Média"
        description="Simple Average Tool é uma ferramenta intuitiva para calcular médias simples, ponderadas e personalizadas. Ideal para estudantes, professores e profissionais, permite gerenciar grupos de dados com facilidade e precisão"
        keywords="calcular,calcule,medias,médias,simples,ponderada,geométrica,geometrica,harmônica,harmonica"
        url="https://simple-average-tool.vercel.app"
      />
      <Header showSidebar={handleShowSidebar} />
      {sidebarOpen && (
        <div
          onClick={handleCloseSidebar}
          className="w-full h-full fixed top-0 left-0 z-0 bg-black/40 md:hidden"
        />
      )}
      <Sidebar isOpen={sidebarOpen} close={handleCloseSidebar} />
      <div className="flex items-center justify-center scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
