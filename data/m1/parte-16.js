// Módulo 1, parte 16: aula M1.6.5.
window.AULAS_M1_P16 = [
  {
    id: "M1.6.5",
    titulo: "Avaliação crítica de cálculos",
    teoria: [
      "Antes de aceitar um resultado, pergunte se ele é razoável. Uma estimativa rápida costuma revelar erros grosseiros.",
      "Confira a ordem das operações, os parênteses e o sinal dos números negativos.",
      "Confira também as unidades e o contexto. Um preço, uma quantidade e uma medida têm limites que o resultado precisa respeitar.",
      "Justifique cada etapa. Se não souber dizer por que um passo está certo, refaça esse passo."
    ],
    exemplos: [
      "5 + 3 × 2 = 5 + 6 = 11. Quem soma 5 + 3 primeiro chega a 16, erro de prioridade.",
      "4 × 350 = 1.400. Um resultado de 1.200 seria o de 4 × 300, e está errado porque o fator é 350.",
      "−2 − (−5) = −2 + 5 = 3. Subtrair um negativo é o mesmo que somar o positivo.",
      "3 itens de R$ 12,50 custam 3 × 12,50 = R$ 37,50.",
      "2 × 3 ÷ 2 + 1 = 6 ÷ 2 + 1 = 3 + 1 = 4, da esquerda para a direita."
    ],
    exercicios: [
      { enunciado: "Um aluno escreveu 5 + 3 × 2 = 16. Qual é o resultado correto?",
        opcoes: ["10", "11", "13", "16", "18"], correta: 1 },
      { enunciado: "Qual é o resultado correto de 4 × 350?",
        opcoes: ["1.200", "1.300", "1.400", "1.500", "1.600"], correta: 2 },
      { enunciado: "Qual é o resultado de 18 − (3 + 5)?",
        opcoes: ["8", "10", "12", "20", "26"], correta: 1 },
      { enunciado: "Um aluno calculou −2 − (−5) como −7. Qual é o resultado correto?",
        opcoes: ["−7", "−3", "3", "7", "5"], correta: 2 },
      { enunciado: "Qual é a estimativa mais razoável para 19 × 52?",
        opcoes: ["100", "500", "1.000", "5.000", "10.000"], correta: 2 },
      { enunciado: "Qual é o resultado de 3 × 2²?",
        opcoes: ["6", "9", "12", "18", "36"], correta: 2 },
      { enunciado: "Um cliente compra 3 itens de R$ 12,50. Qual é o total?",
        opcoes: ["R$ 25,00", "R$ 35,50", "R$ 37,50", "R$ 40,00", "R$ 36,50"], correta: 2 },
      { enunciado: "Qual é o resultado de (1/2 + 1/4) × 4?",
        opcoes: ["1", "2", "3", "4", "5"], correta: 2 },
      { enunciado: "Qual é o resultado de 2 × 3 ÷ 2 + 1?",
        opcoes: ["3", "4", "5", "6", "7"], correta: 1 },
      { enunciado: "Qual é o resultado de 0,2 × 0,3?",
        opcoes: ["0,6", "0,06", "0,006", "0,5", "0,23"], correta: 1 }
    ]
  }
];
