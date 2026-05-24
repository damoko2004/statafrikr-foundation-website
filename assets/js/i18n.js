/* ═══════════════════════════════════════════════════════════════
   statAfrikR Foundation — i18n.js v2
   Traduction FR/EN complète et professionnelle
   Système : data-i18n → lecture + application au chargement
   ═══════════════════════════════════════════════════════════════ */
'use strict';

/* ── Dictionnaire complet FR / EN ────────────────────────────── */
const T = {
/* Navigation */
'nav.fondation':    { fr:'Fondation',          en:'Foundation' },
'nav.gouvernance':  { fr:'Gouvernance',         en:'Governance' },
'nav.package':      { fr:'Package',             en:'Package' },
'nav.formation':    { fr:'Formation',           en:'Training' },
'nav.roadmap':      { fr:'Roadmap',             en:'Roadmap' },
'nav.communaute':   { fr:'Communauté',          en:'Community' },
'nav.don':          { fr:'Faire un don',        en:'Donate' },
'nav.partenaire':   { fr:'Devenir partenaire',  en:'Become a partner' },

/* Hero */
'hero.badge':  { fr:'Package CRAN officiel · Avril 2026', en:'Official CRAN package · April 2026' },
'hero.title':  { fr:'statAfrikR Foundation',              en:'statAfrikR Foundation' },
'hero.sub':    { fr:'Foundation for African Statistical Innovation & Open Data', en:'Foundation for African Statistical Innovation & Open Data' },
'hero.quote':  { fr:'« statAfrikR est conçu par et pour les statisticiens africains. »', en:'"statAfrikR is designed by and for African statisticians."' },
'hero.btn1':   { fr:'Découvrir statAfrikR',   en:'Discover statAfrikR' },
'hero.btn2':   { fr:'Devenir partenaire INS', en:'Become an NSO partner' },
'hero.stat1l': { fr:'Téléchargements CRAN depuis le 3 avril 2026', en:'CRAN downloads since April 3, 2026' },
'hero.stat2l': { fr:'Fonctions documentées v0.1.0',                en:'Documented functions v0.1.0' },
'hero.stat3l': { fr:'INS partenaires cibles (2028)',               en:'Target NSO partners (2028)' },
'hero.stat4l': { fr:'Statisticiens à certifier (2028)',            en:'Statisticians to certify (2028)' },

/* Labels sections */
'label.fondation':   { fr:'La Fondation',             en:'The Foundation' },
'label.gouvernance': { fr:'Gouvernance',               en:'Governance' },
'label.package':     { fr:'Le package statAfrikR',     en:'The statAfrikR package' },
'label.formation':   { fr:'Programme de formation',    en:'Training programme' },
'label.roadmap':     { fr:'Feuille de route',          en:'Roadmap' },
'label.communaute':  { fr:'Communauté',                en:'Community' },
'label.don':         { fr:'Soutenir la mission',       en:'Support the mission' },
'label.partenariat': { fr:'Opportunité unique',        en:'Unique opportunity' },
'label.identite':    { fr:'Identité institutionnelle', en:'Institutional identity' },
'label.structure':   { fr:'Structure juridique',       en:'Legal structure' },
'label.position':    { fr:'Positionnement',            en:'Positioning' },
'label.decisions':   { fr:'Prises de décision',        en:'Decision-making' },
'label.modele':      { fr:'Modèle DuckDB Foundation',  en:'DuckDB Foundation model' },
'label.archi':       { fr:'Architecture technique',    en:'Technical architecture' },
'label.stats':       { fr:'Données live',              en:'Live data' },
'label.actu':        { fr:'Dernières actualités',      en:'Latest news' },
'label.renfo':       { fr:'Renforcement des capacités',en:'Capacity building' },
'label.previsionnel':{ fr:'Prévisionnel',              en:'Financial forecast' },
'label.piliers':     { fr:'3 piliers de financement',  en:'3 funding pillars' },
'label.bailleurs':   { fr:'Partenaires financiers',    en:'Financial partners' },

/* Titres sections */
'title.fondation':   { fr:'Vision, Mission & Valeurs',    en:'Vision, Mission & Values' },
'title.gouvernance': { fr:'Architecture institutionnelle & anti-capture', en:'Institutional architecture & anti-capture' },
'title.package':     { fr:'Premier package R open source dédié aux INS africains', en:'First open source R package for African NSOs' },
'title.formation':   { fr:'Renforcement des capacités statistiques · 10 jours', en:'Statistical capacity building · 10 days' },
'title.roadmap':     { fr:'Roadmap 2026 – 2028',          en:'Roadmap 2026 – 2028' },
'title.communaute':  { fr:'Rejoindre l\'écosystème statAfrikR', en:'Join the statAfrikR ecosystem' },
'title.don':         { fr:'Faire un don à la statAfrikR Foundation', en:'Donate to the statAfrikR Foundation' },
'title.partenariat': { fr:'Le premier INS qui signe devient l\'Institution Fondatrice', en:'The first NSO to sign becomes the Founding Institution' },
'title.install':     { fr:'Installer statAfrikR en 30 secondes', en:'Install statAfrikR in 30 seconds' },
'title.install.sub': { fr:'Disponible sur le CRAN officiel · Open source · GPL-3 · Hors ligne', en:'Available on the official CRAN · Open source · GPL-3 · Offline' },
'title.why':         { fr:'Pourquoi statAfrikR est stratégique pour les INS', en:'Why statAfrikR is strategic for NSOs' },
'title.why.sub':     { fr:'Six avantages décisifs pour moderniser la production statistique nationale.', en:'Six decisive advantages to modernise national statistical production.' },
'title.pipeline':    { fr:'Pipeline statistique complet — 5 modules intégrés', en:'Complete statistical pipeline — 5 integrated modules' },
'title.pipeline.sub':{ fr:'Des données brutes aux livrables publiables et diffusables, en un seul écosystème cohérent.', en:'From raw data to publishable deliverables, in a single coherent ecosystem.' },
'title.stats':       { fr:'<span class="cran-title-count">510+</span> téléchargements depuis le 3 avril 2026', en:'<span class="cran-title-count">510+</span> downloads since April 3, 2026' },
'title.stats.sub':   { fr:'Sans budget promotionnel. Source : RStudio CRAN mirror · cranlogs.r-pkg.org', en:'Without a promotional budget. Source: RStudio CRAN mirror · cranlogs.r-pkg.org' },
'title.news':        { fr:'Suivre l\'évolution de statAfrikR', en:'Follow statAfrikR\'s development' },
'title.partenariat.cta':{ fr:'Le siège de la Foundation dans votre INS', en:'The Foundation headquarters in your NSO' },
'title.refs':        { fr:'Toutes les ressources statAfrikR', en:'All statAfrikR resources' },
'title.vision':      { fr:'Ce que nous voulons bâtir pour l\'Afrique', en:'What we want to build for Africa' },
'title.mission':     { fr:'Notre mission d\'intérêt général', en:'Our general interest mission' },
'title.valeurs':     { fr:'Nos valeurs fondatrices', en:'Our founding values' },
'title.diff':        { fr:'Ce qui nous différencie', en:'What differentiates us' },
'title.fonds':       { fr:'Pourquoi un fonds de dotation ?', en:'Why an endowment fund?' },
'title.cardinal':    { fr:'Principe cardinal', en:'Cardinal principle' },
'title.colleges':    { fr:'Les 4 collèges du Conseil', en:'The 4 Board Colleges' },
'title.organes':     { fr:'Les 6 organes en détail', en:'The 6 bodies in detail' },
'title.matrix':      { fr:'Matrice des décisions', en:'Decision matrix' },
'title.separation':  { fr:'Séparation bien commun / entités de services', en:'Commons / service entities separation' },
'title.modules':     { fr:'5 modules intégrés — Pipeline end-to-end', en:'5 integrated modules — End-to-end pipeline' },
'title.fonctions':   { fr:'Les 40 fonctions de statAfrikR v0.1.0', en:'The 40 statAfrikR v0.1.0 functions' },
'title.install2':    { fr:'Installation et premier usage', en:'Installation and first use' },
'title.phases':      { fr:'2 phases complémentaires', en:'2 complementary phases' },
'title.livrables':   { fr:'Un livrable produit chaque jour', en:'One deliverable produced each day' },
'title.certif':      { fr:'3 niveaux de certification statAfrikR', en:'3 statAfrikR certification levels' },
'title.impact':      { fr:'Impact pour votre INS', en:'Impact for your NSO' },
'title.3phases':     { fr:'3 phases de développement', en:'3 development phases' },
'title.jalons':      { fr:'11 jalons par trimestre', en:'11 quarterly milestones' },
'title.ecosys':      { fr:'Écosystème cible 2028', en:'Target ecosystem 2028' },
'title.rejoindre':   { fr:'4 façons de rejoindre', en:'4 ways to join' },
'title.contribuer':  { fr:'Comment contribuer à statAfrikR', en:'How to contribute to statAfrikR' },
'title.comm.stats':  { fr:'La communauté en chiffres', en:'The community in numbers' },
'title.don.montant': { fr:'Choisissez votre montant', en:'Choose your amount' },
'title.don.impact':  { fr:'Où va votre contribution', en:'Where your contribution goes' },
'title.don.ensemble':{ fr:'Ensemble pour la statistique africaine', en:'Together for African statistics' },
'title.echange':     { fr:'Un partenariat mutuellement bénéfique', en:'A mutually beneficial partnership' },
'title.processus':   { fr:'7 étapes pour devenir partenaire fondateur', en:'7 steps to become a founding partner' },
'title.docs':        { fr:'5 documents disponibles immédiatement', en:'5 documents available immediately' },
'title.cibles':      { fr:'INS d\'Afrique de l\'Ouest et Centrale', en:'NSOs of West and Central Africa' },
'title.3piliers':    { fr:'Sources de ressources de la Foundation', en:'Foundation funding sources' },
'title.budget':      { fr:'Budget indicatif 2026–2028', en:'Indicative budget 2026–2028' },

/* Pages hero intérieures */
'page.fondation.h1':   { fr:'La statAfrikR Foundation',   en:'The statAfrikR Foundation' },
'page.fondation.lead': { fr:'Fondation panafricaine open source pour la statistique publique africaine', en:'Pan-African open source foundation for African public statistics' },
'page.gouv.h1':        { fr:'Gouvernance de la Foundation', en:'Foundation Governance' },
'page.gouv.lead':      { fr:'Modèle DuckDB Foundation adapté au contexte panafricain — Collégiale, neutre, anti-capture', en:'DuckDB Foundation model adapted to the pan-African context — Collegial, neutral, anti-capture' },
'page.pkg.h1':         { fr:'Le package statAfrikR',        en:'The statAfrikR package' },
'page.pkg.lead':       { fr:'Premier package R open source dédié aux INS africains — 40 fonctions · 5 modules · 237 tests unitaires', en:'First open source R package for African NSOs — 40 functions · 5 modules · 237 unit tests' },
'page.form.h1':        { fr:'Programme régional de formation', en:'Regional Training Programme' },
'page.form.lead':      { fr:'R · Tidyverse · statAfrikR — Appliqués aux données réelles de votre INS', en:'R · Tidyverse · statAfrikR — Applied to your NSO\'s real data' },
'page.rm.h1':          { fr:'Roadmap 2026–2028',              en:'Roadmap 2026–2028' },
'page.rm.lead':        { fr:'Des fondations au standard statistique africain — 3 phases, 11 jalons clés', en:'From foundations to the African statistical standard — 3 phases, 11 key milestones' },
'page.comm.h1':        { fr:'La communauté statAfrikR',        en:'The statAfrikR community' },
'page.comm.lead':      { fr:'Statisticiens africains, développeurs R, INS, universités — Rejoignez-nous', en:'African statisticians, R developers, NSOs, universities — Join us' },
'page.don.h1':         { fr:'Soutenir la statAfrikR Foundation', en:'Support the statAfrikR Foundation' },
'page.don.lead':       { fr:'Votre don finance le développement open source, les formations gratuites et les certifications pour les statisticiens africains.', en:'Your donation funds open source development, free training, and certifications for African statisticians.' },
'page.part.h1':        { fr:'Le premier INS qui signe devient l\'Institution Fondatrice', en:'The first NSO to sign becomes the Founding Institution' },
'page.part.lead':      { fr:'Le siège de la statAfrikR Foundation sera dans votre INS', en:'The statAfrikR Foundation headquarters will be in your NSO' },
'page.fin.h1':         { fr:'Modèle économique et plan de financement', en:'Economic model and financing plan' },
'page.fin.lead':       { fr:'Hybride · Diversifié · Indépendant · Aucune source unique > 40% des ressources annuelles', en:'Hybrid · Diversified · Independent · No single source > 40% of annual resources' },

/* Breadcrumbs */
'bc.home':        { fr:'Accueil',            en:'Home' },
'bc.fondation':   { fr:'La Fondation',       en:'The Foundation' },
'bc.gouvernance': { fr:'Gouvernance',         en:'Governance' },
'bc.package':     { fr:'Le package',          en:'The package' },
'bc.formation':   { fr:'Formation',           en:'Training' },
'bc.roadmap':     { fr:'Roadmap',             en:'Roadmap' },
'bc.communaute':  { fr:'Communauté',          en:'Community' },
'bc.don':         { fr:'Faire un don',        en:'Donate' },
'bc.partenariat': { fr:'Devenir partenaire',  en:'Become a partner' },
'bc.financement': { fr:'Modèle économique',   en:'Economic model' },

/* Fondation — missions */
'mission.1.title':{ fr:'Développer et maintenir', en:'Develop and maintain' },
'mission.1.text': { fr:'Écosystème statAfrikR · GPL-3 · CRAN · GitHub · Processus de release rigoureux', en:'statAfrikR ecosystem · GPL-3 · CRAN · GitHub · Rigorous release process' },
'mission.2.title':{ fr:'Former et certifier',     en:'Train and certify' },
'mission.2.text': { fr:'Programme intensif 10 jours · academy.statafrikr-foundation.org · 3 niveaux de certification', en:'10-day intensive programme · academy.statafrikr-foundation.org · 3 certification levels' },
'mission.3.title':{ fr:'Harmoniser',             en:'Harmonise' },
'mission.3.text': { fr:'Méthodes communes UEMOA · CEDEAO · CEMAC · COMESA · SADC · UMA', en:'Common methods UEMOA · ECOWAS · CEMAC · COMESA · SADC · UMA' },
'mission.4.title':{ fr:'Diffuser et archiver',    en:'Disseminate and archive' },
'mission.4.text': { fr:'Standards DDI · SDMX · Linked Data · Open data statistique africain', en:'DDI · SDMX · Linked Data standards · African statistical open data' },
'mission.5.title':{ fr:'Rechercher et innover',  en:'Research and innovate' },
'mission.5.text': { fr:'Statistique appliquée · IA · SIG · Gouvernance des données publiques', en:'Applied statistics · AI · GIS · Public data governance' },
'mission.6.title':{ fr:'Accompagner les États',  en:'Support governments' },
'mission.6.text': { fr:'Transformation numérique des INS · Intégration réseaux statistiques régionaux', en:'NSO digital transformation · Integration into regional statistical networks' },

/* Valeurs */
'valeur.1.title':{ fr:'🏴 Souveraineté', en:'🏴 Sovereignty' },
'valeur.1.text': { fr:'Outils africains pour l\'Afrique. Aucune dépendance à un éditeur unique. Code libre, gouvernance collective.', en:'African tools for Africa. No dependence on a single vendor. Free code, collective governance.' },
'valeur.2.title':{ fr:'🔍 Transparence', en:'🔍 Transparency' },
'valeur.2.text': { fr:'Code ouvert sur GitHub. Méthodes publiées. Comptes audités annuellement et publiés.', en:'Code open on GitHub. Published methods. Annually audited and published accounts.' },
'valeur.3.title':{ fr:'🤝 Inclusion',    en:'🤝 Inclusion' },
'valeur.3.text': { fr:'Multilingue FR/EN/PT. Fonctionnel hors ligne. Gratuit pour les INS partenaires.', en:'Multilingual FR/EN/PT. Works offline. Free for partner NSOs.' },
'valeur.4.title':{ fr:'📐 Rigueur',      en:'📐 Rigour' },
'valeur.4.text': { fr:'Normes ISI, OCDE, AFRISTAT, SDMX. Couverture de tests > 90%. Documentation exhaustive.', en:'ISI, OECD, AFRISTAT, SDMX standards. Test coverage > 90%. Comprehensive documentation.' },
'valeur.5.title':{ fr:'⏳ Pérennité',    en:'⏳ Sustainability' },
'valeur.5.text': { fr:'Fonds de dotation. Financement diversifié (règle des 40%). Gouvernance anti-capture.', en:'Endowment fund. Diversified funding (40% rule). Anti-capture governance.' },
'valeur.6.title':{ fr:'🌱 Solidarité',   en:'🌱 Solidarity' },
'valeur.6.text': { fr:'Réseau panafricain. Priorité aux INS à ressources limitées. Partage des savoirs.', en:'Pan-African network. Priority to resource-limited NSOs. Knowledge sharing.' },

/* Gouvernance */
'gouv.intro':     { fr:'Modèle inspiré de la DuckDB Foundation — séparation stricte entre le bien commun open source (Foundation) et les activités commerciales (entités distinctes). Aucun acteur ne détient plus de 25% des voix.', en:'Model inspired by the DuckDB Foundation — strict separation between open source commons (Foundation) and commercial activities (distinct entities). No actor holds more than 25% of votes.' },
'gouv.anticapture':{ fr:'Clause anti-capture (Art. 12 des Statuts v2.0) : Aucun acteur — INS hôte, bailleur, gouvernement ou fondateur — ne peut détenir plus de 25% des voix au Conseil d\'administration.', en:'Anti-capture clause (Art. 12, Statutes v2.0): No actor — host NSO, donor, government or founder — may hold more than 25% of votes on the Board of Directors.' },
'college.1.title':{ fr:'Collège fondateur',            en:'Founders\' college' },
'college.1.name': { fr:'Dikers Amoko',                 en:'Dikers Amoko' },
'college.1.desc': { fr:'Membre de droit. Voix prépondérante 5 ans. 1 siège permanent.', en:'Ex-officio member. Casting vote for 5 years. 1 permanent seat.' },
'college.2.title':{ fr:'Collège INS africains',        en:'African NSOs\' college' },
'college.2.name': { fr:'INS partenaires signataires',  en:'Signatory partner NSOs' },
'college.2.desc': { fr:'Représentants des INS ayant signé un MoU. 1 à 2 sièges · 3 ans.', en:'Representatives of NSOs having signed a MoU. 1 to 2 seats · 3 years.' },
'college.3.title':{ fr:'Collège académique',           en:'Academic college' },
'college.3.name': { fr:'Universitaires africains',     en:'African academics' },
'college.3.desc': { fr:'ENSEA, ISSEA, ENEA, FASEG… 1 à 2 sièges · 3 ans.', en:'ENSEA, ISSEA, ENEA, FASEG… 1 to 2 seats · 3 years.' },
'college.4.title':{ fr:'Collège experts indépendants', en:'Independent experts\' college' },
'college.4.name': { fr:'Personnalités qualifiées',     en:'Qualified personalities' },
'college.4.desc': { fr:'Data, open source, financement. 2 à 4 sièges · 3 ans.', en:'Data, open source, funding. 2 to 4 seats · 3 years.' },

/* Package */
'pkg.kpi.1':  { fr:'Téléchargements CRAN',   en:'CRAN downloads' },
'pkg.kpi.2':  { fr:'Fonctions documentées',   en:'Documented functions' },
'pkg.kpi.3':  { fr:'Modules intégrés',        en:'Integrated modules' },
'pkg.kpi.4':  { fr:'Tests unitaires',         en:'Unit tests' },
'pkg.m1':     { fr:'Collecte',      en:'Collection' },
'pkg.m2':     { fr:'Traitement',    en:'Processing' },
'pkg.m3':     { fr:'Analyse',       en:'Analysis' },
'pkg.m4':     { fr:'Visualisation', en:'Visualisation' },
'pkg.m5':     { fr:'Diffusion',     en:'Dissemination' },
'btn.cran':   { fr:'Voir sur le CRAN',      en:'View on CRAN' },
'btn.doc':    { fr:'Documentation pkgdown', en:'pkgdown documentation' },
'voir.pkg':   { fr:'Toutes les 40 fonctions →', en:'All 40 functions →' },

/* Formation */
'form.kpi.1': { fr:'Jours de formation',          en:'Training days' },
'form.kpi.2': { fr:'Contenu intensif',             en:'Intensive content' },
'form.kpi.3': { fr:'Participants max / session',   en:'Max participants / session' },
'form.kpi.4': { fr:'Niveaux certification',        en:'Certification levels' },
'form.p1.tag':{ fr:'PHASE 1 — 6 jours',            en:'PHASE 1 — 6 days' },
'form.p1.h3': { fr:'Formation technique',          en:'Technical training' },
'form.p2.tag':{ fr:'PHASE 2 — 4 jours',            en:'PHASE 2 — 4 days' },
'form.p2.h3': { fr:'Atelier stratégique institutionnel', en:'Strategic institutional workshop' },
'form.cert':  { fr:'Certification statAfrikR',     en:'statAfrikR Certification' },
'form.j1.num':{ fr:'JOUR 1', en:'DAY 1' }, 'form.j1.t':{ fr:'Introduction R',       en:'Introduction to R' },
'form.j2.num':{ fr:'JOUR 2', en:'DAY 2' }, 'form.j2.t':{ fr:'Tidyverse I',          en:'Tidyverse I' },
'form.j3.num':{ fr:'JOUR 3', en:'DAY 3' }, 'form.j3.t':{ fr:'Tidyverse II',         en:'Tidyverse II' },
'form.j4.num':{ fr:'JOUR 4', en:'DAY 4' }, 'form.j4.t':{ fr:'Analyse',              en:'Analysis' },
'form.j5.num':{ fr:'JOUR 5', en:'DAY 5' }, 'form.j5.t':{ fr:'statAfrikR',           en:'statAfrikR' },
'form.j6.num':{ fr:'JOUR 6', en:'DAY 6' }, 'form.j6.t':{ fr:'Cas pratiques',        en:'Practical cases' },
'form.j7.num':{ fr:'JOUR 7', en:'DAY 7' }, 'form.j7.t':{ fr:'Diagnostic',           en:'Diagnostic' },
'form.j8.num':{ fr:'JOUR 8', en:'DAY 8' }, 'form.j8.t':{ fr:'Architecture',         en:'Architecture' },
'form.j9.num':{ fr:'JOUR 9', en:'DAY 9' }, 'form.j9.t':{ fr:'Modules prioritaires', en:'Priority modules' },
'form.j10.num':{ fr:'JOUR 10',en:'DAY 10'},'form.j10.t':{ fr:'Gouvernance',         en:'Governance' },
'form.j1.d': { fr:'RStudio · Objets · Import multi-format',       en:'RStudio · Objects · Multi-format import' },
'form.j2.d': { fr:'dplyr, tidyr · Pipelines · Nettoyage',         en:'dplyr, tidyr · Pipelines · Cleaning' },
'form.j3.d': { fr:'ggplot2 · Graphiques institutionnels',         en:'ggplot2 · Institutional charts' },
'form.j4.d': { fr:'Pondération · FGT · IDH · Régression',        en:'Weighting · FGT · HDI · Regression' },
'form.j5.d': { fr:'40 fonctions · IDH, IPM, Gini',               en:'40 functions · HDI, MPI, Gini' },
'form.j6.d': { fr:'Données réelles de votre INS',                en:'Your NSO\'s real data' },
'form.j7.d': { fr:'Audit outils · Cartographie flux',            en:'Tool audit · Workflow mapping' },
'form.j8.d': { fr:'Adaptation données nationales',               en:'National data adaptation' },
'form.j9.d': { fr:'Feuille de route 12–24 mois',                 en:'12–24 month roadmap' },
'form.j10.d':{ fr:'Présentation direction · MoU',                en:'Management presentation · MoU' },
'voir.form':  { fr:'Programme détaillé · livrables par jour · certifications →', en:'Full programme · daily deliverables · certifications →' },

/* Roadmap */
'rm.p1.year': { fr:'PHASE 1 · 2026',   en:'PHASE 1 · 2026' },
'rm.p1.title':{ fr:'Fondation',         en:'Foundation' },
'rm.p2.year': { fr:'PHASE 2 · 2027',   en:'PHASE 2 · 2027' },
'rm.p2.title':{ fr:'Expansion',         en:'Expansion' },
'rm.p3.year': { fr:'PHASE 3 · 2028',   en:'PHASE 3 · 2028' },
'rm.p3.title':{ fr:'Institutionnalisation', en:'Institutionalisation' },
'rm.p1.li1':  { fr:'Création juridique · préfecture',     en:'Legal creation · prefecture' },
'rm.p1.li2':  { fr:'statAfrikR v0.2.0 sur CRAN',          en:'statAfrikR v0.2.0 on CRAN' },
'rm.p1.li3':  { fr:'Signature MoU INS fondateur',         en:'Founding NSO MoU signing' },
'rm.p1.li4':  { fr:'1er financement ≥ 50 000 €',          en:'1st funding ≥ €50,000' },
'rm.p1.li5':  { fr:'1re session de formation',            en:'1st training session' },
'rm.p2.li1':  { fr:'statAfrikPoverty · Maps sur CRAN',    en:'statAfrikPoverty · Maps on CRAN' },
'rm.p2.li2':  { fr:'Plateforme e-learning lancée',        en:'E-learning platform launched' },
'rm.p2.li3':  { fr:'5 INS fondateurs signataires',        en:'5 founding NSOs as signatories' },
'rm.p2.li4':  { fr:'500 statisticiens formés',            en:'500 trained statisticians' },
'rm.p2.li5':  { fr:'Budget > 205 000 €',                  en:'Budget > €205,000' },
'rm.p3.li1':  { fr:'10 INS membres actifs',               en:'10 active member NSOs' },
'rm.p3.li2':  { fr:'1 000 statisticiens certifiés',       en:'1,000 certified statisticians' },
'rm.p3.li3':  { fr:'Portail statistique africain',        en:'African statistical portal' },
'rm.p3.li4':  { fr:'Reconnaissance UA-STATCOM',           en:'AU-STATCOM recognition' },
'rm.p3.li5':  { fr:'Budget > 550 000 €',                  en:'Budget > €550,000' },
'voir.rm':    { fr:'Voir les 11 jalons détaillés + 12 packages prévus →', en:'View 11 detailed milestones + 12 planned packages →' },

/* Communauté */
'comm.kpi.1':  { fr:'Téléchargements CRAN', en:'CRAN downloads' },
'comm.kpi.2':  { fr:'GitHub stars',          en:'GitHub stars' },
'comm.kpi.3':  { fr:'GitHub forks',          en:'GitHub forks' },
'comm.kpi.4':  { fr:'Issues ouvertes',       en:'Open issues' },
'comm.c1.t':   { fr:'Discord · Communauté active',          en:'Discord · Active community' },
'comm.c1.d':   { fr:'Support, annonces releases, mentorat, discussions techniques', en:'Support, release announcements, mentoring, technical discussions' },
'comm.c2.t':   { fr:'GitHub · Code source ouvert',          en:'GitHub · Open source code' },
'comm.c2.d':   { fr:'Issues, Pull Requests, roadmap publique, CONTRIBUTING.md', en:'Issues, Pull Requests, public roadmap, CONTRIBUTING.md' },
'comm.c3.t':   { fr:'Vignette CRAN · Démarrage rapide',     en:'CRAN Vignette · Quick start' },
'comm.c3.d':   { fr:'Guide complet d\'utilisation avec exemples sur données réelles', en:'Comprehensive usage guide with real data examples' },
'comm.c4.t':   { fr:'Certification statAfrikR',              en:'statAfrikR Certification' },
'comm.c4.d':   { fr:'3 niveaux reconnus · Utilisateur · Praticien · Expert', en:'3 recognised levels · User · Practitioner · Expert' },
'voir.comm':   { fr:'Page communauté complète →', en:'Full community page →' },

/* Don */
'don.intro':   { fr:'Votre don finance le développement open source, les formations gratuites pour les INS africains et les certifications statAfrikR.', en:'Your donation funds open source development, free training for African NSOs, and statAfrikR certifications.' },
'don.chip1':   { fr:'Contributeur',  en:'Contributor' },
'don.chip2':   { fr:'Soutien',       en:'Supporter' },
'don.chip3':   { fr:'Partenaire',    en:'Partner' },
'don.chip4':   { fr:'Bienfaiteur',   en:'Benefactor' },
'don.tax':     { fr:'🧾 Don déductible à 66% · Fonds de dotation · Loi n°2008-776 · Reçu fiscal automatique', en:'🧾 66% tax-deductible · Endowment fund · Law n°2008-776 · Automatic tax receipt' },
'don.cta.ha':  { fr:'💳 Faire un don via HelloAsso', en:'💳 Donate via HelloAsso' },
'don.cta.sub': { fr:'Paiement sécurisé · 0% commission · Reçu fiscal automatique', en:'Secure payment · 0% commission · Automatic tax receipt' },
'don.virement':{ fr:'🏦 Virement', en:'🏦 Bank transfer' },
'don.voir':    { fr:'Voir la page de don complète →', en:'View the full donation page →' },

/* Partenariat */
'part.intro':  { fr:'Le siège de la statAfrikR Foundation sera établi dans l\'INS du premier Directeur Général qui formalisera ce partenariat. Cette distinction n\'appartiendra qu\'à un seul INS sur le continent africain.', en:'The statAfrikR Foundation headquarters will be established in the NSO of the first Director General to formalise this partnership. This distinction will belong to only one NSO on the African continent.' },
'part.apporte':{ fr:'🏛️ Votre INS apporte',  en:'🏛️ Your NSO brings' },
'part.recoit': { fr:'✓ Votre INS reçoit',    en:'✓ Your NSO receives' },
'part.a1':     { fr:'Hébergement du siège — adresse officielle Foundation', en:'Headquarters hosting — official Foundation address' },
'part.a2':     { fr:'Infrastructure physique — locaux, équipements',        en:'Physical infrastructure — premises, equipment' },
'part.a3':     { fr:'Légitimité institutionnelle régionale',                en:'Regional institutional legitimacy' },
'part.a4':     { fr:'Point focal permanent désigné',                        en:'Designated permanent focal point' },
'part.r1':     { fr:'Formation gratuite pour vos équipes (10 jours)',       en:'Free training for your teams (10 days)' },
'part.r2':     { fr:'Module sur mesure pour vos enquêtes nationales',       en:'Custom module for your national surveys' },
'part.r3':     { fr:'Accès prioritaire aux financements bailleurs',         en:'Priority access to donor funding' },
'part.r4':     { fr:'Rayonnement continental · Zéro coût logiciel',        en:'Continental visibility · Zero software cost' },
'part.cta1':   { fr:'Devenir partenaire fondateur', en:'Become a founding partner' },
'part.cta2':   { fr:'Contacter Dikers Amoko',       en:'Contact Dikers Amoko' },

/* Footer */
'footer.desc': { fr:'Fondation panafricaine open source pour la statistique publique africaine. Fonds de dotation en cours de constitution · Loi n°2008-776 du 4 août 2008.', en:'Pan-African open source foundation for African public statistics. Endowment fund being established · Law n°2008-776 of 4 August 2008.' },
'footer.col1': { fr:'Sur cette page',   en:'On this page' },
'footer.col2': { fr:'Pages détaillées', en:'Full pages' },
'footer.col3': { fr:'Ressources',       en:'Resources' },
'footer.legal':{ fr:'© 2026 statAfrikR Foundation · Fonds de dotation en constitution · GPL-3', en:'© 2026 statAfrikR Foundation · Endowment fund being established · GPL-3' },

/* Voir plus */
'voir.fondation':   { fr:'Voir la page complète Fondation →', en:'View the full Foundation page →' },
'voir.gouvernance': { fr:'Voir la gouvernance complète — Matrice décisions · Calendrier annuel →', en:'View full governance — Decision matrix · Annual calendar →' },
'voir.partenariat': { fr:'Programme détaillé · livrables par jour · certifications →', en:'Full programme · daily deliverables · certifications →' },
};

/* ── Moteur de traduction ─────────────────────────────────────── */
function applyTranslations(lang) {
  const l = (lang === 'en') ? 'en' : 'fr';

  /* 1. Elements avec data-i18n="clé" → remplace textContent */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key] && T[key][l] !== undefined) {
      /* Pour les éléments avec innerHTML complexe, on utilise innerHTML */
      if (el.getAttribute('data-i18n-html') === 'true') {
        el.innerHTML = T[key][l];
      } else {
        el.textContent = T[key][l];
      }
    }
  });

  /* 2. Attributs placeholder */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (T[key] && T[key][l]) el.placeholder = T[key][l];
  });

  /* 3. Attributs aria-label */
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (T[key] && T[key][l]) el.setAttribute('aria-label', T[key][l]);
  });

  /* 4. Attribut lang sur <html> */
  document.documentElement.lang = l;
  document.documentElement.setAttribute('data-lang', l);
}

/* ── Init & toggle ────────────────────────────────────────────── */
function initI18n() {
  const stored = localStorage.getItem('saf-lang') || 'fr';

  /* Activer le bon bouton */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const bl = btn.getAttribute('data-lang');
    btn.classList.toggle('active', bl === stored);

    btn.addEventListener('click', () => {
      const newLang = btn.getAttribute('data-lang');
      localStorage.setItem('saf-lang', newLang);
      applyTranslations(newLang);
      document.querySelectorAll('.lang-btn').forEach(b =>
        b.classList.toggle('active', b.getAttribute('data-lang') === newLang)
      );
    });
  });

  /* Appliquer au chargement */
  applyTranslations(stored);
}

document.addEventListener('DOMContentLoaded', initI18n);
