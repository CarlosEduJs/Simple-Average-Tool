import calculateAverageSimple from "../utils/calculations/calculateAverageSimple";
import calculateAverageWeighted from "../utils/calculations/calculateAverageWeighted";
import calculateAverageHarmonic from "../utils/calculations/calculateAverageHarmonic";
import calculateAverageGeometric from "../utils/calculations/calculateAverageGeometric";

export const typesAverage = [
  {
    typeName: "Simples",
    description:
      "A média simples é calculada somando todos os valores e dividindo o total pela quantidade de valores. É uma forma rápida de representar um valor médio em situações gerais. Por exemplo, se você deseja calcular a média das notas de um aluno em três provas, onde ele obteve 2, 4 e 6, a média simples seria: Me = (2 + 4 + 6) / 3 = 4. Isso significa que, em média, o aluno obteve 4 pontos.",
    examples: [
      {
        formula: "Me = (x1 + x2 + x3 + ... + xn) / n",
        data: {
          x1: 2,
          x2: 4,
          x3: 6,
        },
        calculation: "Me = (2 + 4 + 6) / 3 = 4",
      },
    ],
    calculationFunction: (numbers, isRound) =>
      calculateAverageSimple(numbers, isRound),
  },
  {
    typeName: "Ponderada",
    description:
      "A média ponderada considera a importância de cada valor, atribuindo pesos antes de calcular o resultado. É ideal para situações em que alguns valores têm maior relevância, como notas de provas com pesos diferentes. Por exemplo, se um aluno tirou 3 em uma prova com peso 1, 5 em outra com peso 2 e 7 em uma terceira com peso 1, a média ponderada seria: Mp = ((1*3) + (2*5) + (1*7)) / (1+2+1) = 5. Isso reflete que a segunda prova teve um peso maior na média final.",
    examples: [
      {
        formula:
          "Mp = ((p1 * x1) + (p2 * x2) + ... + (pn * xn)) / (p1 + p2 + ... + pn)",
        data: {
          x1: 3,
          x2: 5,
          x3: 7,
          p1: 1,
          p2: 2,
          p3: 1,
        },
        calculation: "Mp = ((1*3) + (2*5) + (1*7)) / (1+2+1) = 5",
      },
    ],
    calculationFunction: (numbers, weights, isRound) =>
      calculateAverageWeighted(numbers, weights, isRound),
  },
  {
    typeName: "Harmônica",
    description:
      "A média harmônica é utilizada em casos onde valores menores têm maior peso no resultado final, como velocidades médias ou taxas. É especialmente útil para conjuntos de dados inversamente proporcionais. Por exemplo, se você deseja calcular a média harmônica das velocidades de um carro em diferentes trechos de uma viagem, onde ele percorreu 2 km/h, 3 km/h e 6 km/h, a média harmônica seria: Mh = 3 / (1/2 + 1/3 + 1/6) ≈ 3. Isso indica que, em média, a velocidade do carro foi de 3 km/h considerando os trechos mais lentos.",
    examples: [
      {
        formula: "Mh = n / (1/x1 + 1/x2 + ... + 1/xn)",
        data: {
          x1: 2,
          x2: 3,
          x3: 6,
        },
        calculation: "Mh = 3 / (1/2 + 1/3 + 1/6) ≈ 3",
      },
    ],
    calculationFunction: (numbers, isRound) =>
      calculateAverageHarmonic(numbers, isRound),
  },
  {
    typeName: "Geométrica",
    description:
      "A média geométrica é utilizada para calcular a taxa média de crescimento proporcional, como juros compostos ou aumento populacional. É baseada no produto dos valores, ao invés da soma. Por exemplo, se você deseja calcular a média geométrica do crescimento de uma população em três anos, onde a população cresceu para 2, 4 e 8 mil habitantes, a média geométrica seria: Mg = (2 * 4 * 8)^(1/3) ≈ 4. Isso reflete a taxa média de crescimento ao longo do período.",
    examples: [
      {
        formula: "Mg = (x1 * x2 * x3 * ... * xn)^(1/n)",
        data: {
          x1: 2,
          x2: 4,
          x3: 8,
        },
        calculation: "Mg = (2 * 4 * 8)^(1/3) ≈ 4",
      },
    ],
    calculationFunction: (numbers, isRound) =>
      calculateAverageGeometric(numbers, isRound),
  },
];
