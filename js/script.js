// Scroll-reveal for sections/cards/steps
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => observer.observe(el));

// Stagger reveal delay for grouped elements (feature cards, steps)
document.querySelectorAll('[data-stagger]').forEach((group) => {
  const children = group.querySelectorAll('.reveal');
  children.forEach((child, i) => {
    child.style.transitionDelay = `${i * 90}ms`;
  });
});
