export default function updateNumberInGroup(groupIndex, numberIndex, value, groups, setGroups) {
    const parsedValue = isNaN(value) || value === "" ? 0 : parseFloat(value);

    setGroups(
        groups.map((group, i) =>
            i === groupIndex
                ? {
                    ...group,
                    numbers: group.numbers.map((num, j) =>
                        j === numberIndex ? parsedValue : num
                    ),
                }
                : group
        )
    );
};