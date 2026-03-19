/* ══════════════════════════════════════════
   SYSTEM DE TRADUCTION FR / EN
══════════════════════════════════════════ */
const i18n = {
  fr: {
    /* NAV */
    "nav.home"        : "Accueil",
    "nav.about"       : "À propos",
    "nav.skills"      : "Compétences",
    "nav.projects"    : "Projets",
    "nav.parcours"    : "Parcours",
    "nav.cv"          : "CV",
    "nav.contact"     : "Contact",

    /* INDEX */
    "hero.label"      : "Bienvenue sur mon portfolio",
    "hero.subtitle"   : "Développeur Web & Logiciel",
    "hero.typing"     : '["Étudiant BTS SIO SLAM","Développeur en devenir","Passionné d\'informatique","En recherche d\'alternance"]',
    "hero.cta1"       : "Voir mes projets",
    "hero.cta2"       : "Télécharger mon CV",
    "hero.stat1"      : "Projets réalisés",
    "hero.stat2"      : "Mois de stage",
    "hero.stat3"      : "Technologies",
    "qnav.about"      : "À propos",
    "qnav.about.sub"  : "Mon profil, mes langues, mes loisirs",
    "qnav.skills"     : "Compétences",
    "qnav.skills.sub" : "Mes langages et outils maîtrisés",
    "qnav.projects"   : "Projets",
    "qnav.projects.sub":"Réalisations scolaires et perso",
    "qnav.parcours"   : "Parcours",
    "qnav.parcours.sub":"Formation et expériences pro",

    /* ABOUT */
    "about.title"     : "À propos de moi",
    "about.subtitle"  : "Étudiant en reconversion passionné par le développement",
    "about.bio1"      : "Passionné par l'informatique depuis toujours, j'ai d'abord été autodidacte avant de décider de reprendre mes études. Je suis actuellement en BTS SIO option SLAM à l'AFTEC de Vannes, en reconversion professionnelle.",
    "about.bio2"      : "Pendant ma Licence Mathématiques Informatique à l'UBS, j'ai découvert la programmation orientée objet avec Java, Python, la logique avec SwiProlog, et le développement web. Mon stage à la DSDEN du Morbihan m'a permis d'appliquer ces compétences en situation réelle.",
    "about.bio3"      : "Mon objectif : rejoindre une équipe dynamique en alternance pour développer mes compétences et contribuer à des projets concrets.",
    "about.who"           : "Qui suis-je ?",
    "about.languages.title": "Langues",
    "about.native"        : "Langue maternelle",
    "about.intermediate"  : "Niveau intermédiaire",
    "about.softskills"    : "Savoir-être",
    "about.soft.reactive" : "Réactif",
    "about.soft.proactive": "Proactif",
    "about.soft.ideas"    : "Force de proposition",
    "about.soft.teamwork" : "Esprit d'équipe",
    "about.soft.motivated": "Motivé",
    "about.soft.adaptable": "Adaptable",
    "about.hobbies"           : "Centres d'intérêt",
    "about.badminton.desc"    : "Pratique compétitive — 10 ans",
    "about.piano.desc"        : "10 ans de pratique",
    "about.escalade.desc"     : "3 ans de pratique",
    "about.voyages.desc"      : "Écosse, Espagne, Angleterre, Portugal",
    "about.license"           : "Permis B — véhiculé",
    "about.age"               : "27 ans",

    /* SKILLS */
    "skills.title"    : "Mes compétences",
    "skills.subtitle" : "Langages, frameworks et outils que j'utilise",
    "skills.label"    : "Stack technique",
    "skills.db"       : "Bases de données",
    "skills.tools"    : "Outils & Systèmes",
    "skills.methods"  : "Méthodologies & Environnements",
    "skills.modding"  : "Modding Minecraft",

    /* PROJECTS */
    "projects.title"   : "Mes projets",
    "projects.subtitle": "Réalisations réalisées pendant mes études et en stage",
    "projects.label"   : "Réalisations",
    "filter.all"       : "Tous",
    "filter.web"       : "Web",
    "filter.java"      : "Java",
    "filter.network"   : "Réseau",
    "filter.python"    : "Python",
    "filter.stage"     : "Stage",
    "filter.game"      : "Jeux / Mods",
    "proj.drasi.type"  : "Stage · BTS SIO · DSDEN Morbihan",
    "proj.drasi.desc"  : "Site portfolio de l'équipe académique de Vannes (DSII). HTML/CSS/JS, conforme charte graphique de l'académie de Rennes.",
    "proj.grr.desc"    : "Déploiement et configuration d'un système GRR sur WAMP pour la réservation de ressources informatiques en réseau interne.",
    "proj.nommage.desc": "Outil de nommage automatique des postes informatiques via Grist + Python/PowerShell. Priorité haute — avant c'était fait à la main.",
    "proj.remp.desc"   : "Service Grist pour centraliser les remplacements des enseignants du 1er degré. Remplace les échanges Excel/mail des circonscriptions.",
    "proj.mangatec.desc": "Application web de gestion d'une médiathèque de mangas. CRUD complet, auth, rôles, interface responsive. Projet BTS SIO SLAM.",
    "proj.portfolio.desc": "Ce portfolio ! Multi-pages, responsive, bilingue FR/EN, animations CSS au scroll, zéro framework.",
    "proj.splendor.desc": "Implémentation complète du jeu de société Splendor en Java. Gestion des joueurs, cartes, jetons, nobles et IA simple.",
    "proj.isle.desc"   : "Mod Minecraft inspiré de \"Dragons\" (How to Train Your Dragon). Ajout de dragons apprivoisables, nouvelles îles, mécaniques de vol et de combat.",
    "proj.money.desc"  : "Mod Minecraft ajoutant un système économique complet : monnaie, marchands, transactions entre joueurs et économie in-game.",
    "proj.inprogress"  : "En cours",
    "proj.personal"    : "Perso",
    "tag.team"         : "En équipe",
    "tag.stage.bts"    : "Stage BTS SIO",

    /* PARCOURS */
    "parcours.title"    : "Mon parcours",
    "parcours.subtitle" : "Formation académique et expériences professionnelles",
    "parcours.label"    : "Qui je suis",
    "parcours.edu"      : "📚 Formation",
    "parcours.exp"      : "💼 Expériences",
    "parcours.inprogress": "En cours",
    "parcours.bts.desc" : "Formation en Solutions Logicielles et Applications Métiers. Développement web (Laravel, PHP, HTML/CSS/JS), bases de données, réseaux, méthodes agiles. Stage de 10 semaines cumulées à la DSDEN du Morbihan.",
    "parcours.licence.desc": "Programmation orientée objet Java, algorithmique, Python, SwiProlog, développement web (HTML/CSS/PHP/JS), bases de données SQL. Projets notables : jeu Splendor en Java (projet de 2ème année, en trio, soutenance orale), Jeu de la vie Conway, TP web.",
    "parcours.stage.desc": "10 semaines cumulées. Développement d'un site vitrine institutionnel, déploiement d'un GRR (gestionnaire de réservations), outil de nommage automatique des postes (Grist + Python), service de gestion des remplacements (REMP).",
    "parcours.caisse.desc": "Gestion de rayon, encaissement, relation client. Poste occupé en parallèle de la reprise d'études.",
    "parcours.rayon.desc": "Accueil client, mise en rayon multi-rayons, gestion des imprévus. Expérience de 2 ans en parallèle des études.",
    "parcours.cta.cv"   : "Télécharger mon CV",
    "parcours.cta.contact": "Me contacter",

    /* CONTACT */
    "contact.label"       : "Prenons contact",
    "contact.title"       : "Me contacter",
    "contact.subtitle"    : "Une question, une opportunité d'alternance ? Écrivez-moi directement.",
    "contact.phone"       : "Téléphone",
    "contact.location"    : "Localisation",
    "contact.mobility"    : "Mobilité",
    "contact.availability": "Disponibilité",
    "contact.license"     : "Permis B — véhiculé",
    "contact.available"   : "En recherche d'alternance — contrat éligible aide de 5 000 €",
    "contact.dl.cv"       : "⬇ Télécharger mon CV",
    "form.name"           : "Votre nom",
    "form.company"        : "Entreprise (optionnel)",
    "form.email.label"    : "Votre adresse email",
    "form.subject"        : "Objet",
    "form.message"        : "Message",
    "form.name.ph"        : "Jean Dupont",
    "form.company.ph"     : "Nom de l'entreprise",
    "form.subject.ph"     : "Proposition d'alternance, question...",
    "form.message.ph"     : "Votre message...",
    "form.notice"         : "Ce formulaire ouvre votre client mail (Outlook, Thunderbird, Gmail...) avec les informations pré-remplies.",
    "form.submit"         : "Envoyer le message →",
    "form.success"        : "✓ Votre client mail a été ouvert avec le message pré-rempli.",

    /* CV */
    "cv.title"    : "Mon CV",
    "cv.subtitle" : "Téléchargez mon curriculum vitae complet",
    "cv.download" : "Télécharger le CV (PDF)",
    "cv.view"     : "Voir en plein écran",

    /* COOKIE */
    "cookie.title"  : "Gestion des cookies",
    "cookie.text"   : "Ce site utilise localStorage pour mémoriser vos préférences (langue, cookie). Aucune donnée personnelle n'est collectée ni transmise.",
    "cookie.accept" : "Accepter",
    "cookie.refuse" : "Refuser",

    /* FOOTER */
    "footer.copy"   : "Jean-Baptiste Noblet — Portfolio",
    "footer.made"   : "Fait avec HTML / CSS / JS",
  },

  en: {
    /* NAV */
    "nav.home"        : "Home",
    "nav.about"       : "About",
    "nav.skills"      : "Skills",
    "nav.projects"    : "Projects",
    "nav.parcours"    : "Background",
    "nav.cv"          : "Resume",
    "nav.contact"     : "Contact",

    /* INDEX */
    "hero.label"      : "Welcome to my portfolio",
    "hero.subtitle"   : "Web & Software Developer",
    "hero.typing"     : '["BTS SIO SLAM Student","Aspiring Developer","Tech Enthusiast","Looking for apprenticeship"]',
    "hero.cta1"       : "See my projects",
    "hero.cta2"       : "Download my resume",
    "hero.stat1"      : "Projects completed",
    "hero.stat2"      : "Months of internship",
    "hero.stat3"      : "Technologies",
    "qnav.about"      : "About",
    "qnav.about.sub"  : "My profile, languages, hobbies",
    "qnav.skills"     : "Skills",
    "qnav.skills.sub" : "Languages and tools I master",
    "qnav.projects"   : "Projects",
    "qnav.projects.sub":"Academic and personal projects",
    "qnav.parcours"   : "Background",
    "qnav.parcours.sub":"Education and professional experience",

    /* ABOUT */
    "about.title"     : "About me",
    "about.subtitle"  : "Career-changing student passionate about development",
    "about.bio1"      : "Passionate about computing since day one, I was first self-taught before deciding to go back to school. I'm currently studying BTS SIO SLAM at AFTEC in Vannes, as a career changer.",
    "about.bio2"      : "During my Mathematics & Computer Science degree at UBS, I discovered OOP with Java, Python, logic programming with SwiProlog, and web development. My internship at DSDEN du Morbihan let me apply these skills in a real professional context.",
    "about.bio3"      : "My goal: join a dynamic team as an apprentice to develop my skills and contribute to real-world projects.",
    "about.who"           : "Who am I?",
    "about.languages.title": "Languages",
    "about.native"        : "Native language",
    "about.intermediate"  : "Intermediate level",
    "about.softskills"    : "Soft skills",
    "about.soft.reactive" : "Responsive",
    "about.soft.proactive": "Proactive",
    "about.soft.ideas"    : "Full of ideas",
    "about.soft.teamwork" : "Team player",
    "about.soft.motivated": "Motivated",
    "about.soft.adaptable": "Adaptable",
    "about.hobbies"           : "Interests",
    "about.badminton.desc"    : "Competitive practice — 10 years",
    "about.piano.desc"        : "10 years of practice",
    "about.escalade.desc"     : "3 years of practice",
    "about.voyages.desc"      : "Scotland, Spain, England, Portugal",
    "about.license"           : "Driving license B — own vehicle",
    "about.age"               : "27 years old",

    /* SKILLS */
    "skills.title"    : "My skills",
    "skills.subtitle" : "Languages, frameworks and tools I use",
    "skills.label"    : "Tech stack",
    "skills.db"       : "Databases",
    "skills.tools"    : "Tools & Systems",
    "skills.methods"  : "Methodologies & Environments",
    "skills.modding"  : "Minecraft Modding",

    /* PROJECTS */
    "projects.title"   : "My projects",
    "projects.subtitle": "Projects built during my studies and internship",
    "projects.label"   : "Work",
    "filter.all"       : "All",
    "filter.web"       : "Web",
    "filter.java"      : "Java",
    "filter.network"   : "Network",
    "filter.python"    : "Python",
    "filter.stage"     : "Internship",
    "filter.game"      : "Games / Mods",
    "proj.drasi.type"  : "Internship · BTS SIO · DSDEN Morbihan",
    "proj.drasi.desc"  : "Portfolio website for the academic team of Vannes (DSII). HTML/CSS/JS, compliant with the Rennes academy's graphic charter.",
    "proj.grr.desc"    : "Deployment and configuration of a GRR room-booking system on WAMP for internal network IT resource reservations.",
    "proj.nommage.desc": "Automatic computer naming tool via Grist + Python/PowerShell. High priority — previously done manually.",
    "proj.remp.desc"   : "Grist service to centralise substitute teacher management for primary schools. Replaces Excel/email exchanges between districts.",
    "proj.mangatec.desc": "Web app for managing a manga media library. Full CRUD, authentication, roles, responsive UI. BTS SIO SLAM project.",
    "proj.portfolio.desc": "This portfolio! Multi-page, responsive, bilingual FR/EN, CSS scroll animations, zero framework.",
    "proj.splendor.desc": "Full implementation of the Splendor board game in Java. Player management, cards, tokens, nobles and simple AI.",
    "proj.isle.desc"   : "Minecraft mod inspired by How to Train Your Dragon. Adds tameable dragons, new islands, flight and combat mechanics.",
    "proj.money.desc"  : "Minecraft mod adding a full economy system: currency, merchants, player transactions and in-game economy.",
    "proj.inprogress"  : "In progress",
    "proj.personal"    : "Personal",
    "tag.team"         : "Team project",
    "tag.stage.bts"    : "BTS SIO internship",

    /* PARCOURS */
    "parcours.title"    : "My background",
    "parcours.subtitle" : "Academic education and professional experience",
    "parcours.label"    : "Who I am",
    "parcours.edu"      : "📚 Education",
    "parcours.exp"      : "💼 Experience",
    "parcours.inprogress": "In progress",
    "parcours.bts.desc" : "Training in Software Solutions and Business Applications. Web development (Laravel, PHP, HTML/CSS/JS), databases, networking, agile methods. 10-week cumulative internship at DSDEN du Morbihan.",
    "parcours.licence.desc": "Object-oriented programming with Java, algorithms, Python, SwiProlog, web development (HTML/CSS/PHP/JS), SQL databases. Notable projects: Splendor board game in Java (2nd-year group project, oral defence), Conway's Game of Life, web practicals.",
    "parcours.stage.desc": "10 weeks cumulative. Development of an institutional showcase website, deployment of a GRR room-booking system, automatic computer naming tool (Grist + Python), substitute teacher management service (REMP).",
    "parcours.caisse.desc": "Shelf management, cashiering, customer service. Position held alongside returning to studies.",
    "parcours.rayon.desc": "Customer service, multi-aisle shelf stacking, handling unexpected situations. 2 years of experience alongside studies.",
    "parcours.cta.cv"   : "Download my resume",
    "parcours.cta.contact": "Contact me",

    /* CONTACT */
    "contact.label"       : "Let's connect",
    "contact.title"       : "Contact me",
    "contact.subtitle"    : "A question, an apprenticeship opportunity? Write to me directly.",
    "contact.phone"       : "Phone",
    "contact.location"    : "Location",
    "contact.mobility"    : "Mobility",
    "contact.availability": "Availability",
    "contact.license"     : "Driving license B — own vehicle",
    "contact.available"   : "Looking for apprenticeship — eligible for €5,000 grant",
    "contact.dl.cv"       : "⬇ Download my resume",
    "form.name"           : "Your name",
    "form.company"        : "Company (optional)",
    "form.email.label"    : "Your email address",
    "form.subject"        : "Subject",
    "form.message"        : "Message",
    "form.name.ph"        : "John Smith",
    "form.company.ph"     : "Company name",
    "form.subject.ph"     : "Apprenticeship proposal, question...",
    "form.message.ph"     : "Your message...",
    "form.notice"         : "This form opens your email client (Outlook, Thunderbird, Gmail...) with the information pre-filled.",
    "form.submit"         : "Send message →",
    "form.success"        : "✓ Your email client has been opened with the message pre-filled.",

    /* CV */
    "cv.title"    : "My Resume",
    "cv.subtitle" : "Download my full curriculum vitae",
    "cv.download" : "Download Resume (PDF)",
    "cv.view"     : "View fullscreen",

    /* COOKIE */
    "cookie.title"  : "Cookie settings",
    "cookie.text"   : "This site uses localStorage to save your preferences (language, cookie). No personal data is collected or transmitted.",
    "cookie.accept" : "Accept",
    "cookie.refuse" : "Decline",

    /* FOOTER */
    "footer.copy"   : "Jean-Baptiste Noblet — Portfolio",
    "footer.made"   : "Built with HTML / CSS / JS",
  }
};

(function initTranslate() {
  const btn = document.getElementById('langToggle');
  let lang = localStorage.getItem('lang') || 'fr';

  function apply(l) {
    lang = l;
    localStorage.setItem('lang', l);
    document.documentElement.lang = l;
    if (btn) btn.textContent = l === 'fr' ? '🌐 EN' : '🌐 FR';

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = i18n[l]?.[key];
      if (!val) return;

      /* Special handling for typing phrases */
      if (el.classList.contains('hero-typing-text')) {
        el.dataset.phrases = val;
        return;
      }
      el.textContent = val;
    });

    /* Placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = i18n[l]?.[key];
      if (val) el.setAttribute('placeholder', val);
    });

    /* Update href of CTA buttons that might change language */
    document.querySelectorAll('[data-i18n-href]').forEach(el => {
      const key = el.getAttribute('data-i18n-href');
      const val = i18n[l]?.[key];
      if (val) el.setAttribute('href', val);
    });
  }

  apply(lang);

  if (btn) {
    btn.addEventListener('click', () => apply(lang === 'fr' ? 'en' : 'fr'));
  }
})();
