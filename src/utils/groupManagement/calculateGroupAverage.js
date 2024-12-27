export default function calculateGroupAverage(groupIndex, groups, setGroups, dataAverage, isRound) {
    const group = groups[groupIndex];

    const validNumbers = group.numbers.filter(
        (num) => typeof num === "number" && !isNaN(num)
    );

    if (validNumbers.length < 2) {
        alert("O grupo não possui quantidade suficiente de valores para calcular a média.");
        return;
    }

    const currentAverageType = dataAverage.typeName;

    let result;
    try {
        if (currentAverageType === "Ponderada") {

            const weights = group.weights || [];
            result = dataAverage.calculationFunction(validNumbers, weights, isRound);
        } else {
            result = dataAverage.calculationFunction(validNumbers, isRound);
        }

        setGroups(
            groups.map((g, i) => (i === groupIndex ? { ...g, result } : g))
        );
    } catch (error) {
        console.error("Erro ao calcular a média:", error.message);
        alert("Erro ao calcular a média: " + error.message);
    }
};
