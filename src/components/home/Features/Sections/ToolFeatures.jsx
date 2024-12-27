import { toolFeatures } from "../../../../constants/toolFeatures";

const ToolFeatures = () => {
  return (
    <div id="facilidades" className="flex flex-col gap-4 w-fit mx-auto text-center py-12">
      <h1 className="text-4xl font-bold text-white">
        Facilidades da Ferramenta
      </h1>
      <div className="grid grid-cols-2 mt-2 max-w-xl gap-3 max-sm:grid-cols-1 max-sm:gap-10">
        {toolFeatures.map((feature, index) => (
          <div
            style={{ fontFamily: "Poppins" }}
            key={index}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                {index + 1}
              </span>
              <h1 className="text-white text-start text-sm">{feature.featureTitle}</h1>
            </div>
            <span className="text-slate-400 text-sm font-light text-start">
              {feature.featureDescription}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolFeatures;
