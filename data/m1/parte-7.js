// Módulo 1, parte 7: aulas M1.3.3 e M1.3.4.
window.AULAS_M1_P7 = [
  {
    id: "M1.3.3",
    titulo: "Máximo divisor comum (MDC)",
    teoria: [
      "O MDC de dois ou mais números é o maior número que divide todos eles.",
      "Uma forma de encontrar o MDC é pela fatoração em primos: multiplicam-se os fatores comuns, cada um com o menor expoente.",
      "O MDC é útil para simplificar frações e para dividir grupos de forma igual, sem sobras."
    ],
    exemplos: [
      "MDC de 12 e 18 = 6.",
      "MDC de 24 e 36 = 12.",
      "MDC de 15 e 25 = 5.",
      "MDC de 8 e 12 = 4.",
      "MDC de 9 e 15 = 3."
    ],
    exercicios: [
      { enunciado: "Qual é o MDC de 12 e 18?",
        opcoes: ["2", "3", "6", "9", "12"], correta: 2 },
      { enunciado: "Qual é o MDC de 24 e 36?",
        opcoes: ["6", "8", "12", "18", "24"], correta: 2 },
      { enunciado: "Qual é o MDC de 15 e 25?",
        opcoes: ["1", "3", "5", "15", "25"], correta: 2 },
      { enunciado: "Qual é o MDC de 8 e 12?",
        opcoes: ["2", "4", "6", "8", "12"], correta: 1 },
      { enunciado: "Qual é o MDC de 9 e 15?",
        opcoes: ["1", "3", "5", "9", "15"], correta: 1 },
      { enunciado: "Qual é o MDC de 16 e 24?",
        opcoes: ["4", "6", "8", "12", "16"], correta: 2 },
      { enunciado: "Qual é o MDC de 18 e 27?",
        opcoes: ["3", "6", "9", "18", "27"], correta: 2 },
      { enunciado: "Qual é o MDC de 20 e 30?",
        opcoes: ["5", "10", "15", "20", "30"], correta: 1 },
      { enunciado: "Qual é o MDC de 14 e 21?",
        opcoes: ["3", "7", "14", "21", "42"], correta: 1 },
      { enunciado: "Qual é o MDC de 36 e 48?",
        opcoes: ["6", "8", "12", "16", "24"], correta: 2 }
    ]
  },
  {
    id: "M1.3.4",
    titulo: "Mínimo múltiplo comum (MMC)",
    teoria: [
      "O MMC de dois ou mais números é o menor número positivo que é múltiplo de todos eles.",
      "Uma forma de encontrar o MMC é pela fatoração em primos: multiplicam-se todos os fatores, cada um com o maior expoente.",
      "O MMC é útil para somar frações com denominadores diferentes e para encontrar quando eventos periódicos coincidem."
    ],
    exemplos: [
      "MMC de 4 e 6 = 12.",
      "MMC de 6 e 8 = 24.",
      "MMC de 5 e 10 = 10.",
      "MMC de 3 e 5 = 15.",
      "MMC de 9 e 12 = 36."
    ],
    exercicios: [
      { enunciado: "Qual é o MMC de 4 e 6?",
        opcoes: ["6", "8", "12", "18", "24"], correta: 2 },
      { enunciado: "Qual é o MMC de 6 e 8?",
        opcoes: ["12", "16", "24", "32", "48"], correta: 2 },
      { enunciado: "Qual é o MMC de 5 e 10?",
        opcoes: ["5", "10", "15", "20", "25"], correta: 1 },
      { enunciado: "Qual é o MMC de 3 e 5?",
        opcoes: ["5", "10", "15", "20", "25"], correta: 2 },
      { enunciado: "Qual é o MMC de 9 e 12?",
        opcoes: ["18", "24", "36", "48", "72"], correta: 2 },
      { enunciado: "Qual é o MMC de 8 e 12?",
        opcoes: ["12", "16", "24", "32", "48"], correta: 2 },
      { enunciado: "Qual é o MMC de 6 e 9?",
        opcoes: ["9", "12", "18", "24", "36"], correta: 2 },
      { enunciado: "Qual é o MMC de 10 e 15?",
        opcoes: ["15", "20", "30", "45", "60"], correta: 2 },
      { enunciado: "Qual é o MMC de 12 e 18?",
        opcoes: ["18", "24", "36", "48", "72"], correta: 2 },
      { enunciado: "Qual é o MMC de 15 e 20?",
        opcoes: ["30", "40", "60", "80", "100"], correta: 2 }
    ]
  }
];
