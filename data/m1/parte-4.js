// Módulo 1, parte 4: aulas M1.2.3 e M1.2.4.
window.AULAS_M1_P4 = [
  {
    id: "M1.2.3",
    titulo: "Divisão euclidiana, quociente e resto",
    teoria: [
      "Nem toda divisão é exata. Na divisão euclidiana, dividendo = divisor × quociente + resto.",
      "O resto é sempre menor que o divisor e maior ou igual a zero.",
      "Em 47 ÷ 6, o quociente é 7 e o resto é 5, porque 6 × 7 + 5 = 47.",
      "Se o resto for zero, a divisão é exata.",
      "Em uma embalagem, o quociente indica as caixas completas, e o resto indica os itens que sobram fora."
    ],
    exemplos: [
      "29 ÷ 4: quociente 7 e resto 1, porque 4 × 7 + 1 = 29.",
      "53 ÷ 8: quociente 6 e resto 5, porque 8 × 6 + 5 = 53.",
      "38 pessoas em caixas de 6: 6 caixas completas, porque 6 × 6 = 36 e sobram 2.",
      "47 itens em caixas de 6: sobram 5 itens fora, porque 47 − 42 = 5.",
      "35 ÷ 4 tem resto 3, porque 4 × 8 + 3 = 35."
    ],
    exercicios: [
      { enunciado: "Qual é o quociente de 37 ÷ 5?",
        opcoes: ["6", "7", "8", "9", "10"], correta: 1 },
      { enunciado: "Qual é o resto de 29 ÷ 6?",
        opcoes: ["3", "4", "5", "6", "0"], correta: 2 },
      { enunciado: "Qual é o resto de 48 ÷ 8?",
        opcoes: ["0", "1", "2", "6", "8"], correta: 0 },
      { enunciado: "Qual é o quociente de 50 ÷ 7?",
        opcoes: ["6", "7", "8", "9", "10"], correta: 1 },
      { enunciado: "Em 50 ÷ 12, quantas caixas completas são formadas?",
        opcoes: ["3", "4", "5", "6", "7"], correta: 1 },
      { enunciado: "Em 47 ÷ 6, quantos itens ficam fora das caixas completas?",
        opcoes: ["1", "2", "3", "5", "6"], correta: 3 },
      { enunciado: "Qual relação está correta para 43 ÷ 5?",
        opcoes: ["43 = 5 × 8 + 3", "43 = 5 × 9 + 2", "43 = 5 × 7 + 8", "43 = 5 × 8 + 2", "43 = 5 × 9 + 3"], correta: 0 },
      { enunciado: "Um ônibus leva 45 passageiros. Quantos ônibus são necessários para transportar 200 passageiros?",
        opcoes: ["3", "4", "5", "6", "7"], correta: 2 },
      { enunciado: "Qual é o maior resto possível em uma divisão por 9?",
        opcoes: ["8", "9", "10", "11", "12"], correta: 0 },
      { enunciado: "Qual é o resto de 250 ÷ 8?",
        opcoes: ["0", "2", "4", "6", "8"], correta: 1 }
    ]
  },
  {
    id: "M1.2.4",
    titulo: "Potências e prioridade de operações",
    teoria: [
      "A potência aⁿ indica multiplicar a por si mesmo n vezes. Por exemplo, 2³ = 2 × 2 × 2 = 8.",
      "A ordem das operações é: parênteses, potências e raízes, multiplicações e divisões, e por fim adições e subtrações.",
      "Multiplicação e divisão têm a mesma prioridade, e são feitas da esquerda para a direita.",
      "Adição e subtração também têm a mesma prioridade, e são feitas da esquerda para a direita."
    ],
    exemplos: [
      "3⁴ = 3 × 3 × 3 × 3 = 81.",
      "5² + 3 × 2 = 25 + 6 = 31.",
      "2 × (4 + 3)² = 2 × 7² = 2 × 49 = 98.",
      "20 ÷ 4 + 3 = 5 + 3 = 8.",
      "2³ × 5 − 4 = 8 × 5 − 4 = 40 − 4 = 36."
    ],
    exercicios: [
      { enunciado: "Qual é o resultado de 2⁵?",
        opcoes: ["10", "16", "25", "32", "64"], correta: 3 },
      { enunciado: "Qual é o resultado de 4²?",
        opcoes: ["8", "12", "16", "20", "24"], correta: 2 },
      { enunciado: "Qual é o resultado de 3 + 4 × 2?",
        opcoes: ["10", "11", "14", "22", "24"], correta: 1 },
      { enunciado: "Qual é o resultado de (2 + 3)²?",
        opcoes: ["10", "20", "25", "30", "35"], correta: 2 },
      { enunciado: "Qual é o resultado de 6 ÷ 2 + 4?",
        opcoes: ["5", "6", "7", "8", "9"], correta: 2 },
      { enunciado: "Qual é o resultado de 3² × 2?",
        opcoes: ["12", "16", "18", "20", "24"], correta: 2 },
      { enunciado: "Qual é o resultado de 2 × (5 − 2)²?",
        opcoes: ["12", "16", "18", "20", "24"], correta: 2 },
      { enunciado: "Qual é o resultado de 100 ÷ 4 × 2?",
        opcoes: ["12,5", "25", "50", "100", "200"], correta: 2 },
      { enunciado: "Qual é o resultado de 2³ + 3²?",
        opcoes: ["11", "13", "15", "17", "19"], correta: 3 },
      { enunciado: "Qual é o volume de um cubo de aresta 3?",
        opcoes: ["9", "18", "27", "36", "81"], correta: 2 }
    ]
  }
];
