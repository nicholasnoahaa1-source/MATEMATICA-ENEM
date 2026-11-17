// Módulo 1, parte 10: aulas M1.4.3 e M1.4.4.
window.AULAS_M1_P10 = [
  {
    id: "M1.4.3",
    titulo: "Números decimais e operações",
    teoria: [
      "Um número decimal é uma representação posicional: cada casa depois da vírgula vale um décimo, um centésimo, um milésimo, e assim por diante.",
      "Frações e decimais são formas diferentes de escrever o mesmo valor. Por exemplo, 0,25 = 1/4.",
      "Para somar ou subtrair decimais, alinhe as vírgulas.",
      "Para multiplicar decimais, multiplique como se fossem inteiros e depois conte as casas decimais de ambos os fatores para posicionar a vírgula.",
      "Para dividir por um decimal, transforme o divisor em inteiro multiplicando dividendo e divisor pela mesma potência de 10."
    ],
    exemplos: [
      "0,25 = 25/100 = 1/4.",
      "0,75 = 75/100 = 3/4.",
      "0,5 + 0,25 = 0,75.",
      "0,3 × 0,2 = 0,06, porque 3 × 2 = 6 e há duas casas decimais no total.",
      "1,5 ÷ 0,5 = 15 ÷ 5 = 3."
    ],
    exercicios: [
      { enunciado: "Qual é a fração equivalente a 0,25?",
        opcoes: ["1/4", "1/2", "3/4", "2/5", "5/4"], correta: 0 },
      { enunciado: "Qual é a fração equivalente a 0,75?",
        opcoes: ["1/4", "1/2", "3/4", "2/5", "5/4"], correta: 2 },
      { enunciado: "Qual é o resultado de 0,5 + 0,25?",
        opcoes: ["0,70", "0,75", "0,80", "0,85", "0,90"], correta: 1 },
      { enunciado: "Qual é o resultado de 0,3 × 0,2?",
        opcoes: ["0,06", "0,6", "0,006", "0,66", "0,36"], correta: 0 },
      { enunciado: "Qual é o resultado de 1,5 ÷ 0,5?",
        opcoes: ["2", "2,5", "3", "3,5", "4"], correta: 2 },
      { enunciado: "Qual é o resultado de 0,4 + 0,35?",
        opcoes: ["0,70", "0,75", "0,80", "0,85", "0,90"], correta: 1 },
      { enunciado: "Qual é o resultado de 0,6 × 0,5?",
        opcoes: ["0,03", "0,3", "0,34", "0,33", "0,36"], correta: 1,
        correcao: "Corrigido: a alternativa C original (0,30) é igual a 0,3, a resposta certa. Substituída por 0,34." },
      { enunciado: "Qual é o resultado de 2,5 ÷ 0,5?",
        opcoes: ["4", "4,5", "5", "5,5", "6"], correta: 2 },
      { enunciado: "Qual é a fração equivalente a 0,125?",
        opcoes: ["1/8", "1/4", "1/2", "3/8", "5/8"], correta: 0 },
      { enunciado: "Qual é o resultado de 3,75 ÷ 1,25?",
        opcoes: ["2", "2,5", "3", "3,5", "4"], correta: 2 }
    ]
  },
  {
    id: "M1.4.4",
    titulo: "Densidade dos racionais e aproximações",
    teoria: [
      "Entre dois números racionais diferentes, sempre existe outro número racional. Por isso, dizemos que os racionais são densos.",
      "Por exemplo, entre 1 e 2 existe 1,5, e entre 0 e 1 existe 0,5.",
      "Aproximar um número é escolher um valor próximo com uma quantidade menor de casas decimais. Para duas casas, observe a terceira casa: de 0 a 4, mantém; de 5 a 9, aumenta.",
      "Ao aproximar um número irracional, o resultado é sempre uma aproximação, nunca o valor exato."
    ],
    exemplos: [
      "Entre 1 e 2, um racional é 1,5.",
      "3,1416 com duas casas decimais: 3,14.",
      "2,718 com duas casas decimais: 2,72, porque a terceira casa é 8.",
      "Entre 0 e 1, um racional é 0,5.",
      "1,414 com duas casas decimais: 1,41, porque a terceira casa é 4."
    ],
    exercicios: [
      { enunciado: "Qual destes números está entre 1 e 2?",
        opcoes: ["1,5", "2,5", "0,5", "3,5", "4,5"], correta: 0 },
      { enunciado: "Arredondando 3,1416 para duas casas decimais, obtém-se:",
        opcoes: ["3,10", "3,14", "3,15", "3,20", "3,25"], correta: 1 },
      { enunciado: "Arredondando 2,718 para duas casas decimais, obtém-se:",
        opcoes: ["2,70", "2,71", "2,72", "2,75", "2,80"], correta: 2 },
      { enunciado: "Qual destes números está entre 0 e 1?",
        opcoes: ["0,5", "1,5", "2,5", "3,5", "4,5"], correta: 0 },
      { enunciado: "Arredondando 1,414 para duas casas decimais, obtém-se:",
        opcoes: ["1,40", "1,41", "1,42", "1,45", "1,50"], correta: 1 },
      { enunciado: "Qual destes números está entre 2 e 3?",
        opcoes: ["2,5", "3,5", "1,5", "4,5", "5,5"], correta: 0 },
      { enunciado: "Arredondando 0,666 para duas casas decimais, obtém-se:",
        opcoes: ["0,66", "0,67", "0,70", "0,75", "0,80"], correta: 1 },
      { enunciado: "Arredondando 1,618 para duas casas decimais, obtém-se:",
        opcoes: ["1,60", "1,61", "1,62", "1,65", "1,70"], correta: 2 },
      { enunciado: "Qual destes números está entre 0,1 e 0,2?",
        opcoes: ["0,15", "0,25", "0,35", "0,45", "0,55"], correta: 0 },
      { enunciado: "Arredondando 2,236 para duas casas decimais, obtém-se:",
        opcoes: ["2,23", "2,24", "2,25", "2,30", "2,35"], correta: 1 }
    ]
  }
];
