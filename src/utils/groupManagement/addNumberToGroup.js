export default function addNumberToGroup(groupIndex, groups, setGroups) {
    setGroups(
        groups.map((group, i) =>
            i === groupIndex ? { ...group, numbers: [...group.numbers, 0] } : group
        )
    );
};