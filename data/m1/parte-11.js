// Módulo 1, parte 11: aulas M1.4.5 e M1.4.6.
// Obs.: a M1.4.5 repete boa parte dos exercícios da M1.1.4 (ver data/CORRECOES.md).
window.AULAS_M1_P11 = [
  {
    id: "M1.4.5",
    titulo: "Números irracionais e reais",
    teoria: [
      "Um número irracional não pode ser escrito como fração a/b com a e b inteiros e b diferente de zero.",
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
  },
  {
    id: "M1.4.6",
    titulo: "Problemas com racionais e reais",
    teoria: [
      "Racionais aparecem em medidas, dinheiro e proporções. Irracionais aparecem em geometria e ciências.",
      "Em problemas com aproximações, use o número de casas decimais pedido no enunciado.",
      "Em medidas, converta as unidades antes de calcular.",
      "Em proporções, identifique qual grandeza é proporcional à outra."
    ],
    exemplos: [
      "O dobro de 3/4 é 3/2, ou 1 e 1/2.",
      "O comprimento de uma circunferência de raio 1 é 2π ≈ 6,28.",
      "0,75 litro = 750 mL.",
      "A raiz quadrada de 2 aproximada é 1,41.",
      "π aproximado é 3,14."
    ],
    exercicios: [
      { enunciado: "Qual é o dobro de 3/4?",
        opcoes: ["1", "1 e 1/4", "1 e 1/2", "2", "2 e 1/2"], correta: 2 },
      { enunciado: "Qual é, aproximadamente, o comprimento de uma circunferência de raio 1?",
        opcoes: ["3,14", "6,28", "9,42", "12,56", "15,70"], correta: 1 },
      { enunciado: "Quantos mililitros há em 0,75 litro?",
        opcoes: ["7,5", "75", "750", "7.500", "75.000"], correta: 2 },
      { enunciado: "Qual é a raiz quadrada de 2 aproximada com duas casas decimais?",
        opcoes: ["1,41", "1,42", "1,50", "2,00", "2,41"], correta: 0 },
      { enunciado: "Qual é o valor de π aproximado com duas casas decimais?",
        opcoes: ["3,00", "3,10", "3,14", "3,41", "3,15"], correta: 2 },
      { enunciado: "Qual é 2/3 de 90?",
        opcoes: ["30", "45", "60", "75", "90"], correta: 2 },
      { enunciado: "Qual é 3/4 de 120?",
        opcoes: ["60", "75", "90", "100", "120"], correta: 2 },
      { enunciado: "Qual é 0,25 de 200?",
        opcoes: ["25", "40", "50", "60", "75"], correta: 2 },
      { enunciado: "Qual é a raiz quadrada de 3 aproximada com duas casas decimais?",
        opcoes: ["1,41", "1,73", "2,00", "2,23", "2,45"], correta: 1 },
      { enunciado: "Qual é 2π aproximado com duas casas decimais?",
        opcoes: ["6,28", "6,30", "6,32", "6,36", "6,40"], correta: 0 }
    ]
  }
];
