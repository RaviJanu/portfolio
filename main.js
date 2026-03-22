// ─── Scroll fade-up animations ───
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-up').forEach(el => {
  if (!el.classList.contains('visible')) {
    fadeObserver.observe(el);
  }
});

// ─── Nav active link highlight on scroll ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === '#' + entry.target.id
          ? 'var(--text-primary)' : '';
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => scrollObserver.observe(s));

// ─── Email Modal ───
function openEmailModal() {
  document.getElementById('emailModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('senderName').focus(), 50);
}

function closeEmailModal() {
  document.getElementById('emailModal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeEmailModalOnBackdrop(event) {
  if (event.target === document.getElementById('emailModal')) closeEmailModal();
}

function sendEmail(event) {
  event.preventDefault();
  const name    = document.getElementById('senderName').value.trim();
  const from    = document.getElementById('senderEmail').value.trim();
  const subject = document.getElementById('emailSubject').value.trim();
  const message = document.getElementById('emailMessage').value.trim();

  const body = `Hi Ravi,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${from}`;
  const mailto = `mailto:januraviprakash@outlook.com`
    + `?subject=${encodeURIComponent(subject)}`
    + `&body=${encodeURIComponent(body)}`;

  window.location.href = mailto;
  closeEmailModal();
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeEmailModal();
});

// ─── Project expand / collapse ───
function toggleProject(btn) {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  const detail = btn.closest('.project-expand-wrap').querySelector('.project-detail');
  btn.setAttribute('aria-expanded', String(!expanded));
  detail.setAttribute('aria-hidden', String(expanded));
}
