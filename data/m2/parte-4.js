// Módulo 2, parte 4: unidade 2.2, aulas M2.2.1 a M2.2.5 (números decimais).
window.AULAS_M2_P4 = [
  {
    id: "M2.2.1",
    titulo: "Representação decimal e valor posicional",
    teoria: [
      "O sistema decimal é posicional: o valor de cada algarismo depende da casa que ele ocupa. À direita da vírgula, as casas valem décimos (1/10), centésimos (1/100), milésimos (1/1000) e assim por diante. Por exemplo, 24,307 = 2 × 10 + 4 × 1 + 3 × 1/10 + 0 × 1/100 + 7 × 1/1000.",
      "Um decimal finito pode ser escrito como fração de denominador potência de 10. Por exemplo, 0,125 = 125/1000 = 1/8.",
      "Acrescentar zeros à direita não altera o valor: 2,5 = 2,50. Mas 2,05 é diferente de 2,5, porque o 5 ocupa casas diferentes nos dois números.",
      "Para comparar decimais, alinhe as vírgulas, acrescente zeros se preciso e compare os algarismos da esquerda para a direita. Em medidas, preserve a unidade: 0,75 m são 75 cm, porque 1 m = 100 cm."
    ],
    exemplos: [
      "6,42 = 6 + 4/10 + 2/100: seis unidades, quatro décimos e dois centésimos.",
      "0,08 = 8/100 = 2/25.",
      "3,7 = 3,70 é maior que 3,68, porque 70 centésimos são mais que 68 centésimos.",
      "12,305 = 10 + 2 + 3/10 + 0/100 + 5/1000.",
      "Uma fita de 0,875 m tem 0,875 × 1000 = 875 mm."
    ],
    exercicios: [
      { enunciado: "Qual é o valor do algarismo 6 no número 4,061?",
        opcoes: ["6", "0,6", "0,06", "0,006", "60"], correta: 2 },
      { enunciado: "Escreva 7/1000 na forma decimal.",
        opcoes: ["0,7", "0,07", "0,007", "0,0007", "7,000"], correta: 2 },
      { enunciado: "Qual é maior: 5,09 ou 5,1?",
        opcoes: ["5,09", "5,1", "São iguais", "Não é possível comparar", "Depende"], correta: 1 },
      { enunciado: "Qual número corresponde a 8 + 3/10 + 4/1000?",
        opcoes: ["8,34", "8,304", "8,034", "8,0034", "8,43"], correta: 1 },
      { enunciado: "Uma peça mede 0,045 m. Quantos milímetros ela mede?",
        opcoes: ["4,5", "45", "450", "4.500", "0,45"], correta: 1 },
      { enunciado: "Ordene em ordem crescente: 0,9; 0,099; 0,909; 0,89.",
        opcoes: ["0,099 < 0,89 < 0,9 < 0,909", "0,89 < 0,099 < 0,9 < 0,909", "0,9 < 0,89 < 0,909 < 0,099", "0,099 < 0,9 < 0,89 < 0,909", "0,909 < 0,9 < 0,89 < 0,099"], correta: 0 }
    ]
  },
  {
    id: "M2.2.2",
    titulo: "Conversão entre fração e decimal",
    teoria: [
      "Toda fração a/b, com b diferente de zero, representa o quociente de a por b. Se, depois de simplificada, o denominador tem apenas os fatores primos 2 e/ou 5, o decimal é finito, porque a fração pode ser escrita com denominador potência de 10. Por exemplo, 3/8 = 375/1000 = 0,375.",
      "Se o denominador simplificado tem outro fator primo, o decimal é infinito e periódico. Por exemplo, 1/3 = 0,333… Um decimal periódico continua sendo racional, porque representa uma fração.",
      "Para converter decimal finito em fração, tire a vírgula, divida pela potência de 10 correspondente ao número de casas e simplifique. Por exemplo, 2,45 = 245/100 = 49/20.",
      "Para uma dízima periódica simples, multiplique por potências de 10 e subtraia. Se x = 0,777…, então 10x − x = 7, logo x = 7/9."
    ],
    exemplos: [
      "7/20 = 35/100 = 0,35.",
      "0,625 = 625/1000 = 5/8, dividindo por 125.",
      "5/6 = 0,8333…: o 3 se repete, mas o 8 não. É uma dízima periódica composta.",
      "9/40, com 40 = 2³ × 5, tem decimal finito: 9/40 = 225/1000 = 0,225.",
      "Se x = 0,272727…, então 99x = 27, e x = 27/99 = 3/11."
    ],
    exercicios: [
      { enunciado: "Converta 3/4 em decimal.",
        opcoes: ["0,34", "0,75", "0,4", "1,33", "0,25"], correta: 1 },
      { enunciado: "Escreva 0,48 como fração simplificada.",
        opcoes: ["48/10", "12/25", "4/25", "3/25", "8/25"], correta: 1 },
      { enunciado: "Qual destas frações tem representação decimal finita?",
        opcoes: ["2/3", "3/14", "7/24", "11/40", "5/21"], correta: 3 },
      { enunciado: "Converta 1,125 em fração irredutível.",
        opcoes: ["9/8", "11/8", "1/8", "25/8", "45/8"], correta: 0 },
      { enunciado: "Converta 0,181818… em fração.",
        opcoes: ["2/11", "18/100", "1/5", "9/50", "3/11"], correta: 0 },
      { enunciado: "Uma máquina mede 7/16 de milímetro. Qual é o valor decimal exato?",
        opcoes: ["0,4375", "0,43", "0,44", "0,46", "0,4"], correta: 0 }
    ]
  },
  {
    id: "M2.2.3",
    titulo: "Operações com decimais",
    teoria: [
      "Somar e subtrair decimais exige alinhar as vírgulas, ou seja, juntar unidades de mesma ordem. Somar 2,35 e 1,4 é somar 235 centésimos com 140 centésimos.",
      "Na multiplicação, converta os fatores em frações decimais: 1,2 × 0,35 = (12/10) × (35/100) = 420/1000 = 0,42. A regra de contar as casas decimais vem dessa multiplicação de potências de 10.",
      "Na divisão por um decimal, multiplique dividendo e divisor pela mesma potência de 10. Por exemplo, 7,2 ÷ 0,3 = 72 ÷ 3. Nunca se divide por zero.",
      "Faça uma estimativa antes do algoritmo. Por exemplo, 19,8 × 0,49 é próximo de 20 × 0,5 = 10. Em problemas de dinheiro, diferencie o resultado exato do arredondamento para centavos."
    ],
    exemplos: [
      "3,75 + 0,80 = 4,55. A estimativa 3,8 + 0,8 ≈ 4,6 confirma a ordem de grandeza.",
      "12,040 − 3,785 = 8,255. Conferência: 8,255 + 3,785 = 12,040.",
      "2,4 × 0,15 = 0,36, que é menor que 2,4, porque 0,15 é menor que 1.",
      "8,64 ÷ 0,24: multiplicando ambos por 100, fica 864 ÷ 24 = 36.",
      "Uma gráfica cobra R$ 1,75 por página em 12 páginas, mais taxa fixa de R$ 4,50: 12 × 1,75 = 21,00, e 21,00 + 4,50 = R$ 25,50."
    ],
    exercicios: [
      { enunciado: "Calcule 4,08 + 1,7.",
        opcoes: ["5,78", "5,7", "5,08", "4,78", "6,78"], correta: 0 },
      { enunciado: "Calcule 9 − 2,375.",
        opcoes: ["6,625", "7,625", "6,375", "6,725", "6,6"], correta: 0 },
      { enunciado: "Quanto é 0,6 × 0,07?",
        opcoes: ["0,42", "0,042", "0,0042", "4,2", "0,67"], correta: 1 },
      { enunciado: "Calcule 5,25 ÷ 0,15.",
        opcoes: ["3,5", "35", "0,35", "350", "3,05"], correta: 1 },
      { enunciado: "Um tanque recebe 2,75 litros por minuto durante 8 minutos e perde 3,6 litros. Quanto fica no tanque?",
        opcoes: ["18,4 litros", "18,6 litros", "22,0 litros", "19,4 litros", "17,6 litros"], correta: 0 },
      { enunciado: "Um produto custa R$ 7,80 por quilo. Quanto custam 1,25 quilo e mais R$ 2,40 de embalagem?",
        opcoes: ["R$ 10,15", "R$ 11,15", "R$ 12,15", "R$ 12,75", "R$ 13,15"], correta: 2 }
    ]
  },
  {
    id: "M2.2.4",
    titulo: "Comparação e arredondamento",
    teoria: [
      "Comparar decimais exige observar o valor posicional. Para 2,09 e 2,1, escreva 2,09 e 2,10: 2,09 é menor. O número de casas não determina qual valor é maior. Nos negativos, o número mais à esquerda na reta é o menor: −3,2 é menor que −3,05.",
      "Arredondar à casa dos décimos é escolher o múltiplo de 0,1 mais próximo. No método escolar, se o primeiro algarismo descartado é 5 ou mais, aumenta-se o último algarismo mantido; caso contrário, ele se conserva.",
      "Arredonde só a resposta final, e não os valores intermediários, para não acumular erro.",
      "Precisão e exatidão são coisas diferentes. Uma aproximação aos centésimos pelo valor mais próximo tem erro máximo de 0,005."
    ],
    exemplos: [
      "Ordenando 0,9; 0,89 e 0,901: 0,89 < 0,9 < 0,901.",
      "−1,7 < −1,07, porque −1,70 fica à esquerda de −1,07 na reta.",
      "17,486 aos centésimos: o milésimo é 6, então o centésimo sobe de 8 para 9, e o resultado é 17,49.",
      "9,995 aos centésimos: o milésimo é 5, então 9,99 sobe 0,01 e resulta em 10,00.",
      "Três distâncias de 2,46 km, 1,47 km e 3,48 km somam 7,41 km, que é 7,4 km arredondado. Se cada distância for arredondada antes, a soma vira 7,5 km. O arredondamento prematuro muda o resultado."
    ],
    exercicios: [
      { enunciado: "Qual é maior: 4,099 ou 4,1?",
        opcoes: ["4,099", "4,1", "São iguais", "Não é possível comparar", "Depende"], correta: 1 },
      { enunciado: "Arredonde 5,348 aos centésimos.",
        opcoes: ["5,34", "5,35", "5,36", "5,4", "5,3"], correta: 1 },
      { enunciado: "Ordene em ordem crescente: −0,5; −0,05; −0,55.",
        opcoes: ["−0,55; −0,5; −0,05", "−0,05; −0,5; −0,55", "−0,5; −0,55; −0,05", "−0,55; −0,05; −0,5", "−0,05; −0,55; −0,5"], correta: 0 },
      { enunciado: "Qual é a aproximação de 18,96 aos décimos?",
        opcoes: ["18,9", "19,0", "18,96", "19,6", "18,0"], correta: 1 },
      { enunciado: "Uma medida de 6,284 m é arredondada ao centímetro mais próximo. Qual é o valor em metros?",
        opcoes: ["6,28 m", "6,3 m", "6,284 m", "6,29 m", "6,2 m"], correta: 0 },
      { enunciado: "Um percurso tem trechos de 1,46 km, 2,46 km e 3,46 km. Qual é a soma arredondada aos décimos?",
        opcoes: ["7,4 km", "7,5 km", "7,38 km", "7,3 km", "7,0 km"], correta: 0 }
    ]
  },
  {
    id: "M2.2.5",
    titulo: "Decimais em medidas e dinheiro",
    teoria: [
      "Valores decimais aparecem em preços, massa, comprimento, capacidade e tempo. Primeiro, identifique a unidade de cada dado: 0,75 kg são 750 g, mas 0,75 hora são 45 minutos, porque 1 hora = 60 minutos.",
      "Nas medidas métricas, 1 m = 100 cm, 1 L = 1.000 mL e 1 kg = 1.000 g. Para comprar por massa, o preço total é o preço por quilo vezes a massa em quilos. Uma embalagem de 250 g corresponde a 0,25 kg.",
      "Para comparar ofertas, divida o preço pela quantidade na mesma unidade. O resultado deve respeitar a unidade e a precisão do dado. Em provas, faça uma estimativa antes de escolher a alternativa."
    ],
    exemplos: [
      "1,35 m = 1,35 × 100 = 135 cm.",
      "1,25 hora = 1,25 × 60 = 75 minutos, ou 1 hora e 15 minutos.",
      "350 g de queijo a R$ 42,00 por quilo: 0,350 × 42 = R$ 14,70.",
      "600 mL por R$ 4,80 custam R$ 8,00 por litro. 1,5 L por R$ 10,50 custam R$ 7,00 por litro. A segunda oferta é mais barata por litro.",
      "Um veículo percorre 168,75 km com 13,5 litros: 168,75 ÷ 13,5 = 12,5 km por litro."
    ],
    exercicios: [
      { enunciado: "Converta 0,48 litro em mililitros.",
        opcoes: ["4,8 mL", "48 mL", "480 mL", "4.800 mL", "0,48 mL"], correta: 2 },
      { enunciado: "Uma fita tem 2,4 metros. Quantos centímetros ela tem?",
        opcoes: ["24 cm", "240 cm", "2.400 cm", "0,24 cm", "2,4 cm"], correta: 1 },
      { enunciado: "Quanto custam 0,75 quilo a R$ 16,00 por quilo?",
        opcoes: ["R$ 10,00", "R$ 12,00", "R$ 14,00", "R$ 16,75", "R$ 21,33"], correta: 1 },
      { enunciado: "Um trajeto leva 2,4 horas. Expresse o tempo em horas e minutos.",
        opcoes: ["2 h e 40 min", "2 h e 24 min", "2 h e 4 min", "24 h", "2 h e 20 min"], correta: 1 },
      { enunciado: "Qual oferta é mais econômica por litro: 750 mL por R$ 6,00, ou 1,2 L por R$ 9,00?",
        opcoes: ["A de 750 mL", "A de 1,2 L", "São iguais", "Não é possível saber", "Depende"], correta: 1 },
      { enunciado: "Um restaurante usa 0,18 quilo de arroz cru por pessoa. Para 35 pessoas, compra sacos de 2 quilos a R$ 11,50 cada. Quantos sacos são necessários e qual é o custo?",
        opcoes: ["3 sacos e R$ 34,50", "4 sacos e R$ 46,00", "5 sacos e R$ 57,50", "4 sacos e R$ 40,00", "6,3 sacos e R$ 72,45"], correta: 1 }
    ]
  }
];
