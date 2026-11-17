// Módulo 2, parte 9: aulas M2.5.1, M2.5.2 e M2.5.3 (operações combinadas).
window.AULAS_M2_P9 = [
  {
    id: "M2.5.1",
    titulo: "Expressões com frações, decimais e potências",
    teoria: [
      "Uma expressão mista combina representações diferentes do mesmo número. A ordem é: agrupamentos, depois potências e raízes, em seguida multiplicações e divisões da esquerda para a direita, e por último adições e subtrações da esquerda para a direita.",
      "Para evitar arredondamentos, converta decimais finitos em frações: 0,25 = 1/4, 1,2 = 6/5 e 0,125 = 1/8.",
      "Um expoente negativo indica inverso multiplicativo, desde que a base seja diferente de zero: a⁻ⁿ = 1/aⁿ. Um sinal negativo fora dos parênteses não faz parte da base: −2² = −4, enquanto (−2)² = 4.",
      "A barra de fração agrupa o numerador e o denominador. Por isso, (1 + 2)/(3 + 4) é diferente de 1 + 2/3 + 4. Use parênteses para evitar ambiguidades."
    ],
    exemplos: [
      "0,5 + 1/4 = 1/2 + 1/4 = 3/4 = 0,75.",
      "(3/4) · 0,8 = (3/4) · (4/5) = 3/5 = 0,6.",
      "2³ − (1/2)² = 8 − 1/4 = 31/4.",
      "(0,6 + 1/5) ÷ 2 = (3/5 + 1/5) ÷ 2 = (4/5) ÷ 2 = 2/5 = 0,4.",
      "−3² = −(3²) = −9, enquanto (−3)² = 9. Os parênteses mudam a base."
    ],
    exercicios: [
      { enunciado: "Calcule 0,75 + 1/2.",
        opcoes: ["7/5", "1/4", "5/4", "6/5", "3/2"], correta: 2 },
      { enunciado: "Calcule (1/3) ÷ (2/5).",
        opcoes: ["6/5", "2/15", "15/2", "5/6", "1/3"], correta: 3 },
      { enunciado: "Calcule 2² + 3 · (1/2).",
        opcoes: ["7", "11/2", "5", "13/2", "9/2"], correta: 1 },
      { enunciado: "Calcule (0,2)².",
        opcoes: ["0,4", "0,2", "0,04", "0,02", "0,002"], correta: 2 },
      { enunciado: "Calcule 1 − (1/2 + 0,25).",
        opcoes: ["1/2", "3/4", "1/4", "1", "5/4"], correta: 2 },
      { enunciado: "Calcule 4⁻¹ + 0,125.",
        opcoes: ["1/2", "3/8", "1/4", "5/8", "9/8"], correta: 1 }
    ]
  },
  {
    id: "M2.5.2",
    titulo: "Fatoração numérica e simplificação",
    teoria: [
      "Fatorar um inteiro positivo é escrevê-lo como produto de fatores. A decomposição em fatores primos é única, a menos da ordem: 60 = 2² × 3 × 5.",
      "Uma fração não muda quando numerador e denominador são divididos pelo mesmo divisor não nulo. Assim, 18/24 = (6 × 3)/(6 × 4) = 3/4. O cancelamento elimina fatores de um produto, e não parcelas de uma soma. Por exemplo, (2 + 3)/2 não é igual a 3.",
      "O MDC pode ser obtido pelos fatores primos comuns, elevados aos menores expoentes. Em 72 = 2³ × 3² e 90 = 2 × 3² × 5, o MDC é 2 × 3² = 18. Dividindo 72/90 por 18, obtém-se 4/5.",
      "Antes de operar, procure fatores que formem 10, 100 ou outros produtos convenientes. Por exemplo, 25 × 48 = (100/4) × 48 = 100 × 12 = 1.200."
    ],
    exemplos: [
      "24/36: MDC = 12, então 24/36 = 2/3.",
      "84 = 2² × 3 × 7 e 126 = 2 × 3² × 7. O MDC é 42, e 84/126 = 2/3.",
      "(15 × 28)/(21 × 10) = (3 × 5 × 4 × 7)/(3 × 7 × 2 × 5) = 4/2 = 2.",
      "2⁵ × 3² / (2³ × 3) = 2² × 3 = 12.",
      "(12 + 6)/6 não se simplifica cancelando o 6 da soma: 12/6 + 6/6 = 2 + 1 = 3."
    ],
    exercicios: [
      { enunciado: "Reduza 45/60 à forma irredutível.",
        opcoes: ["2/3", "3/4", "4/5", "3/5", "1/2"], correta: 1 },
      { enunciado: "Reduza 96/144 à forma irredutível.",
        opcoes: ["3/2", "4/9", "2/3", "1/3", "5/6"], correta: 2 },
      { enunciado: "Calcule (18 × 35)/(21 × 15).",
        opcoes: ["6", "1", "2", "3", "5"], correta: 2 },
      { enunciado: "Simplifique 5⁴ / 5².",
        opcoes: ["5⁶", "25", "5", "125", "10"], correta: 1 },
      { enunciado: "Calcule (2³ × 3²) / (2 × 3).",
        opcoes: ["6", "18", "12", "36", "24"], correta: 2 },
      { enunciado: "Uma receita usa 90/150 de uma embalagem. Qual fração irredutível representa essa quantidade?",
        opcoes: ["5/3", "2/3", "3/5", "1/2", "3/4"], correta: 2 }
    ]
  },
  {
    id: "M2.5.3",
    titulo: "Erros frequentes em expressões",
    teoria: [
      "A escrita de uma expressão determina sua estrutura. A convenção prioriza parênteses, potências e raízes, depois multiplicação e divisão da esquerda para a direita, e por fim adição e subtração da esquerda para a direita.",
      "Sinais: −4² = −16, porque o expoente age sobre o 4 antes da negação. Já (−4)² = 16, porque os parênteses incluem o sinal na base. As duas expressões não são equivalentes.",
      "Frações: 1/2 + 1/3 não é 2/5. É (3 + 2)/6 = 5/6. Somar denominadores muda o tamanho da unidade.",
      "Distributividade: (a + b)² = a² + 2ab + b², e não a² + b². O termo misto surge ao multiplicar (a + b)(a + b).",
      "Raízes: √(a + b) não é, em geral, √a + √b. Por exemplo, √(9 + 16) = 5, enquanto √9 + √16 = 7."
    ],
    exemplos: [
      "6 + 2 × 5 = 16, mas (6 + 2) × 5 = 40. Os parênteses mudam a ordem.",
      "−3² + (−3)² = −9 + 9 = 0.",
      "Correção de 2/3 + 1/6: com denominador 6, 4/6 + 1/6 = 5/6, e não 3/9.",
      "Correção de (2 + 5)² = 2² + 5²: 7² = 49, e pelo produto notável, 4 + 20 + 25 = 49.",
      "√(25 + 144) = √169 = 13, enquanto √25 + √144 = 5 + 12 = 17. A raiz não se distribui sobre a soma."
    ],
    exercicios: [
      { enunciado: "Calcule 18 ÷ 3 × 2.",
        opcoes: ["2", "3", "12", "18", "36"], correta: 2 },
      { enunciado: "Os valores de −2³ e (−2)³ são iguais?",
        opcoes: ["Sim, ambos valem −8", "Não, −2³ vale −8 e (−2)³ vale 8", "Não, −2³ vale 8", "Sim, ambos valem 8", "Não, (−2)³ vale −6"], correta: 0 },
      { enunciado: "Some 3/4 + 1/8.",
        opcoes: ["4/12", "4/8", "1/2", "7/8", "5/8"], correta: 3 },
      { enunciado: "Calcule (1 + 3)².",
        opcoes: ["10", "4", "7", "13", "16"], correta: 4 },
      { enunciado: "Qual é o valor de √((−5)²)?",
        opcoes: ["−5", "±5", "25", "5", "−25"], correta: 3 },
      { enunciado: "Um aluno escreve 12/(3 + 1) = 12/3 + 1. Qual afirmação está correta?",
        opcoes: ["Ambas valem 4", "A igualdade é verdadeira", "O lado esquerdo vale 3 e o direito vale 5, então a igualdade é falsa", "O lado esquerdo vale 4 e o direito vale 3", "Não é possível calcular"], correta: 2 }
    ]
  }
];
