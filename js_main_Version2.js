document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // Demo only: You'd send data to a backend here.
      document.getElementById('formMessage').textContent = 'Thank you! We will get back to you soon.';
      form.reset();
    });
  }
});