// Módulo 1, parte 9: aulas M1.4.1 e M1.4.2.
window.AULAS_M1_P9 = [
  {
    id: "M1.4.1",
    titulo: "Frações: conceito, equivalência e comparação",
    teoria: [
      "A fração a/b representa a partes de um todo dividido em b partes iguais. O denominador b não pode ser zero.",
      "Frações equivalentes têm o mesmo valor. Por exemplo, 1/2 = 2/4 = 3/6.",
      "Para simplificar uma fração, divida o numerador e o denominador pelo mesmo fator.",
      "Para comparar duas frações, iguale os denominadores ou converta ambas para decimal."
    ],
    exemplos: [
      "8/12 simplificada: dividindo por 4, obtém-se 2/3.",
      "Comparando 3/4 e 2/3: 3/4 = 0,75 e 2/3 ≈ 0,67. Logo, 3/4 > 2/3.",
      "Frações equivalentes a 1/2: 2/4, 3/6 e 4/8.",
      "Comparando 2/5 e 3/5: como os denominadores são iguais, 2/5 < 3/5.",
      "15/20 simplificada: dividindo por 5, obtém-se 3/4."
    ],
    exercicios: [
      { enunciado: "Simplifique 8/12.",
        opcoes: ["1/2", "2/3", "3/4", "4/5", "5/6"], correta: 1 },
      { enunciado: "Qual é maior: 3/4 ou 2/3?",
        opcoes: ["3/4 > 2/3", "3/4 < 2/3", "São iguais", "Não é possível comparar", "Depende"], correta: 0 },
      { enunciado: "Qual destas frações é equivalente a 1/2?",
        opcoes: ["2/4", "3/4", "4/3", "5/4", "6/5"], correta: 0 },
      { enunciado: "Qual é maior: 2/5 ou 3/5?",
        opcoes: ["2/5 > 3/5", "2/5 < 3/5", "São iguais", "Não é possível comparar", "Depende"], correta: 1 },
      { enunciado: "Simplifique 15/20.",
        opcoes: ["1/2", "2/3", "3/4", "4/5", "5/6"], correta: 2 },
      { enunciado: "Qual destas frações é equivalente a 2/3?",
        opcoes: ["4/6", "3/4", "5/6", "6/5", "8/9"], correta: 0 },
      { enunciado: "Qual é maior: 3/8 ou 1/2?",
        opcoes: ["3/8 > 1/2", "3/8 < 1/2", "São iguais", "Não é possível comparar", "Depende"], correta: 1 },
      { enunciado: "Simplifique 24/36.",
        opcoes: ["1/2", "2/3", "3/4", "4/5", "5/6"], correta: 1 },
      { enunciado: "Qual é maior: 5/8 ou 3/5?",
        opcoes: ["5/8 > 3/5", "5/8 < 3/5", "São iguais", "Não é possível comparar", "Depende"], correta: 0,
        correcao: "Corrigido: o gabarito original era B (5/8 < 3/5). Como 5/8 = 0,625 e 3/5 = 0,6, a resposta certa é 5/8 > 3/5." },
      { enunciado: "Simplifique 45/60.",
        opcoes: ["1/2", "2/3", "3/4", "4/5", "5/6"], correta: 2 }
    ]
  },
  {
    id: "M1.4.2",
    titulo: "Operações com frações",
    teoria: [
      "Para somar ou subtrair frações, primeiro iguale os denominadores.",
      "Para multiplicar, multiplique os numeradores entre si e os denominadores entre si.",
      "Para dividir, multiplique pelo inverso da segunda fração.",
      "Sempre simplifique o resultado no final."
    ],
    exemplos: [
      "1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
      "3/4 − 1/4 = 2/4 = 1/2.",
      "2/3 × 3/5 = 6/15 = 2/5.",
      "3/4 ÷ 2/3 = 3/4 × 3/2 = 9/8.",
      "5/6 − 1/3 = 5/6 − 2/6 = 3/6 = 1/2."
    ],
    exercicios: [
      { enunciado: "Qual é o resultado de 1/2 + 1/3?",
        opcoes: ["2/5", "5/6", "1/5", "1/6", "2/3"], correta: 1 },
      { enunciado: "Qual é o resultado de 3/4 − 1/4?",
        opcoes: ["1/2", "1/4", "1/3", "2/3", "3/4"], correta: 0 },
      { enunciado: "Qual é o resultado de 2/3 × 3/5?",
        opcoes: ["2/5", "3/10", "1/2", "3/5", "5/6"], correta: 0,
        correcao: "Corrigido: a alternativa B original (6/15) é igual a 2/5, a resposta certa. Substituída por 3/10." },
      { enunciado: "Qual é o resultado de 3/4 ÷ 2/3?",
        opcoes: ["9/8", "8/9", "1/2", "2/3", "3/4"], correta: 0 },
      { enunciado: "Qual é o resultado de 5/6 − 1/3?",
        opcoes: ["1/2", "2/3", "1/3", "1/6", "1/4"], correta: 0,
        correcao: "Corrigido: a alternativa E original (3/6) é igual a 1/2, a resposta certa. Substituída por 1/4." },
      { enunciado: "Qual é o resultado de 2/5 + 1/5?",
        opcoes: ["3/10", "3/5", "1/5", "2/5", "1/2"], correta: 1 },
      { enunciado: "Qual é o resultado de 3/4 × 2/3?",
        opcoes: ["1/2", "2/3", "3/4", "1/3", "5/6"], correta: 0 },
      { enunciado: "Qual é o resultado de 5/6 ÷ 5/12?",
        opcoes: ["1/2", "2", "3", "4", "5"], correta: 1 },
      { enunciado: "Qual é o resultado de 7/8 − 3/8?",
        opcoes: ["1/2", "1/4", "1/3", "2/3", "3/4"], correta: 0 },
      { enunciado: "Qual é o resultado de 2/3 + 3/4?",
        opcoes: ["17/12", "5/7", "1/2", "1/3", "2/5"], correta: 0 }
    ]
  }
];
