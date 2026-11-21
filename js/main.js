// Blackwater & Co. — interactions générales
// (vérification d'âge, navigation, animations, citations, newsletter)

// ----- Vérification d'âge (mémorisée pour la session) -----
const gate = document.getElementById('gate');
const unlock = () => { gate.classList.add('hidden'); document.body.classList.remove('locked'); };
try { if (sessionStorage.getItem('bw-age') === 'ok') unlock(); } catch (e) {}
document.getElementById('gate-yes').addEventListener('click', () => {
  try { sessionStorage.setItem('bw-age', 'ok'); } catch (e) {}
  unlock();
});
document.getElementById('gate-no').addEventListener('click', () => {
  document.getElementById('gate-msg').textContent = "Le bon whiskey sait attendre. Revenez-nous plus tard.";
});

// ----- Navigation -----
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll, { passive: true }); onScroll();

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => { burger.classList.toggle('open'); menu.classList.toggle('open'); });
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  burger.classList.remove('open'); menu.classList.remove('open');
}));

// ----- Apparitions au défilement -----
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: .15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ----- Citations presse -----
const quotes = [...document.querySelectorAll('.quote')];
const dots = document.getElementById('dots');
let qi = 0, timer;
const show = i => {
  quotes[qi].classList.remove('active'); dots.children[qi].classList.remove('active');
  qi = i;
  quotes[qi].classList.add('active'); dots.children[qi].classList.add('active');
};
quotes.forEach((_, i) => {
  const b = document.createElement('button');
  b.setAttribute('aria-label', 'Citation ' + (i + 1));
  if (i === 0) b.classList.add('active');
  b.addEventListener('click', () => { show(i); clearInterval(timer); timer = setInterval(next, 6500); });
  dots.appendChild(b);
});
const next = () => show((qi + 1) % quotes.length);
timer = setInterval(next, 6500);

// ----- Newsletter (aucun envoi réel : site statique) -----
document.getElementById('nl-form').addEventListener('submit', e => {
  e.preventDefault();
  const email = document.getElementById('nl-email');
  const msg = document.getElementById('nl-msg');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    msg.textContent = "Cette adresse ne semble pas valide.";
    return;
  }
  msg.textContent = "Go raibh maith agat — bienvenue dans le Cercle.";
  email.value = '';
});
