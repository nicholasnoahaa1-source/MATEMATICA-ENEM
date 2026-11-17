// Módulo 2, parte 8: aulas M2.4.4, M2.4.5 e M2.4.6 (radicais).
window.AULAS_M2_P8 = [
  {
    id: "M2.4.4",
    titulo: "Operações com radicais",
    teoria: [
      "Radicais semelhantes têm o mesmo índice e o mesmo radicando depois de simplificados. Assim, 2√3 + 5√3 = 7√3, porque √3 funciona como uma unidade comum. Já √2 + √3 não se reduz a uma só raiz.",
      "Antes de somar ou subtrair, simplifique: √8 + √18 = 2√2 + 3√2 = 5√2. A distributiva também vale: √2 (3 + √2) = 3√2 + 2.",
      "Na multiplicação, use a propriedade do produto de raízes: √5 × √20 = √100 = 10. Vale também o produto da soma pela diferença: (√a + √b)(√a − √b) = a − b, para a e b não negativos.",
      "Mantenha formas exatas sempre que possível. Somar aproximações decimais cedo demais pode acumular erro."
    ],
    exemplos: [
      "3√5 + 2√5 = 5√5, porque são radicais semelhantes.",
      "√12 + √27 = 2√3 + 3√3 = 5√3.",
      "4√2 − √8 = 4√2 − 2√2 = 2√2.",
      "(√3 + 2)(√3 − 2) = 3 − 4 = −1.",
      "(2√3 + √2)² = 12 + 4√6 + 2 = 14 + 4√6."
    ],
    exercicios: [
      { enunciado: "Calcule √7 + 4√7.",
        opcoes: ["5√14", "4√14", "5√7", "25", "√35"], correta: 2 },
      { enunciado: "Calcule √20 + √45.",
        opcoes: ["7√5", "5√5", "5√65", "√65", "8√5"], correta: 1 },
      { enunciado: "Calcule 3√3 − √27.",
        opcoes: ["6√3", "0", "3", "−√3", "27"], correta: 1 },
      { enunciado: "Calcule √6 × √24.",
        opcoes: ["√30", "12", "24", "6√2", "48"], correta: 1 },
      { enunciado: "Calcule (√7 + √2)(√7 − √2).",
        opcoes: ["9", "√14", "5", "7", "2√7"], correta: 2 },
      { enunciado: "Calcule (√2 + √8)².",
        opcoes: ["10", "√80", "12", "9", "18"], correta: 4 }
    ]
  },
  {
    id: "M2.4.5",
    titulo: "Racionalização de denominadores",
    teoria: [
      "Racionalizar é transformar uma fração em outra equivalente cujo denominador não tem radical. É uma técnica de simplificação e comparação, não uma condição para a expressão existir.",
      "Para b positivo, multiplicar numerador e denominador por √b é multiplicar por 1. Assim, a/√b = a√b / b.",
      "Quando o denominador é da forma √a + √b ou √a − √b, use o conjugado. A identidade (u + v)(u − v) = u² − v² transforma (√a + √b)(√a − √b) em a − b, com a e b não negativos.",
      "Para raízes cúbicas, multiplique pelo fator que completa um cubo perfeito. Por exemplo, 1/∛4 = ∛2 / 2, porque ∛4 × ∛2 = ∛8 = 2."
    ],
    exemplos: [
      "3/√5 = 3√5 / 5.",
      "7/(2√3) = 7√3 / 6. O fator 2 continua no denominador.",
      "1/(√7 + √2) = (√7 − √2) / (7 − 2) = (√7 − √2) / 5.",
      "4/(3 − √5) = 4(3 + √5) / (9 − 5) = 3 + √5.",
      "2/∛9 = 2∛3 / 3, porque ∛9 × ∛3 = ∛27 = 3."
    ],
    exercicios: [
      { enunciado: "Racionalize 5/√2.",
        opcoes: ["5√2", "√2/5", "5√2/2", "2√5", "5/2"], correta: 2 },
      { enunciado: "Racionalize 3/(4√7).",
        opcoes: ["3√7/4", "3/28", "√7/28", "3√7/28", "21/28"], correta: 3 },
      { enunciado: "Racionalize 1/(√5 − 1).",
        opcoes: ["(√5 − 1)/4", "√5 + 1", "(√5 + 1)/2", "1/4", "(√5 + 1)/4"], correta: 4 },
      { enunciado: "Racionalize 2/(√6 + √2).",
        opcoes: ["(√6 + √2)/2", "2√6", "√6 − √2", "(√6 − √2)/4", "(√6 − √2)/2"], correta: 4 },
      { enunciado: "Racionalize 1/(2 + √3).",
        opcoes: ["2 + √3", "√3 − 2", "1/4", "(2 − √3)/2", "2 − √3"], correta: 4 },
      { enunciado: "Racionalize 3/∛2.",
        opcoes: ["3∛2/2", "3∛2", "3√2/2", "∛4", "3∛4/2"], correta: 4 }
    ]
  },
  {
    id: "M2.4.6",
    titulo: "Radicais em geometria e física",
    teoria: [
      "Raízes aparecem quando procuramos um comprimento a partir de uma área. Um quadrado de área A tem lado √A. Se A está em cm², o lado está em cm.",
      "No triângulo retângulo, o teorema de Pitágoras diz h² = a² + b², em que h é a hipotenusa e a, b são os catetos. Logo, h = √(a² + b²). Para achar um cateto, a = √(h² − b²), desde que h seja maior que b.",
      "A distância entre P(x₁, y₁) e Q(x₂, y₂) é d = √[(x₂ − x₁)² + (y₂ − y₁)²]. As coordenadas precisam estar na mesma unidade.",
      "Quando a questão pede resposta exata, √50 m é 5√2 m. Se pede aproximação, use √2 ≈ 1,414. Não se somam módulos de grandezas perpendiculares."
    ],
    exemplos: [
      "Um quadrado de área 72 cm² tem lado √72 = 6√2 cm, ou aproximadamente 8,49 cm.",
      "Catetos de 6 m e 8 m: h = √(36 + 64) = √100 = 10 m.",
      "Hipotenusa de 13 cm e cateto de 5 cm: o outro cateto é √(169 − 25) = √144 = 12 cm.",
      "Distância entre (1, 2) e (5, 7): d = √(16 + 25) = √41, ou aproximadamente 6,40 metros.",
      "Velocidades perpendiculares de 3 m/s e 4 m/s: o módulo é √(9 + 16) = 5 m/s."
    ],
    exercicios: [
      { enunciado: "Um quadrado tem área de 98 m². Qual é a medida exata do lado?",
        opcoes: ["49 m", "14 m", "7 m", "7√2 m", "√98 / 2 m"], correta: 3 },
      { enunciado: "Os catetos de um triângulo retângulo medem 9 cm e 12 cm. Quanto mede a hipotenusa?",
        opcoes: ["21 cm", "12 cm", "√21 cm", "3√7 cm", "15 cm"], correta: 4 },
      { enunciado: "A hipotenusa de um triângulo retângulo mede 10 m, e um cateto mede 6 m. Quanto mede o outro cateto?",
        opcoes: ["√136 m", "16 m", "4√6 m", "6 m", "8 m"], correta: 4 },
      { enunciado: "Qual é a distância de (0, 0) até (2, 3), em quilômetros?",
        opcoes: ["5 km", "√5 km", "√6 km", "13 km", "√13 km"], correta: 4 },
      { enunciado: "Uma diagonal de um quadrado de lado 5 cm mede quanto?",
        opcoes: ["10 cm", "25 cm", "5 cm", "√10 cm", "5√2 cm"], correta: 4 },
      { enunciado: "Um terreno quadrado tem área de 0,0009 km². Qual é o lado, em metros?",
        opcoes: ["3 m", "300 m", "0,3 m", "30 m", "3.000 m"], correta: 3 }
    ]
  }
];
