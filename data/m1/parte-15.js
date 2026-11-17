// Módulo 1, parte 15: aulas M1.6.3 e M1.6.4.
window.AULAS_M1_P15 = [
  {
    id: "M1.6.3",
    titulo: "Expressões com parênteses e frações",
    teoria: [
      "Parênteses têm prioridade máxima. Primeiro resolva o que está dentro deles, seguindo a ordem das operações.",
      "Para somar ou subtrair frações, iguale os denominadores.",
      "Para multiplicar frações, multiplique numeradores e denominadores. Para dividir, multiplique pelo inverso da segunda fração.",
      "Sempre simplifique o resultado final."
    ],
    exemplos: [
      "2 × (3 + 4) − 5 = 2 × 7 − 5 = 14 − 5 = 9.",
      "(2 + 3)² = 5² = 25.",
      "1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
      "3/4 − 1/4 = 2/4 = 1/2.",
      "2/3 × 3/5 = 6/15 = 2/5."
    ],
    exercicios: [
      { enunciado: "Qual é o resultado de 5 × (4 − 1) + 2?",
        opcoes: ["13", "15", "17", "19", "21"], correta: 2 },
      { enunciado: "Qual é o resultado de (3 + 2) × (4 − 1)?",
        opcoes: ["9", "12", "15", "18", "20"], correta: 2 },
      { enunciado: "Qual é o resultado de (10 − 4) ÷ 3?",
        opcoes: ["1", "2", "3", "6", "18"], correta: 1 },
      { enunciado: "Qual é o resultado de 2 + 3 × (4 + 1)?",
        opcoes: ["15", "17", "20", "25", "27"], correta: 1 },
      { enunciado: "Qual é o resultado de 1/3 + 1/6?",
        opcoes: ["1/9", "1/2", "2/9", "1/4", "2/3"], correta: 1 },
      { enunciado: "Qual é o resultado de 5/4 − 1/2?",
        opcoes: ["1/4", "3/4", "1", "7/4", "3/2"], correta: 1 },
      { enunciado: "Qual é o resultado de (1/2) × (2/3)?",
        opcoes: ["1/6", "1/3", "2/3", "1", "3/4"], correta: 1 },
      { enunciado: "Qual é o resultado de (1/2) ÷ (1/4)?",
        opcoes: ["1/8", "1/2", "2", "4", "8"], correta: 2 },
      { enunciado: "Qual é o resultado de 2/3 + (1/3 × 6)?",
        opcoes: ["2", "8/3", "3", "4/3", "10/3"], correta: 1 },
      { enunciado: "Qual é o resultado de 3 × (1/4 + 1/2)?",
        opcoes: ["3/4", "5/4", "9/4", "7/4", "3/2"], correta: 2 }
    ]
  },
  {
    id: "M1.6.4",
    titulo: "Erros comuns e verificação de resultados",
    teoria: [
      "Erros comuns: confundir a ordem das operações, esquecer parênteses e errar o sinal de um número negativo.",
      "Uma forma de verificar é estimar o resultado antes de calcular, para ver se a ordem de grandeza faz sentido.",
      "Outra forma é usar a operação inversa: se 84 ÷ 7 = 12, então 12 × 7 deve dar 84.",
      "Confira também as unidades e o contexto do problema."
    ],
    exemplos: [
      "20 − 4 + 2 = 16 + 2 = 18. Quem faz 20 − (4 + 2) chega a 14, erro comum.",
      "12 ÷ 3 × 2 = 4 × 2 = 8, da esquerda para a direita.",
      "49 × 21 ≈ 50 × 20 = 1.000.",
      "Verificação: 12 × 7 = 84, então 84 ÷ 7 = 12 está correto.",
      "−3 × (−4) = 12, porque o produto de dois negativos é positivo."
    ],
    exercicios: [
      { enunciado: "Qual é o resultado correto de 20 − 4 + 2?",
        opcoes: ["14", "16", "18", "22", "24"], correta: 2 },
      { enunciado: "Qual é o resultado correto de 12 ÷ 3 × 2?",
        opcoes: ["2", "4", "6", "8", "12"], correta: 3 },
      { enunciado: "Qual é o resultado correto de 2 × 3 + 1?",
        opcoes: ["6", "7", "8", "9", "12"], correta: 1 },
      { enunciado: "Qual é o resultado correto de (5 − 2)²?",
        opcoes: ["3", "6", "7", "9", "25"], correta: 3 },
      { enunciado: "Qual é a estimativa mais razoável para 49 × 21?",
        opcoes: ["100", "500", "1.000", "10.000", "100.000"], correta: 2 },
      { enunciado: "Qual é o resultado correto de 0,5 × 40?",
        opcoes: ["2", "4", "20", "40", "80"], correta: 2 },
      { enunciado: "Para verificar que 84 ÷ 7 = 12, qual operação inversa confirma o resultado?",
        opcoes: ["12 + 7", "12 × 7", "12 − 7", "7 ÷ 12", "84 × 7"], correta: 1 },
      { enunciado: "Qual é um décimo de 350?",
        opcoes: ["3", "3,5", "35", "350", "3.500"], correta: 2 },
      { enunciado: "Qual é o resultado de −3 × (−4)?",
        opcoes: ["−12", "−7", "7", "12", "1"], correta: 3 },
      { enunciado: "Qual é o resultado de 24 ÷ (2 × 3)?",
        opcoes: ["2", "4", "6", "8", "12"], correta: 1 }
    ]
  }
];
