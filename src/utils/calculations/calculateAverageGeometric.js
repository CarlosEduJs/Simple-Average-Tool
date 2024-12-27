export default function calculateAverageGeometric(numbers = [], isRound) {
    const totalNumbers = numbers.length;
    if (totalNumbers === 0) return 0;

    const product = numbers.reduce((acc, num) => acc * num, 1);
    if (product <= 0) throw new Error("Todos os números devem ser positivos para a média geométrica.");

    const result = Math.pow(product, 1 / totalNumbers);

    return isRound ? Math.round(result) : result.toFixed(2);
}