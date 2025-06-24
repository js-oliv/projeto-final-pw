
// === Modal de Boas-vindas ===
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.createElement('div');
  modal.id = 'welcome-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Bem-vindo ao nosso site!</h2>
      <p>Explore os conteúdos de Geografia de forma interativa.</p>
      <button id="close-modal">Fechar</button>
    </div>
  `;
  document.body.appendChild(modal);

  document.getElementById('close-modal').addEventListener('click', function() {
    modal.style.display = 'none';
  });
});

// === Menu Mobile Responsivo ===
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', function() {
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('active');
  });
});

// === Animação de Scroll (Fade-in suave) ===
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

// === Rolagem Suave Profissional ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
