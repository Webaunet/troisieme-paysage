// Menu mobile, filtres du portfolio, boutons de copie
(function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
  }

  var grid = document.getElementById('grid');
  if (grid) {
    var state = { type: 'all', region: 'all' };
    var count = document.getElementById('count');
    var empty = document.getElementById('empty');
    var reset = document.getElementById('reset');
    var buttons = Array.prototype.slice.call(document.querySelectorAll('.fbtn'));
    var cards = Array.prototype.slice.call(grid.children);

    var apply = function () {
      var n = 0;
      cards.forEach(function (c) {
        var ok = (state.type === 'all' || c.dataset.type === state.type) &&
                 (state.region === 'all' || c.dataset.region === state.region);
        c.hidden = !ok;
        if (ok) n++;
      });
      count.textContent = n + ' projet' + (n > 1 ? 's' : '') + ' affiché' + (n > 1 ? 's' : '');
      empty.hidden = n !== 0;
      reset.hidden = state.type === 'all' && state.region === 'all';
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(state[b.dataset.f] === b.dataset.v));
      });
    };

    buttons.forEach(function (b) {
      b.addEventListener('click', function () { state[b.dataset.f] = b.dataset.v; apply(); });
    });
    reset.addEventListener('click', function () { state.type = 'all'; state.region = 'all'; apply(); });
    apply();
  }

  Array.prototype.forEach.call(document.querySelectorAll('[data-copy]'), function (b) {
    b.addEventListener('click', function () {
      var done = function () { b.textContent = 'Copié'; setTimeout(function () { b.textContent = 'Copier'; }, 1600); };
      try {
        navigator.clipboard.writeText(b.dataset.copy).then(done, function () { b.textContent = 'Sélectionnez le texte'; });
      } catch (e) { b.textContent = 'Sélectionnez le texte'; }
    });
  });

  /* Formulaire de contact : validation, puis envoi vers le service configuré (data-endpoint) ou ouverture du client mail. */
  var cf = document.getElementById('cform');
  if (cf) {
    var st = document.getElementById('cform-status');
    var say = function (t, bad) { st.hidden = false; st.textContent = t; st.classList.toggle('is-error', !!bad); };
    var msgs = { nom: 'Indiquez votre nom.', email: 'Indiquez une adresse e-mail valide.', message: 'Écrivez votre message.', consent: 'Merci de cocher cette case pour envoyer le message.' };
    cf.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = cf.elements, ok = true, first = null;
      ['nom', 'email', 'message', 'consent'].forEach(function (k) {
        var el = f[k], bad = k === 'consent' ? !el.checked : k === 'email' ? !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim()) : !el.value.trim();
        var out = cf.querySelector('[data-err="' + k + '"]');
        el.setAttribute('aria-invalid', bad ? 'true' : 'false');
        if (out) out.textContent = bad ? msgs[k] : '';
        if (bad) { ok = false; first = first || el; }
      });
      if (!ok) { first.focus(); return; }
      if (f.website.value) return;
      var data = { nature: f.nature.value, nom: f.nom.value.trim(), email: f.email.value.trim(), structure: f.structure.value.trim(), tel: f.tel.value.trim(), message: f.message.value.trim() };
      var ep = cf.dataset.endpoint;
      if (ep) {
        say('Envoi en cours…');
        fetch(ep, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify(data) })
          .then(function (r) { if (!r.ok) throw 0; cf.reset(); say('Merci, votre message est bien parti. L’Atelier vous répondra rapidement.'); })
          .catch(function () { say('L’envoi a échoué. Écrivez-nous directement à ' + cf.dataset.to + '.', true); });
      } else {
        var body = data.message + '\n\n— ' + data.nom + (data.structure ? ', ' + data.structure : '') + (data.tel ? '\nTéléphone : ' + data.tel : '') + '\nE-mail : ' + data.email;
        window.location.href = 'mailto:' + cf.dataset.to + '?subject=' + encodeURIComponent('Demande : ' + data.nature) + '&body=' + encodeURIComponent(body);
        say('Votre messagerie s’ouvre avec le message prêt à envoyer. Sinon, copiez l’adresse ' + cf.dataset.to + '.');
      }
    });
  }

  document.addEventListener('error', function (e) {
    if (e.target && e.target.tagName === 'IMG') e.target.remove();
  }, true);
})();
