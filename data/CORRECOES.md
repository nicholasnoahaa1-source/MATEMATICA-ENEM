# Correções registradas

Lista do que foi corrigido em relação à transcrição original. Atualizada a cada módulo.

## Módulo 1 (completo: aulas M1.1.1 a M1.7.4)

### Gabarito errado
- **M1.1.1, questão 7:** 3.278 + 4.156 = 7.434, que arredondado para a centena dá 7.400 (alternativa B). O gabarito original marcava C (7.500).
- **M1.1.4, questão 7:** o menor entre 3,14, π, 3,15 e 22/7 é 3,14 (π ≈ 3,14159 é maior). O gabarito original marcava π. Corrigido para 3,14. Mesmo erro repetido na M1.4.5.
- **M1.1.6:** nenhum erro de gabarito.
- **M1.2.6, questão 7:** 327.486 arredondado para o milhar é 327.000, porque 486 < 500. O gabarito original marcava 328.000.
- **M1.4.1, questão 9:** 5/8 = 0,625 e 3/5 = 0,6, então 5/8 > 3/5. O gabarito original marcava 5/8 < 3/5.
- **M1.5.5, questão 8:** 0,0000075 = 7,5 × 10⁻⁶, então a ordem de grandeza é 10⁻⁶. O gabarito original marcava 10⁻⁷ (a errata do arquivo original já apontava isso).
- **M1.7.3, exercício 5:** o texto dava a ordem de grandeza de 8,2 × 10⁵ como 10⁶ (potência de dez mais próxima). O módulo adota o expoente da notação científica (ver M1.2.6), e pelo critério do módulo a resposta é 10⁵.

### Mais de uma alternativa certa (duplicadas ou equivalentes)
- **M1.1.3, questão 9:** 3/6 é igual a 1/2. A alternativa E foi trocada por 1/4.
- **M1.2.1, questão 1:** 612 aparecia em B e C. A alternativa C foi trocada por 602.
- **M1.3.1, questão 6:** 567 também é divisível por 9 (5 + 6 + 7 = 18). A alternativa E foi trocada por 568.
- **M1.3.6, questões 4 a 8 e 10:** as alternativas extras também eram divisíveis pelos dois números do enunciado. Trocadas por 20, 7, 9, 36, 30 e 30, respectivamente. Ver as correções em data/m1/parte-8.js.
- **M1.4.2, questão 3:** 6/15 é igual a 2/5. Trocada por 3/10.
- **M1.4.2, questão 5:** 3/6 é igual a 1/2. Trocada por 1/4.
- **M1.4.3, questão 4:** 0,60 é igual a 0,6. Trocada por 0,36.
- **M1.4.3, questão 7:** 0,30 é igual a 0,3. Trocada por 0,34.
- **M1.5.4:** nove questões tinham alternativas escritas em forma não normalizada, com o mesmo valor da resposta certa (ex.: 42 × 10⁻⁵ = 4,2 × 10⁻⁴). Essas alternativas foram trocadas por valores diferentes.
- **M1.5.6, questões 5 e 10:** mesmo problema da M1.5.4. Trocadas as alternativas C e D.
- **M1.6.3, questões 5 e 7:** 6/15 e 3/6 são iguais a 2/5 e 1/2. Aula inteira substituída por questões novas (ver abaixo).

### Ordem de grandeza: convenção do módulo
- **M1.2.6:** declarado explicitamente que, no curso, a ordem de grandeza de x é o expoente k de x = a × 10ᵏ, com 1 ≤ a < 10. Essa convenção vale para M1.2.6, M1.5.5, M1.5.6 e M1.7.3.

### Repetições (exercícios iguais em aulas diferentes ou dentro da mesma aula)
- **M1.6.1, questões 7 e 8:** repetiam as questões 4 e 5 da mesma aula. Substituídas por questões novas.
- **M1.6.2:** repetia quase toda a M1.1.6. Substituída por 10 questões novas sobre as mesmas propriedades.
- **M1.6.3:** repetia as frações da M1.4.2. Substituída por 10 questões novas.
- **M1.6.4:** repetia questões das aulas M1.6.1 e M1.6.3. Substituída por 10 questões novas.
- **M1.6.5:** repetia questões das aulas M1.6.1 e M1.6.4. Substituída por 10 questões novas.

### Texto da explicação
- **M1.7.4, exemplo 4:** o texto dizia que o desconto líquido não era de 15%. Na verdade, 420/500 = 0,84, ou seja, desconto líquido de 16%. Corrigido.

### Exercícios sem alternativas no original
- **M1.7.2, M1.7.3 e M1.7.4:** os exercícios estavam como perguntas abertas, com resposta e resolução. Foram transformados em múltipla escolha, com alternativas novas. A resposta certa é a calculada na resolução original.

### Pendências que não alterei (a decidir por você)
- **M1.4.5 repete a M1.1.4:** o conteúdo e os exercícios são quase iguais. Mantive as duas aulas como estão no original.
- **Volume do cubo de aresta 3** aparece como exercício em M1.2.4, M1.5.6 e M1.6.1. Não é erro, só repetição entre aulas.
- **Metadados de cada aula** (habilidades, níveis, "interações planejadas", "avaliação de progressão") não foram incluídos no site. São orientações para o autor, não conteúdo para o aluno.

## Ordem do conteúdo (revisão após feedback)

Porcentagem é conteúdo do Módulo 4, e não deve aparecer no Módulo 1. Operações e frações também precisam aparecer só depois de ensinadas.

- **M1.1.1:** removidas multiplicação e divisão (1.250 ÷ 25), porcentagem (42% de 3.500) e a pergunta sobre naturais e inteiros, que só é ensinada na M1.1.2. Agora as questões usam sucessor, maior número de quatro algarismos e menor natural.
- **M1.1.2:** removidas somas e subtrações de inteiros (−6 + 9, −250 + 90, subsolo + andares, variação de temperatura), que são ensinadas na M1.2.1. Ficam perguntas sobre oposto, módulo e ordem na reta.
- **M1.1.3:** removidas operações com frações (1/4 + 1/3, 2/3 × 3/5, 1/2 + 1/4, 3/5 de 40, 5/6 − 1/3). Ficam conversão, comparação e equivalência, que são o assunto da aula.
- **M1.2.6:** removidas a notação científica e a ordem de grandeza com potências de 10, que são ensinadas na M1.5.4 e na M1.5.5. Trocadas por arredondamento (centena e dezena).
- **M1.5.6:** juros compostos trocados por crescimento que dobra ou triplica (colônia de bactérias), que usa as mesmas potências.
- **M1.6.4:** "10% de 350" trocado por "um décimo de 350".
- **M1.7.1:** "35%" trocado por "7/20 da capacidade".
- **M1.7.2 a M1.7.4:** todas as porcentagens trocadas por frações, décimos ou quintos, com as respostas recalculadas.

## Varredura de ordem (segunda revisão do módulo 1)

Conferi conceito por conceito, na ordem do curso, se algo aparecia antes da aula que o ensina.

- **M1.1.1:** a questão de "menor número natural" tinha −1 como alternativa (número negativo antes dos inteiros). Trocado por 2. A expansão de 3.408 usava multiplicação; reescrita com palavras (milhares, centenas, dezenas, unidades).
- **M1.1.2:** a alternativa 1/18 era fração numa aula de inteiros. Trocada por −36.
- **M1.1.4:** usava raiz quadrada sem defini-la. Adicionada a definição na própria aula.
- **M1.2.2:** a palavra "resto" aparecia antes da M1.2.3. Trocada por "não sobra nada".
- **M1.2.4:** a alternativa 12,5 era um decimal antes da M1.4.3. Trocada por 12.

Pontos que aceitei como estão, e que você pode querer mudar:
- **M1.1.6:** é a aula que apresenta as operações e suas propriedades, então usa × e ÷ dentro da própria aula.
- **M1.1.3:** simplificar 18/24 usa 18 = 6 × 3. É fatoração simples, sem MDC.
- **M1.4.6, questão 9:** pede a raiz quadrada de 3 aproximada. Isso tem o mesmo nível de √2 na M1.1.4, mas o cálculo de raízes em geral é da M1.5.3.

## Módulo 2 (completo: aulas M2.1.1 a M2.6.4)

- **31 aulas e 186 exercícios**, com teoria, cinco exemplos e exercícios de múltipla escolha, sem gabarito à vista e sem dicas.
- **Conferência:** refiz as contas de todos os exemplos e exercícios do módulo. Não encontrei gabarito errado.
- **Exercícios abertos transformados em múltipla escolha:** a maioria das aulas do módulo 2 tinha perguntas abertas no original. Criei alternativas com uma única resposta certa, sem repetir valores.
- **Erro frequente** (dicas) não foi incluído nos exercícios, por causa da regra de não mostrar dica.
- **Porcentagem removida** de M2.3.1 ("42,2%", trocado por "0,422") e de M2.6.1 ("75%"), porque porcentagem é conteúdo do módulo 4.
- **Metadados:** a errata do arquivo original aponta que M2.5.1 tem unidade indicada como 2.4. A aula está na unidade 2.5 no site.
- **Ordem das alternativas:** o site embaralha as alternativas de cada questão, de forma fixa (sempre a mesma ordem para a mesma questão). Motivo: no módulo 1, a alternativa C era a resposta certa em 154 das 378 questões, o que entregava o gabarito pela posição.
