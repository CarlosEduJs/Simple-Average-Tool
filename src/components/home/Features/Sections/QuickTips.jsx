import { quickTips } from "../../../../constants/quickTips";

const QuickTips = () => {
  return (
    <div id="dicas" className="flex flex-col gap-4 w-fit mx-auto text-center py-12">
      <h1 className="text-4xl font-bold text-white">Dicas Rápidas</h1>
      <p className="text-sm text-slate-500 max-w-[300px] mx-auto">
        Essas dicas abaixo são essenciais para a compreensão dos variados tipos
        de média.
      </p>
      <div className="flex flex-col gap-2 ">
        {quickTips.map((quick, index) => (
          <div
            style={{ fontFamily: "Poppins" }}
            key={index}
            className="flex flex-col max-w-xl rounded-lg border border-primary mx-auto"
          >
            <div className="w-full rounded-t-lg bg-primary-light px-4 py-2">
              <h1 className="text-sm text-white">{quick.quickName}</h1>
            </div>
            <div className="flex flex-col py-2 px-5">
              <span className="text-start text-sm font-light text-slate-400">
                {quick.content.descriptionContent}
              </span>
              <div className="flex flex-col gap-3 mt-3">
                {quick.content.subs?.map((sub, subIndex) => (
                  <div
                    key={subIndex}
                    className={`flex flex-col gap-3 px-2 pb-3`}
                  >
                    <div className="flex items-center gap-3 rounded-full border border-primary">
                      <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                        {subIndex + 1}
                      </span>
                      <h1 className="text-white">{sub.averageName}</h1>
                    </div>
                    <span className="text-slate-400 text-sm font-light text-start">
                      {sub.descriptionAverage}
                    </span>
                    <div className="flex items-center justify-between">
                      <div className="w-[30%] bg-primary h-[1px]"></div>
                      <h1 className="text-sm text-white font-medium">
                        Quando usar a {sub.averageName}?
                      </h1>
                      <div className="w-[30%] bg-primary h-[1px]"></div>
                    </div>
                    <span className="text-slate-400 text-sm font-light text-start">
                      {sub.whenToUse}
                    </span>

                    <div className="flex items-center justify-between">
                      <div className="w-[30%] bg-primary h-[1px]"></div>
                      <h1 className="text-sm text-white font-medium">
                        Veja o exemplo prático da {sub.averageName}
                      </h1>
                      <div className="w-[30%] bg-primary h-[1px]"></div>
                    </div>
                    <span className="text-slate-400 text-sm font-light text-start">
                      {sub.example}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickTips;
