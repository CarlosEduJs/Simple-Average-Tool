export default function calculateAverageWeighted(numbers = [], weights = [], isRound) {
    const wightedSum = numbers.reduce((acc, num, index) => acc + num * weights[index], 0);
    const totalWeights = weights.reduce((acc, wheight) => acc + wheight, 0)

    const average = wightedSum / totalWeights;

    const round = Math.round(average)

    return isRound ? round.toFixed(2) : average.toFixed(2);
}