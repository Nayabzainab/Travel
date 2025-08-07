// Basic small JS for nav toggle, year, and contact form validation
document.addEventListener('DOMContentLoaded', () => {
  // Show current year in footers
  const years = document.querySelectorAll('[id^="year"]');
  years.forEach(el => el.textContent = new Date().getFullYear());

  // nav toggles (handles multiple pages using ids)
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(t => {
    t.addEventListener('click', () => {
      const nav = t.previousElementSibling; // main-nav before the button in markup
      if (!nav) return;
      nav.style.display = (nav.style.display === 'flex' || nav.style.display === 'block') ? 'none' : 'flex';
    });
  });

  // Contact form validation (contact page)
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      if (!name || !email || !message) {
        formMsg.textContent = 'Please fill in all fields.';
        return;
      }
      // rudimentary email check
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        formMsg.textContent = 'Please enter a valid email.';
        return;
      }
      // Here you'd normally send to server; for demo we'll show success
      formMsg.textContent = 'Thanks — your message has been received!';
      form.reset();
    });
  }
});
