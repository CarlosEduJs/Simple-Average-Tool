import { PlusIcon } from "@heroicons/react/16/solid";

const AddNumberToGroupBtn = ({ action }) => {
  return (
    <button
      onClick={action}
      className="flex items-center justify-center gap-2 transition-all border-2 border-dashed border-primary hover:bg-slate-900 rounded-md px-2 py-1 h-[50px] max-w-sm text-white text-sm mt-2 add-number-btn"
    >
      <PlusIcon className="w-3"/>
      Adicionar Número
    </button>
  );
};

export default AddNumberToGroupBtn;
