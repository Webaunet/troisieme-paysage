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

  document.addEventListener('error', function (e) {
    if (e.target && e.target.tagName === 'IMG') e.target.remove();
  }, true);
})();
