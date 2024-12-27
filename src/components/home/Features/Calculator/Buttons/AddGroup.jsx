import { PlusIcon } from "@heroicons/react/16/solid";

const AddGroupBtn = ({ action }) => {
  return (
    <button
      onClick={action}
      className="transition-all my-2 bg-primary hover:bg-primary/75 border border-gray-100/30 rounded-full flex items-center justify-center gap-2 p-2 py-2 text-white text-sm  add-group-btn"
    >
      <PlusIcon className="w-5"/>
      Adicionar Grupo
    </button>
  );
};

export default AddGroupBtn;
