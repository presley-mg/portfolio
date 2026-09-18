/* ==========================================================================
   DONNÉES DU PORTFOLIO
   Ce fichier centralise tout ce qui est amené à changer : projets et
   compétences. Pour ajouter un nouveau projet plus tard, il suffit
   d'ajouter un objet dans le tableau PROJECTS ci-dessous — aucune autre
   partie du code n'a besoin d'être modifiée.
   ========================================================================== */

const PROJECTS = [
  {
    id: "brech-academy",
    name: "Brech Academy",
    tagline: "Portail institutionnel & système de gestion des inscriptions",
    role: "Développeur — conception & développement",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap 5"],
    status: "En migration : version PHP natif → Laravel",
    cover: "assets/img/brech-dashboard (1).jpg",
    live: "https://km-team.kesug.com/?i=1",
    repo: "", // à compléter si le dépôt est public
    problem:
      "Une école supérieure avec 18 filières avait besoin de centraliser ses inscriptions en ligne : jusque-là, le suivi des candidatures, des étudiants et des filières se faisait sans outil unifié.",
    context:
      "Le site existait déjà en PHP natif (PDO). Le projet a évolué en deux temps : d'abord un travail de finition visuelle sur la version PHP pour une présentation devant jury (carrousel vidéo 3D, effets glassmorphism, fiche de synthèse imprimable), puis une migration progressive vers Laravel pour structurer le code sur le long terme.",
    solution:
      "Un site public complet (accueil, catalogue de 18 filières, formulaire d'inscription multi-étapes avec upload de documents, contact avec carte intégrée) couplé à un back-office : tableau de bord avec statistiques et graphiques, gestion des étudiants, des inscriptions (en attente / actives / rejetées) et des filières, gestion des utilisateurs avec rôles (administrateur / scolarité) et mots de passe hashés en bcrypt.",
    architecture:
      "Modélisation relationnelle autour de quatre entités clés : Étudiants, Filières, Inscriptions, Utilisateurs — une inscription relie un étudiant à une filière et à un niveau (CQP 9 mois / BTS 2 ans), avec un statut de traitement. Les rôles utilisateurs déterminent l'accès aux fonctionnalités d'administration.",
    learnings:
      "Comprendre concrètement ce que Laravel automatise (routing, ORM, authentification) après l'avoir géré à la main en PHP natif — la migration a mis en évidence les frictions réelles d'un projet qui grandit sans framework au départ.",
  },
  {
    id: "caridad",
    name: "Association Caridad",
    tagline: "Site vitrine pour une association d'aide aux orphelins",
    role: "Développeur — conception & développement",
    stack: ["HTML", "CSS", "JavaScript", "PHP"],
    status: "Livré",
    cover: "assets/img/caridad-cover.jpg",
    live: "https://presley-mg.github.io/Association_Caridad/", // à compléter si le site est en ligne
    repo: "",
    problem:
      "Une association venant en aide à des orphelins avait besoin d'une présence en ligne pour présenter ses actions et faciliter le contact avec des donateurs ou bénévoles potentiels.",
    context:
      "Projet associatif, pensé pour être simple à maintenir par l'association elle-même une fois livré.",
    solution:
      "Un site vitrine avec galerie de photos des actions menées, présentation de la mission, et un formulaire de contact fonctionnel connecté par e-mail.",
    architecture:
      "Structure de page statique avec un traitement PHP côté serveur pour l'envoi du formulaire de contact.",
    learnings:
      "Concevoir pour un public non technique : l'association devait pouvoir comprendre et, à terme, actualiser certains contenus sans dépendre en permanence du développeur.",
  },
];

const SKILLS = [
  { name: "HTML", detail: "Structure sémantique et accessible" },
  { name: "CSS", detail: "Mise en page, responsive, animations" },
  { name: "JavaScript", detail: "Logique côté client, interactivité" },
  { name: "PHP", detail: "PDO, MySQL, logique serveur" },
  { name: "Laravel", detail: "Routing, ORM, authentification" },
  { name: "Git / GitHub", detail: "Versionnement, collaboration" },
  { name: "Bases de données", detail: "Conception relationnelle, MCD" },
  { name: "VS Code / WAMP", detail: "Environnement de développement local" },
];