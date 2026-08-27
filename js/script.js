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

// Live download count, read straight from GitHub's own release-asset counter (no separate backend
// to maintain - GitHub already tracks this accurately per asset). Sums every release's asset(s)
// named VillagePack-Setup.exe, so old versions still count toward the total.
(async () => {
  const el = document.getElementById('download-counter-text');
  if (!el) return;
  try {
    const res = await fetch('https://api.github.com/repos/a1exandrs1m/village-pack-site/releases');
    if (!res.ok) throw new Error('bad response');
    const releases = await res.json();
    let total = 0;
    for (const release of releases) {
      for (const asset of release.assets || []) {
        if (asset.name === 'VillagePack-Setup.exe') total += asset.download_count;
      }
    }
    const word = pluralizeRu(total, ['раз', 'раза', 'раз']);
    el.innerHTML = `Скачано: <span class="download-counter__count">${total.toLocaleString('ru-RU')}</span> ${word}`;
  } catch (e) {
    el.textContent = 'Не удалось загрузить счётчик';
  }
})();

function pluralizeRu(n, forms) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return forms[0];
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20)) return forms[1];
  return forms[2];
}
