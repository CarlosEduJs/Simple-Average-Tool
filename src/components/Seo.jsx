import { HelmetProvider, Helmet } from "react-helmet-async";
import logoIcon from "./common/Logo/logo.svg";

const SEO = ({
  title = "Calcular Média",
  description = "Simple Average Tool é uma ferramenta intuitiva para calcular médias simples, ponderadas e personalizadas. Ideal para estudantes, professores e profissionais, permite gerenciar grupos de dados com facilidade e precisão",
  keywords = "calcular,calcule,medias,médias,simples,ponderada,geométrica,geometrica,harmônica,harmonica",
  url = "https://simple-average-tool.vercel.app",
}) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logoIcon} />
        <meta property="og:url" content={url} />

        <meta name="robots" content="index,follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={url} />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;
