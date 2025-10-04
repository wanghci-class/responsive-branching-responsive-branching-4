var nav = document.querySelector('.main-nav');

if (nav) {
  nav.addEventListener('click', function (ev) {
    var link = ev.target.closest('a');
    if (!link) return;
    ev.preventDefault();
    var theme = link.getAttribute('data-theme'); 
    document.body.classList.remove('theme-dark', 'theme-light');
    if (theme === 'dark') {
      document.body.classList.add('theme-dark');
    } else if (theme === 'light') {
      document.body.classList.add('theme-light');
    }
  });
}
