import { CalculatorIcon } from "@heroicons/react/16/solid";

const CalculateGroupAverageBtn = ({ action }) => {
  return (
    <button
      onClick={action}
      className="flex items-center justify-center gap-3 transition-all bg-green-500 hover:bg-green-500/70 rounded-full px-4 py-2 text-primary font-bold text-xs mt-2 calculate-average-btn"
    >
      <CalculatorIcon className="w-5"/>
      Calcular Média
    </button>
  );
};

export default CalculateGroupAverageBtn;
