(function () {
  "use strict";

  var LETRAS = ["A", "B", "C", "D", "E"];
  var CHAVE = "matematica-enem-progresso";

  var modulos = window.CURSO_MODULOS || [];
  var aulasPorModulo = window.CURSO_AULAS || {};
  var lista = document.getElementById("lista-modulos");
  var main = document.getElementById("conteudo");

  // Progresso fica só neste navegador. Falhas de armazenamento não quebram o site.
  var progresso = {};
  try { progresso = JSON.parse(localStorage.getItem(CHAVE) || "{}") || {}; } catch (e) { progresso = {}; }
  function salvarProgresso() {
    try { localStorage.setItem(CHAVE, JSON.stringify(progresso)); } catch (e) { /* ignora */ }
  }

  function el(tag, classe, texto) {
    var n = document.createElement(tag);
    if (classe) n.className = classe;
    if (texto !== undefined && texto !== null) n.textContent = texto;
    return n;
  }

  function moduloAtualId() {
    var h = (location.hash || "").replace("#", "");
    var m = /^modulo-(\d+)$/.exec(h);
    return m ? Number(m[1]) : null;
  }

  function desenharMenu(ativoId) {
    lista.innerHTML = "";
    modulos.forEach(function (m) {
      var li = el("li");
      var disponivel = m.status === "disponivel";
      var a = el("a", "item-modulo" + (disponivel ? "" : " em-breve"));
      a.href = disponivel ? "#modulo-" + m.id : "#modulo-" + m.id;
      a.setAttribute("aria-current", m.id === ativoId ? "page" : "false");
      a.appendChild(el("span", "num mono", String(m.id).padStart(2, "0")));
      a.appendChild(el("span", "nome", m.titulo));
      if (!disponivel) a.appendChild(el("span", "tag", "em breve"));
      li.appendChild(a);
      lista.appendChild(li);
    });
  }

  function renderInicio() {
    desenharMenu(null);
    main.innerHTML = "";
    var topo = el("header", "topo-inicio");
    topo.appendChild(el("p", "rotulo", "Curso"));
    topo.appendChild(el("h1", "", "Matemática para o ENEM"));
    topo.appendChild(el("p", "resumo", "Vinte módulos de matemática. Cada aula tem explicação com animações e exercícios interativos, sem gabarito à vista. Você sabe se acertou ou errou, e a barra de progresso mostra o seu desempenho."));
    main.appendChild(topo);

    var grade = el("ol", "grade-modulos");
    modulos.forEach(function (m, i) {
      var li = el("li", "cartao-modulo" + (m.status === "disponivel" ? "" : " em-breve"));
      li.style.animationDelay = (i * 40) + "ms";
      var a = el("a", "", "");
      a.href = "#modulo-" + m.id;
      a.appendChild(el("span", "num mono", "Módulo " + m.id));
      a.appendChild(el("span", "titulo-modulo", m.titulo));
      a.appendChild(el("span", "estado", m.status === "disponivel" ? "Disponível" : "Em breve"));
      li.appendChild(a);
      grade.appendChild(li);
    });
    main.appendChild(grade);
    main.focus({ preventScroll: true });
  }

  function renderModulo(id) {
    var modulo = null;
    modulos.forEach(function (m) { if (m.id === id) modulo = m; });
    desenharMenu(id);
    main.innerHTML = "";

    if (!modulo) { renderInicio(); return; }

    var cab = el("header", "cabeca-modulo");
    cab.appendChild(el("p", "rotulo", "Módulo " + modulo.id));
    cab.appendChild(el("h1", "", modulo.titulo));
    main.appendChild(cab);

    var aulas = aulasPorModulo[modulo.id];
    if (modulo.status !== "disponivel" || !aulas || !aulas.length) {
      var aviso = el("div", "em-breve-bloco");
      aviso.appendChild(el("p", "", "Este módulo estará disponível em breve."));
      main.appendChild(aviso);
      return;
    }

    var total = 0;
    aulas.forEach(function (a) { total += a.exercicios.length; });
    var sessao = { total: total, certas: 0, erradas: 0 };

    var placar = montarPlacar(sessao);
    main.appendChild(placar.caixa);

    aulas.forEach(function (aula) {
      main.appendChild(montarAula(aula, modulo.id, sessao, placar));
    });
    placar.atualizar();
    main.focus({ preventScroll: true });
  }

  function montarPlacar(sessao) {
    var caixa = el("div", "placar");
    var texto = el("p", "placar-texto", "");
    var barra = el("div", "placar-barra");
    var fill = el("span", "placar-fill");
    barra.appendChild(fill);
    caixa.appendChild(texto);
    caixa.appendChild(barra);
    return {
      caixa: caixa,
      atualizar: function () {
        var respondidas = sessao.certas + sessao.erradas;
        texto.textContent = "Respondidas " + respondidas + " de " + sessao.total +
          " · Acertos " + sessao.certas + " · Erros " + sessao.erradas;
        fill.style.width = sessao.total ? ((respondidas / sessao.total) * 100) + "%" : "0%";
      }
    };
  }

  function montarAula(aula, moduloId, sessao, placar) {
    var sec = el("section", "aula");
    sec.id = "aula-" + aula.id.replace(/\./g, "-");
    sec.appendChild(el("p", "rotulo", aula.id));
    sec.appendChild(el("h2", "", aula.titulo));

    if (aula.teoria && aula.teoria.length) {
      var t = el("div", "bloco-teoria");
      t.appendChild(el("h3", "subtitulo", "Explicação"));
      aula.teoria.forEach(function (p) { t.appendChild(el("p", "", p)); });
      sec.appendChild(t);
    }

    if (aula.exemplos && aula.exemplos.length) {
      var ex = el("div", "bloco-exemplos");
      ex.appendChild(el("h3", "subtitulo", "Exemplos"));
      var ol = el("ol", "lista-exemplos");
      aula.exemplos.forEach(function (e) { ol.appendChild(el("li", "", e)); });
      ex.appendChild(ol);
      sec.appendChild(ex);
    }

    if (aula.exercicios && aula.exercicios.length) {
      var bloco = el("div", "bloco-exercicios");
      bloco.appendChild(el("h3", "subtitulo", "Exercícios"));
      aula.exercicios.forEach(function (q, i) {
        bloco.appendChild(montarExercicio(q, i, sessao, placar));
      });
      sec.appendChild(bloco);
    }
    return sec;
  }

  // Ordem fixa e pseudoaleatória das alternativas, derivada do enunciado.
  // Assim, a resposta certa não fica sempre na mesma posição.
  function ordemOpcoes(q) {
    var seed = 0;
    for (var c = 0; c < q.enunciado.length; c++) seed = (seed * 31 + q.enunciado.charCodeAt(c)) >>> 0;
    var ordem = q.opcoes.map(function (_, i) { return i; });
    for (var i = ordem.length - 1; i > 0; i--) {
      seed = (seed * 1103515245 + 12345) >>> 0;
      var j = seed % (i + 1);
      var tmp = ordem[i]; ordem[i] = ordem[j]; ordem[j] = tmp;
    }
    return ordem;
  }

  // Exercício sem gabarito e sem dica: a pessoa só vê se acertou ou errou.
  function montarExercicio(q, indice, sessao, placar) {
    var box = el("article", "exercicio");
    box.appendChild(el("p", "numero mono", "Questão " + (indice + 1)));
    box.appendChild(el("p", "enunciado", q.enunciado));
    var lista = el("ol", "opcoes");
    var botoes = [];
    var feedback = el("p", "feedback");
    feedback.setAttribute("aria-live", "polite");

    ordemOpcoes(q).forEach(function (original, i) {
      var texto = q.opcoes[original];
      var li = el("li");
      var b = el("button", "opcao");
      b.type = "button";
      b.appendChild(el("span", "letra mono", LETRAS[i] + ")"));
      b.appendChild(el("span", "texto", texto));
      b.addEventListener("click", function () {
        if (botoes[0].disabled) return;
        botoes.forEach(function (x) { x.disabled = true; });
        b.classList.add("escolhida");
        var acertou = original === q.correta;
        if (acertou) sessao.certas++; else sessao.erradas++;
        feedback.textContent = acertou ? "Você acertou." : "Você errou.";
        feedback.className = "feedback " + (acertou ? "certo" : "errado");
        placar.atualizar();
      });
      botoes.push(b);
      li.appendChild(b);
      lista.appendChild(li);
    });

    box.appendChild(lista);
    box.appendChild(feedback);
    return box;
  }

  function rotear() {
    var id = moduloAtualId();
    if (id === null) renderInicio(); else renderModulo(id);
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  window.addEventListener("hashchange", rotear);
  rotear();
})();
