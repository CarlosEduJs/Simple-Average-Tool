const InputNum = ({ value, onChange, sufix, index }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    onChange(inputValue === "" ? "" : parseFloat(inputValue));
  };
  return (
    <div className="flex w-[90px]">
      <span className="bg-primary rounded-l-full  flex items-center justify-center px-3 py-1 text-white text-xs num">
        <span className="sufix">{sufix}</span>
        {index}
      </span>

      <input
        style={{ fontFamily: "Poppins" }}
        type="number"
        className="min-w-[60px] bg-transparent border px-3 py-1 outline-none border-primary text-sm text-white  "
        value={value === 0 ? "" : value}
        onChange={handleInputChange}
        placeholder="0"
      />
    </div>
  );
};

export default InputNum;
