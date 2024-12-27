import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Dropdown from "../../../../common/Dropdown/DropdownBase";

import { CheckIcon } from "@heroicons/react/16/solid";

import { typesAverage } from "../../../../../constants/typesAverages";

const SelectTypeAverage = ({ handleSelectedAverage, selectedAverage }) => {
  return (
    <div className="flex items-center w-full border rounded-lg border-gray-200/30 py-1 px-2 justify-between select-type-average">
      <h1 className="text-sm font-medium text-white">
        Média {selectedAverage}
      </h1>
      <Dropdown
        buttonContent={
          <ChevronDownIcon className="w-4 text-white cursor-pointer" />
        }
        position={"right"}
      >
        <nav>
          <ul className="flex flex-col gap-2 min-w-[200px] p-2">
            <span className="text-slate-400 text-xs">
              Selecione uma das opções
            </span>
            {typesAverage.map((average, index) => (
              <div
                key={index}
                onClick={() => handleSelectedAverage(average.typeName)}
                className={`px-2 py-1 w-full flex items-center justify-between hover:bg-slate-100/20 text-white font-medium text-sm rounded-lg cursor-pointer ${
                  selectedAverage === average.typeName ? "bg-gray-100/20" : ""
                }`}
              >
                <h1>{average.typeName}</h1>
                {selectedAverage === average.typeName && (
                  <CheckIcon className="w-4" />
                )}
              </div>
            ))}
          </ul>
        </nav>
      </Dropdown>
    </div>
  );
};

export default SelectTypeAverage;
