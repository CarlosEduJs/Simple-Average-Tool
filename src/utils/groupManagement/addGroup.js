export default function addGroup(groups, setGroups) {
    setGroups([...groups, {
        numbers: [1, 1, 1],
        weights: [1, 1, 1],
        defaultName: "Group",
        name: "",
        description: "",
        result: null,
    },])
};