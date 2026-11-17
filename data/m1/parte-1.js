// Módulo 1, parte 1: aulas M1.1.3 e M1.1.4.
window.AULAS_M1_P1 = [
  {
    id: "M1.1.3",
    titulo: "Números racionais: frações e decimais",
    teoria: [
      "Um número racional é uma fração a/b com a e b inteiros e b diferente de zero.",
      "Todo decimal finito é racional, e as dízimas periódicas também são racionais.",
      "Para comparar duas frações, iguale os denominadores ou converta ambas para decimal.",
      "Simplificar uma fração é escrever uma fração equivalente com números menores, mantendo o mesmo valor."
    ],
    exemplos: [
      "3/4 = 0,75.",
      "Simplificando 18/24: obtém-se 3/4, porque 18 = 6 × 3 e 24 = 6 × 4.",
      "2/5 = 0,4, que é menor que 0,45. Logo, 2/5 < 0,45.",
      "1/2 = 0,5 e 1/4 = 0,25.",
      "0,125 = 125/1.000 = 1/8."
    ],
    exercicios: [
      { enunciado: "Qual é a representação decimal de 7/10?",
        opcoes: ["0,07", "0,7", "7,0", "1,7", "0,17"], correta: 1 },
      { enunciado: "Simplifique 20/30.",
        opcoes: ["1/2", "2/3", "3/4", "4/5", "5/6"], correta: 1 },
      { enunciado: "Qual é maior: 3/5 ou 0,58?",
        opcoes: ["3/5", "0,58", "São iguais", "Não é possível comparar", "Depende"], correta: 0 },
      { enunciado: "Qual é maior: 1/2 ou 1/4?",
        opcoes: ["1/2", "1/4", "São iguais", "Não é possível comparar", "Depende"], correta: 0 },
      { enunciado: "Qual é a representação decimal de 3/4?",
        opcoes: ["0,25", "0,34", "0,5", "0,75", "1"], correta: 3 },
      { enunciado: "Qual fração é equivalente a 6/9?",
        opcoes: ["2/3", "3/4", "1/2", "6/7", "9/6"], correta: 0 },
      { enunciado: "Qual é a fração equivalente a 0,35?",
        opcoes: ["7/20", "7/25", "35/1.000", "3/5", "1/3"], correta: 0 },
      { enunciado: "Qual fração representa 24 de um total de 40?",
        opcoes: ["2/5", "3/5", "1/2", "3/4", "5/8"], correta: 1 },
      { enunciado: "Qual fração é menor: 1/3 ou 1/2?",
        opcoes: ["1/3", "1/2", "São iguais", "Não é possível comparar", "Depende"], correta: 0 },
      { enunciado: "Qual decimal está entre 0,7 e 0,8?",
        opcoes: ["0,65", "0,72", "0,9", "0,6", "0,5"], correta: 1 }
    ]
  },
  {
    id: "M1.1.4",
    titulo: "Números irracionais e reais",
    teoria: [
      "A raiz quadrada de um número a é o número que, multiplicado por ele mesmo, resulta em a. Por exemplo, a raiz quadrada de 9 é 3, porque 3 × 3 = 9.",
      "Um número irracional não pode ser escrito como fração a/b com a e b inteiros.",
      "Exemplos de irracionais: a raiz quadrada de 2, π e o número de Euler (e).",
      "A expansão decimal de um irracional é infinita e não periódica.",
      "O conjunto dos números reais reúne os racionais e os irracionais.",
      "Em medidas reais, usamos aproximações dos irracionais."
    ],
    exemplos: [
      "0,5 é racional.",
      "A raiz quadrada de 2 é irracional.",
      "π é aproximadamente 3,14.",
      "A raiz quadrada de 2 é aproximadamente 1,414, que é maior que 1,4.",
      "Entre 0,3 e 1/3: 1/3 é aproximadamente 0,333, que é maior que 0,3."
    ],
    exercicios: [
      { enunciado: "Qual destes números é irracional?",
        opcoes: ["0,25", "2/3", "Raiz quadrada de 2", "−4", "0,333..."], correta: 2 },
      { enunciado: "Qual é o valor de π com duas casas decimais?",
        opcoes: ["3,00", "3,10", "3,14", "3,41", "3,15"], correta: 2 },
      { enunciado: "Qual destes números é racional?",
        opcoes: ["Raiz quadrada de 3", "π", "0,75", "Raiz quadrada de 5", "Número de Euler"], correta: 2 },
      { enunciado: "Qual é maior: 1,5 ou a raiz quadrada de 2?",
        opcoes: ["1,5", "Raiz quadrada de 2", "São iguais", "Não é possível comparar", "Depende"], correta: 0 },
      { enunciado: "Todo número irracional é real?",
        opcoes: ["Sim", "Não", "Somente alguns", "Nenhum", "Depende"], correta: 0 },
      { enunciado: "Qual é, aproximadamente, a diagonal de um quadrado de lado 1?",
        opcoes: ["1,41", "1,42", "1,50", "2,00", "2,41"], correta: 0 },
      { enunciado: "Qual é o menor número entre 3,14, π, 3,15 e 22/7?",
        opcoes: ["3,14", "π", "3,15", "22/7", "Não é possível determinar"], correta: 0,
        correcao: "Corrigido: o gabarito original era B (π). Como π é aproximadamente 3,14159, o menor é 3,14." },
      { enunciado: "Qual número está entre 1,4 e 1,5?",
        opcoes: ["1,39", "1,45", "1,51", "1,35", "1,60"], correta: 1 },
      { enunciado: "Qual é, aproximadamente, o comprimento de uma circunferência de raio 1?",
        opcoes: ["3,14", "6,28", "9,42", "12,56", "15,70"], correta: 1 },
      { enunciado: "Qual afirmação é falsa?",
        opcoes: ["Todo número natural é real.", "Todo número inteiro é real.", "Todo número racional é real.", "Todo número irracional é real.", "Todo número real é racional."], correta: 4 }
    ]
  }
];
