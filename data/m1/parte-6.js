// Módulo 1, parte 6: aulas M1.3.1 e M1.3.2.
window.AULAS_M1_P6 = [
  {
    id: "M1.3.1",
    titulo: "Divisibilidade por 2, 3, 4, 5, 6, 9 e 10",
    teoria: [
      "Um número é divisível por 2 quando termina em 0, 2, 4, 6 ou 8.",
      "Um número é divisível por 3 quando a soma de seus algarismos é divisível por 3.",
      "Um número é divisível por 4 quando os dois últimos algarismos formam um número divisível por 4.",
      "Um número é divisível por 5 quando termina em 0 ou 5.",
      "Um número é divisível por 6 quando é divisível por 2 e por 3.",
      "Um número é divisível por 9 quando a soma de seus algarismos é divisível por 9.",
      "Um número é divisível por 10 quando termina em 0."
    ],
    exemplos: [
      "348 é divisível por 2, porque termina em 8.",
      "231 é divisível por 3, porque 2 + 3 + 1 = 6.",
      "124 é divisível por 4, porque 24 é divisível por 4.",
      "275 é divisível por 5, porque termina em 5.",
      "126 é divisível por 6, porque é par e 1 + 2 + 6 = 9 é divisível por 3."
    ],
    exercicios: [
      { enunciado: "O número 348 é divisível por 2?",
        opcoes: ["Sim", "Não", "Somente se for par", "Somente se for múltiplo de 3", "Não é possível saber"], correta: 0 },
      { enunciado: "O número 231 é divisível por 3?",
        opcoes: ["Sim", "Não", "Somente se for par", "Somente se for múltiplo de 9", "Não é possível saber"], correta: 0 },
      { enunciado: "O número 124 é divisível por 4?",
        opcoes: ["Sim", "Não", "Somente se for par", "Somente se for múltiplo de 3", "Não é possível saber"], correta: 0 },
      { enunciado: "O número 275 é divisível por 5?",
        opcoes: ["Sim", "Não", "Somente se for par", "Somente se for múltiplo de 3", "Não é possível saber"], correta: 0 },
      { enunciado: "O número 126 é divisível por 6?",
        opcoes: ["Sim", "Não", "Somente se for par", "Somente se for múltiplo de 9", "Não é possível saber"], correta: 0 },
      { enunciado: "Qual destes números é divisível por 9?",
        opcoes: ["123", "234", "345", "456", "568"], correta: 1,
        correcao: "Corrigido: a alternativa E original (567) também é divisível por 9 (5 + 6 + 7 = 18). Substituída por 568, que não é divisível por 9." },
      { enunciado: "Qual destes números é divisível por 10?",
        opcoes: ["125", "230", "345", "456", "567"], correta: 1 },
      { enunciado: "Qual destes números é divisível por 6?",
        opcoes: ["123", "234", "345", "456", "567"], correta: 1 },
      { enunciado: "Qual destes números é divisível por 4?",
        opcoes: ["123", "234", "345", "456", "567"], correta: 3 },
      { enunciado: "Um número é divisível por 2 e por 3. Ele também é divisível por:",
        opcoes: ["4", "5", "6", "9", "10"], correta: 2 }
    ]
  },
  {
    id: "M1.3.2",
    titulo: "Fatores, múltiplos e fatoração em primos",
    teoria: [
      "Um fator (ou divisor) de um número é um inteiro que o divide exatamente.",
      "Um múltiplo de um número é o resultado de multiplicá-lo por um inteiro.",
      "Um número primo tem exatamente dois divisores positivos: 1 e ele mesmo.",
      "Fatorar em primos é escrever o número como produto de números primos. Por exemplo, 60 = 2 × 2 × 3 × 5."
    ],
    exemplos: [
      "Os fatores de 12 são 1, 2, 3, 4, 6 e 12.",
      "Os múltiplos de 5 até 30 são 5, 10, 15, 20, 25 e 30.",
      "36 = 2 × 2 × 3 × 3 = 2² × 3².",
      "45 = 3 × 3 × 5 = 3² × 5.",
      "72 = 2 × 2 × 2 × 3 × 3 = 2³ × 3²."
    ],
    exercicios: [
      { enunciado: "Quais são os fatores de 12?",
        opcoes: ["1, 2, 3, 4, 6, 12", "1, 2, 3, 6", "2, 3, 4, 6", "1, 2, 3, 4", "1, 2, 3, 4, 6"], correta: 0 },
      { enunciado: "Quais são os múltiplos de 5 até 30?",
        opcoes: ["5, 10, 15, 20, 25, 30", "1, 2, 3, 4, 5", "5, 10, 15", "10, 20, 30", "1, 5, 10"], correta: 0 },
      { enunciado: "Qual é a fatoração de 36?",
        opcoes: ["2 × 2 × 3 × 3", "2 × 3 × 3", "2 × 2 × 3", "3 × 3 × 3", "2 × 2 × 2 × 3"], correta: 0 },
      { enunciado: "Qual é a fatoração de 45?",
        opcoes: ["3 × 3 × 5", "3 × 5", "5 × 5", "3 × 3 × 3", "2 × 3 × 5"], correta: 0 },
      { enunciado: "Qual é a fatoração de 72?",
        opcoes: ["2 × 2 × 2 × 3 × 3", "2 × 2 × 3 × 3", "2 × 3 × 3", "2 × 2 × 2 × 3", "3 × 3 × 3"], correta: 0 },
      { enunciado: "Qual destes números é primo?",
        opcoes: ["21", "23", "27", "33", "39"], correta: 1 },
      { enunciado: "Qual destes números não é primo?",
        opcoes: ["2", "3", "5", "9", "11"], correta: 3 },
      { enunciado: "Quantos fatores positivos tem 36?",
        opcoes: ["6", "8", "9", "10", "12"], correta: 2 },
      { enunciado: "Qual é o mínimo múltiplo comum (MMC) de 4 e 6?",
        opcoes: ["6", "8", "12", "18", "24"], correta: 2 },
      { enunciado: "Qual é o máximo divisor comum (MDC) de 12 e 18?",
        opcoes: ["2", "3", "6", "9", "12"], correta: 2 }
    ]
  }
];
