// Menu mobile, filtres du portfolio, boutons de copie.
(function () {
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  if (burger && nav) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
  }

  // Filtres : sans JavaScript, les boutons sont de vrais liens vers les archives de taxonomie.
  var grid = document.getElementById('grid');
  if (grid && grid.dataset.all === '1') {
    var state = { mission: 'all', region: 'all' };
    var count = document.getElementById('count');
    var empty = document.getElementById('empty');
    var reset = document.getElementById('reset');
    var buttons = Array.prototype.slice.call(document.querySelectorAll('.fbtn[data-f]'));
    var cards = Array.prototype.slice.call(grid.children).filter(function (c) { return c.classList.contains('card'); });

    var apply = function () {
      var n = 0;
      cards.forEach(function (c) {
        var ok = (state.mission === 'all' || c.dataset.mission === state.mission) &&
                 (state.region === 'all' || c.dataset.region === state.region);
        c.hidden = !ok;
        if (ok) n++;
      });
      count.textContent = n + ' projet' + (n > 1 ? 's' : '') + ' affiché' + (n > 1 ? 's' : '');
      empty.hidden = n !== 0;
      reset.hidden = state.mission === 'all' && state.region === 'all';
      buttons.forEach(function (b) {
        b.setAttribute('aria-pressed', String(state[b.dataset.f] === b.dataset.v));
      });
    };

    buttons.forEach(function (b) {
      b.addEventListener('click', function (e) {
        e.preventDefault();
        state[b.dataset.f] = b.dataset.v;
        apply();
      });
    });
    reset.addEventListener('click', function () { state.mission = 'all'; state.region = 'all'; apply(); });
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
})();
