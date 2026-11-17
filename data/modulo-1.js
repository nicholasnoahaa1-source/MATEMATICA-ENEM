// Módulo 1, Números e operações.
// Conteúdo extraído da transcrição integral. Revisado aula a aula.
// Correções registradas em data/CORRECOES.md.
window.CURSO_AULAS = window.CURSO_AULAS || {};
window.CURSO_AULAS[1] = [
  {
    id: "M1.1.1",
    titulo: "Números naturais e sistema decimal",
    teoria: [
      "O conjunto dos números naturais é N = {0, 1, 2, 3, ...}. Neste curso, o zero pertence a N.",
      "O sistema decimal é posicional: o valor de cada algarismo depende da posição que ocupa. Em 4.725, temos 4 milhares, 7 centenas, 2 dezenas e 5 unidades.",
      "Para comparar dois naturais, compare primeiro o número de algarismos e, se forem iguais, compare da esquerda para a direita.",
      "Arredondamento: se o algarismo à direita da casa desejada for de 0 a 4, a casa permanece; se for de 5 a 9, a casa aumenta uma unidade."
    ],
    exemplos: [
      "3.408 = 3 × 1.000 + 4 × 100 + 0 × 10 + 8 × 1.",
      "Ordenação de 8.742, 8.472, 8.724 e 8.247: 8.247 < 8.472 < 8.724 < 8.742.",
      "6.483 arredondado para a centena: 6.500 (o algarismo das dezenas é 8, então a centena aumenta).",
      "2.475 − 1.289 = 1.186."
    ],
    exercicios: [
      { enunciado: "Qual é o valor posicional do algarismo 7 no número 5.731?",
        opcoes: ["7 unidades", "7 dezenas", "7 centenas", "7 milhares", "7 dezenas de milhar"], correta: 2 },
      { enunciado: "Qual é o menor número de três algarismos que se pode formar com os algarismos 4, 0 e 7, usando cada um uma única vez?",
        opcoes: ["047", "407", "470", "704", "740"], correta: 1 },
      { enunciado: "Arredondando 8.562 para a centena mais próxima, obtém-se:",
        opcoes: ["8.500", "8.550", "8.560", "8.600", "9.000"], correta: 3 },
      { enunciado: "Qual é o resultado de 12.348 + 7.915?",
        opcoes: ["19.263", "20.263", "20.363", "21.263", "19.163"], correta: 1 },
      { enunciado: "Qual é o resultado de 15.000 − 4.378 + 236?",
        opcoes: ["10.858", "10.862", "10.958", "10.962", "11.058"], correta: 0 },
      { enunciado: "Todo número natural é também um número inteiro?",
        opcoes: ["Sim", "Não", "Somente alguns", "Nenhum", "Depende"], correta: 0 },
      { enunciado: "Arredondando 3.278 + 4.156 para a centena mais próxima, obtém-se:",
        opcoes: ["7.300", "7.400", "7.500", "7.600", "7.700"], correta: 1,
        correcao: "Corrigido: o gabarito original era C (7.500). Como 3.278 + 4.156 = 7.434, o arredondamento para a centena é 7.400." },
      { enunciado: "Qual é o maior número que se pode formar com os algarismos 2, 5, 8 e 9, usando cada um uma única vez?",
        opcoes: ["2.589", "5.892", "8.952", "9.852", "9.582"], correta: 3 },
      { enunciado: "Qual é o resultado de 1.250 ÷ 25?",
        opcoes: ["40", "45", "50", "55", "60"], correta: 2 },
      { enunciado: "Qual é 42% de 3.500?",
        opcoes: ["1.400", "1.450", "1.470", "1.500", "1.540"], correta: 2 }
    ]
  },
  {
    id: "M1.1.2",
    titulo: "Números inteiros: reta numérica e ordenação",
    teoria: [
      "O conjunto dos inteiros é Z = {..., −3, −2, −1, 0, 1, 2, 3, ...}. Todo natural é inteiro.",
      "Na reta numérica, os valores crescem da esquerda para a direita.",
      "O oposto de a é −a. O módulo de a, indicado por |a|, é a distância de a até zero, sempre não negativa.",
      "Entre dois negativos, o de maior módulo é o menor número."
    ],
    exemplos: [
      "Ordenação de −3, 5, −8, 0 e 2: −8 < −3 < 0 < 2 < 5.",
      "O oposto de −12 é 12. |−9| = 9 e |4| = 4.",
      "Variação de temperatura de 3 para −4 graus: −4 − 3 = −7 graus."
    ],
    exercicios: [
      { enunciado: "Qual é o menor número entre −7, −12, 0 e 5?",
        opcoes: ["−7", "−12", "0", "5", "12"], correta: 1 },
      { enunciado: "Qual é o oposto de 18?",
        opcoes: ["18", "−18", "0", "1/18", "36"], correta: 1 },
      { enunciado: "Quanto vale |−25|?",
        opcoes: ["−25", "0", "25", "−5", "5"], correta: 2 },
      { enunciado: "Qual é o resultado de −6 + 9?",
        opcoes: ["−15", "−3", "3", "15", "9"], correta: 2 },
      { enunciado: "Qual lista está em ordem crescente?",
        opcoes: ["4, 0, −2, −7", "−7, −2, 0, 4", "−2, −7, 0, 4", "0, −7, −2, 4", "4, −7, −2, 0"], correta: 1 },
      { enunciado: "Qual é o resultado de −250 + 90?",
        opcoes: ["−340", "−160", "160", "340", "−90"], correta: 1 },
      { enunciado: "Qual é o resultado de |−8| + |3|?",
        opcoes: ["5", "−5", "11", "−11", "24"], correta: 2 },
      { enunciado: "Qual é o maior número entre −100, −50, −75 e −25?",
        opcoes: ["−100", "−75", "−50", "−25", "0"], correta: 3 },
      { enunciado: "Subsolo 3 + 7 andares =",
        opcoes: ["Subsolo 10", "Subsolo 4", "Andar 4", "Andar 7", "Andar 10"], correta: 2 },
      { enunciado: "−12 para −3 graus. Qual é a variação?",
        opcoes: ["−15", "−9", "9", "15", "0"], correta: 2 }
    ]
  }
];
