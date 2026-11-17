// Módulo 1, parte 18: aulas M1.7.2, M1.7.3 e M1.7.4 (revisão e questões no estilo ENEM).
window.AULAS_M1_P18 = [
  {
    id: "M1.7.2",
    titulo: "Lista comentada de exercícios",
    teoria: [
      "Antes de calcular, reconheça a estrutura do problema. Para agrupamentos iguais sem sobras, procure divisores comuns (MDC). Para coincidência de ciclos, procure múltiplos comuns (MMC).",
      "Em problemas com frações, determine o todo de referência. Se 3/5 de uma quantidade são 24, a quantidade total é 24 ÷ (3/5) = 40. Multiplicar 24 por 3/5 aplicaria a fração de novo e não recuperaria o todo.",
      "Uma estimativa é uma ferramenta de controle. Se 49 itens custam cerca de R$ 20 cada, o total deve estar perto de R$ 1.000. Resultados muito diferentes pedem revisão das operações e das unidades."
    ],
    exemplos: [
      "Uma caixa tem 18 lápis azuis e 24 vermelhos. MDC(18, 24) = 6 kits, cada um com 3 azuis e 4 vermelhos.",
      "Dois alarmes tocam a cada 12 e 18 minutos. MMC(12, 18) = 36 minutos.",
      "Um reservatório de 80 L perde 3/8 do conteúdo: a perda é 30 L, restam 50 L, e 50/80 = 5/8.",
      "3² + 2 · (15 − 9) ÷ 3 = 9 + 2 · 6 ÷ 3 = 9 + 4 = 13. Multiplicação e divisão são feitas da esquerda para a direita.",
      "Uma escola tem 2.400 folhas e usa 35%. Restam 1.560 folhas. Depois usa 1/4 do restante: sobram 1.170. Não se somam 35% e 25%, porque os referenciais são diferentes."
    ],
    exercicios: [
      { enunciado: "Qual é o MDC de 36 e 60?",
        opcoes: ["4", "6", "12", "18", "36"], correta: 2 },
      { enunciado: "Qual é o MMC de 8 e 14?",
        opcoes: ["16", "28", "42", "56", "112"], correta: 3 },
      { enunciado: "Quanto é 5/6 de 72?",
        opcoes: ["12", "50", "60", "66", "72"], correta: 2 },
      { enunciado: "Qual é o valor de 2³ · 2⁴ ÷ 2⁵?",
        opcoes: ["2", "4", "8", "16", "32"], correta: 1 },
      { enunciado: "Um ingresso de R$ 80 sofre aumento de 10%. Qual é o novo preço?",
        opcoes: ["R$ 8", "R$ 72", "R$ 88", "R$ 90", "R$ 800"], correta: 2 },
      { enunciado: "Um número é divisível por 9 quando a soma de seus algarismos é divisível por 9. O número 7.236 é divisível por 9?",
        opcoes: ["Sim", "Não", "Somente se terminar em 0", "Somente se for par", "Não é possível saber"], correta: 0 }
    ]
  },
  {
    id: "M1.7.3",
    titulo: "Avaliação do módulo",
    teoria: [
      "Leia primeiro a pergunta final. Anote as unidades e identifique se os dados descrevem partes, taxas, ciclos ou quantidades absolutas.",
      "Quando uma fração incide sobre um saldo, a base é o saldo, e não o valor original. Duas retiradas sucessivas de 20% e 30% deixam 0,8 · 0,7 = 0,56, ou seja, restam 56%, e não 50%.",
      "Um resultado correto pode ser inadequado ao contexto. Se o cálculo dá 4,2 ônibus, são necessários 5, porque não se contrata fração de veículo."
    ],
    exemplos: [
      "84 peças de um tipo e 126 de outro, em caixas idênticas sem misturar tipos: MDC(84, 126) = 42 peças por caixa.",
      "Ciclos a cada 15 e 20 dias coincidem a cada MMC(15, 20) = 60 dias.",
      "Turma de 40 alunos com 3/5 presentes: 24 presentes. Dos presentes, 1/4 participa: 6 alunos.",
      "Tanque de 150 L: consome 20% (restam 120 L) e depois 1/3 do restante (sobram 80 L).",
      "178 pessoas em veículos de 40 lugares: 178 ÷ 40 = 4,45, então são necessários 5 veículos, porque quatro levariam só 160 pessoas."
    ],
    exercicios: [
      { enunciado: "Qual é o resto da divisão de 347 por 12?",
        opcoes: ["1", "5", "11", "12", "35"], correta: 2 },
      { enunciado: "Uma conta de R$ 240 é dividida na razão 2 : 3 : 5. Quanto recebe a terceira parte?",
        opcoes: ["R$ 60", "R$ 80", "R$ 100", "R$ 120", "R$ 240"], correta: 3 },
      { enunciado: "Qual é o valor de (3/4 − 1/6) · 24?",
        opcoes: ["7", "12", "14", "18", "24"], correta: 2 },
      { enunciado: "Uma população de 2.000 aumenta 10% e depois diminui 10%. Qual é o valor final?",
        opcoes: ["1.800", "1.960", "1.980", "2.000", "2.200"], correta: 2 },
      { enunciado: "Qual é a ordem de grandeza aproximada de 8,2 × 10⁵?",
        opcoes: ["10³", "10⁴", "10⁵", "10⁶", "10⁷"], correta: 2,
        correcao: "Corrigido: o texto original dava 10⁶ (potência de dez mais próxima). O módulo adota o expoente da notação científica, e por esse critério a resposta é 10⁵." },
      { enunciado: "Uma escola compra 19 caixas com 48 unidades cada. É razoável estimar 900 unidades?",
        opcoes: ["Sim, 912 é próximo de 900", "Não, o total exato é 1.200", "Não, o total exato é 500", "Sim, mas o total exato é 1.000", "Não é possível estimar"], correta: 0 }
    ]
  },
  {
    id: "M1.7.4",
    titulo: "Questões autorais no estilo ENEM",
    teoria: [
      "Questões contextualizadas costumam esconder uma estrutura aritmética simples em um texto longo. Estratégia: (1) delimite a pergunta; (2) converta os dados em operações; (3) calcule; (4) confronte as alternativas; (5) verifique a unidade e o contexto.",
      "Os distratores devem representar erros plausíveis, mas apenas uma alternativa pode estar correta. Pense por que um procedimento equivocado produz uma resposta atraente.",
      "Questões desta aula são autorais e não reproduzem itens oficiais do ENEM."
    ],
    exemplos: [
      "Feira com 360 kg de frutas: vende 2/5 pela manhã (restam 216 kg) e 1/3 do restante à tarde (restam 144 kg).",
      "Duas linhas de ônibus partem juntas às 6h e repetem saídas a cada 18 e 24 minutos: MMC(18, 24) = 72 minutos, ou seja, 7h12.",
      "Editora com 96 livros de matemática e 144 de ciências: MDC(96, 144) = 48 livros por lote.",
      "Compra de R$ 500 com 20% de desconto e 5% de taxa sobre o valor descontado: 500 · 0,8 · 1,05 = R$ 420. Como 420/500 = 0,84, o desconto líquido é de 16%, e não de 15%.",
      "Evento com 800 ingressos: vende 3/8 no primeiro dia (300), restam 500; no segundo dia, vende 40% do saldo (200), restam 300."
    ],
    exercicios: [
      { enunciado: "Uma escola dispõe de 420 cadernos e distribui 3/7. Depois distribui metade do restante. Quantos cadernos sobram?",
        opcoes: ["90", "120", "150", "180", "240"], correta: 1 },
      { enunciado: "Três sensores disparam a cada 6, 8 e 15 minutos, e partem juntos. Quando voltam a coincidir?",
        opcoes: ["30 minutos", "60 minutos", "90 minutos", "120 minutos", "240 minutos"], correta: 3 },
      { enunciado: "Um produto custa R$ 250, aumenta 20% e depois cai 20%. Qual é o preço final?",
        opcoes: ["R$ 200", "R$ 230", "R$ 240", "R$ 250", "R$ 260"], correta: 2 },
      { enunciado: "Um auditório tem 275 visitantes. Cada van leva 18 pessoas. Quantas vans são necessárias?",
        opcoes: ["14", "15", "16", "17", "18"], correta: 2 },
      { enunciado: "Uma receita usa 3/4 de xícara para 6 porções. Quanto usar para 10 porções?",
        opcoes: ["1 xícara", "5/4 de xícara", "3/2 de xícara", "7/4 de xícara", "2 xícaras"], correta: 1 },
      { enunciado: "Uma associação tem 168 garrafas e 210 copos. Quer formar o maior número de kits idênticos, usando todos os itens. Quantos kits serão formados?",
        opcoes: ["14", "21", "28", "42", "84"], correta: 3 }
    ]
  }
];
