/* ═══════════════════════════════════════════════════════════════
   statAfrikR Foundation — i18n.js v3
   Système bilingue FR / EN — couverture 100%
   Méthode : attribut lang="fr|en" + data-i18n pour les clés courtes
   ═══════════════════════════════════════════════════════════════ */
'use strict';

/* ── Dictionnaire clés courtes (navigation, boutons, titres) ──── */
const T = {
'nav.fondation':  {fr:'Fondation',         en:'Foundation'},
'nav.gouvernance':{fr:'Gouvernance',        en:'Governance'},
'nav.package':    {fr:'Package',            en:'Package'},
'nav.formation':  {fr:'Formation',          en:'Training'},
'nav.roadmap':    {fr:'Roadmap',            en:'Roadmap'},
'nav.communaute': {fr:'Communauté',         en:'Community'},
'nav.don':        {fr:'Faire un don',       en:'Donate'},
'nav.partenaire': {fr:'Devenir partenaire', en:'Become a partner'},

'hero.badge':  {fr:'Package CRAN officiel · Avril 2026', en:'Official CRAN package · April 2026'},
'hero.btn1':   {fr:'Découvrir statAfrikR',   en:'Discover statAfrikR'},
'hero.btn2':   {fr:'Devenir partenaire INS', en:'Become an NSO partner'},
'hero.stat1l': {fr:'Téléchargements CRAN depuis le 3 avril 2026', en:'CRAN downloads since April 3, 2026'},
'hero.stat2l': {fr:'Fonctions documentées v0.1.0',  en:'Documented functions v0.1.0'},
'hero.stat3l': {fr:'INS partenaires cibles (2028)', en:'Target NSO partners (2028)'},
'hero.stat4l': {fr:'Statisticiens à certifier (2028)', en:'Statisticians to certify (2028)'},

'label.fondation':  {fr:'La Fondation',          en:'The Foundation'},
'label.gouvernance':{fr:'Gouvernance',            en:'Governance'},
'label.package':    {fr:'Le package statAfrikR',  en:'The statAfrikR package'},
'label.formation':  {fr:'Programme de formation', en:'Training programme'},
'label.roadmap':    {fr:'Feuille de route',       en:'Roadmap'},
'label.communaute': {fr:'Communauté',             en:'Community'},
'label.don':        {fr:'Soutenir la mission',    en:'Support the mission'},
'label.partenariat':{fr:'Opportunité unique',     en:'Unique opportunity'},
'label.identite':   {fr:'Identité institutionnelle',en:'Institutional identity'},
'label.structure':  {fr:'Structure juridique',    en:'Legal structure'},
'label.position':   {fr:'Positionnement',         en:'Positioning'},
'label.archi':      {fr:'Architecture technique', en:'Technical architecture'},
'label.decisions':  {fr:'Prises de décision',     en:'Decision-making'},
'label.bailleurs':  {fr:'Partenaires financiers', en:'Financial partners'},
'label.previsionnel':{fr:'Prévisionnel',          en:'Financial forecast'},

'title.fondation':   {fr:'Vision, Mission & Valeurs', en:'Vision, Mission & Values'},
'title.gouvernance': {fr:'Architecture institutionnelle & anti-capture', en:'Institutional architecture & anti-capture'},
'title.package':     {fr:'Premier package R open source dédié aux INS africains', en:'First open source R package for African NSOs'},
'title.formation':   {fr:'Renforcement des capacités statistiques · 10 jours', en:'Statistical capacity building · 10 days'},
'title.roadmap':     {fr:'Roadmap 2026 – 2028', en:'Roadmap 2026 – 2028'},
'title.communaute':  {fr:"Rejoindre l'écosystème statAfrikR", en:'Join the statAfrikR ecosystem'},
'title.don':         {fr:'Faire un don à la statAfrikR Foundation', en:'Donate to the statAfrikR Foundation'},
'title.partenariat': {fr:"Le premier INS qui signe devient l'Institution Fondatrice", en:'The first NSO to sign becomes the Founding Institution'},
'title.vision':      {fr:'Ce que nous voulons bâtir pour l\'Afrique', en:'What we want to build for Africa'},
'title.mission':     {fr:"Notre mission d'intérêt général",  en:'Our general interest mission'},
'title.valeurs':     {fr:'Nos valeurs fondatrices',           en:'Our founding values'},
'title.diff':        {fr:'Ce qui nous différencie',           en:'What differentiates us'},
'title.fonds':       {fr:'Pourquoi un fonds de dotation ?',   en:'Why an endowment fund?'},
'title.cardinal':    {fr:'Principe cardinal',                 en:'Cardinal principle'},
'title.colleges':    {fr:'Les 4 collèges du Conseil',         en:'The 4 Board Colleges'},
'title.organes':     {fr:'Les 6 organes en détail',           en:'The 6 bodies in detail'},
'title.matrix':      {fr:'Matrice des décisions',             en:'Decision matrix'},
'title.separation':  {fr:'Séparation structurelle : bien commun et entités de services', en:'Structural separation: commons and service entities'},
'title.modules':     {fr:'5 modules intégrés — Pipeline end-to-end', en:'5 integrated modules — End-to-end pipeline'},
'title.fonctions':   {fr:'Les 40 fonctions de statAfrikR v0.1.0', en:'The 40 statAfrikR v0.1.0 functions'},
'title.install2':    {fr:'Installation et premier usage',     en:'Installation and first use'},
'title.install':     {fr:'Installer statAfrikR en 30 secondes', en:'Install statAfrikR in 30 seconds'},
'title.phases':      {fr:'2 phases complémentaires',          en:'2 complementary phases'},
'title.livrables':   {fr:'Un livrable produit chaque jour',   en:'One deliverable produced each day'},
'title.certif':      {fr:'3 niveaux de certification statAfrikR', en:'3 statAfrikR certification levels'},
'title.impact':      {fr:'Impact pour votre INS',             en:'Impact for your NSO'},
'title.3phases':     {fr:'3 phases de développement',         en:'3 development phases'},
'title.jalons':      {fr:'11 jalons par trimestre',           en:'11 quarterly milestones'},
'title.ecosys':      {fr:'Écosystème cible 2028',             en:'Target ecosystem 2028'},
'title.rejoindre':   {fr:'4 façons de rejoindre',             en:'4 ways to join'},
'title.contribuer':  {fr:'Comment contribuer à statAfrikR',   en:'How to contribute to statAfrikR'},
'title.comm.stats':  {fr:'La communauté en chiffres',         en:'The community in numbers'},
'title.don.montant': {fr:'Choisissez votre montant',          en:'Choose your amount'},
'title.don.impact':  {fr:'Où va votre contribution',          en:'Where your contribution goes'},
'title.don.ensemble':{fr:'Ensemble pour la statistique africaine', en:'Together for African statistics'},
'title.echange':     {fr:'Un partenariat mutuellement bénéfique', en:'A mutually beneficial partnership'},
'title.processus':   {fr:'7 étapes pour devenir partenaire fondateur', en:'7 steps to become a founding partner'},
'title.docs':        {fr:'5 documents disponibles immédiatement', en:'5 documents available immediately'},
'title.cibles':      {fr:"INS d'Afrique de l'Ouest et Centrale", en:'NSOs of West and Central Africa'},
'title.3piliers':    {fr:'Sources de ressources de la Foundation', en:'Foundation funding sources'},
'title.budget':      {fr:'Budget indicatif 2026–2028',        en:'Indicative budget 2026–2028'},
'title.stats':       {fr:'Téléchargements depuis le 3 avril 2026', en:'Downloads since April 3, 2026'},
'title.news':        {fr:"Suivre l'évolution de statAfrikR",  en:"Follow statAfrikR's development"},
'title.refs':        {fr:'Toutes les ressources statAfrikR',   en:'All statAfrikR resources'},
'title.partenariat.cta':{fr:'Le siège de la Foundation dans votre INS', en:'The Foundation headquarters in your NSO'},
'title.why':         {fr:'Pourquoi statAfrikR est stratégique pour les INS', en:'Why statAfrikR is strategic for NSOs'},
'title.why.sub':     {fr:'Six avantages décisifs pour moderniser la production statistique nationale.', en:'Six decisive advantages to modernise national statistical production.'},
'title.pipeline':    {fr:'Pipeline statistique complet — 5 modules intégrés', en:'Complete statistical pipeline — 5 integrated modules'},

'page.fondation.h1':  {fr:'La statAfrikR Foundation',    en:'The statAfrikR Foundation'},
'page.fondation.lead':{fr:'Fondation panafricaine open source pour la statistique publique africaine', en:'Pan-African open source foundation for African public statistics'},
'page.gouv.h1':       {fr:'Gouvernance de la Foundation', en:'Foundation Governance'},
'page.gouv.lead':     {fr:'Modèle DuckDB Foundation adapté au contexte panafricain — Collégiale, neutre, anti-capture', en:'DuckDB Foundation model adapted to the pan-African context — Collegial, neutral, anti-capture'},
'page.pkg.h1':        {fr:'Le package statAfrikR',        en:'The statAfrikR package'},
'page.pkg.lead':      {fr:'Premier package R open source dédié aux INS africains — 40 fonctions · 5 modules · 237 tests unitaires', en:'First open source R package for African NSOs — 40 functions · 5 modules · 237 unit tests'},
'page.form.h1':       {fr:'Programme régional de formation', en:'Regional Training Programme'},
'page.form.lead':     {fr:"R · Tidyverse · statAfrikR — Appliqués aux données réelles de votre INS", en:"R · Tidyverse · statAfrikR — Applied to your NSO's real data"},
'page.rm.h1':         {fr:'Roadmap 2026–2028', en:'Roadmap 2026–2028'},
'page.rm.lead':       {fr:'Des fondations au standard statistique africain — 3 phases, 11 jalons clés', en:'From foundations to the African statistical standard — 3 phases, 11 key milestones'},
'page.comm.h1':       {fr:'La communauté statAfrikR', en:'The statAfrikR community'},
'page.comm.lead':     {fr:'Statisticiens africains, développeurs R, INS, universités — Rejoignez-nous', en:'African statisticians, R developers, NSOs, universities — Join us'},
'page.don.h1':        {fr:'Soutenir la statAfrikR Foundation', en:'Support the statAfrikR Foundation'},
'page.don.lead':      {fr:'Votre don finance le développement open source, les formations gratuites et les certifications pour les statisticiens africains.', en:'Your donation funds open source development, free training, and certifications for African statisticians.'},
'page.part.h1':       {fr:"Le premier INS qui signe devient l'Institution Fondatrice", en:'The first NSO to sign becomes the Founding Institution'},
'page.part.lead':     {fr:'Le siège de la statAfrikR Foundation sera dans votre INS', en:'The statAfrikR Foundation headquarters will be in your NSO'},
'page.fin.h1':        {fr:'Modèle économique et plan de financement', en:'Economic model and financing plan'},
'page.fin.lead':      {fr:'Hybride · Diversifié · Indépendant · Aucune source unique > 40% des ressources annuelles', en:'Hybrid · Diversified · Independent · No single source > 40% of annual resources'},

'bc.home':        {fr:'Accueil',           en:'Home'},
'bc.fondation':   {fr:'La Fondation',      en:'The Foundation'},
'bc.gouvernance': {fr:'Gouvernance',        en:'Governance'},
'bc.package':     {fr:'Le package',         en:'The package'},
'bc.formation':   {fr:'Formation',          en:'Training'},
'bc.roadmap':     {fr:'Roadmap',            en:'Roadmap'},
'bc.communaute':  {fr:'Communauté',         en:'Community'},
'bc.don':         {fr:'Faire un don',       en:'Donate'},
'bc.partenariat': {fr:'Devenir partenaire', en:'Become a partner'},
'bc.financement': {fr:'Modèle économique',  en:'Economic model'},

'mission.1.title':{fr:'Développer et maintenir', en:'Develop and maintain'},
'mission.2.title':{fr:'Former et certifier',     en:'Train and certify'},
'mission.3.title':{fr:'Harmoniser',             en:'Harmonise'},
'mission.4.title':{fr:'Diffuser et archiver',    en:'Disseminate and archive'},
'mission.5.title':{fr:'Rechercher et innover',  en:'Research and innovate'},
'mission.6.title':{fr:'Accompagner les États',  en:'Support governments'},

'valeur.1.title':{fr:'🏴 Souveraineté', en:'🏴 Sovereignty'},
'valeur.2.title':{fr:'🔍 Transparence', en:'🔍 Transparency'},
'valeur.3.title':{fr:'🤝 Inclusion',    en:'🤝 Inclusion'},
'valeur.4.title':{fr:'📐 Rigueur',      en:'📐 Rigour'},
'valeur.5.title':{fr:'⏳ Pérennité',    en:'⏳ Sustainability'},
'valeur.6.title':{fr:'🌱 Solidarité',   en:'🌱 Solidarity'},

'college.1.title':{fr:'Collège fondateur',           en:"Founders' college"},
'college.2.title':{fr:'Collège INS africains',       en:"African NSOs' college"},
'college.3.title':{fr:'Collège académique',          en:'Academic college'},
'college.4.title':{fr:'Collège experts indépendants',en:"Independent experts' college"},
'college.1.name': {fr:'Dikers Amoko',               en:'Dikers Amoko'},
'college.2.name': {fr:'INS partenaires signataires', en:'Signatory partner NSOs'},
'college.3.name': {fr:'Universitaires africains',    en:'African academics'},
'college.4.name': {fr:'Personnalités qualifiées',    en:'Qualified personalities'},

'pkg.kpi.1':{fr:'Téléchargements CRAN',  en:'CRAN downloads'},
'pkg.kpi.2':{fr:'Fonctions documentées',  en:'Documented functions'},
'pkg.kpi.3':{fr:'Modules intégrés',       en:'Integrated modules'},
'pkg.kpi.4':{fr:'Tests unitaires',        en:'Unit tests'},
'pkg.m1':   {fr:'Collecte',      en:'Collection'},
'pkg.m2':   {fr:'Traitement',    en:'Processing'},
'pkg.m3':   {fr:'Analyse',       en:'Analysis'},
'pkg.m4':   {fr:'Visualisation', en:'Visualisation'},
'pkg.m5':   {fr:'Diffusion',     en:'Dissemination'},

'form.kpi.1':{fr:'Jours de formation',         en:'Training days'},
'form.kpi.2':{fr:'Contenu intensif',            en:'Intensive content'},
'form.kpi.3':{fr:'Participants max / session',  en:'Max participants / session'},
'form.kpi.4':{fr:'Niveaux certification',       en:'Certification levels'},
'form.p1.tag':{fr:'PHASE 1 — 6 jours',          en:'PHASE 1 — 6 days'},
'form.p1.h3': {fr:'Formation technique',        en:'Technical training'},
'form.p2.tag':{fr:'PHASE 2 — 4 jours',          en:'PHASE 2 — 4 days'},
'form.p2.h3': {fr:'Atelier stratégique institutionnel', en:'Strategic institutional workshop'},
'form.cert':  {fr:'Certification statAfrikR',   en:'statAfrikR Certification'},
'form.j1.num':{fr:'JOUR 1', en:'DAY 1'}, 'form.j1.t':{fr:'Introduction R',       en:'Introduction to R'},
'form.j2.num':{fr:'JOUR 2', en:'DAY 2'}, 'form.j2.t':{fr:'Tidyverse I',          en:'Tidyverse I'},
'form.j3.num':{fr:'JOUR 3', en:'DAY 3'}, 'form.j3.t':{fr:'Tidyverse II',         en:'Tidyverse II'},
'form.j4.num':{fr:'JOUR 4', en:'DAY 4'}, 'form.j4.t':{fr:'Analyse',              en:'Analysis'},
'form.j5.num':{fr:'JOUR 5', en:'DAY 5'}, 'form.j5.t':{fr:'statAfrikR',           en:'statAfrikR'},
'form.j6.num':{fr:'JOUR 6', en:'DAY 6'}, 'form.j6.t':{fr:'Cas pratiques',        en:'Practical cases'},
'form.j7.num':{fr:'JOUR 7', en:'DAY 7'}, 'form.j7.t':{fr:'Diagnostic',           en:'Diagnostic'},
'form.j8.num':{fr:'JOUR 8', en:'DAY 8'}, 'form.j8.t':{fr:'Architecture',         en:'Architecture'},
'form.j9.num':{fr:'JOUR 9', en:'DAY 9'}, 'form.j9.t':{fr:'Modules prioritaires', en:'Priority modules'},
'form.j10.num':{fr:'JOUR 10',en:'DAY 10'},'form.j10.t':{fr:'Gouvernance',         en:'Governance'},

'rm.p1.year': {fr:'PHASE 1 · 2026',   en:'PHASE 1 · 2026'},
'rm.p1.title':{fr:'Fondation',         en:'Foundation'},
'rm.p2.year': {fr:'PHASE 2 · 2027',   en:'PHASE 2 · 2027'},
'rm.p2.title':{fr:'Expansion',         en:'Expansion'},
'rm.p3.year': {fr:'PHASE 3 · 2028',   en:'PHASE 3 · 2028'},
'rm.p3.title':{fr:'Institutionnalisation', en:'Institutionalisation'},

'comm.kpi.1':{fr:'Téléchargements CRAN', en:'CRAN downloads'},
'comm.kpi.2':{fr:'GitHub stars',          en:'GitHub stars'},
'comm.kpi.3':{fr:'GitHub forks',          en:'GitHub forks'},
'comm.kpi.4':{fr:'Issues ouvertes',       en:'Open issues'},
'comm.c1.t': {fr:'Discord · Communauté active',          en:'Discord · Active community'},
'comm.c2.t': {fr:'GitHub · Code source ouvert',          en:'GitHub · Open source code'},
'comm.c3.t': {fr:'Vignette CRAN · Démarrage rapide',     en:'CRAN Vignette · Quick start'},
'comm.c4.t': {fr:'Certification statAfrikR',              en:'statAfrikR Certification'},

'don.chip1':{fr:'Contributeur', en:'Contributor'},
'don.chip2':{fr:'Soutien',      en:'Supporter'},
'don.chip3':{fr:'Partenaire',   en:'Partner'},
'don.chip4':{fr:'Bienfaiteur',  en:'Benefactor'},
'don.virement':{fr:'🏦 Virement', en:'🏦 Bank transfer'},

'part.apporte':{fr:'🏛️ Votre INS apporte',  en:'🏛️ Your NSO brings'},
'part.recoit': {fr:'✓ Votre INS reçoit',    en:'✓ Your NSO receives'},
'part.cta1':   {fr:'Devenir partenaire fondateur', en:'Become a founding partner'},
'part.cta2':   {fr:'Contacter Dikers Amoko',       en:'Contact Dikers Amoko'},

'btn.cran':     {fr:'Voir sur le CRAN',         en:'View on CRAN'},
'btn.doc':      {fr:'Documentation pkgdown',    en:'pkgdown documentation'},
'voir.fondation':  {fr:'Voir la page complète Fondation →',      en:'View the full Foundation page →'},
'voir.gouvernance':{fr:'Voir la gouvernance complète — Matrice décisions · Calendrier annuel →', en:'View full governance — Decision matrix · Annual calendar →'},
'voir.pkg':     {fr:'Toutes les 40 fonctions →',                  en:'All 40 functions →'},
'voir.form':    {fr:'Programme détaillé · livrables par jour · certifications →', en:'Full programme · daily deliverables · certifications →'},
'voir.rm':      {fr:'Voir les 11 jalons détaillés + 12 packages prévus →', en:'View 11 detailed milestones + 12 planned packages →'},
'voir.comm':    {fr:'Page communauté complète →',                 en:'Full community page →'},

'footer.col1':{fr:'Sur cette page',   en:'On this page'},
'footer.col2':{fr:'Pages détaillées', en:'Full pages'},
'footer.col3':{fr:'Ressources',       en:'Resources'},
'footer.legal':{fr:'© 2026 statAfrikR Foundation · Fonds de dotation en constitution · GPL-3', en:'© 2026 statAfrikR Foundation · Endowment fund being established · GPL-3'},
};

/* ── Appliquer les traductions ───────────────────────────────── */
function applyLang(lang) {
  const l = lang === 'en' ? 'en' : 'fr';

  /* 1. Attribut lang sur <html> → CSS cache/montre lang="fr|en" */
  document.documentElement.setAttribute('data-lang', l);
  document.documentElement.lang = l;

  /* 2. Éléments avec data-i18n → clés courtes */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = T[key];
    if (!val) return;
    /* data-i18n-html="true" → innerHTML (pour les balises internes) */
    if (el.getAttribute('data-i18n-html') === 'true') {
      el.innerHTML = val[l];
    } else {
      el.textContent = val[l];
    }
  });

  /* 3. Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (T[key]) el.placeholder = T[key][l];
  });

  /* 4. Meta description */
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    const enDesc = metaDesc.getAttribute('data-en');
    const frDesc = metaDesc.getAttribute('data-fr');
    if (l === 'en' && enDesc) metaDesc.content = enDesc;
    else if (frDesc) metaDesc.content = frDesc;
  }

  /* 5. Titre de page */
  const titleEl = document.querySelector('title');
  if (titleEl) {
    const enTitle = titleEl.getAttribute('data-en');
    const frTitle = titleEl.getAttribute('data-fr');
    if (l === 'en' && enTitle) titleEl.textContent = enTitle;
    else if (frTitle) titleEl.textContent = frTitle;
  }
}

/* ── Init ────────────────────────────────────────────────────── */
function initI18n() {
  const stored = localStorage.getItem('saf-lang') || 'fr';

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === stored);
    btn.addEventListener('click', () => {
      const l = btn.getAttribute('data-lang');
      localStorage.setItem('saf-lang', l);
      applyLang(l);
      document.querySelectorAll('.lang-btn').forEach(b =>
        b.classList.toggle('active', b.getAttribute('data-lang') === l));
    });
  });

  applyLang(stored);
}

document.addEventListener('DOMContentLoaded', initI18n);
