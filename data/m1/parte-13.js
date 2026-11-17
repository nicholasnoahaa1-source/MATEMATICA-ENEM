// Módulo 1, parte 13: aulas M1.5.5 e M1.5.6.
window.AULAS_M1_P13 = [
  {
    id: "M1.5.5",
    titulo: "Ordens de grandeza e estimativas",
    teoria: [
      "A ordem de grandeza de um número positivo x é o expoente k da notação científica x = a × 10ᵏ, com 1 ≤ a < 10. Por exemplo, 3.200 = 3,2 × 10³, e a ordem de grandeza é 10³.",
      "Para números menores que 1, o expoente k é negativo. Por exemplo, 0,00042 = 4,2 × 10⁻⁴, e a ordem de grandeza é 10⁻⁴.",
      "Ordem de grandeza serve para verificar se um resultado é razoável, antes de fazer contas exatas."
    ],
    exemplos: [
      "A ordem de grandeza de 3.200 é 10³.",
      "A ordem de grandeza de 0,00042 é 10⁻⁴.",
      "498 + 302 estimado: 500 + 300 = 800.",
      "1.998 × 4 estimado: 2.000 × 4 = 8.000.",
      "A ordem de grandeza de 8.500 é 10³, porque 8.500 = 8,5 × 10³."
    ],
    exercicios: [
      { enunciado: "Qual é a ordem de grandeza de 3.200?",
        opcoes: ["10¹", "10²", "10³", "10⁴", "10⁵"], correta: 2 },
      { enunciado: "Qual é a ordem de grandeza de 0,00042?",
        opcoes: ["10⁻¹", "10⁻²", "10⁻³", "10⁻⁴", "10⁻⁵"], correta: 3 },
      { enunciado: "Um valor estimado de 498 + 302 é:",
        opcoes: ["700", "750", "800", "850", "900"], correta: 2 },
      { enunciado: "Um valor estimado de 1.998 × 4 é:",
        opcoes: ["6.000", "7.000", "8.000", "9.000", "10.000"], correta: 2 },
      { enunciado: "Qual é a ordem de grandeza de 8.500?",
        opcoes: ["10¹", "10²", "10³", "10⁴", "10⁵"], correta: 2 },
      { enunciado: "Qual é a ordem de grandeza de 0,00075?",
        opcoes: ["10⁻¹", "10⁻²", "10⁻³", "10⁻⁴", "10⁻⁵"], correta: 3 },
      { enunciado: "Um valor estimado de 1.250 ÷ 25 é:",
        opcoes: ["40", "45", "50", "55", "60"], correta: 2 },
      { enunciado: "Qual é a ordem de grandeza de 0,0000075?",
        opcoes: ["10⁻⁴", "10⁻⁵", "10⁻⁶", "10⁻⁷", "10⁻⁸"], correta: 2,
        correcao: "Corrigido: o gabarito original era D (10⁻⁷). Como 0,0000075 = 7,5 × 10⁻⁶, a ordem de grandeza é 10⁻⁶." },
      { enunciado: "Um valor estimado de 2.500 × 3 é:",
        opcoes: ["6.000", "7.000", "7.500", "8.000", "9.000"], correta: 2 },
      { enunciado: "Qual é a ordem de grandeza de 0,00000089?",
        opcoes: ["10⁻⁶", "10⁻⁷", "10⁻⁸", "10⁻⁹", "10⁻¹⁰"], correta: 1 }
    ]
  },
  {
    id: "M1.5.6",
    titulo: "Potências e raízes em problemas",
    teoria: [
      "Potências aparecem no cálculo de áreas (lado × lado) e volumes (aresta × aresta × aresta).",
      "Raízes aparecem para descobrir a medida do lado a partir da área.",
      "Juros compostos usam potências: um valor inicial cresce por um fator (1 + i) a cada período, e o montante após n períodos é M = C × (1 + i)ⁿ."
    ],
    exemplos: [
      "Área de um quadrado de lado 5: 5² = 25.",
      "Volume de um cubo de aresta 3: 3³ = 27.",
      "Raiz quadrada de 144 = 12, porque 12² = 144.",
      "R$ 1.000 a 10% ao ano por 2 anos: 1.000 × 1,1² = 1.210.",
      "0,00042 em notação científica: 4,2 × 10⁻⁴."
    ],
    exercicios: [
      { enunciado: "Qual é a área de um quadrado de lado 5?",
        opcoes: ["10", "20", "25", "30", "35"], correta: 2 },
      { enunciado: "Qual é o volume de um cubo de aresta 3?",
        opcoes: ["9", "18", "27", "36", "81"], correta: 2 },
      { enunciado: "Qual é a raiz quadrada de 144?",
        opcoes: ["10", "11", "12", "13", "14"], correta: 2 },
      { enunciado: "Um capital de R$ 1.000 rende 10% ao ano, com juros compostos, por 2 anos. Qual é o montante?",
        opcoes: ["1.100", "1.200", "1.210", "1.220", "1.250"], correta: 2 },
      { enunciado: "Qual é a notação científica de 0,00042?",
        opcoes: ["4,2 × 10⁻⁴", "4,2 × 10⁻³", "4,8 × 10⁻⁴", "2,4 × 10⁻⁴", "4,2 × 10⁴"], correta: 0,
        correcao: "Corrigido: as alternativas C (42 × 10⁻⁵) e D (0,42 × 10⁻³) tinham o mesmo valor da resposta certa. Foram substituídas por 4,8 × 10⁻⁴ e 2,4 × 10⁻⁴." },
      { enunciado: "Qual é a área de um quadrado de lado 7?",
        opcoes: ["14", "28", "42", "49", "56"], correta: 3 },
      { enunciado: "Qual é o volume de um cubo de aresta 4?",
        opcoes: ["16", "32", "48", "64", "80"], correta: 3 },
      { enunciado: "Qual é a raiz quadrada de 225?",
        opcoes: ["10", "12", "15", "18", "20"], correta: 2 },
      { enunciado: "Um capital de R$ 1.000 rende 10% ao ano, com juros compostos, por 3 anos. Qual é o montante?",
        opcoes: ["1.100", "1.210", "1.331", "1.400", "1.500"], correta: 2 },
      { enunciado: "Qual é a notação científica de 0,0000075?",
        opcoes: ["7,5 × 10⁻⁶", "7,5 × 10⁻⁵", "7,5 × 10⁻⁸", "5,7 × 10⁻⁶", "7,5 × 10⁶"], correta: 0,
        correcao: "Corrigido: as alternativas C (75 × 10⁻⁷) e D (0,75 × 10⁻⁵) tinham o mesmo valor da resposta certa. Foram substituídas por 7,5 × 10⁻⁸ e 5,7 × 10⁻⁶." }
    ]
  }
];
