(function () {
  "use strict";

  // Questões com resolução. Os textos são originais e as respostas foram conferidas.
  var QUESTOES = [
    {
      eixo: "Números e operações",
      enunciado:
        "Um produto custava R$ 200,00. Sofreu um desconto de 15% e, em seguida, um acréscimo de 10% sobre o novo preço. Qual é o preço final?",
      opcoes: ["R$ 185,00", "R$ 187,00", "R$ 190,00", "R$ 170,00", "R$ 192,00"],
      correta: 1,
      resolucao:
        "Após o desconto: 200 × 0,85 = 170. Após o acréscimo de 10% sobre 170: 170 × 1,10 = 187. " +
        "Atenção ao erro comum: o acréscimo de 10% incide sobre o valor já descontado (R$ 170,00), e não sobre os R$ 200,00 originais."
    },
    {
      eixo: "Álgebra e funções",
      enunciado:
        "Considere a função f(x) = 2x − 6. Qual é o valor de x para o qual f(x) = 0?",
      opcoes: ["−3", "2", "3", "6", "−6"],
      correta: 2,
      resolucao:
        "Para achar a raiz, igualamos a função a zero: 2x − 6 = 0. Somando 6 dos dois lados, 2x = 6, e dividindo por 2, x = 3. " +
        "Na função do 1º grau, a raiz é o ponto onde a reta cruza o eixo x."
    },
    {
      eixo: "Estatística e probabilidade",
      enunciado:
        "Um dado comum, de seis faces numeradas de 1 a 6, é lançado uma vez. Qual é a probabilidade de sair um número primo?",
      opcoes: ["1/6", "1/3", "1/2", "2/3", "5/6"],
      correta: 2,
      resolucao:
        "Os números primos entre 1 e 6 são 2, 3 e 5, ou seja, três casos favoráveis. Como são seis resultados igualmente prováveis, " +
        "a probabilidade é 3/6 = 1/2. Vale lembrar que o número 1 não é primo."
    }
  ];

  var indice = 0;
  var respondida = false;

  var el = {
    contador: document.getElementById("contador"),
    eixo: document.getElementById("eixo-nome"),
    enunciado: document.getElementById("enunciado"),
    opcoes: document.getElementById("opcoes"),
    feedback: document.getElementById("feedback"),
    titulo: document.getElementById("feedback-titulo"),
    resolucao: document.getElementById("resolucao"),
    anterior: document.getElementById("anterior"),
    proxima: document.getElementById("proxima")
  };

  if (!el.opcoes) return;

  var LETRAS = ["A", "B", "C", "D", "E"];

  function montar() {
    var q = QUESTOES[indice];
    respondida = false;

    el.contador.textContent = (indice + 1) + " / " + QUESTOES.length;
    el.eixo.textContent = q.eixo;
    el.enunciado.textContent = q.enunciado;
    el.feedback.hidden = true;
    el.titulo.textContent = "";
    el.resolucao.textContent = "";

    el.opcoes.innerHTML = "";
    q.opcoes.forEach(function (texto, i) {
      var li = document.createElement("li");
      var botao = document.createElement("button");
      botao.type = "button";
      botao.className = "opcao";
      botao.dataset.indice = String(i);

      var letra = document.createElement("span");
      letra.className = "letra";
      letra.textContent = LETRAS[i] + ")";

      var t = document.createElement("span");
      t.className = "texto";
      t.textContent = texto;

      botao.appendChild(letra);
      botao.appendChild(t);
      botao.addEventListener("click", function () { responder(i); });
      li.appendChild(botao);
      el.opcoes.appendChild(li);
    });

    el.anterior.disabled = indice === 0;
    el.proxima.disabled = indice === QUESTOES.length - 1;
  }

  function responder(escolhida) {
    if (respondida) return;
    respondida = true;

    var q = QUESTOES[indice];
    var botoes = el.opcoes.querySelectorAll(".opcao");

    botoes.forEach(function (b) {
      b.disabled = true;
      var i = Number(b.dataset.indice);
      if (i === q.correta) b.classList.add("correta");
      else if (i === escolhida) b.classList.add("errada");
    });

    var acertou = escolhida === q.correta;
    el.titulo.textContent = acertou
      ? "Certo. Veja como se chega lá:"
      : "Não foi dessa vez. A alternativa correta é " + LETRAS[q.correta] + ".";
    el.resolucao.textContent = q.resolucao;
    el.feedback.hidden = false;
  }

  el.anterior.addEventListener("click", function () {
    if (indice > 0) { indice--; montar(); }
  });

  el.proxima.addEventListener("click", function () {
    if (indice < QUESTOES.length - 1) { indice++; montar(); }
  });

  montar();
})();
