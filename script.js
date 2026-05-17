document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll offset for sticky navbar (optional improvement)
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);

      if (!targetEl) return;

      e.preventDefault();

      const offset = 70; // approximate navbar height
      const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  });

  // Simple navbar background enhancement on scroll
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.style.background = "rgba(15, 15, 15, 0.98)";
    } else {
      navbar.style.background = "rgba(15, 15, 15, 0.9)";
    }
  });

  // Basic form handling (front-end only demo)
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = form.querySelector('input[type="text"]').value;
      const email = form.querySelector('input[type="email"]').value;
      const message = form.querySelector("textarea").value;

      if (!name || !email) return;

      // Since GitHub Pages has no backend, this is just a demo state
      alert(`Thanks ${name}! Your message has been received.`);

      form.reset();
    });
  }

  // Optional: reveal-on-scroll effect (very light)
  const revealElements = document.querySelectorAll(
    ".feature, .product-card, .client-logos img"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );

  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";
    el.style.transition = "0.6s ease";
    observer.observe(el);
  });
});
