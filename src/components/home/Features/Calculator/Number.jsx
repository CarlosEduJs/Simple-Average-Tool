import InputNum from "./Inputs/InputNum";

import { TrashIcon } from "@heroicons/react/16/solid";

const Number = ({
  num,
  index,
  updateNumberInGroup,
  selectedAverage,
  group,
  onChangeWeights,
  removeNumberFromGroup,
}) => {
  return (
    <div className="flex items-center w-full">
      <div className="flex flex-col gap-1 justify-center items-center number">
        <InputNum
          sufix={"x"}
          index={`${index + 1}`}
          value={num}
          onChange={updateNumberInGroup}
        />
        {selectedAverage === "Ponderada" && (
          <InputNum
            sufix={"p"}
            index={`${index + 1}`}
            value={group.weights[index]}
            onChange={onChangeWeights}
            placeholder="peso"
          />
        )}
      </div>
      <button
        onClick={removeNumberFromGroup}
        className="group transition-all  bg-red-500 hover:bg-red-500/70 text-white border-none h-full border px-2 rounded-r-lg"
      >
        <TrashIcon className="w-4 transition-all group-hover:rotate-90" />
      </button>
    </div>
  );
};

export default Number;
