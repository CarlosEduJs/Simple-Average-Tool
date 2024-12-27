export default function calculateAverageSimple(numbers = [], isRound) {
    const totalNumbers = numbers.length;
    const sum = numbers.reduce((acc, num) => acc + num, 0)
    const average = sum / totalNumbers;
    const round = Math.round(average)

    return isRound ? round.toFixed(2) : average.toFixed(2)
}   