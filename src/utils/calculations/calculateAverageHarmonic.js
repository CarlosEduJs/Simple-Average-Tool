export default function calculateAverageHarmonic(numbers = [], isRound) {
  const totalNumbers = numbers.length;

  if (totalNumbers === 0) {
    return 0;
  }

  const reciprocalSum = numbers.reduce((acc, num) => acc + 1 / num, 0);

  if (reciprocalSum === 0) {
    throw new Error("A soma dos recíprocos não pode ser zero.");
  }

  const result = totalNumbers / reciprocalSum

  const round = Math.round(result)

  return isRound ? round.toFixed(2) : result.toFixed(2);
}
