// Módulo 2, parte 6: aulas M2.3.3, M2.3.4 e M2.3.5 (potências).
window.AULAS_M2_P6 = [
  {
    id: "M2.3.3",
    titulo: "Potência de potência e expoente negativo",
    teoria: [
      "Elevar uma potência a outra potência repete a primeira como fator: (aᵐ)ⁿ = aᵐ·ⁿ. Por exemplo, (2³)² = 2³ · 2³ = 2⁶ = 64. A regra multiplica os expoentes, enquanto o produto de potências de mesma base os soma.",
      "Para a diferente de zero e n natural positivo, define-se a⁻ⁿ = 1/aⁿ. Assim, 2⁻³ = 1/8, e não −8. Um expoente negativo indica inverso, não número negativo.",
      "Se a base é uma fração não nula, o expoente negativo inverte a fração: (2/3)⁻² = (3/2)² = 9/4.",
      "Atenção: (a + b)ⁿ geralmente não é aⁿ + bⁿ. Por exemplo, (2 + 3)² = 25, mas 2² + 3² = 13."
    ],
    exemplos: [
      "(3²)³ = 3⁶ = 729.",
      "5⁻² = 1/5² = 1/25.",
      "(−2)⁻³ = 1/(−2)³ = −1/8.",
      "(3/5)⁻² = (5/3)² = 25/9.",
      "Uma área multiplicada por (1/2)² em cada uma de três etapas tem fator total [(1/2)²]³ = (1/2)⁶ = 1/64."
    ],
    exercicios: [
      { enunciado: "Calcule (2³)².",
        opcoes: ["2⁵", "2⁶", "2⁹", "6", "8"], correta: 1 },
      { enunciado: "Calcule 10⁻³.",
        opcoes: ["−1.000", "−0,001", "0,001", "0,01", "1.000"], correta: 2 },
      { enunciado: "Calcule (−3)⁻².",
        opcoes: ["1/9", "−1/9", "−1/6", "9", "−9"], correta: 0 },
      { enunciado: "Qual é (2/5)⁻²?",
        opcoes: ["4/25", "−4/25", "25/4", "−25/4", "10/4"], correta: 2 },
      { enunciado: "Simplifique (2²)³ ÷ 2⁴.",
        opcoes: ["2", "4", "8", "16", "64"], correta: 1 },
      { enunciado: "Uma quantidade é multiplicada por 1/4 em cada uma de três etapas. Qual é a razão entre o valor inicial e o valor após as três etapas?",
        opcoes: ["4", "16", "64", "1/64", "1/4"], correta: 2 }
    ]
  },
  {
    id: "M2.3.4",
    titulo: "Potências de base 10",
    teoria: [
      "No sistema decimal, cada posição à esquerda vale dez vezes a anterior. Assim, 10⁰ = 1, 10¹ = 10, 10² = 100 e 10³ = 1.000. Para n natural, 10ⁿ é o algarismo 1 seguido de n zeros.",
      "Expoentes negativos indicam inverso: 10⁻¹ = 0,1 e 10⁻² = 0,01. Em geral, 10⁻ⁿ = 1/10ⁿ. Isso não significa número negativo: 10⁻³ é positivo.",
      "Multiplicar por 10ⁿ desloca a vírgula n casas para a direita. Dividir por 10ⁿ desloca n casas para a esquerda.",
      "Notação científica escreve um número positivo como a × 10ⁿ, com 1 ≤ a < 10 e n inteiro. O expoente mede a escala, e o coeficiente preserva os algarismos significativos."
    ],
    exemplos: [
      "10⁴ = 10 × 10 × 10 × 10 = 10.000.",
      "10⁻³ = 1/1.000 = 0,001.",
      "0,00056 = 5,6 × 10⁻⁴, porque a vírgula anda quatro casas para a direita.",
      "(3,2 × 10⁵) ÷ (8 × 10²) = 0,4 × 10³ = 400.",
      "Uma massa de 2,5 × 10⁻³ g dividida por outra de 5 × 10⁻⁶ g dá (2,5 ÷ 5) × 10³ = 500. A primeira é 500 vezes a segunda."
    ],
    exercicios: [
      { enunciado: "Qual é o valor de 10⁵?",
        opcoes: ["100.000", "10.000", "1.000.000", "50.000", "500"], correta: 0 },
      { enunciado: "Escreva 10⁻⁴ na forma decimal.",
        opcoes: ["0,0001", "0,001", "−0,0001", "0,00001", "0,01"], correta: 0 },
      { enunciado: "Qual é a notação científica de 780.000?",
        opcoes: ["7,8 × 10⁵", "78 × 10⁴", "0,78 × 10⁶", "7,8 × 10⁴", "8 × 10⁵"], correta: 0 },
      { enunciado: "Qual representa 0,00092?",
        opcoes: ["9,2 × 10⁻⁴", "9,2 × 10⁴", "92 × 10⁻⁴", "0,92 × 10⁻⁴", "9,2 × 10⁻³"], correta: 0 },
      { enunciado: "Calcule (6 × 10⁷) ÷ (3 × 10³).",
        opcoes: ["2 × 10⁴", "2 × 10⁵", "3 × 10⁴", "2 × 10³", "9 × 10⁴"], correta: 0 },
      { enunciado: "Uma distância de 4 × 10⁸ metros é quantas vezes 2 × 10⁵ metros?",
        opcoes: ["2 × 10³", "2 × 10⁴", "2 × 10⁵", "8 × 10³", "6 × 10³"], correta: 0 }
    ]
  },
  {
    id: "M2.3.5",
    titulo: "Potências em contextos científicos",
    teoria: [
      "Ciências usam potências de dez porque as quantidades podem variar muito. A notação científica permite comparar grandezas sem perder a unidade. Distâncias em metros e durações em segundos não se somam diretamente.",
      "Prefixos frequentes: quilo (k) = 10³, mega (M) = 10⁶, mili (m) = 10⁻³ e micro (µ) = 10⁻⁶. Para multiplicar medidas, multiplicam-se os coeficientes e somam-se os expoentes. Para dividir, dividem-se os coeficientes e subtraem-se os expoentes.",
      "O resultado pode precisar de ajuste para ficar em notação científica: 24 × 10⁵ = 2,4 × 10⁶.",
      "Em modelos de duplicação, Q(n) = Q₀ × 2ⁿ vale apenas se cada etapa realmente dobra a quantidade. A hipótese do modelo precisa ser explícita."
    ],
    exemplos: [
      "3,5 km = 3,5 × 10³ m = 3.500 m.",
      "250 micrômetros = 250 × 10⁻⁶ m = 2,5 × 10⁻⁴ m.",
      "Uma amostra com 4 × 10⁶ partículas por mL, em 3 mL, tem (4 × 10⁶) × 3 = 1,2 × 10⁷ partículas.",
      "Uma superfície de 2 × 10³ m por 5 × 10² m tem área 10 × 10⁵ m² = 1 × 10⁶ m².",
      "Um sensor registra 6 × 10⁻³ s, e outro, 2 × 10⁻⁵ s. A razão é 3 × 10², ou 300: o primeiro intervalo é 300 vezes maior."
    ],
    exercicios: [
      { enunciado: "Converta 7 km em metros.",
        opcoes: ["700 m", "7.000 m", "70 m", "70.000 m", "0,007 m"], correta: 1 },
      { enunciado: "Converta 8 mg em gramas, sabendo que 1 mg = 10⁻³ g.",
        opcoes: ["8 × 10⁻³ g", "8 × 10³ g", "8 × 10⁻⁶ g", "0,8 g", "80 g"], correta: 0 },
      { enunciado: "Calcule (2 × 10⁵) × (3 × 10²).",
        opcoes: ["6 × 10⁷", "5 × 10⁷", "6 × 10¹⁰", "6 × 10⁵", "1,2 × 10⁸"], correta: 0 },
      { enunciado: "Uma concentração é de 5 × 10⁴ unidades por mL. Quantas unidades há em 4 mL?",
        opcoes: ["2 × 10⁴", "2 × 10⁵", "9 × 10⁴", "20 × 10⁸", "1,25 × 10⁴"], correta: 1 },
      { enunciado: "Compare, pela razão, 9 × 10⁻⁴ m e 3 × 10⁻⁶ m.",
        opcoes: ["300", "3.000", "30", "0,3", "3 × 10⁻²"], correta: 0 },
      { enunciado: "Uma quantidade de 125 unidades dobra quatro vezes. Qual é o total final?",
        opcoes: ["500", "1.000", "2.000", "250", "4.000"], correta: 2 }
    ]
  }
];
