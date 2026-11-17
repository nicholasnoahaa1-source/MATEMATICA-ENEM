// Módulo 1, parte 2: aulas M1.1.5 e M1.1.6.
window.AULAS_M1_P2 = [
  {
    id: "M1.1.5",
    titulo: "Retas, intervalos e representação na reta",
    teoria: [
      "A desigualdade x > 3 representa todos os números maiores que 3.",
      "Um intervalo descreve uma faixa de valores. O parêntese indica extremo aberto, isto é, o extremo não faz parte do intervalo. O colchete indica extremo fechado, isto é, o extremo faz parte do intervalo.",
      "Em (3, +∞), o 3 não está incluído. Em [3, +∞), o 3 está incluído.",
      "Em [2, 5], os extremos 2 e 5 estão incluídos. Em (2, 5), nenhum extremo está incluído."
    ],
    exemplos: [
      "x > 2 é representado na reta por um círculo aberto em 2, com a região à direita sombreada.",
      "x ≤ 4 é representado por um círculo fechado em 4, com a região à esquerda sombreada.",
      "O intervalo [1, 6] corresponde à desigualdade 1 ≤ x ≤ 6.",
      "3 pertence a (2, 5), porque 2 < 3 < 5. Já 2 não pertence a (2, 5), porque o extremo 2 está excluído."
    ],
    exercicios: [
      { enunciado: "Qual é o intervalo que representa x > 5?",
        opcoes: ["[5, +∞)", "(5, +∞)", "(−∞, 5]", "(−∞, 5)", "[0, 5]"], correta: 1 },
      { enunciado: "Qual é o intervalo que representa x ≤ 3?",
        opcoes: ["(3, +∞)", "[3, +∞)", "(−∞, 3]", "(−∞, 3)", "[0, 3]"], correta: 2 },
      { enunciado: "O número 4 pertence ao intervalo [2, 6]?",
        opcoes: ["Sim", "Não", "Somente se for inteiro", "Somente se for par", "Não é possível saber"], correta: 0 },
      { enunciado: "O número 2 pertence ao intervalo (2, 6)?",
        opcoes: ["Sim", "Não", "Somente se for par", "Somente se for positivo", "Depende"], correta: 1 },
      { enunciado: "Como se escreve [1, 8] na forma de desigualdade?",
        opcoes: ["1 < x < 8", "1 ≤ x ≤ 8", "x > 1", "x < 8", "x ≥ 8"], correta: 1 },
      { enunciado: "Uma velocidade de até 60 km/h, incluindo 60 km/h, pertence a qual intervalo?",
        opcoes: ["(0, 60)", "[0, 60]", "[60, +∞)", "(60, +∞)", "(−∞, 60)"], correta: 1 },
      { enunciado: "Uma nota maior ou igual a 6, em uma escala de 0 a 10, pertence a qual intervalo?",
        opcoes: ["(6, 10]", "[6, 10]", "(0, 6)", "[0, 6)", "[6, +∞)"], correta: 1 },
      { enunciado: "Uma temperatura está entre 20 e 30 graus, sem incluir os extremos. Qual intervalo representa essa situação?",
        opcoes: ["[20, 30]", "(20, 30)", "[20, 30)", "(20, 30]", "[20, +∞)"], correta: 1 },
      { enunciado: "O número 0 pertence ao intervalo (−1, 1)?",
        opcoes: ["Sim", "Não", "Somente se for inteiro", "Somente se for positivo", "Não é possível determinar"], correta: 0 },
      { enunciado: "Um peso maior ou igual a 50 kg e menor que 80 kg pertence a qual intervalo?",
        opcoes: ["(50, 80)", "[50, 80]", "[50, 80)", "(50, 80]", "[50, +∞)"], correta: 2 }
    ]
  },
  {
    id: "M1.1.6",
    titulo: "Operações e propriedades dos conjuntos numéricos",
    teoria: [
      "A adição e a multiplicação são comutativas: a + b = b + a e a × b = b × a.",
      "A associatividade permite reagrupar os termos: (a + b) + c = a + (b + c).",
      "A distributividade relaciona multiplicação e adição: a × (b + c) = a × b + a × c.",
      "O elemento neutro da adição é 0, e o da multiplicação é 1.",
      "A subtração e a divisão não são comutativas."
    ],
    exemplos: [
      "7 + 12 = 12 + 7 = 19.",
      "4 × (3 + 5) = 4 × 3 + 4 × 5 = 12 + 20 = 32.",
      "25 × 4 × 2 = 25 × (4 × 2) = 25 × 8 = 200.",
      "O elemento neutro da adição é 0, porque 12 + 0 = 12.",
      "8 − 3 = 5, mas 3 − 8 = −5. Logo, 8 − 3 ≠ 3 − 8."
    ],
    exercicios: [
      { enunciado: "Qual propriedade está sendo usada em 5 × 8 = 8 × 5?",
        opcoes: ["Associativa", "Comutativa", "Distributiva", "Elemento neutro", "Inversa"], correta: 1 },
      { enunciado: "Qual é o elemento neutro da multiplicação?",
        opcoes: ["0", "1", "−1", "2", "10"], correta: 1 },
      { enunciado: "Qual é o resultado de 6 × (4 + 2)?",
        opcoes: ["24", "30", "36", "48", "12"], correta: 2 },
      { enunciado: "Qual propriedade está sendo usada em 3 × (5 + 2) = 3 × 5 + 3 × 2?",
        opcoes: ["Comutativa", "Associativa", "Distributiva", "Elemento neutro", "Inversa"], correta: 2 },
      { enunciado: "Qual é o resultado de 12 + 0?",
        opcoes: ["0", "12", "−12", "1", "24"], correta: 1 },
      { enunciado: "Qual operação representa 4 prateleiras com 12 livros cada?",
        opcoes: ["4 + 12", "4 × 12", "12 ÷ 4", "12 − 4", "4 ÷ 12"], correta: 1 },
      { enunciado: "Qual dos cálculos resulta em um número inteiro que não é natural?",
        opcoes: ["4 + 3", "4 − 3", "3 − 4", "4 × 3", "12 ÷ 4"], correta: 2 },
      { enunciado: "Qual é o resultado de 2 × (3 + 4) − 5?",
        opcoes: ["9", "11", "13", "14", "19"], correta: 0 },
      { enunciado: "Qual propriedade está sendo usada em 25 × 17 × 4 = 25 × 4 × 17?",
        opcoes: ["Comutativa", "Associativa", "Distributiva", "Elemento neutro", "Inversa"], correta: 0 },
      { enunciado: "Uma caixa tem 3 pacotes de 8 itens e 5 itens avulsos. Qual expressão calcula o total de itens?",
        opcoes: ["3 + 8 + 5", "3 × 8 + 5", "3 × (8 + 5)", "8 × 5 + 3", "3 ÷ 8 + 5"], correta: 1 }
    ]
  }
];
