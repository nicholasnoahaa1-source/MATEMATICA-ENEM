// Módulo 1, parte 14: aulas M1.6.1 e M1.6.2.
window.AULAS_M1_P14 = [
  {
    id: "M1.6.1",
    titulo: "Prioridade de operações",
    teoria: [
      "A ordem das operações é: parênteses, potências e raízes, multiplicações e divisões, e por fim adições e subtrações.",
      "Multiplicação e divisão têm a mesma prioridade. Adição e subtração também têm a mesma prioridade.",
      "Quando duas operações têm a mesma prioridade, resolva da esquerda para a direita. Por exemplo, 3 + 4 × 2 = 3 + 8 = 11."
    ],
    exemplos: [
      "3 + 4 × 2 = 3 + 8 = 11.",
      "6 ÷ 2 + 4 = 3 + 4 = 7.",
      "(2 + 3)² = 5² = 25.",
      "2 × (5 − 2)² = 2 × 3² = 2 × 9 = 18.",
      "100 ÷ 4 × 2 = 25 × 2 = 50, porque divisão e multiplicação são resolvidas da esquerda para a direita."
    ],
    exercicios: [
      { enunciado: "Qual é o resultado de 3 + 4 × 2?",
        opcoes: ["10", "11", "14", "22", "24"], correta: 1 },
      { enunciado: "Qual é o resultado de 6 ÷ 2 + 4?",
        opcoes: ["5", "6", "7", "8", "9"], correta: 2 },
      { enunciado: "Qual é o resultado de (2 + 3)²?",
        opcoes: ["10", "20", "25", "30", "35"], correta: 2 },
      { enunciado: "Qual é o resultado de 2 × (5 − 2)²?",
        opcoes: ["12", "16", "18", "20", "24"], correta: 2 },
      { enunciado: "Qual é o resultado de 100 ÷ 4 × 2?",
        opcoes: ["12,5", "25", "50", "100", "200"], correta: 2 },
      { enunciado: "Qual é o resultado de 3² × 2?",
        opcoes: ["12", "16", "18", "20", "24"], correta: 2 },
      { enunciado: "Qual é o resultado de 2 × (4 + 1)²?",
        opcoes: ["25", "40", "50", "60", "100"], correta: 2,
        correcao: "Substituída: a questão original repetia a questão de 2 × (5 − 2)², agora com um novo enunciado." },
      { enunciado: "Qual é o resultado de 10 + 6 ÷ 2 × 3?",
        opcoes: ["9", "16", "19", "25", "30"], correta: 2,
        correcao: "Substituída: a questão original repetia 100 ÷ 4 × 2, agora com um novo enunciado." },
      { enunciado: "Qual é o resultado de 2³ + 3²?",
        opcoes: ["11", "13", "15", "17", "19"], correta: 3 },
      { enunciado: "Qual é o volume de um cubo de aresta 3?",
        opcoes: ["9", "18", "27", "36", "81"], correta: 2 }
    ]
  },
  {
    id: "M1.6.2",
    titulo: "Propriedades comutativa, associativa e distributiva",
    teoria: [
      "Comutativa: a + b = b + a e a × b = b × a. A ordem dos fatores ou das parcelas não muda o resultado.",
      "Associativa: (a + b) + c = a + (b + c) e (a × b) × c = a × (b × c). O agrupamento não muda o resultado.",
      "Distributiva: a × (b + c) = a × b + a × c.",
      "O elemento neutro da adição é 0 e o da multiplicação é 1. A subtração e a divisão não são comutativas."
    ],
    exemplos: [
      "7 + 12 = 12 + 7 = 19.",
      "25 × 4 × 2 = 25 × 8 = 200, agrupando os fatores de forma conveniente.",
      "4 × (3 + 5) = 4 × 3 + 4 × 5 = 12 + 20 = 32.",
      "O elemento neutro da adição é 0, porque 12 + 0 = 12.",
      "8 − 3 = 5, mas 3 − 8 = −5. Logo, a subtração não é comutativa."
    ],
    exercicios: [
      { enunciado: "Qual propriedade garante que 4 × 9 = 9 × 4?",
        opcoes: ["Comutativa", "Associativa", "Distributiva", "Elemento neutro", "Inversa"], correta: 0 },
      { enunciado: "Qual propriedade garante que (2 + 3) + 7 = 2 + (3 + 7)?",
        opcoes: ["Comutativa", "Associativa", "Distributiva", "Elemento neutro", "Inversa"], correta: 1 },
      { enunciado: "Qual é o resultado de 5 × (2 + 6)?",
        opcoes: ["10", "16", "30", "40", "48"], correta: 3 },
      { enunciado: "Qual propriedade está em 7 × (4 + 1) = 7 × 4 + 7 × 1?",
        opcoes: ["Comutativa", "Associativa", "Distributiva", "Elemento neutro", "Inversa"], correta: 2 },
      { enunciado: "Qual é o resultado de 45 + 0?",
        opcoes: ["0", "4", "45", "450", "−45"], correta: 2 },
      { enunciado: "Qual é o elemento neutro da adição?",
        opcoes: ["0", "1", "−1", "2", "10"], correta: 0 },
      { enunciado: "Qual é o resultado de 8 × 1?",
        opcoes: ["0", "1", "8", "9", "80"], correta: 2 },
      { enunciado: "Qual é o resultado de 3 × 15 + 3 × 5?",
        opcoes: ["45", "50", "60", "75", "90"], correta: 2 },
      { enunciado: "A subtração é comutativa?",
        opcoes: ["Sim", "Não", "Às vezes", "Sempre", "Depende"], correta: 1 },
      { enunciado: "Qual é o resultado de 2 × 5 × 10?",
        opcoes: ["25", "50", "70", "100", "120"], correta: 3 }
    ]
  }
];
