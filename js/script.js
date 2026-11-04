const themeButton = document.getElementById('theme-toggle');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  themeButton.textContent = isDark ? '☀ Switch to light' : '☾ Switch to dark';
  themeButton.setAttribute('aria-pressed', String(isDark));
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const visitorName = document.getElementById('name').value.trim();
  document.getElementById('form-message').textContent = `Thanks for saying hello, ${visitorName}!`;
});
