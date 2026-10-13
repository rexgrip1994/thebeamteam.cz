(function () {
  var root = document.documentElement;
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem('tbt-theme', t); } catch (e) {}
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute('content', t === 'light' ? '#FFFFFF' : '#0B0B0B');
  }
  var tb = document.getElementById('theme-toggle');
  if (tb) tb.addEventListener('click', function () {
    setTheme(root.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });
  var bg = document.getElementById('burger'), nav = document.getElementById('nav');
  if (bg && nav) bg.addEventListener('click', function () {
    var o = nav.classList.toggle('open'); bg.setAttribute('aria-expanded', o);
  });
  document.querySelectorAll('a[data-lang]').forEach(function (a) {
    a.addEventListener('click', function () { try { localStorage.setItem('tbt-lang', a.getAttribute('data-lang')); } catch (e) {} });
  });
})();
