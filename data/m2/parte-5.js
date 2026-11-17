// Módulo 2, parte 5: aulas M2.3.1 e M2.3.2 (potências).
window.AULAS_M2_P5 = [
  {
    id: "M2.3.1",
    titulo: "Potências de base racional",
    teoria: [
      "Uma potência é um produto de fatores iguais. Para expoente natural n ≥ 1, aⁿ é o produto de n fatores iguais a a. O número a é a base e n é o expoente. Por exemplo, (2/3)³ = 2/3 × 2/3 × 2/3 = 8/27.",
      "Para uma base racional p/q, com q diferente de zero, (p/q)ⁿ = pⁿ/qⁿ. Decimais finitos também servem: (0,2)³ = (1/5)³ = 1/125 = 0,008.",
      "O sinal depende da base e da paridade do expoente. Parênteses são decisivos: (−2)² = 4, mas −2² = −(2²) = −4.",
      "Para a diferente de zero, define-se a⁰ = 1. Qualquer número elevado a 1 é ele mesmo, e 0ⁿ = 0 para n positivo.",
      "Em modelagem, uma quantidade multiplicada pelo mesmo fator r a cada etapa segue uma potência: após n etapas, Qₙ = Q₀ · rⁿ. Se r está entre 0 e 1, a quantidade diminui."
    ],
    exemplos: [
      "(3/4)² = 9/16, que é menor que 1, como esperado.",
      "(−2/5)³ = −8/125, porque três fatores negativos resultam em sinal negativo.",
      "(−3)² = 9, enquanto −3² = −9.",
      "(0,4)³: 0,4 = 2/5, e (2/5)³ = 8/125 = 0,064.",
      "Uma amostra retém 3/4 de sua massa a cada filtragem. Após três filtragens, resta (3/4)³ = 27/64, cerca de 0,422 da massa inicial."
    ],
    exercicios: [
      { enunciado: "Calcule (2/7)².",
        opcoes: ["4/7", "4/49", "2/49", "4/14", "2/14"], correta: 1 },
      { enunciado: "Qual é (−1/3)³?",
        opcoes: ["1/27", "−1/27", "−1/9", "1/9", "−1/3"], correta: 1 },
      { enunciado: "Calcule (0,5)⁴.",
        opcoes: ["0,0625", "0,625", "0,5", "0,0125", "0,25"], correta: 0 },
      { enunciado: "Qual afirmação é verdadeira?",
        opcoes: ["(−2)² = −4", "−2² = 4", "(−2)³ = −8", "2³ = 6", "(1/2)² = 1/2"], correta: 2 },
      { enunciado: "Uma cultura tem sua quantidade multiplicada por 2/3 a cada ciclo. Que fração da quantidade inicial resta após quatro ciclos?",
        opcoes: ["16/81", "8/81", "2/3", "8/12", "32/81"], correta: 0 },
      { enunciado: "Uma caixa contém 125 peças. A cada seleção, conserva-se 2/5 das peças, em média. Quantas peças restam após três seleções, tratando a quantidade como contínua?",
        opcoes: ["8", "25", "10", "50", "2"], correta: 0 }
    ]
  },
  {
    id: "M2.3.2",
    titulo: "Produto e quociente de potências",
    teoria: [
      "Potências de mesma base se multiplicam somando os expoentes: aᵐ · aⁿ = aᵐ⁺ⁿ. Por exemplo, 2³ · 2² tem cinco fatores 2, logo é 2⁵. A base precisa ser a mesma: 2³ · 3² não é 6⁵.",
      "No quociente, com base diferente de zero, subtraem-se os expoentes: aᵐ ÷ aⁿ = aᵐ⁻ⁿ para m ≥ n. Por exemplo, 5⁶ ÷ 5⁴ = 5² = 25.",
      "Quando o expoente do denominador é maior, o resultado é o inverso de uma potência positiva: 2² ÷ 2⁵ = 1/2³ = 1/8.",
      "As mesmas leis valem para bases fracionárias: (3/4)² · (3/4)³ = (3/4)⁵ = 243/1024.",
      "A soma dos expoentes vale só para multiplicação. Em uma adição, calcule cada potência: 2³ + 2² = 8 + 4 = 12, e não 2⁵."
    ],
    exemplos: [
      "3² · 3⁴ = 3⁶ = 729.",
      "7⁵ ÷ 7³ = 7² = 49.",
      "(2/3)² · (2/3)³ = (2/3)⁵ = 32/243.",
      "4³ ÷ 4⁵ = 1/4² = 1/16, enquanto 4⁵ ÷ 4³ = 4² = 16. Inverter a divisão muda o resultado.",
      "Uma população dobra a cada etapa. A razão entre o total após 7 e após 4 etapas é 2³ = 8."
    ],
    exercicios: [
      { enunciado: "Simplifique 5³ · 5².",
        opcoes: ["5⁵", "5⁶", "5¹", "25", "125"], correta: 0 },
      { enunciado: "Calcule 10⁶ ÷ 10⁴.",
        opcoes: ["10²", "10¹⁰", "10^(3/2)", "10⁶", "10⁴"], correta: 0 },
      { enunciado: "Calcule (1/2)³ · (1/2)².",
        opcoes: ["(1/2)⁵", "(1/2)⁶", "(1/4)⁵", "(1/2)¹", "(1/5)⁵"], correta: 0 },
      { enunciado: "Qual é 3² + 3³?",
        opcoes: ["3⁵", "36", "81", "18", "27"], correta: 1 },
      { enunciado: "Simplifique 2⁴ ÷ 2⁶.",
        opcoes: ["1/4", "4", "1/16", "2", "16"], correta: 0 },
      { enunciado: "Uma grandeza é multiplicada por 3 a cada ciclo. Quantas vezes o valor no ciclo 6 supera o valor no ciclo 2?",
        opcoes: ["4", "9", "81", "3⁸", "12"], correta: 2 }
    ]
  }
];
