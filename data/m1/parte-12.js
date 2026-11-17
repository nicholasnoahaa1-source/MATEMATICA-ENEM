// Módulo 1, parte 12: aulas M1.5.1 a M1.5.4.
window.AULAS_M1_P12 = [
  {
    id: "M1.5.1",
    titulo: "Potências de expoente inteiro",
    teoria: [
      "A potência aⁿ indica a multiplicação de a por si mesmo n vezes. Por exemplo, 2³ = 8.",
      "Todo número diferente de zero elevado a 0 resulta em 1: a⁰ = 1.",
      "Expoente negativo indica o inverso da potência com expoente positivo: a⁻ⁿ = 1/aⁿ. Por exemplo, 2⁻² = 1/4."
    ],
    exemplos: [
      "2³ = 8.",
      "3² = 9.",
      "5⁰ = 1.",
      "2⁻² = 1/2² = 1/4.",
      "10³ = 1.000."
    ],
    exercicios: [
      { enunciado: "Qual é o resultado de 2³?",
        opcoes: ["6", "8", "9", "12", "16"], correta: 1 },
      { enunciado: "Qual é o resultado de 3²?",
        opcoes: ["6", "9", "12", "15", "18"], correta: 1 },
      { enunciado: "Qual é o resultado de 5⁰?",
        opcoes: ["0", "1", "5", "10", "25"], correta: 1 },
      { enunciado: "Qual é o resultado de 2⁻²?",
        opcoes: ["4", "2", "1/2", "1/4", "1/8"], correta: 3 },
      { enunciado: "Qual é o resultado de 10³?",
        opcoes: ["100", "1.000", "10.000", "100.000", "1.000.000"], correta: 1 },
      { enunciado: "Qual é o resultado de 4²?",
        opcoes: ["8", "12", "16", "20", "24"], correta: 2 },
      { enunciado: "Qual é o resultado de 3⁻¹?",
        opcoes: ["3", "1/3", "1/9", "9", "27"], correta: 1 },
      { enunciado: "Qual é o resultado de 2⁴?",
        opcoes: ["8", "12", "16", "20", "24"], correta: 2 },
      { enunciado: "Qual é o resultado de 5⁻²?",
        opcoes: ["25", "5", "1/5", "1/25", "1/125"], correta: 3 },
      { enunciado: "Qual é o resultado de 10⁻²?",
        opcoes: ["100", "10", "1", "0,1", "0,01"], correta: 4 }
    ]
  },
  {
    id: "M1.5.2",
    titulo: "Propriedades das potências",
    teoria: [
      "Produto de potências de mesma base: conserva-se a base e somam-se os expoentes. aᵐ × aⁿ = aᵐ⁺ⁿ.",
      "Quociente de potências de mesma base: conserva-se a base e subtraem-se os expoentes. aᵐ ÷ aⁿ = aᵐ⁻ⁿ.",
      "Potência de potência: multiplicam-se os expoentes. (aᵐ)ⁿ = aᵐˣⁿ.",
      "Potência de um produto: o expoente vale para cada fator. (a × b)ⁿ = aⁿ × bⁿ."
    ],
    exemplos: [
      "2³ × 2² = 2⁵ = 32.",
      "5⁴ ÷ 5² = 5² = 25.",
      "(2³)² = 2⁶ = 64.",
      "(3 × 2)² = 3² × 2² = 9 × 4 = 36.",
      "10³ × 10² = 10⁵ = 100.000."
    ],
    exercicios: [
      { enunciado: "Qual é o resultado de 2³ × 2²?",
        opcoes: ["2⁵", "2⁶", "2⁴", "2³", "2²"], correta: 0 },
      { enunciado: "Qual é o resultado de 5⁴ ÷ 5²?",
        opcoes: ["5²", "5⁶", "5⁴", "5³", "5¹"], correta: 0 },
      { enunciado: "Qual é o resultado de (2³)²?",
        opcoes: ["2⁵", "2⁶", "2⁴", "2³", "2²"], correta: 1 },
      { enunciado: "Qual é o resultado de (3 × 2)²?",
        opcoes: ["36", "18", "12", "9", "6"], correta: 0 },
      { enunciado: "Qual é o resultado de 10³ × 10²?",
        opcoes: ["10⁵", "10⁶", "10⁴", "10³", "10²"], correta: 0 },
      { enunciado: "Qual é o resultado de 3² × 3³?",
        opcoes: ["3⁵", "3⁶", "3⁴", "3³", "3²"], correta: 0 },
      { enunciado: "Qual é o resultado de 7⁵ ÷ 7³?",
        opcoes: ["7²", "7⁸", "7⁵", "7⁴", "7¹"], correta: 0 },
      { enunciado: "Qual é o resultado de (5²)³?",
        opcoes: ["5⁵", "5⁶", "5⁴", "5³", "5²"], correta: 1 },
      { enunciado: "Qual é o resultado de (2 × 3)³?",
        opcoes: ["216", "36", "18", "12", "6"], correta: 0 },
      { enunciado: "Qual é o resultado de 10⁴ ÷ 10²?",
        opcoes: ["10²", "10⁶", "10⁴", "10³", "10¹"], correta: 0 }
    ]
  },
  {
    id: "M1.5.3",
    titulo: "Raízes e expoentes fracionários",
    teoria: [
      "A raiz enésima de a é o número que, elevado a n, resulta em a.",
      "A raiz quadrada é a raiz de índice 2. Por exemplo, √9 = 3, porque 3² = 9.",
      "O expoente fracionário 1/n corresponde à raiz enésima: a^(1/n) = ⁿ√a. Por exemplo, 8^(1/3) = ∛8 = 2."
    ],
    exemplos: [
      "√9 = 3.",
      "∛8 = 2.",
      "9^(1/2) = √9 = 3.",
      "8^(1/3) = ∛8 = 2.",
      "16^(1/2) = √16 = 4."
    ],
    exercicios: [
      { enunciado: "Qual é a raiz quadrada de 9?",
        opcoes: ["2", "3", "4", "5", "6"], correta: 1 },
      { enunciado: "Qual é a raiz cúbica de 8?",
        opcoes: ["2", "3", "4", "5", "6"], correta: 0 },
      { enunciado: "Qual é o valor de 9^(1/2)?",
        opcoes: ["2", "3", "4", "5", "6"], correta: 1 },
      { enunciado: "Qual é o valor de 8^(1/3)?",
        opcoes: ["2", "3", "4", "5", "6"], correta: 0 },
      { enunciado: "Qual é o valor de 16^(1/2)?",
        opcoes: ["2", "3", "4", "5", "6"], correta: 2 },
      { enunciado: "Qual é a raiz quadrada de 16?",
        opcoes: ["2", "3", "4", "5", "6"], correta: 2 },
      { enunciado: "Qual é a raiz cúbica de 27?",
        opcoes: ["2", "3", "4", "5", "6"], correta: 1 },
      { enunciado: "Qual é o valor de 25^(1/2)?",
        opcoes: ["2", "3", "4", "5", "6"], correta: 3 },
      { enunciado: "Qual é o valor de 27^(1/3)?",
        opcoes: ["2", "3", "4", "5", "6"], correta: 1 },
      { enunciado: "Qual é o valor de 64^(1/2)?",
        opcoes: ["6", "7", "8", "9", "10"], correta: 2 }
    ]
  },
  {
    id: "M1.5.4",
    titulo: "Notação científica",
    teoria: [
      "Um número está em notação científica quando está escrito como a × 10ⁿ, com 1 ≤ a < 10 e n inteiro.",
      "Expoente positivo indica número grande, e expoente negativo indica número pequeno.",
      "Exemplos: 3.200 = 3,2 × 10³, e 0,00042 = 4,2 × 10⁻⁴."
    ],
    exemplos: [
      "3.200 = 3,2 × 10³.",
      "0,00042 = 4,2 × 10⁻⁴.",
      "5.600 = 5,6 × 10³.",
      "0,00075 = 7,5 × 10⁻⁴.",
      "12.000 = 1,2 × 10⁴."
    ],
    exercicios: [
      { enunciado: "Escreva 3.200 em notação científica.",
        opcoes: ["3,2 × 10³", "3,2 × 10²", "3,5 × 10³", "2,3 × 10³", "3,2 × 10⁴"], correta: 0 },
      { enunciado: "Escreva 0,00042 em notação científica.",
        opcoes: ["4,2 × 10⁻⁴", "4,2 × 10⁻³", "4,2 × 10⁻⁵", "2,4 × 10⁻⁴", "4,2 × 10⁴"], correta: 0 },
      { enunciado: "Escreva 5.600 em notação científica.",
        opcoes: ["5,6 × 10³", "5,6 × 10²", "6,5 × 10³", "5,3 × 10³", "5,6 × 10⁴"], correta: 0 },
      { enunciado: "Escreva 0,00075 em notação científica.",
        opcoes: ["7,5 × 10⁻⁴", "7,5 × 10⁻³", "5,7 × 10⁻⁴", "7,5 × 10⁻⁵", "7,5 × 10⁴"], correta: 0 },
      { enunciado: "Escreva 12.000 em notação científica.",
        opcoes: ["1,2 × 10⁴", "1,2 × 10³", "2,1 × 10⁴", "1,5 × 10⁴", "1,2 × 10⁵"], correta: 0 },
      { enunciado: "Escreva 0,000025 em notação científica.",
        opcoes: ["2,5 × 10⁻⁵", "2,5 × 10⁻⁴", "5,2 × 10⁻⁵", "2,5 × 10⁻⁶", "2,5 × 10⁵"], correta: 0 },
      { enunciado: "Escreva 450.000 em notação científica.",
        opcoes: ["4,5 × 10⁵", "4,5 × 10⁴", "5,4 × 10⁵", "4,8 × 10⁵", "4,5 × 10⁶"], correta: 0 },
      { enunciado: "Escreva 0,0000075 em notação científica.",
        opcoes: ["7,5 × 10⁻⁶", "7,5 × 10⁻⁵", "5,7 × 10⁻⁶", "7,5 × 10⁻⁷", "7,5 × 10⁶"], correta: 0 },
      { enunciado: "Escreva 6.700.000 em notação científica.",
        opcoes: ["6,7 × 10⁶", "6,7 × 10⁵", "7,6 × 10⁶", "6,9 × 10⁶", "6,7 × 10⁷"], correta: 0 },
      { enunciado: "Escreva 0,00000089 em notação científica.",
        opcoes: ["8,9 × 10⁻⁷", "8,9 × 10⁻⁶", "9,8 × 10⁻⁷", "8,7 × 10⁻⁷", "8,9 × 10⁷"], correta: 0 }
    ]
  }
];
