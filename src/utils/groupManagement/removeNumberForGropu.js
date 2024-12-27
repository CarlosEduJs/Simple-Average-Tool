export default function removeNumberFromGroup(groupIndex, numberIndex, groups, setGroups) {
    const newGroups = [...groups];
    newGroups[groupIndex].numbers.splice(numberIndex, 1); 
    newGroups[groupIndex].weights.splice(numberIndex, 1); 
    setGroups(newGroups);
};