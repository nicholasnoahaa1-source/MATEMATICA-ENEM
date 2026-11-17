// Módulo 1, parte 5: aulas M1.2.5 e M1.2.6.
window.AULAS_M1_P5 = [
  {
    id: "M1.2.5",
    titulo: "Problemas com números inteiros",
    teoria: [
      "Números positivos e negativos representam sentidos opostos.",
      "A variação é o valor final menos o valor inicial. Variação positiva indica aumento, e variação negativa indica redução.",
      "Em saldos bancários, depósitos aumentam o saldo e retiradas o diminuem.",
      "Em altitudes, o nível do mar é o zero de referência."
    ],
    exemplos: [
      "500 − 180 = 320.",
      "De −8 graus para 5 graus, a variação é 5 − (−8) = 13 graus.",
      "−120 + 45 = −75 metros.",
      "−12 + 20 = 8 pontos.",
      "250 + 80 − 310 = 330 − 310 = 20 itens."
    ],
    exercicios: [
      { enunciado: "Qual é o resultado de 300 − 450?",
        opcoes: ["−750", "−150", "150", "250", "750"], correta: 1 },
      { enunciado: "Qual é o resultado de 5 − 12?",
        opcoes: ["−17", "−7", "7", "17", "12"], correta: 1 },
      { enunciado: "Qual é o resultado de −80 − 30?",
        opcoes: ["−110", "−50", "50", "110", "30"], correta: 0 },
      { enunciado: "Qual é a variação de −5 para 10?",
        opcoes: ["−15", "−5", "5", "15", "10"], correta: 3 },
      { enunciado: "Qual é o resultado de −8 + 15?",
        opcoes: ["−23", "−7", "7", "23", "15"], correta: 2 },
      { enunciado: "Qual é o resultado de 400 + 120 − 480?",
        opcoes: ["20", "40", "60", "80", "100"], correta: 1 },
      { enunciado: "Um elevador está no subsolo 2 e sobe 9 andares. Em que andar ele para?",
        opcoes: ["Subsolo 11", "Subsolo 7", "Andar 7", "Andar 9", "Andar 11"], correta: 2 },
      { enunciado: "Qual é o resultado de −4 − 12?",
        opcoes: ["−16", "−8", "8", "16", "0"], correta: 0 },
      { enunciado: "Qual é o resultado de −200 + 150 + 150?",
        opcoes: ["−500", "−100", "0", "100", "300"], correta: 3 },
      { enunciado: "Qual é o resultado de −25 − 15 + 8?",
        opcoes: ["−48", "−32", "−18", "−8", "2"], correta: 1 }
    ]
  },
  {
    id: "M1.2.6",
    titulo: "Estimativas e arredondamentos",
    teoria: [
      "Arredondar é trocar um número por outro mais simples e próximo. Observa-se o algarismo seguinte: de 0 a 4, a casa permanece; de 5 a 9, a casa aumenta uma unidade.",
      "Estimar é substituir os números por valores arredondados que facilitem o cálculo, para verificar se o resultado é razoável."
    ],
    exemplos: [
      "3.472 arredondado para a centena: 3.500.",
      "8.249 arredondado para o milhar: 8.000.",
      "498 + 302 estimado: 500 + 300 = 800.",
      "1.998 × 4 estimado: 2.000 × 4 = 8.000.",
      "3.248 arredondado para a centena: 3.200, porque o algarismo das dezenas é 4."
    ],
    exercicios: [
      { enunciado: "Arredondando 4.562 para a centena, obtém-se:",
        opcoes: ["4.500", "4.550", "4.560", "4.600", "5.000"], correta: 3 },
      { enunciado: "Arredondando 7.438 para o milhar, obtém-se:",
        opcoes: ["7.000", "7.400", "7.500", "8.000", "7.450"], correta: 0 },
      { enunciado: "Um valor estimado de 398 + 512 é:",
        opcoes: ["800", "850", "900", "950", "1.000"], correta: 2 },
      { enunciado: "Um valor estimado de 1.998 × 3 é:",
        opcoes: ["5.000", "5.500", "6.000", "6.500", "7.000"], correta: 2 },
      { enunciado: "Arredondando 8.499 para a centena, obtém-se:",
        opcoes: ["8.000", "8.400", "8.500", "8.499", "9.000"], correta: 2 },
      { enunciado: "Arredondando 1.999 para a centena, obtém-se:",
        opcoes: ["1.900", "1.950", "2.000", "2.100", "2.500"], correta: 2 },
      { enunciado: "Arredondando 327.486 para o milhar, obtém-se:",
        opcoes: ["327.000", "327.500", "328.000", "330.000", "325.000"], correta: 0,
        correcao: "Corrigido: o gabarito original era C (328.000). Como 486 é menor que 500, o arredondamento para o milhar é 327.000." },
      { enunciado: "Um valor estimado de 1.250 ÷ 25 é:",
        opcoes: ["40", "45", "50", "55", "60"], correta: 2 },
      { enunciado: "Arredondando 4.972 para a dezena, obtém-se:",
        opcoes: ["4.960", "4.970", "4.980", "4.900", "5.000"], correta: 1 },
      { enunciado: "Um valor estimado de 1.998 × 30 é:",
        opcoes: ["50.000", "55.000", "60.000", "65.000", "70.000"], correta: 2 }
    ]
  }
];
