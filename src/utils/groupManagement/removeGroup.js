export default function removeGroup(index, groups, setGroups) {
    setGroups(groups.filter((_, i) => i !== index));
}
