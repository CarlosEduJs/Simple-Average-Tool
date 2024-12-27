const DataAverage = ({
  description,
  formula,
  dataFormula,
  calculationExample,
  selectedAverage,
}) => {
  return (
    <div className="data-average-info flex flex-col gap-3 border-dashed max-scrennDesk1:border-t-2 scrennDesk1:border-r-2 px-3 w-md border-primary max-scrennDesk1:py-8">
      <h1 className="text-3xl text-white font-bold text-center">
        Sobre a Média {selectedAverage}{" "}
      </h1>
      <span
        style={{ fontFamily: "Poppins" }}
        className="text-slate-300 my-2 text-sm font-light tracking-wider max-w-xl"
      >
        {description}
      </span>

      <div className="bg-secondary-light text-white rounded-lg my-4">
        <div className="flex flex-col gap-4 text-sm font-bold rounded-lg bg-secondary text-primary px-3 py-2 text-center">
          <h2 className="text-lg font-bold">Fórmula</h2>
          <p className=" rounded-full my-2">{formula}</p>
        </div>

        <h3 className="text-sm font-semibold mt-3">Exemplo:</h3>
        <div className="flex flex-col gap-2  pt-2 border rounded-lg border-primary-light  mt-2">
          <h3 className="text-sm font-semibold text-center">
            Dados do exemplo:
          </h3>
          <div className="flex flex-col gap-2">
            <ul className="text-sm font-light grid grid-cols-3 text-center">
              {Object.entries(dataFormula).map(([key, value]) => (
                <li key={key}>
                  <span className="font-bold">{key}</span>: {value}
                </li>
              ))}
            </ul>
            <p className="text-sm font-bold bg-secondary-accent text-primary text-center px-3 py-2 rounded-b-lg">
              {calculationExample}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataAverage;
