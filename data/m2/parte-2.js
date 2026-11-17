// Módulo 2, parte 2: aulas M2.1.3 e M2.1.4.
window.AULAS_M2_P2 = [
  {
    id: "M2.1.3",
    titulo: "Comparação e ordenação de frações",
    teoria: [
      "Comparar frações é decidir qual número é maior, sempre na mesma unidade de referência. Na reta numérica, a fração mais à direita é a maior. Por exemplo, 3/4 > 1/2, porque 0,75 > 0,5.",
      "Com denominadores positivos iguais, compare os numeradores: 5/9 > 2/9. Com numeradores positivos iguais, o menor denominador dá partes maiores: 3/4 > 3/7.",
      "Para denominadores diferentes, escreva as frações com denominador comum, de preferência o MMC. Por exemplo, 2/3 = 8/12 e 3/4 = 9/12, logo 2/3 < 3/4.",
      "Com denominadores positivos, também vale o produto cruzado: a/b < c/d se, e somente se, a × d < b × c.",
      "Para números negativos, a ordem se inverte em relação aos módulos: −3/4 < −1/2, porque −0,75 está à esquerda de −0,5.",
      "Em questões contextualizadas, confira se os todos são iguais antes de comparar frações de quantidades diferentes."
    ],
    exemplos: [
      "5/8 > 3/8, porque ambas têm oitavos e 5 > 3.",
      "2/5 > 2/7, porque o quinto é uma parte maior que o sétimo. Pelo cruzamento: 2 × 7 = 14 > 10 = 2 × 5.",
      "Ordenando 1/2, 2/3 e 3/4 com MMC = 12: 6/12 < 8/12 < 9/12, logo 1/2 < 2/3 < 3/4.",
      "−5/6 = −10/12 e −3/4 = −9/12. Como −10 < −9, −5/6 < −3/4.",
      "Duas turmas acertaram 18 de 24 (0,75) e 22 de 30 (0,7333). A primeira teve proporção maior, com diferença de 1/60."
    ],
    exercicios: [
      { enunciado: "Compare 7/10 e 3/5.",
        opcoes: ["7/10 > 3/5", "7/10 < 3/5", "São iguais", "Não é possível comparar", "Depende"], correta: 0 },
      { enunciado: "Qual destas frações é menor: 4/9 ou 5/12?",
        opcoes: ["4/9", "5/12", "São iguais", "1/2", "Não é possível saber"], correta: 1 },
      { enunciado: "Ordene −1/3, −2/5 e 0, em ordem crescente.",
        opcoes: ["−2/5 < −1/3 < 0", "−1/3 < −2/5 < 0", "0 < −1/3 < −2/5", "−2/5 < 0 < −1/3", "−1/3 < 0 < −2/5"], correta: 0 },
      { enunciado: "Uma receita usa 3/8 de litro de leite e outra usa 2/5 de litro. Qual usa mais leite?",
        opcoes: ["3/8 de litro", "2/5 de litro", "São iguais", "1/40 de litro", "Não é possível saber"], correta: 1 },
      { enunciado: "Entre 7/12 e 5/9, qual é a maior fração?",
        opcoes: ["7/12", "5/9", "São iguais", "1/2", "2/3"], correta: 0 },
      { enunciado: "Uma pessoa concluiu 5/6 de um percurso de 12 km, e outra concluiu 7/8 de um percurso de 8 km. Quem percorreu mais quilômetros?",
        opcoes: ["A primeira pessoa", "A segunda pessoa", "As duas percorreram o mesmo", "Não é possível saber", "A segunda, porque 7/8 é menor"], correta: 0 }
    ]
  },
  {
    id: "M2.1.4",
    titulo: "Adição e subtração de frações",
    teoria: [
      "Somar frações é reunir quantidades da mesma unidade. Subtrair é retirar ou medir uma diferença. As partes precisam ter o mesmo tamanho para somar diretamente: 1/4 + 2/4 = 3/4.",
      "Quando os denominadores são diferentes, escreva as frações com denominador comum, de preferência o MMC. Por exemplo, 1/6 + 1/4 = 2/12 + 3/12 = 5/12. Não se somam denominadores: 1/6 + 1/4 não é 2/10.",
      "Na subtração, o procedimento é o mesmo: 5/6 − 1/4 = 10/12 − 3/12 = 7/12. Um resultado negativo indica uma diferença orientada: 1/3 − 3/4 = 4/12 − 9/12 = −5/12.",
      "Frações mistas, como 1 e 1/2, podem ser convertidas em frações impróprias antes da conta: 1 e 1/2 = 3/2.",
      "Para conferir o resultado, use estimativas. Por exemplo, 1/2 + 1/3 é maior que 1/2 e menor que 1."
    ],
    exemplos: [
      "2/7 + 3/7 = 5/7, porque os denominadores são iguais.",
      "3/4 − 1/6 = 9/12 − 2/12 = 7/12.",
      "5/8 + 7/12 = 15/24 + 14/24 = 29/24, ou 1 e 5/24. Um resultado maior que 1 é coerente.",
      "1/3 − 5/6 + 1/4 = 4/12 − 10/12 + 3/12 = −3/12 = −1/4.",
      "Uma caixa estava 3/5 cheia, recebeu 1/4 da capacidade e perdeu 1/10. Final: 12/20 + 5/20 − 2/20 = 15/20 = 3/4."
    ],
    exercicios: [
      { enunciado: "Calcule 1/5 + 2/5.",
        opcoes: ["3/10", "3/5", "1/5", "2/10", "1"], correta: 1 },
      { enunciado: "Calcule 1/2 + 1/3.",
        opcoes: ["2/5", "5/6", "1/6", "2/6", "1"], correta: 1 },
      { enunciado: "Calcule 7/10 − 1/4.",
        opcoes: ["6/10", "9/20", "3/20", "1/6", "13/20"], correta: 1 },
      { enunciado: "Uma jarra tinha 2/3 de litro de água e recebeu 3/8 de litro. Quantos litros há agora?",
        opcoes: ["5/11", "25/24", "1", "13/24", "5/8"], correta: 1 },
      { enunciado: "Calcule 3/4 − (1/3 + 1/6).",
        opcoes: ["1/4", "5/12", "7/12", "1/12", "1/2"], correta: 0 },
      { enunciado: "Uma trilha tem 5/6 de quilômetro. Foram percorridos 1/4 de quilômetro e depois 1/3 de quilômetro. Quanto falta?",
        opcoes: ["1/4 de quilômetro", "1/2 de quilômetro", "1/12 de quilômetro", "5/6 de quilômetro", "1 quilômetro"], correta: 0 }
    ]
  }
];
