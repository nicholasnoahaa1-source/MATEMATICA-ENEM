// Módulo 2, parte 10: aulas M2.5.4 e M2.5.5 (estimativa e verificação).
window.AULAS_M2_P10 = [
  {
    id: "M2.5.4",
    titulo: "Estratégias de cálculo mental e estimativa",
    teoria: [
      "Cálculo mental eficiente transforma uma conta em outra equivalente e mais simples. As propriedades comutativa, associativa e distributiva permitem reagrupar e decompor valores sem alterar o resultado.",
      "Compensação: 398 + 257 = 400 + 255 = 655. Para multiplicar, 19 × 24 = (20 − 1) × 24 = 480 − 24 = 456.",
      "Estimar é produzir uma aproximação controlada. Para 49,8 × 20,2, o produto está entre 49 × 20 = 980 e 50 × 21 = 1.050.",
      "O erro absoluto é o módulo da diferença entre a aproximação e o valor real. O erro relativo é o erro absoluto dividido pelo valor real, quando ele não é zero. Não arredonde cedo demais em cálculos encadeados.",
      "Uma estimativa também serve para conferir: se 198 ingressos custam R$ 29,90 cada, o total deve estar perto de 200 × 30 = 6.000 reais."
    ],
    exemplos: [
      "99 × 37 = (100 − 1) × 37 = 3.700 − 37 = 3.663.",
      "48 × 25 = 48 × 100 ÷ 4 = 1.200.",
      "1.002 − 497 = 1.002 − 500 + 3 = 505.",
      "19,7 × 5,1 ≈ 20 × 5 = 100. Exato: (20 − 0,3) × 5,1 = 102 − 1,53 = 100,47.",
      "198 itens a R$ 29,90: estimativa 200 × 30 = 6.000; exato 29,90 × 198 = R$ 5.920,20."
    ],
    exercicios: [
      { enunciado: "Calcule 101 × 56.",
        opcoes: ["5.600", "5.056", "5.656", "5.555", "6.056"], correta: 2 },
      { enunciado: "Calcule 75 × 16.",
        opcoes: ["1.100", "1.050", "1.600", "1.200", "1.250"], correta: 3 },
      { enunciado: "Calcule 299 + 486.",
        opcoes: ["784", "795", "685", "785", "775"], correta: 3 },
      { enunciado: "Estime 39,8 × 10,1 arredondando os fatores para dezenas e unidades.",
        opcoes: ["390", "400", "410", "300", "500"], correta: 1 },
      { enunciado: "Uma corrida de 12,4 km custa R$ 3,20 por km. Qual é o total?",
        opcoes: ["R$ 36,00", "R$ 39,68", "R$ 40,00", "R$ 3,968", "R$ 396,80"], correta: 1 },
      { enunciado: "Um valor real é 80, e foi aproximado por 76. Quais são o erro absoluto e o erro relativo?",
        opcoes: ["Absoluto 4 e relativo 1/4", "Absoluto 5 e relativo 1/16", "Absoluto 76 e relativo 1/20", "Absoluto 4 e relativo 1/5", "Absoluto 4 e relativo 1/20"], correta: 4 }
    ]
  },
  {
    id: "M2.5.5",
    titulo: "Verificação de resultados",
    teoria: [
      "A verificação combina três testes: a ordem de grandeza, a operação inversa e um novo cálculo feito de outra forma. Nenhum teste isolado prova o resultado, mas esses testes detectam erros de sinal, de vírgula e de unidade.",
      "Em uma divisão, a = b × q + r, com b inteiro positivo, e o resto vale 0 ≤ r < b. Em frações, a simplificação só cancela fatores, nunca parcelas de uma soma.",
      "Para resultados aproximados, registre o arredondamento e o erro. Uma medida de 2,35 m arredondada ao décimo é 2,4 m, com erro absoluto 0,05 m. O arredondado não deve ser apresentado como valor exato.",
      "A unidade faz parte da resposta: 12 km divididos por 3 horas dão 4 km/h, e não 4 km."
    ],
    exemplos: [
      "157 = 12 × 13 + 1: o produto 12 × 13 = 156, e 0 ≤ 1 < 12. A divisão é válida.",
      "7/12 + 1/6: convertendo 1/6 em 2/12, a soma é 9/12 = 3/4. O denominador comum não se soma.",
      "R$ 48 divididos igualmente entre 6 pessoas: 48 ÷ 6 = 8 reais. Conferência: 6 × 8 = 48.",
      "Medida de 19,86 cm arredondada a uma casa decimal: 19,9 cm, com erro absoluto 0,04 cm.",
      "37 caixas de 24 peças: estimativa 40 × 25 ≈ 1.000, e o exato é 37 × 24 = 888. A planilha que mostra 88 provavelmente omitiu um algarismo."
    ],
    exercicios: [
      { enunciado: "Calcule 284 ÷ 9. Qual é o quociente e qual é o resto?",
        opcoes: ["31 e resto 4", "32 e resto 2", "31 e resto 5", "30 e resto 14", "31 e resto 1"], correta: 2 },
      { enunciado: "Verifique se 3/5 + 1/10 = 4/15.",
        opcoes: ["Sim", "Não, o resultado é 7/10", "Não, o resultado é 4/10", "Sim, porque 3 + 1 = 4 e 5 + 10 = 15", "Não, o resultado é 1/2"], correta: 1 },
      { enunciado: "Uma viagem de 150 km durou 2,5 horas. Qual foi a velocidade média?",
        opcoes: ["15 km/h", "375 km/h", "0,6 km/h", "60 km/h", "60 km"], correta: 3 },
      { enunciado: "Arredonde 7,346 ao centésimo. Qual é o erro absoluto?",
        opcoes: ["7,34 e erro 0,006", "7,35 e erro 0,006", "7,4 e erro 0,054", "7,346 e erro 0", "7,35 e erro 0,004"], correta: 4 },
      { enunciado: "Um produto de 48 itens a R$ 19,50 cada foi registrado como R$ 93,60. Qual é o valor correto?",
        opcoes: ["R$ 93,60 está correto", "R$ 936,00", "R$ 9,36", "R$ 960,00", "R$ 93,60 com erro de vírgula"], correta: 1 },
      { enunciado: "Um aluno diz que (8 + 4)/4 = 8 + 4/4. Qual é a avaliação correta?",
        opcoes: ["É verdadeiro", "É falso: o lado esquerdo vale 3 e o direito vale 9", "É falso: o lado esquerdo vale 9 e o direito vale 3", "É verdadeiro, porque ambos valem 3", "Não é possível avaliar"], correta: 1 }
    ]
  }
];
