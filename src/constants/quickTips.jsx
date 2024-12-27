export const quickTips = [
  {
    quickName: "Quando usar esses tipos de médias?",
    content: {
      descriptionContent:
        "As médias são usadas para representar um conjunto de valores com um único número, mas cada tipo tem sua utilidade específica. Abaixo mostramos apenas quatro delas de forma simples e prática.",
      subs: [
        {
          averageName: "Média Simples",
          descriptionAverage:
            "A média simples é a soma de todos os valores dividida pela quantidade de valores.",
          whenToUse: "Quando todos os números têm a mesma importância.",
          example:
            "Exemplo: Se você tirou 6, 7 e 8 nas provas, a média simples será (6+7+8)/3=7.",
        },
        {
          averageName: "Média Ponderada",
          descriptionAverage:
            "Na média ponderada, alguns valores têm maior peso (importância) que outros. Multiplicamos cada valor pelo seu peso, somamos os resultados e dividimos pela soma dos pesos.",
          whenToUse:
            "Quando diferentes elementos do conjunto têm relevâncias diferentes.",
          example:
            "Exemplo: Suas notas são 6, 7 e 8, mas a última prova vale o dobro. A média será (6×1+7×1+8×2)/(1+1+2)=7,25.",
        },
        {
          averageName: "Média Geométrica",
          descriptionAverage:
            "A média geométrica é a raiz 𝑛-ésima do produto de todos os valores, onde 𝑛 é o número de valores.",
          whenToUse:
            "Quando os valores variam em proporção (crescimento ou redução percentual).",
          example:
            "Exemplo: Se uma empresa cresce 10%, 20% e depois 30% em três anos, a média geométrica é a raiz cúbica de 1,1×1,2×1,3≈1,199, indicando crescimento médio de cerca de 19,9%.",
        },
        {
          averageName: "Média Harmônica",
          descriptionAverage:
            "A média harmônica é o inverso da média aritmética dos inversos dos valores.",
          whenToUse:
            "Quando se trabalha com taxas ou razões e é necessário balancear os valores.",
          example:
            "Exemplo: Para calcular a velocidade média de ida e volta em distâncias iguais, use a média harmônica. Se você viajou a 60 km/h na ida e 40 km/h na volta, a média será 2 / (1/60 + 1/40) ≈ 48 km/h.",
        },
      ],
    },
  },
];
