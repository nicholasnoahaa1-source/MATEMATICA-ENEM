// Módulo 2, parte 3: aulas M2.1.5 e M2.1.6.
window.AULAS_M2_P3 = [
  {
    id: "M2.1.5",
    titulo: "Multiplicação e divisão de frações",
    teoria: [
      "Multiplicar frações é aplicar uma fração sobre outra: (a/b) × (c/d) = (a × c)/(b × d), com b e d diferentes de zero. Por exemplo, 2/3 de 3/4 é 6/12 = 1/2.",
      "Antes de multiplicar, simplifique fatores cruzados: em (6/35) × (14/9), o 6 e o 9 dividem por 3, e o 14 e o 35 dividem por 7. Resta (2 × 2)/(5 × 3) = 4/15.",
      "Dividir por uma fração não nula é multiplicar pelo inverso: (a/b) ÷ (c/d) = (a/b) × (d/c) = ad/bc. O numerador c também precisa ser diferente de zero.",
      "Divisão pode indicar quantas porções cabem em uma quantidade: 3/4 ÷ 1/8 = 6 porções de 1/8. Ou pode indicar repartição: (3/4) ÷ 3 = 1/4. O problema diz qual dos dois sentidos usar.",
      "Em operações mistas, multiplicação e divisão têm a mesma prioridade e são feitas da esquerda para a direita, salvo parênteses."
    ],
    exemplos: [
      "2/3 × 3/5 = 6/15 = 2/5. Dá para simplificar o 3 antes do produto.",
      "5/6 ÷ 2/3 = 5/6 × 3/2 = 15/12 = 5/4.",
      "3/4 de 2/5 de 100: 100 × 2/5 × 3/4 = 30.",
      "Quantas porções de 3/8 de litro cabem em 9/4 de litro? (9/4) ÷ (3/8) = (9/4) × (8/3) = 6. Conferência: 6 × 3/8 = 9/4.",
      "Um reservatório com 4/5 de água consome 3/8 da água e depois 1/6 do restante. Resta (4/5)(5/8) = 1/2, e depois (1/2)(5/6) = 5/12 da capacidade."
    ],
    exercicios: [
      { enunciado: "Calcule 3/7 × 14/15.",
        opcoes: ["2/5", "3/5", "1/3", "17/22", "42/15"], correta: 0 },
      { enunciado: "Calcule 2/3 ÷ 4/9.",
        opcoes: ["1/6", "3/2", "8/27", "2/7", "6"], correta: 1 },
      { enunciado: "Uma receita exige 2/5 de quilo de farinha por bolo. Quantos bolos inteiros podem ser feitos com 3 quilos?",
        opcoes: ["5", "6", "7", "8", "15"], correta: 2 },
      { enunciado: "Calcule (5/12 × 8/15) ÷ 2/9.",
        opcoes: ["1/2", "1", "2", "9/2", "2/9"], correta: 1 },
      { enunciado: "Um desconto de 1/5 do preço é seguido de outro de 1/10 do preço já reduzido. Que fração do preço inicial resta?",
        opcoes: ["7/10", "18/25", "4/5", "9/10", "3/4"], correta: 1 },
      { enunciado: "De 3/4 de litro de suco, 2/3 são usados. Do restante, 1/2 é guardado. Quanto é guardado?",
        opcoes: ["1/8 de litro", "1/4 de litro", "1/2 de litro", "3/8 de litro", "1/6 de litro"], correta: 0 }
    ]
  },
  {
    id: "M2.1.6",
    titulo: "Frações em problemas do cotidiano",
    teoria: [
      "A mesma fração pode significar parte de um todo, razão, quociente ou operador. A leitura do enunciado define o significado. Dois terços dos 90 estudantes é (2/3) × 90. Dois terços do que sobrou exige calcular primeiro o restante.",
      "Se um total T perde a fração a/b, o restante é T(1 − a/b). Se depois perde c/d desse restante, o resultado é T(1 − a/b)(1 − c/d). Não se somam a/b e c/d, porque as bases são diferentes.",
      "Quando se conhece uma parte P que corresponde à fração f do total, o total é T = P ÷ f, desde que f seja diferente de zero.",
      "Em misturas, fração do volume não é automaticamente fração da massa. Mantenha a mesma unidade ao longo das contas e confira se o resultado faz sentido."
    ],
    exemplos: [
      "Uma biblioteca empresta 3/8 de seus 240 livros: emprestados são 90, e restam 150.",
      "Uma pessoa usa 1/4 do saldo e depois 2/5 do que restou: restam (3/4)(3/5) = 9/20 do saldo inicial.",
      "18 alunos correspondem a 3/7 do total: T = 18 ÷ 3/7 = 42 alunos.",
      "Há 17/6 de litro de suco e cada garrafa comporta 2/3 de litro: (17/6) ÷ (2/3) = 4,25. Quatro garrafas ficam cheias, e sobra 1/6 de litro.",
      "Um reservatório com 5/6 de capacidade consome 2/5 da água, o que deixa (5/6)(3/5) = 1/2. Depois repõe 1/4 da capacidade total, e fica 3/4 ocupado."
    ],
    exercicios: [
      { enunciado: "Uma escola destinou 5/12 de suas 360 vagas a um programa. Quantas vagas foram destinadas?",
        opcoes: ["72", "150", "180", "300", "600"], correta: 1 },
      { enunciado: "Uma pessoa gasta 1/3 do dinheiro e depois metade do restante. Que fração do dinheiro inicial sobra?",
        opcoes: ["1/6", "1/3", "1/2", "2/3", "5/6"], correta: 1 },
      { enunciado: "Um reservatório contém 3/5 de 500 litros. Retiram-se 2/3 da água presente. Quantos litros sobram?",
        opcoes: ["100 litros", "150 litros", "200 litros", "300 litros", "400 litros"], correta: 0 },
      { enunciado: "Quinze estudantes correspondem a 5/8 da turma. Qual é o tamanho da turma?",
        opcoes: ["15", "24", "32", "40", "64"], correta: 1 },
      { enunciado: "Uma loja vende 2/7 do estoque pela manhã e 1/3 do restante à tarde. Que fração do estoque original foi vendida?",
        opcoes: ["11/21", "10/21", "13/21", "5/7", "2/3"], correta: 0 },
      { enunciado: "Uma receita usa 3/8 de quilo por porção. Com 4 quilos, quantas porções completas são possíveis, e quanto sobra?",
        opcoes: ["10 porções, e sobra 1/4 de quilo", "11 porções completas", "10 porções, e sobra 1/2 quilo", "12 porções, e não sobra nada", "9 porções, e sobra 1 quilo"], correta: 0 }
    ]
  }
];
