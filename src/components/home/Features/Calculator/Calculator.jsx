import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SelectTypeAverage from "./Dropdown/SelectTypeAverage";
import Group from "./Group";
import AddGroupBtn from "./Buttons/AddGroup";
import DataAverage from "./DataAverage";
import addGroup from "../../../../utils/groupManagement/addGroup";
import { typesAverage } from "../../../../constants/typesAverages";
import { steps } from "../../../../constants/steps";
import Joyride from "react-joyride";

const Calculator = () => {
  const [groups, setGroups] = useState([
    {
      numbers: [1, 1, 1],
      weights: [1, 1, 1],
      defaultName: "Group",
      name: "",
      description: "",
      result: null,
    },
  ]);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedAverage = searchParams.get("average") || "Simples";
  const initialUserData =
    localStorage.getItem("userNew") === "false" ? false : true;
  const [userNew, setIsNewUserData] = useState(initialUserData);

  const handleSelectedAverage = (average) => {
    setSearchParams({ average });
    setGroups([
      {
        numbers: [1, 1, 1],
        weights: [1, 1, 1],
        defaultName: "Group",
        name: "",
        description: "",
        result: null,
      },
    ]);
  };

  const handleNotIsNewUser = () => {
    localStorage.setItem("userNew", "false");
    setIsNewUserData(false);
  };

  const dataAverage = typesAverage.find(
    (average) => selectedAverage === average.typeName
  );

  const [tourState, setTourState] = useState({
    run: userNew,
    steps,
  });

  const handleJoyrideCallback = (data) => {
    const { status } = data;
    if (status === "finished" || status === "skipped") {
      handleNotIsNewUser();
      setTourState((prev) => ({ ...prev, run: false }));
    }
  };

  return (
    <div className="flex sm:px-7 gap-9 max-scrennDesk1:flex-col-reverse max-sm:px-1 border-b border-primary">
      <Joyride
        steps={tourState.steps}
        run={tourState.run}
        continuous
        showSkipButton
        callback={handleJoyrideCallback}
        spotlightPadding={10}
        scrollOffset={100}
        locale={{
          back: "Voltar",
          close: "Fechar",
          last: "Finalizar",
          next: "Próximo",
          skip: "Pular",
        }}
        styles={{
          options: {
            zIndex: 10000,
            arrowColor: "#1E293B",
            backgroundColor: "#1E293B",
            textColor: "#FFFFFF",
          },
        }}
      />
      <DataAverage
        description={dataAverage.description}
        formula={dataAverage.examples[0].formula}
        dataFormula={dataAverage.examples[0].data}
        calculationExample={dataAverage.examples[0].calculation}
        selectedAverage={selectedAverage}
      />
      <div className="flex flex-col w-full w-xl">
        <h1 className="text-white font-bold text-3xl">
          Calcular Média {selectedAverage}
        </h1>
        <span
          style={{ fontFamily: "Poppins" }}
          className="text-slate-300 my-2 text-xs font-normal"
        >
          Selecione um tipo de média para cálculo.
        </span>
        <SelectTypeAverage
          selectedAverage={selectedAverage}
          handleSelectedAverage={handleSelectedAverage}
        />

        <div className="flex flex-col gap-1 mt-2">
          {groups.map((group, groupIndex) => (
            <Group
              key={groupIndex}
              group={group}
              groupIndex={groupIndex}
              selectedAverage={selectedAverage}
              setGroups={setGroups}
              groups={groups}
              dataAverage={dataAverage}
            />
          ))}
        </div>
        <AddGroupBtn action={() => addGroup(groups, setGroups)} />
      </div>
    </div>
  );
};

export default Calculator;
