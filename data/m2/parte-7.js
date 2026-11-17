// Módulo 2, parte 7: aulas M2.4.1, M2.4.2 e M2.4.3 (radicais).
window.AULAS_M2_P7 = [
  {
    id: "M2.4.1",
    titulo: "Raiz quadrada e raiz enésima",
    teoria: [
      "A raiz quadrada principal de a ≥ 0 é o único número b ≥ 0 tal que b² = a. Por exemplo, √25 = 5, e não ±5. Já a equação x² = 25 tem duas soluções: 5 e −5.",
      "A raiz enésima de a é um número cujo valor elevado a n resulta em a. Se n é par, a raiz real principal só existe para a ≥ 0. Se n é ímpar, existe também para números negativos: a raiz cúbica de −8 é −2.",
      "Uma raiz pode ser exata, como √36 = 6, ou irracional, como √2. Para estimar, use quadrados perfeitos: 1² < 2 < 2², logo 1 < √2 < 2.",
      "Para qualquer real a, √(a²) = |a|, porque a raiz principal é não negativa. A igualdade √(a²) = a só vale se a ≥ 0."
    ],
    exemplos: [
      "√49 = 7, porque 7² = 49 e 7 ≥ 0.",
      "A raiz cúbica de −27 é −3, porque (−3)³ = −27.",
      "5² = 25 e 6² = 36, então 5 < √30 < 6.",
      "√((−8)²) = √64 = 8, que é o mesmo que |−8|.",
      "Uma praça quadrada tem área 144 m². O lado positivo é l = √144 = 12 m."
    ],
    exercicios: [
      { enunciado: "Calcule √81.",
        opcoes: ["9", "8", "7", "81", "18"], correta: 0 },
      { enunciado: "Calcule a raiz cúbica de 64.",
        opcoes: ["8", "4", "16", "32", "2"], correta: 1 },
      { enunciado: "Entre quais inteiros consecutivos está √50?",
        opcoes: ["6 e 7", "7 e 8", "8 e 9", "5 e 6", "24 e 25"], correta: 1 },
      { enunciado: "Qual é √((−5)²)?",
        opcoes: ["−5", "5", "±5", "25", "−25"], correta: 1 },
      { enunciado: "A raiz quarta real principal de 16 vale quanto?",
        opcoes: ["4", "2", "−2", "8", "16"], correta: 1 },
      { enunciado: "Um quadrado tem área 225 cm². Qual é a medida do lado?",
        opcoes: ["30 cm", "15 cm", "45 cm", "112,5 cm", "225 cm"], correta: 1 }
    ]
  },
  {
    id: "M2.4.2",
    titulo: "Propriedades dos radicais",
    teoria: [
      "Para a e b não negativos, √a × √b = √(ab). A propriedade não vale para radicandos negativos no conjunto dos reais.",
      "Para a ≥ 0 e b > 0, √(a/b) = √a / √b. O denominador precisa ser diferente de zero.",
      "Para índice par, a raiz de aⁿ é |a| quando n é par. Para índice ímpar, a raiz de aⁿ é a.",
      "Não há propriedade distributiva da raiz sobre soma ou diferença: √(a + b) geralmente não é √a + √b. Por exemplo, √(9 + 16) = 5, mas √9 + √16 = 7."
    ],
    exemplos: [
      "√4 × √9 = 2 × 3 = 6, que também é √36.",
      "√(49/25) = √49 / √25 = 7/5.",
      "A raiz cúbica de (−8) × (27) é (−2) × 3 = −6, igual à raiz cúbica de −216.",
      "√((−11)²) = |−11| = 11.",
      "Verificar √(9 + 16) = √9 + √16: o lado esquerdo vale 5 e o direito vale 7. A propriedade não vale para somas."
    ],
    exercicios: [
      { enunciado: "Calcule √16 × √25.",
        opcoes: ["9", "41", "20", "400", "10"], correta: 2 },
      { enunciado: "Calcule √(81/9).",
        opcoes: ["9", "27", "4,5", "3", "1/3"], correta: 3 },
      { enunciado: "Calcule a raiz cúbica de −64.",
        opcoes: ["4", "−4", "−8", "8", "−16"], correta: 1 },
      { enunciado: "Simplifique √((−7)²).",
        opcoes: ["−7", "7", "±7", "49", "−49"], correta: 1 },
      { enunciado: "Julgue a igualdade √(1 + 8) = √1 + √8.",
        opcoes: ["Verdadeiro, porque √9 = 3 e √8 = 2√2", "Falso, porque 3 ≠ 1 + 2√2", "Verdadeiro, porque 1 + 8 = 9", "Falso, porque √8 não existe", "Depende de x"], correta: 1 },
      { enunciado: "Para quais valores reais de x existe √(x − 3)?",
        opcoes: ["x ≤ 3", "x > 0", "x ≥ 3", "x ≠ 3", "Todos os reais"], correta: 2 }
    ]
  },
  {
    id: "M2.4.3",
    titulo: "Simplificação de radicais",
    teoria: [
      "Simplificar um radical é reescrevê-lo com um radicando que não tenha fatores que sejam potências perfeitas do índice. Por exemplo, 72 = 36 × 2, então √72 = √36 × √2 = 6√2.",
      "Para raízes quadradas, fatore em primos: 180 = 2² × 3² × 5, então √180 = 2 × 3 × √5 = 6√5. Cada par de fatores iguais sai da raiz como um fator.",
      "Para raízes cúbicas, cada grupo de três fatores iguais sai da raiz: ∛54 = ∛(27 × 2) = 3∛2.",
      "Uma forma simplificada não altera o valor. Aproximar √2 por 1,414 é útil, mas não é igualdade exata."
    ],
    exemplos: [
      "√50 = √25 × √2 = 5√2.",
      "√108 = √36 × √3 = 6√3.",
      "√200 = √100 × √2 = 10√2.",
      "∛250 = ∛125 × ∛2 = 5∛2.",
      "√(18x²) = 3|x|√2, porque 18x² = 9 × 2 × x². Se x = −2, o resultado é 6√2, e não −6√2."
    ],
    exercicios: [
      { enunciado: "Simplifique √12.",
        opcoes: ["3√2", "√3", "2√3", "6√2", "4√3"], correta: 2 },
      { enunciado: "Simplifique √75.",
        opcoes: ["3√5", "25√3", "15√5", "5√3", "5√15"], correta: 3 },
      { enunciado: "Simplifique √98.",
        opcoes: ["49√2", "7√2", "2√7", "14√2", "98√2"], correta: 1 },
      { enunciado: "Simplifique √288.",
        opcoes: ["24√2", "144√2", "8√6", "10√3", "12√2"], correta: 4 },
      { enunciado: "Simplifique a raiz cúbica de 128.",
        opcoes: ["8∛2", "4∛4", "4∛2", "2∛4", "16∛2"], correta: 2 },
      { enunciado: "Simplifique √(25t²), para t real.",
        opcoes: ["5t", "25|t|", "5t²", "5|t|", "t"], correta: 3 }
    ]
  }
];
