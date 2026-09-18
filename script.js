/* ==========================================================================
   1. MENU MOBILE
   ========================================================================== */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('is-open');
  navToggle.classList.toggle('is-active');
  navToggle.setAttribute('aria-expanded', isOpen);
  navToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
});

navMenu.querySelectorAll('.navbar__link').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', false);
  });
});

/* ==========================================================================
   2. RENDU DES PROJETS (depuis data.js)
   Ajouter un projet = ajouter un objet dans PROJECTS (data.js).
   Rien ici n'a besoin d'être modifié.
   ========================================================================== */
const projectsList = document.getElementById('projectsList');

function renderProject(project) {
  const cover = project.cover
    ? `<img class="project-card__cover" src="${project.cover}" alt="Aperçu du projet ${project.name}">`
    : `<div class="project-card__cover--placeholder">Capture à venir</div>`;

  const links = [
    project.live ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="link">Voir le site ↗</a>` : '',
    project.repo ? `<a href="${project.repo}" target="_blank" rel="noopener noreferrer" class="link">Code source ↗</a>` : '',
  ].join('');

  return `
    <article class="project-card reveal">
      <div class="project-card__meta">
        <span><strong>Rôle :</strong> ${project.role}</span>
        <span><strong>Stack :</strong> ${project.stack.join(' · ')}</span>
        <span><strong>Statut :</strong> ${project.status}</span>
      </div>
      ${cover}
      <div class="project-card__body">
        <h3>${project.name}</h3>
        <p class="project-card__tagline">${project.tagline}</p>

        <div class="project-card__section">
          <h4>Le problème</h4>
          <p>${project.problem}</p>
        </div>
        <div class="project-card__section">
          <h4>Contexte</h4>
          <p>${project.context}</p>
        </div>
        <div class="project-card__section">
          <h4>La solution</h4>
          <p>${project.solution}</p>
        </div>
        <div class="project-card__section">
          <h4>Architecture</h4>
          <p>${project.architecture}</p>
        </div>
        <div class="project-card__section">
          <h4>Ce que j'en ai retenu</h4>
          <p>${project.learnings}</p>
        </div>

        ${links ? `<div class="project-card__links">${links}</div>` : ''}
      </div>
    </article>
  `;
}

projectsList.innerHTML = PROJECTS.map(renderProject).join('');

/* ==========================================================================
   3. RENDU DES COMPÉTENCES (depuis data.js)
   ========================================================================== */
const skillsList = document.getElementById('skillsList');
skillsList.innerHTML = SKILLS.map(
  (skill) => `
    <div class="skill-chip reveal">
      <h4 class="mono">${skill.name}</h4>
      <p>${skill.detail}</p>
    </div>
  `
).join('');

/* ==========================================================================
   4. ANIMATION D'APPARITION AU SCROLL
   (s'applique aussi aux cartes injectées dynamiquement ci-dessus)
   ========================================================================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* ==========================================================================
   5. ANNÉE AUTOMATIQUE DANS LE FOOTER
   ========================================================================== */
document.getElementById('year').textContent = new Date().getFullYear();