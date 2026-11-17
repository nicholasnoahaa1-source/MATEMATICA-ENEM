// Módulo 1, parte 8: aulas M1.3.5 e M1.3.6.
window.AULAS_M1_P8 = [
  {
    id: "M1.3.5",
    titulo: "Problemas de divisão e agrupamento",
    teoria: [
      "Em problemas de agrupamento em partes iguais, o maior tamanho possível dos grupos é dado pelo MDC.",
      "Em problemas de coincidência de eventos periódicos, o primeiro encontro é dado pelo MMC.",
      "Em uma divisão, o quociente indica quantos grupos completos se formam, e o resto indica o que não pode ser distribuído.",
      "Em embalagens completas, o MMC pode indicar a menor quantidade que faz todos os pacotes fecharem ao mesmo tempo."
    ],
    exemplos: [
      "36 e 48 em grupos iguais: o maior tamanho é o MDC(36, 48) = 12.",
      "Ônibus a cada 6 e 8 minutos: o primeiro encontro é em MMC(6, 8) = 24 minutos.",
      "48 ÷ 6 = 8 caixas, sem resto.",
      "50 ÷ 6 = 8 caixas completas, e sobram 2, porque 6 × 8 + 2 = 50.",
      "Luzes que piscam a cada 4 e 6 segundos coincidem pela primeira vez em MMC(4, 6) = 12 segundos."
    ],
    exercicios: [
      { enunciado: "Os números 36 e 48 devem ser divididos em grupos iguais. Qual é o maior tamanho possível de cada grupo?",
        opcoes: ["6", "8", "12", "18", "24"], correta: 2 },
      { enunciado: "Dois ônibus passam no mesmo ponto a cada 6 e a cada 8 minutos. Em quanto tempo eles se encontram pela primeira vez?",
        opcoes: ["12 minutos", "16 minutos", "24 minutos", "32 minutos", "48 minutos"], correta: 2 },
      { enunciado: "Há 48 pacotes, e cada caixa leva 6 pacotes. Quantas caixas são necessárias?",
        opcoes: ["6", "7", "8", "9", "10"], correta: 2 },
      { enunciado: "Há 50 itens, e cada caixa comporta 6. Quantas caixas completas se formam e quantos itens sobram?",
        opcoes: ["8 caixas e 2 itens", "8 caixas e 3 itens", "9 caixas e 2 itens", "9 caixas e 3 itens", "7 caixas e 2 itens"], correta: 0 },
      { enunciado: "Duas luzes piscam a cada 4 e a cada 6 segundos. Em quanto tempo elas piscam juntas pela primeira vez?",
        opcoes: ["8 segundos", "10 segundos", "12 segundos", "16 segundos", "24 segundos"], correta: 2 },
      { enunciado: "Os números 24 e 36 devem ser divididos em grupos iguais. Qual é o maior tamanho possível de cada grupo?",
        opcoes: ["6", "8", "12", "18", "24"], correta: 2 },
      { enunciado: "Dois alarmes tocam a cada 9 e a cada 12 minutos. Em quanto tempo eles tocam juntos pela primeira vez?",
        opcoes: ["18 minutos", "24 minutos", "36 minutos", "48 minutos", "72 minutos"], correta: 2 },
      { enunciado: "Os números 60 e 80 devem ser divididos em grupos iguais. Qual é o maior tamanho possível de cada grupo?",
        opcoes: ["10", "15", "20", "25", "30"], correta: 2 },
      { enunciado: "Os números 120 e 180 devem ser divididos em grupos iguais. Qual é o maior tamanho possível de cada grupo?",
        opcoes: ["30", "40", "60", "80", "90"], correta: 2 },
      { enunciado: "Dois eventos acontecem a cada 15 e a cada 20 minutos. Em quanto tempo eles coincidem pela primeira vez?",
        opcoes: ["30 minutos", "40 minutos", "60 minutos", "80 minutos", "100 minutos"], correta: 2 }
    ]
  },
  {
    id: "M1.3.6",
    titulo: "Divisibilidade em problemas contextualizados",
    teoria: [
      "Primeiro, identifique qual é a pergunta: divisibilidade, agrupamento, coincidência ou embalagem.",
      "Agrupamento em partes iguais pede o MDC. Coincidência de eventos periódicos pede o MMC.",
      "Quando um número deve ser divisível por dois números ao mesmo tempo, ele deve ser múltiplo do MMC desses dois números.",
      "Em rateio, o MDC indica o maior número de partes iguais que se pode formar."
    ],
    exemplos: [
      "120 e 180 em grupos iguais: MDC(120, 180) = 60.",
      "Ônibus a cada 12 e 18 minutos: MMC(12, 18) = 36 minutos.",
      "Um número divisível por 2 e por 3 também é divisível por 6, porque MMC(2, 3) = 6.",
      "Um número divisível por 4 e por 6 também é divisível por 12, porque MMC(4, 6) = 12.",
      "Um número divisível por 5 e por 10 também é divisível por 10, porque MMC(5, 10) = 10."
    ],
    exercicios: [
      { enunciado: "Os números 120 e 180 devem ser divididos em grupos iguais. Qual é o maior tamanho possível de cada grupo?",
        opcoes: ["30", "40", "60", "80", "90"], correta: 2 },
      { enunciado: "Dois ônibus saem do mesmo ponto a cada 12 e a cada 18 minutos. Em quanto tempo eles voltam a sair juntos?",
        opcoes: ["18 minutos", "24 minutos", "36 minutos", "48 minutos", "72 minutos"], correta: 2 },
      { enunciado: "Um número é divisível por 2 e por 3. Ele também é divisível por:",
        opcoes: ["4", "5", "6", "9", "10"], correta: 2 },
      { enunciado: "Um número é divisível por 4 e por 6. Ele também é divisível por:",
        opcoes: ["8", "10", "12", "18", "20"], correta: 2,
        correcao: "Corrigido: a alternativa E original (24) também é divisível por 4 e por 6, e deixava duas respostas certas. Substituída por 20." },
      { enunciado: "Um número é divisível por 5 e por 10. Ele também é divisível por:",
        opcoes: ["5", "10", "15", "7", "25"], correta: 1,
        correcao: "Corrigido: a alternativa D original (20) também é divisível por 5 e por 10, e deixava duas respostas certas. Substituída por 7." },
      { enunciado: "Um número é divisível por 3 e por 4. Ele também é divisível por:",
        opcoes: ["6", "8", "12", "18", "9"], correta: 2,
        correcao: "Corrigido: a alternativa E original (24) também é divisível por 3 e por 4, e deixava duas respostas certas. Substituída por 9." },
      { enunciado: "Um número é divisível por 6 e por 8. Ele também é divisível por:",
        opcoes: ["12", "16", "24", "32", "36"], correta: 2,
        correcao: "Corrigido: a alternativa E original (48) também é divisível por 6 e por 8, e deixava duas respostas certas. Substituída por 36." },
      { enunciado: "Um número é divisível por 9 e por 12. Ele também é divisível por:",
        opcoes: ["18", "24", "36", "48", "30"], correta: 2,
        correcao: "Corrigido: a alternativa E original (72) também é divisível por 9 e por 12, e deixava duas respostas certas. Substituída por 30." },
      { enunciado: "Um número é divisível por 15 e por 20. Ele também é divisível por:",
        opcoes: ["30", "40", "60", "80", "100"], correta: 2 },
      { enunciado: "Um número é divisível por 12 e por 18. Ele também é divisível por:",
        opcoes: ["18", "24", "36", "48", "30"], correta: 2,
        correcao: "Corrigido: a alternativa E original (72) também é divisível por 12 e por 18, e deixava duas respostas certas. Substituída por 30." }
    ]
  }
];
