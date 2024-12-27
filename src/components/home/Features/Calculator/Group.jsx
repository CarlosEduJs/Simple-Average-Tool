import { useState } from "react";
import { TrashIcon, ChevronDownIcon } from "@heroicons/react/16/solid";
import AddNumberToGroupBtn from "./Buttons/AddNumberToGroup";
import CalculateGroupAverageBtn from "./Buttons/CalculateGroupAverage";
import removeGroup from "../../../../utils/groupManagement/removeGroup";
import addNumberToGroup from "../../../../utils/groupManagement/addNumberToGroup";
import updateNumberInGroup from "../../../../utils/groupManagement/updateNumberInGroup";
import removeNumberFromGroup from "../../../../utils/groupManagement/removeNumberForGropu";
import calculateGroupAverage from "../../../../utils/groupManagement/calculateGroupAverage";
import Checkbox from "../../../common/Checkbox/Checkbox";
import ColumnGroup from "./ColumnGroup";

const Group = ({
  group,
  groupIndex,
  selectedAverage,
  setGroups,
  groups,
  dataAverage,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isRoundAverage, setIsRoundAverage] = useState(true);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleUpdateGroupField = (field, value) => {
    const newGroups = [...groups];
    newGroups[groupIndex][field] = value;
    setGroups(newGroups);
  };

  return (
    <div className="flex flex-col bg-secondary-light py-1 px-3">
      <div className="flex justify-between items-center border-b border-gray-100/30 pb-2 mb-2">
        <input
          type="text"
          className="text-white text-lg px-3 rounded-md font-bold bg-transparent w-lg outline-none focus:ring-2 focus:ring-green-500 groupName"
          placeholder={group.defaultName + (groupIndex + 1)}
          value={group.name}
          maxLength={50}
          onChange={(e) => handleUpdateGroupField("name", e.target.value)}
        />
        <div className="flex items-center gap-2">
          <button
            onClick={() => removeGroup(groupIndex, groups, setGroups)}
            className="group transition-all hover:text-red-500 text-white rounded-full px-3 flex items-center gap-2 text-sm py-2"
          >
            <TrashIcon className="w-4 transition-all group-hover:rotate-90" />
          </button>
          <ChevronDownIcon
            onClick={toggleVisibility}
            className={`w-6 text-white cursor-pointer transition-all duration-500 ${
              isVisible ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>

      <textarea
        className="bg-transparent border border-primary text-white text-sm p-2 rounded-lg mt-2 outline-none focus:ring-2 focus:ring-yellow-500 groupDescription"
        placeholder="Descrição do grupo (opcional)"
        value={group.description}
        maxLength={300}
        onChange={(e) => handleUpdateGroupField("description", e.target.value)}
      />

      {isVisible && (
        <div className="flex flex-col">
          <div className="grid grid-cols-4 gap-3 mt-3 max-md:grid-cols-2">
            {group.numbers.map((num, index) => (
              <ColumnGroup
                key={index}
                group={group}
                num={num}
                index={index}
                selectedAverage={selectedAverage}
                onChangeWheights={(value) => {
                  const newGroups = [...groups];
                  newGroups[groupIndex].weights[index] = value;
                  setGroups(newGroups);
                }}
                removeNumberFromGroup={() =>
                  removeNumberFromGroup(groupIndex, index, groups, setGroups)
                }
                updateNumberInGroup={(value) =>
                  updateNumberInGroup(
                    groupIndex,
                    index,
                    value,
                    groups,
                    setGroups
                  )
                }
              />
            ))}
            <AddNumberToGroupBtn
              action={() => addNumberToGroup(groupIndex, groups, setGroups)}
            />
          </div>
          <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-2 my-4">
            <div className="round">
              <Checkbox
                title={"Arredondar Média"}
                description={
                  "Selecione essa opção se quiser a forma de arredondamento padrão, exemplos: M = 6.33 <- 6.0 ; M = 6.50 -> 7.0"
                }
                checked={isRoundAverage}
                onChange={() => {
                  setIsRoundAverage(!isRoundAverage);
                }}
              />
            </div>

            <CalculateGroupAverageBtn
              action={() =>
                calculateGroupAverage(
                  groupIndex,
                  groups,
                  setGroups,
                  dataAverage,
                  isRoundAverage
                )
              }
            />
          </div>

          {group.result !== null && (
            <div className="mt-6 bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Resultado:</span>
                <span className="text-2xl font-bold text-emerald-400">
                  {group.result}
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Group;
