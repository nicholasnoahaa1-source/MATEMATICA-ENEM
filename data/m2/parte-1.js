// Módulo 2, parte 1: aulas M2.1.1 e M2.1.2.
window.AULAS_M2_P1 = [
  {
    id: "M2.1.1",
    titulo: "Conceito de fração e partes de um todo",
    teoria: [
      "Uma fração a/b, com b diferente de zero, representa o quociente de a por b. O número a é o numerador e b é o denominador. Quando uma unidade é dividida em b partes iguais, a/b indica a seleção de a dessas partes.",
      "A unidade de referência é indispensável. Metade de uma pizza não é a mesma quantidade que metade de duas pizzas. Se o todo vale T, a fração a/b do todo corresponde a T × a/b.",
      "A fração pode ser lida de quatro formas: como parte de um todo, como quociente (3 litros divididos igualmente entre 4 pessoas dão 3/4 de litro cada), como operador (3/4 de 20 é 20 × 3 ÷ 4 = 15) e como razão, que compara duas quantidades que nem sempre são partes de um mesmo todo.",
      "Frações próprias têm numerador menor que o denominador. Frações impróprias têm numerador maior ou igual ao denominador. O denominador zero é proibido, porque não existe número x com 0 × x = 3."
    ],
    exemplos: [
      "Uma barra dividida em 8 partes iguais, com 3 pintadas: a fração pintada é 3/8.",
      "2/5 de 35 figurinhas: 35 ÷ 5 = 7 por quinto, e 2 × 7 = 14 figurinhas.",
      "Cinco litros de suco repartidos igualmente entre 8 recipientes: 5/8 de litro, ou 0,625 litro, em cada um.",
      "Uma turma tem 12 alunos em atividade e 18 fora dela. O todo é 30, e a fração em atividade é 12/30 = 2/5. A razão entre participantes e não participantes seria 12/18, que responde outra pergunta.",
      "Um tanque com 3/4 da capacidade tem 45 litros. Se T é a capacidade, 3T/4 = 45, logo T = 60 litros."
    ],
    exercicios: [
      { enunciado: "Uma fita foi repartida em 10 partes iguais, e 7 partes foram usadas. Qual fração representa a parte usada?",
        opcoes: ["7/10", "10/7", "3/10", "7/3", "1/7"], correta: 0 },
      { enunciado: "Qual é 3/8 de 64?",
        opcoes: ["8", "16", "24", "32", "48"], correta: 2 },
      { enunciado: "Quatro pizzas iguais são divididas igualmente entre 6 pessoas. Quanto cada pessoa recebe?",
        opcoes: ["2/3 de pizza", "3/2 de pizza", "1/6 de pizza", "4 pizzas", "1/4 de pizza"], correta: 0 },
      { enunciado: "Em um grupo há 9 adultos e 6 crianças. Qual fração do grupo é formada por crianças?",
        opcoes: ["6/9", "6/15", "9/15", "9/6", "15/6"], correta: 1 },
      { enunciado: "Uma caixa tem 18 peças, que representam 3/5 do estoque. Quantas peças há no estoque?",
        opcoes: ["10", "27", "30", "54", "90"], correta: 2 },
      { enunciado: "Um anúncio diz “2 copos de água para 3 copos de concentrado”. Que fração da mistura é água, supondo volumes que se somam?",
        opcoes: ["2/3", "3/2", "2/5", "3/5", "1/2"], correta: 2 }
    ]
  },
  {
    id: "M2.1.2",
    titulo: "Frações equivalentes e simplificação",
    teoria: [
      "Duas frações são equivalentes quando representam o mesmo número. Por exemplo, 1/2 = 3/6, porque três sextos cobrem exatamente metade da unidade.",
      "Multiplicar numerador e denominador pelo mesmo número não nulo preserva o valor: (a × k)/(b × k) = a/b. Dividir os dois termos pelo mesmo divisor comum também preserva o valor.",
      "Simplificar é encontrar outra escrita da mesma fração, normalmente com números menores. A forma irredutível é aquela em que o MDC do numerador e do denominador é 1.",
      "Para denominadores positivos, a/b = c/d se, e somente se, a × d = b × c. Essa multiplicação cruzada permite descobrir um numerador ou denominador que falta.",
      "O sinal negativo pode ficar no numerador ou antes da fração: −6/8 = 6/(−8) = −3/4. Por padrão, usamos denominador positivo."
    ],
    exemplos: [
      "Fração equivalente a 2/3 com denominador 12: como 3 × 4 = 12, 2/3 = 8/12.",
      "Simplificando 18/24: MDC(18, 24) = 6, então 18/24 = 3/4, que é irredutível.",
      "Para x/15 = 4/5: 5x = 15 × 4 = 60, então x = 12.",
      "−14/21 e −2/3 são equivalentes: dividindo −14 e 21 por 7, obtém-se −2/3.",
      "18/30 de litro por porção: MDC(18, 30) = 6, então 18/30 = 3/5. Em cinco porções, 5 × 3/5 = 3 litros."
    ],
    exercicios: [
      { enunciado: "Complete: 3/4 = ?/20.",
        opcoes: ["12/20", "15/20", "16/20", "20/15", "3/20"], correta: 1 },
      { enunciado: "Simplifique 28/42.",
        opcoes: ["2/3", "3/2", "4/7", "14/21", "7/8"], correta: 0 },
      { enunciado: "As frações 15/25 e 9/15 são equivalentes?",
        opcoes: ["Sim", "Não", "Somente se os denominadores forem iguais", "Somente se os numeradores forem iguais", "Não é possível saber"], correta: 0 },
      { enunciado: "Qual valor de n torna 7/9 = 21/n verdadeiro?",
        opcoes: ["3", "18", "27", "63", "189"], correta: 2 },
      { enunciado: "Simplifique −84/126, mantendo o denominador positivo.",
        opcoes: ["−2/3", "2/3", "−3/2", "−1/3", "−84/126"], correta: 0 },
      { enunciado: "Um reservatório tem 36/48 da capacidade ocupada. Qual fração irredutível representa a parte vazia?",
        opcoes: ["1/4", "3/4", "1/3", "1/2", "5/12"], correta: 0 }
    ]
  }
];
