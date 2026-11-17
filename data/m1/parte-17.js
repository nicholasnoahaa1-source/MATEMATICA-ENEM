// Módulo 1, parte 17: aula M1.7.1 (revisão integrada).
window.AULAS_M1_P17 = [
  {
    id: "M1.7.1",
    titulo: "Revisão integrada de números e operações",
    teoria: [
      "N = {0, 1, 2, 3, ...} são os números naturais. Neste curso, adotamos 0 pertencente a N. Z inclui os negativos. Q são os quocientes a/b com b diferente de zero. R reúne os racionais e os irracionais.",
      "Adição e multiplicação são comutativas e associativas. A distributividade é a × (b + c) = a × b + a × c. A subtração e a divisão não são comutativas, e a divisão por zero não é definida.",
      "Use a ordem das operações: parênteses, potências e raízes, multiplicações e divisões, adições e subtrações. Operações de mesma prioridade são feitas da esquerda para a direita. Por isso, 24 ÷ 6 × 2 = 8, e não 2.",
      "Para o MDC, use os menores expoentes comuns na fatoração. Para o MMC, use os maiores expoentes. Para inteiros positivos a e b, vale MDC(a, b) × MMC(a, b) = a × b.",
      "Para frações, use denominador comum na soma e na subtração. Para potências, a⁰ = 1 e a⁻ⁿ = 1/aⁿ. A raiz quadrada principal é não negativa, e √(a²) = |a|, e não necessariamente a.",
      "Estimativas preservam a ordem de grandeza. Ao final de qualquer cálculo, confira a unidade, o sinal, os limites e se o resultado responde à pergunta.",
      "Método de resolução: identifique a pergunta e as unidades; separe os dados e as restrições; escolha uma representação; execute as operações justificando cada passo; estime e valide o resultado; escreva a resposta com a unidade correta."
    ],
    exemplos: [
      "Saldo: 125 + 80 − 237 = 205 − 237 = −32. A conta fica com saldo devedor de R$ 32.",
      "Reservatório: 3/5 − 1/4 = 12/20 − 5/20 = 7/20, ou 35% da capacidade. Erro a evitar: subtrair os denominadores.",
      "Kits idênticos: 48 cadernos e 60 lápis. MDC(48, 60) = 12. São 12 kits, cada um com 4 cadernos e 5 lápis.",
      "Encontros periódicos: alarmes a cada 18 e 24 minutos. MMC(18, 24) = 72 minutos, isto é, 1 h 12 min. Conferência: 72 ÷ 18 = 4 e 72 ÷ 24 = 3.",
      "Orçamento: 36 caixas com 24 lápis cada são 864 lápis. Divididos entre 27 turmas, dão 32 lápis por turma. Verificação: 27 × 32 = 864."
    ],
    exercicios: [
      { enunciado: "Qual número pertence a Z, mas não pertence a N?",
        opcoes: ["0", "3/2", "−7", "√2", "5"], correta: 2 },
      { enunciado: "Calcule 6 + 4 × (9 − 7).",
        opcoes: ["14", "20", "12", "18", "10"], correta: 0 },
      { enunciado: "Qual é o resultado de 5/6 − 1/4?",
        opcoes: ["4/2", "1/2", "7/12", "1/12", "2/3"], correta: 2 },
      { enunciado: "Qual é o MDC de 42 e 56?",
        opcoes: ["7", "14", "21", "28", "42"], correta: 1 },
      { enunciado: "Calcule 2³ + 3² × 2.",
        opcoes: ["22", "34", "25", "17", "26"], correta: 4 },
      { enunciado: "Uma equipe usa 3/8 de um lote pela manhã e 1/4 à tarde. Que fração do lote resta?",
        opcoes: ["1/8", "3/8", "1/2", "5/8", "7/8"], correta: 1 },
      { enunciado: "Três sinais repetem a cada 6, 8 e 10 minutos. Após quantos minutos voltarão a coincidir?",
        opcoes: ["24", "40", "60", "120", "240"], correta: 3 },
      { enunciado: "Uma compra de 49 unidades a R$ 20,10 cada foi registrada como R$ 98,49. Qual análise é correta?",
        opcoes: ["Valor plausível", "Total deveria ser próximo de R$ 1.000", "Próximo de R$ 100", "Próximo de R$ 10", "Não é possível estimar"], correta: 1 },
      { enunciado: "Uma gráfica possui 84 folhas azuis e 126 amarelas. Montará o maior número de pacotes idênticos, sem sobras. Quantas folhas amarelas haverá em cada pacote?",
        opcoes: ["2", "3", "4", "6", "7"], correta: 1 },
      { enunciado: "Uma organização tem 960 unidades de alimento para distribuir igualmente a 24 famílias. Se 6 famílias adicionais forem incluídas, mantendo o total, qual será a redução por família?",
        opcoes: ["4", "6", "8", "10", "12"], correta: 2 }
    ]
  }
];
