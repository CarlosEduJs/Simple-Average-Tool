import Number from "./Number";

const ColumnGroup = ({
  group,
  index,
  num,
  selectedAverage,
  updateNumberInGroup,
  removeNumberFromGroup,
  onChangeWheights,
}) => {
  return (
    <div className="flex flex-col">
      <Number
        group={group}
        num={num}
        selectedAverage={selectedAverage}
        updateNumberInGroup={updateNumberInGroup}
        removeNumberFromGroup={removeNumberFromGroup}
        index={index}
        onChangeWeights={onChangeWheights}
      />
    </div>
  );
};

export default ColumnGroup;
