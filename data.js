/* ═══════════════════════════════════════════
   LITHOTHÉRAPIE — data.js
   Toutes les données des pierres.

   Pour ajouter une image à une pierre :
   Remplacez img: "" par :
     img: "images/nom-de-votre-photo.jpg"
   ═══════════════════════════════════════════ */

/* Symboles astrologiques */
const SIGN_SYMBOLS = {
  "Bélier":      "♈",
  "Taureau":     "♉",
  "Gémeaux":     "♊",
  "Cancer":      "♋",
  "Lion":        "♌",
  "Vierge":      "♍",
  "Balance":     "♎",
  "Scorpion":    "♏",
  "Sagittaire":  "♐",
  "Capricorne":  "♑",
  "Verseau":     "♒",
  "Poissons":    "♓",
  "Tous les signes": "✨"
};

/* Catégories de filtre */
const CATEGORIES = [
  'Toutes', 'Protection', 'Amour', 'Clarté',
  'Énergie', 'Équilibre', 'Ancrage', 'Chance'
];

/* ── Liste des pierres ── */
const STONES = [
  {
    name:   "Agate",
    emoji:  "🟤",
    img:    "",
    origin: "Brésil, Inde, Maroc",
    group:  ["protection", "équilibre"],
    chakras: [
      { n: "Racine",         c: "#8B0000" },
      { n: "Plexus solaire", c: "#F39C12" }
    ],
    signs:  ["Gémeaux", "Vierge", "Capricorne"],
    tagBg:  "#F1EFE8", tagTx: "#444441",
    desc:   "L'agate est l'une des pierres les plus anciennes connues de l'humanité. Cette calcédoine rubanée aux motifs hypnotiques stabilise et équilibre les énergies physiques, émotionnelles et intellectuelles. Elle ancre profondément son porteur dans la réalité, dissipe les peurs et favorise l'harmonie intérieure.",
    vertus: ["Stabilité émotionnelle", "Équilibre", "Protection", "Harmonie"],
    purif:  "Eau courante, encens"
  },
  {
    name:   "Améthyste",
    emoji:  "💜",
    img:    "",
    origin: "Brésil, Uruguay, Afrique du Sud",
    group:  ["protection", "clarté"],
    chakras: [
      { n: "Couronne",       c: "#9B59B6" },
      { n: "Troisième œil",  c: "#6C3483" }
    ],
    signs:  ["Verseau", "Poissons", "Capricorne", "Vierge"],
    tagBg:  "#EEEDFE", tagTx: "#3C3489",
    desc:   "Pierre de sagesse par excellence, l'améthyste apaise le mental, favorise la méditation et stimule l'intuition. Utilisée depuis l'Antiquité par les Égyptiens et les Grecs, elle symbolise la sobriété et la clarté spirituelle. Son quartz violet protège des énergies négatives et améliore la qualité du sommeil.",
    vertus: ["Apaisement", "Intuition", "Protection spirituelle", "Sommeil"],
    purif:  "Eau de source, lumière de lune"
  },
  {
    name:   "Aventurine verte",
    emoji:  "💚",
    img:    "",
    origin: "Inde, Brésil, Russie",
    group:  ["chance", "amour"],
    chakras: [
      { n: "Cœur", c: "#27AE60" }
    ],
    signs:  ["Taureau", "Cancer", "Verseau"],
    tagBg:  "#EAF3DE", tagTx: "#27500A",
    desc:   "Surnommée la 'pierre de l'opportunité', l'aventurine verte est la plus chanceuse des cristaux. Elle attire la prospérité, renforce la confiance en soi et ouvre le chakra du cœur à l'amour. Son éclat chatoyant provient de ses inclusions de fuchsite.",
    vertus: ["Chance et prospérité", "Confiance", "Amour", "Optimisme"],
    purif:  "Eau courante, soleil doux"
  },
  {
    name:   "Cornaline",
    emoji:  "🟠",
    img:    "",
    origin: "Inde, Brésil, Égypte",
    group:  ["énergie", "protection"],
    chakras: [
      { n: "Sacré",  c: "#E67E22" },
      { n: "Racine", c: "#8B0000" }
    ],
    signs:  ["Bélier", "Cancer", "Lion", "Scorpion"],
    tagBg:  "#FAEEDA", tagTx: "#633806",
    desc:   "Pierre de feu aux teintes orangées, la cornaline était portée par les pharaons égyptiens et les guerriers romains. Elle stimule la vitalité, booste la créativité et donne le courage d'agir. Son énergie dynamisante combat la procrastination et renforce la détermination.",
    vertus: ["Vitalité", "Courage", "Créativité", "Motivation"],
    purif:  "Soleil (court), eau courante"
  },
  {
    name:   "Citrine",
    emoji:  "🌕",
    img:    "",
    origin: "Brésil, Madagascar, Espagne",
    group:  ["énergie", "clarté"],
    chakras: [
      { n: "Plexus solaire", c: "#F39C12" }
    ],
    signs:  ["Gémeaux", "Lion", "Balance", "Sagittaire"],
    tagBg:  "#FAEEDA", tagTx: "#633806",
    desc:   "La citrine rayonne comme un soleil intérieur. Pierre de l'abondance et de la joie, elle est l'une des rares pierres qui n'accumule pas les énergies négatives — elle les transmute. Elle stimule créativité et motivation, attire la prospérité et chasse les doutes.",
    vertus: ["Abondance", "Joie", "Créativité", "Confiance"],
    purif:  "Soleil (court), Terre"
  },
  {
    name:   "Cristal de Roche",
    emoji:  "💎",
    img:    "",
    origin: "Brésil, Madagascar, Alpes",
    group:  ["clarté", "énergie"],
    chakras: [
      { n: "Couronne",    c: "#9B59B6" },
      { n: "Tous chakras", c: "#AAAAAA" }
    ],
    signs:  ["Tous les signes"],
    tagBg:  "#E6F1FB", tagTx: "#0C447C",
    desc:   "Le cristal de roche, quartz hyalin d'une pureté absolue, est appelé 'roi des cristaux'. Il amplifie l'énergie de toutes les autres pierres et clarifie les pensées. Utilisé depuis la préhistoire dans les rituels, il harmonise et équilibre tous les chakras.",
    vertus: ["Amplification", "Clarté mentale", "Purification", "Connexion spirituelle"],
    purif:  "Eau, soleil, lune"
  },
  {
    name:   "Grenat",
    emoji:  "❤️",
    img:    "",
    origin: "Inde, Afrique du Sud, Russie",
    group:  ["énergie", "amour"],
    chakras: [
      { n: "Racine", c: "#8B0000" },
      { n: "Sacré",  c: "#E67E22" }
    ],
    signs:  ["Capricorne", "Scorpion", "Lion", "Verseau"],
    tagBg:  "#FCEBEB", tagTx: "#791F1F",
    desc:   "Pierre de passion et de vitalité, le grenat stimule la force vitale et ranime le désir. Talisman des voyageurs au Moyen Âge, il protège des dangers et renforce le courage. Sa couleur bordeaux profonde évoque l'énergie vitale.",
    vertus: ["Passion", "Vitalité", "Protection", "Ancrage"],
    purif:  "Eau courante, soleil"
  },
  {
    name:   "Fluorite",
    emoji:  "🟩",
    img:    "",
    origin: "Chine, Mexique, Afrique du Sud",
    group:  ["clarté", "protection"],
    chakras: [
      { n: "Troisième œil", c: "#6C3483" },
      { n: "Couronne",      c: "#9B59B6" }
    ],
    signs:  ["Capricorne", "Poissons", "Vierge"],
    tagBg:  "#EAF3DE", tagTx: "#27500A",
    desc:   "La fluorite est la pierre de l'ordre mental par excellence. Ses couleurs chatoyantes (violet, vert, bleu) organisent la pensée et dissolvent la confusion. Bouclier psychique puissant, elle améliore la concentration et facilite l'apprentissage.",
    vertus: ["Clarté intellectuelle", "Organisation", "Protection psychique", "Concentration"],
    purif:  "Eau douce (court), encens"
  },
  {
    name:   "Hématite",
    emoji:  "⚫",
    img:    "",
    origin: "Brésil, Australie, USA",
    group:  ["ancrage", "protection"],
    chakras: [
      { n: "Racine", c: "#8B0000" }
    ],
    signs:  ["Bélier", "Scorpion", "Capricorne"],
    tagBg:  "#F1EFE8", tagTx: "#444441",
    desc:   "L'hématite, avec son éclat métallique gris argenté, est la pierre de l'ancrage absolu. Riche en fer, elle connecte à la terre, renforce la volonté et élimine la timidité. Utilisée par les soldats romains comme protection, elle harmonise corps et esprit.",
    vertus: ["Ancrage", "Force mentale", "Protection", "Équilibre"],
    purif:  "Encens (pas d'eau — risque de rouille)"
  },
  {
    name:   "Jade",
    emoji:  "🟢",
    img:    "",
    origin: "Myanmar, Chine, Guatemala",
    group:  ["chance", "équilibre"],
    chakras: [
      { n: "Cœur", c: "#27AE60" }
    ],
    signs:  ["Taureau", "Balance", "Verseau"],
    tagBg:  "#EAF3DE", tagTx: "#27500A",
    desc:   "Vénéré en Chine depuis 7000 ans, le jade est la pierre de la sagesse, de la longévité et de la prospérité. Il attire chance et harmonie, purifie le cœur et apporte sérénité. Les empereurs chinois lui consacraient des rituels sacrés.",
    vertus: ["Chance", "Sagesse", "Longévité", "Sérénité"],
    purif:  "Eau courante, lune"
  },
  {
    name:   "Jade impérial",
    emoji:  "💚",
    img:    "",
    origin: "Myanmar, Chine",
    group:  ["chance", "clarté"],
    chakras: [
      { n: "Cœur",         c: "#27AE60" },
      { n: "Troisième œil", c: "#6C3483" }
    ],
    signs:  ["Taureau", "Vierge", "Balance"],
    tagBg:  "#EAF3DE", tagTx: "#085041",
    desc:   "Le jade impérial est la forme la plus précieuse de jadéite, d'un vert émeraude translucide. Réservé aux empereurs chinois, il symbolise la pureté, l'immortalité et la sagesse divine. Il élève la conscience et favorise la clarté spirituelle.",
    vertus: ["Noblesse", "Pureté", "Conscience", "Prospérité"],
    purif:  "Eau de source, lumière de lune"
  },
  {
    name:   "Jade Jaune",
    emoji:  "💛",
    img:    "",
    origin: "Chine, Russie",
    group:  ["énergie", "chance"],
    chakras: [
      { n: "Plexus solaire", c: "#F39C12" }
    ],
    signs:  ["Gémeaux", "Lion", "Sagittaire"],
    tagBg:  "#FAEEDA", tagTx: "#633806",
    desc:   "Le jade jaune rayonne d'une énergie solaire chaleureuse. Pierre de joie et d'optimisme, il stimule le plexus solaire et renforce la confiance en soi. Il attire la bonne fortune et aide à atteindre les objectifs avec enthousiasme.",
    vertus: ["Optimisme", "Joie", "Confiance", "Discernement"],
    purif:  "Soleil, eau courante"
  },
  {
    name:   "Jaspe Feuille d'argent",
    emoji:  "⬜",
    img:    "",
    origin: "Inde, USA",
    group:  ["protection", "équilibre"],
    chakras: [
      { n: "Racine",   c: "#8B0000" },
      { n: "Couronne", c: "#9B59B6" }
    ],
    signs:  ["Vierge", "Balance", "Scorpion"],
    tagBg:  "#F1EFE8", tagTx: "#444441",
    desc:   "Le jaspe feuille d'argent, avec ses motifs argentés et gris, est une pierre de clarté et de protection subtile. Il aide à distinguer la vérité du mensonge et protège des manipulations.",
    vertus: ["Clarté", "Protection", "Discernement", "Équilibre"],
    purif:  "Encens, eau courante"
  },
  {
    name:   "Jaspe paysage",
    emoji:  "🏜️",
    img:    "",
    origin: "USA, Australie, Afrique du Sud",
    group:  ["ancrage", "équilibre"],
    chakras: [
      { n: "Racine", c: "#8B0000" },
      { n: "Sacré",  c: "#E67E22" }
    ],
    signs:  ["Gémeaux", "Scorpion", "Capricorne"],
    tagBg:  "#FAEEDA", tagTx: "#633806",
    desc:   "Le jaspe paysage, avec ses inclusions évoquant des paysages désertiques, est une pierre de connexion à la nature. Il favorise la méditation profonde, stimule la créativité et aide à concrétiser les projets.",
    vertus: ["Connexion à la nature", "Méditation", "Créativité", "Ancrage"],
    purif:  "Terre, eau courante"
  },
  {
    name:   "Labradorite",
    emoji:  "🌈",
    img:    "",
    origin: "Canada, Finlande, Madagascar",
    group:  ["protection", "énergie"],
    chakras: [
      { n: "Troisième œil", c: "#6C3483" },
      { n: "Couronne",      c: "#9B59B6" }
    ],
    signs:  ["Lion", "Scorpion", "Sagittaire"],
    tagBg:  "#F1EFE8", tagTx: "#444441",
    desc:   "Découverte au Labrador au XVIIIe siècle, la labradorite enchante par ses reflets iridescents (vert, bleu, or) appelés labradorescence. Pierre des chamans, elle protège l'aura, développe l'intuition et aide à traverser les changements.",
    vertus: ["Protection de l'aura", "Intuition", "Magie", "Résilience"],
    purif:  "Lumière de lune, visualisation"
  },
  {
    name:   "Lapis-Lazuli",
    emoji:  "🔵",
    img:    "",
    origin: "Afghanistan, Chili, Russie",
    group:  ["clarté", "protection"],
    chakras: [
      { n: "Gorge",         c: "#2980B9" },
      { n: "Troisième œil", c: "#6C3483" }
    ],
    signs:  ["Sagittaire", "Poissons", "Verseau"],
    tagBg:  "#E6F1FB", tagTx: "#0C447C",
    desc:   "Pierre des pharaons depuis 7000 ans, le lapis-lazuli ornait les masques funéraires des rois d'Égypte. Son bleu nuit étoilé d'or évoque le cosmos. Il stimule l'intellect, favorise l'expression authentique et élève la conscience spirituelle.",
    vertus: ["Expression", "Clarté intellectuelle", "Connexion spirituelle", "Courage"],
    purif:  "Lumière de lune (pas d'eau)"
  },
  {
    name:   "Malachite",
    emoji:  "💚",
    img:    "",
    origin: "Congo, Russie, Australie",
    group:  ["équilibre", "protection"],
    chakras: [
      { n: "Cœur",          c: "#27AE60" },
      { n: "Plexus solaire", c: "#F39C12" }
    ],
    signs:  ["Scorpion", "Capricorne", "Taureau"],
    tagBg:  "#EAF3DE", tagTx: "#27500A",
    desc:   "La malachite, avec ses tourbillons verts profonds, est une pierre de transformation puissante. Elle amplifie les émotions pour aider à les libérer. Les anciens Égyptiens en fabriquaient bijoux et amulettes.",
    vertus: ["Transformation", "Libération émotionnelle", "Protection voyageurs", "Équilibre"],
    purif:  "Encens uniquement (jamais d'eau brute)"
  },
  {
    name:   "Obsidienne",
    emoji:  "🖤",
    img:    "",
    origin: "Mexique, Islande, Arménie",
    group:  ["protection", "ancrage"],
    chakras: [
      { n: "Racine", c: "#8B0000" }
    ],
    signs:  ["Sagittaire", "Scorpion", "Capricorne"],
    tagBg:  "#F1EFE8", tagTx: "#444441",
    desc:   "Roche volcanique vitreuse, l'obsidienne est un puissant bouclier énergétique. Les civilisations mésoaméricaines en faisaient des armes et des miroirs divinatoires. Elle repousse les énergies négatives et ancre profondément dans le présent.",
    vertus: ["Bouclier énergétique", "Ancrage", "Vérité", "Libération des blocages"],
    purif:  "Encens, sons (bol tibétain)"
  },
  {
    name:   "Howlite",
    emoji:  "⬜",
    img:    "",
    origin: "Canada, USA, Mexique",
    group:  ["équilibre", "clarté"],
    chakras: [
      { n: "Couronne",      c: "#9B59B6" },
      { n: "Troisième œil", c: "#6C3483" }
    ],
    signs:  ["Gémeaux", "Vierge", "Balance"],
    tagBg:  "#E6F1FB", tagTx: "#0C447C",
    desc:   "La howlite blanche veinée de gris est la pierre de la patience et de la sérénité. Elle calme les esprits agités, réduit les comportements impulsifs et favorise un sommeil profond.",
    vertus: ["Patience", "Sérénité", "Sommeil", "Calme émotionnel"],
    purif:  "Eau courante, lune"
  },
  {
    name:   "Œil de Faucon",
    emoji:  "🦅",
    img:    "",
    origin: "Afrique du Sud, Inde",
    group:  ["clarté", "protection"],
    chakras: [
      { n: "Gorge",         c: "#2980B9" },
      { n: "Troisième œil", c: "#6C3483" }
    ],
    signs:  ["Capricorne", "Verseau", "Balance"],
    tagBg:  "#E6F1FB", tagTx: "#0C447C",
    desc:   "L'œil de faucon, variété bleue de l'œil de tigre, apporte une vision large et perçante. Pierre de discernement, il éloigne la peur, renforce la communication et favorise l'objectivité.",
    vertus: ["Vision large", "Discernement", "Communication", "Clarté"],
    purif:  "Eau courante, lune"
  },
  {
    name:   "Œil de Taureau",
    emoji:  "🐂",
    img:    "",
    origin: "Afrique du Sud",
    group:  ["énergie", "ancrage"],
    chakras: [
      { n: "Racine", c: "#8B0000" },
      { n: "Sacré",  c: "#E67E22" }
    ],
    signs:  ["Taureau", "Scorpion", "Bélier"],
    tagBg:  "#FCEBEB", tagTx: "#791F1F",
    desc:   "L'œil de taureau rouge brun intense stimule la force vitale, la détermination et la passion. Il ancre puissamment dans l'action et dynamise les projets stagnants.",
    vertus: ["Force", "Détermination", "Passion", "Ancrage"],
    purif:  "Soleil, eau courante"
  },
  {
    name:   "Œil de Tigre",
    emoji:  "🐯",
    img:    "",
    origin: "Afrique du Sud, Inde, Australie",
    group:  ["protection", "énergie"],
    chakras: [
      { n: "Plexus solaire", c: "#F39C12" },
      { n: "Sacré",          c: "#E67E22" }
    ],
    signs:  ["Lion", "Capricorne", "Gémeaux"],
    tagBg:  "#FAEEDA", tagTx: "#633806",
    desc:   "L'œil de tigre fascine par son effet chatoyant appelé chatoyance. Pierre de chance et de protection portée par les soldats romains, elle renforce la confiance et aide à atteindre les objectifs.",
    vertus: ["Chance", "Protection", "Confiance", "Persévérance"],
    purif:  "Soleil, eau courante"
  },
  {
    name:   "Œil de Tigre Bleu",
    emoji:  "💙",
    img:    "",
    origin: "Afrique du Sud",
    group:  ["clarté", "équilibre"],
    chakras: [
      { n: "Gorge",          c: "#2980B9" },
      { n: "Plexus solaire", c: "#F39C12" }
    ],
    signs:  ["Balance", "Verseau", "Gémeaux"],
    tagBg:  "#E6F1FB", tagTx: "#0C447C",
    desc:   "L'œil de tigre bleu apporte calme et communication claire. Il aide à exprimer ses émotions avec sérénité et calme l'anxiété. Excellent pour les prises de parole et les négociations.",
    vertus: ["Communication", "Calme", "Expression", "Équilibre"],
    purif:  "Eau courante, lune"
  },
  {
    name:   "Œil de Tigre Rose",
    emoji:  "🌸",
    img:    "",
    origin: "Afrique du Sud",
    group:  ["amour", "équilibre"],
    chakras: [
      { n: "Cœur", c: "#27AE60" }
    ],
    signs:  ["Taureau", "Cancer", "Balance"],
    tagBg:  "#FBEAF0", tagTx: "#72243E",
    desc:   "L'œil de tigre rose unit les propriétés protectrices de l'œil de tigre à l'énergie aimante. Il attire l'amour, renforce la compassion envers soi-même et favorise les relations harmonieuses.",
    vertus: ["Amour", "Compassion", "Guérison sentimentale", "Harmonie"],
    purif:  "Eau courante, lune"
  },
  {
    name:   "Œil de Tigre vert",
    emoji:  "🟩",
    img:    "",
    origin: "Afrique du Sud",
    group:  ["chance", "équilibre"],
    chakras: [
      { n: "Cœur",          c: "#27AE60" },
      { n: "Plexus solaire", c: "#F39C12" }
    ],
    signs:  ["Taureau", "Vierge", "Balance"],
    tagBg:  "#EAF3DE", tagTx: "#27500A",
    desc:   "L'œil de tigre vert mêle la force chatoyante de l'œil de tigre aux vertus équilibrantes du vert. Il favorise la croissance personnelle et est recommandé pour les périodes de renouveau.",
    vertus: ["Chance", "Croissance", "Équilibre", "Renouveau"],
    purif:  "Soleil doux, eau courante"
  },
  {
    name:   "Onyx",
    emoji:  "⬛",
    img:    "",
    origin: "Brésil, Inde, Mexique",
    group:  ["protection", "ancrage"],
    chakras: [
      { n: "Racine", c: "#8B0000" }
    ],
    signs:  ["Capricorne", "Lion", "Verseau"],
    tagBg:  "#F1EFE8", tagTx: "#444441",
    desc:   "L'onyx noir est la pierre de la force intérieure et de la maîtrise de soi. Elle aide à traverser les épreuves avec résilience, protège des énergies négatives et renforce la détermination.",
    vertus: ["Force intérieure", "Protection", "Discipline", "Résilience"],
    purif:  "Encens, sons"
  },
  {
    name:   "Opalite",
    emoji:  "🌙",
    img:    "",
    origin: "Monde entier",
    group:  ["énergie", "clarté"],
    chakras: [
      { n: "Troisième œil", c: "#6C3483" },
      { n: "Couronne",      c: "#9B59B6" }
    ],
    signs:  ["Cancer", "Balance", "Poissons"],
    tagBg:  "#EEEDFE", tagTx: "#3C3489",
    desc:   "L'opalite aux reflets bleutés iridescents est appréciée pour son énergie douce et apaisante. Elle favorise la communication des sentiments profonds et accompagne les périodes de transition.",
    vertus: ["Communication émotionnelle", "Transitions", "Calme", "Intuition"],
    purif:  "Lune, visualisation"
  },
  {
    name:   "Pierre de Lave",
    emoji:  "🌋",
    img:    "",
    origin: "Islande, Hawaï, Réunion",
    group:  ["ancrage", "énergie"],
    chakras: [
      { n: "Racine", c: "#8B0000" }
    ],
    signs:  ["Taureau", "Cancer", "Capricorne"],
    tagBg:  "#F1EFE8", tagTx: "#444441",
    desc:   "La pierre de lave, née du feu des volcans, est la pierre de la transformation. Poreuse, elle absorbe et diffuse les huiles essentielles. Puissamment ancrante, elle stimule le courage et aide à renaître des cendres.",
    vertus: ["Ancrage", "Transformation", "Courage", "Vitalité"],
    purif:  "Soleil, encens"
  },
  {
    name:   "Pierre de Lune",
    emoji:  "🌕",
    img:    "",
    origin: "Sri Lanka, Inde, Madagascar",
    group:  ["équilibre", "amour"],
    chakras: [
      { n: "Sacré",    c: "#E67E22" },
      { n: "Couronne", c: "#9B59B6" }
    ],
    signs:  ["Cancer", "Balance", "Scorpion", "Poissons"],
    tagBg:  "#EEEDFE", tagTx: "#3C3489",
    desc:   "La pierre de lune, avec son éclat bleuté laiteux, est liée aux cycles lunaires et féminins. Elle équilibre les émotions, stimule l'intuition féminine et favorise la fertilité et les rêves lucides.",
    vertus: ["Intuition féminine", "Émotions", "Cycles", "Fertilité"],
    purif:  "Lumière de lune uniquement"
  },
  {
    name:   "Pierre de Soleil",
    emoji:  "☀️",
    img:    "",
    origin: "Norvège, USA (Oregon), Inde",
    group:  ["énergie", "chance"],
    chakras: [
      { n: "Plexus solaire", c: "#F39C12" },
      { n: "Sacré",          c: "#E67E22" }
    ],
    signs:  ["Lion", "Balance", "Sagittaire"],
    tagBg:  "#FAEEDA", tagTx: "#633806",
    desc:   "La pierre de soleil, avec ses reflets dorés scintillants, dissipe les peurs et redonne confiance. Elle encourage l'enthousiasme, la générosité et l'optimisme au quotidien.",
    vertus: ["Joie", "Confiance", "Énergie solaire", "Antidépresseur naturel"],
    purif:  "Soleil (brève exposition)"
  },
  {
    name:   "Pierre des Étoiles",
    emoji:  "⭐",
    img:    "",
    origin: "Inde, Sri Lanka, Afrique",
    group:  ["clarté", "protection"],
    chakras: [
      { n: "Troisième œil", c: "#6C3483" },
      { n: "Couronne",      c: "#9B59B6" }
    ],
    signs:  ["Verseau", "Poissons", "Gémeaux"],
    tagBg:  "#EEEDFE", tagTx: "#3C3489",
    desc:   "La pierre des étoiles présente une étoile lumineuse à 6 branches par effet optique (astérisme). Symbole de guidance divine, elle renforce l'intuition et ouvre aux messages cosmiques.",
    vertus: ["Guidance", "Intuition", "Protection cosmique", "Clarté intérieure"],
    purif:  "Lune, encens"
  },
  {
    name:   "Quartz cerise",
    emoji:  "🍒",
    img:    "",
    origin: "Brésil",
    group:  ["amour", "énergie"],
    chakras: [
      { n: "Cœur",  c: "#27AE60" },
      { n: "Sacré", c: "#E67E22" }
    ],
    signs:  ["Cancer", "Scorpion", "Taureau"],
    tagBg:  "#FBEAF0", tagTx: "#72243E",
    desc:   "Le quartz cerise, avec sa teinte rouge vibrante, rayonne d'une énergie chaleureuse et joyeuse. Il revitalise le chakra du cœur, stimule la passion, l'amour et la joie de vivre.",
    vertus: ["Joie de vivre", "Amour", "Vitalité", "Passion"],
    purif:  "Eau courante, soleil doux"
  },
  {
    name:   "Quartz Rose",
    emoji:  "🌸",
    img:    "",
    origin: "Brésil, Madagascar, Inde",
    group:  ["amour", "équilibre"],
    chakras: [
      { n: "Cœur", c: "#27AE60" }
    ],
    signs:  ["Taureau", "Balance", "Cancer"],
    tagBg:  "#FBEAF0", tagTx: "#72243E",
    desc:   "Le quartz rose est la pierre de l'amour par excellence. Doux et apaisant, il ouvre le chakra du cœur à l'amour de soi, la compassion et les relations harmonieuses. Incontournable en lithothérapie.",
    vertus: ["Amour", "Compassion", "Guérison émotionnelle", "Confiance"],
    purif:  "Cristal de roche, eau de source"
  },
  {
    name:   "Turquoise",
    emoji:  "🩵",
    img:    "",
    origin: "Iran, Tibet, USA (Arizona)",
    group:  ["équilibre", "amour"],
    chakras: [
      { n: "Gorge", c: "#2980B9" },
      { n: "Cœur",  c: "#27AE60" }
    ],
    signs:  ["Sagittaire", "Poissons", "Scorpion", "Verseau"],
    tagBg:  "#E1F5EE", tagTx: "#085041",
    desc:   "L'une des plus anciennes pierres précieuses du monde, portée par les pharaons, les Amérindiens et les sultans ottomans. La turquoise favorise une communication sincère et protège les voyageurs.",
    vertus: ["Communication", "Sérénité", "Protection voyageurs", "Équilibre corps-esprit"],
    purif:  "Eau courante douce, lune"
  },
  {
    name:   "Pierres 7 Chakras",
    emoji:  "🌈",
    img:    "",
    origin: "Monde entier",
    group:  ["équilibre", "énergie"],
    chakras: [
      { n: "Racine — Grenat / Hématite",     c: "#8B0000" },
      { n: "Sacré — Cornaline",              c: "#E67E22" },
      { n: "Plexus solaire — Citrine",       c: "#F39C12" },
      { n: "Cœur — Aventurine verte",        c: "#27AE60" },
      { n: "Gorge — Lapis-Lazuli",           c: "#2980B9" },
      { n: "Troisième œil — Améthyste",      c: "#6C3483" },
      { n: "Couronne — Cristal de roche",    c: "#9B59B6" }
    ],
    signs:  ["Tous les signes"],
    tagBg:  "#EEEDFE", tagTx: "#3C3489",
    desc:   "L'ensemble des 7 pierres chakras harmonise le système énergétique entier : ancrage (racine), créativité (sacré), confiance (plexus), amour (cœur), expression (gorge), intuition (3e œil) et connexion spirituelle (couronne). Utilisées en méditation ou en soin.",
    vertus: ["Harmonisation complète", "Équilibre énergétique", "Méditation", "Bien-être global"],
    purif:  "Chaque pierre selon ses propriétés"
  }
];
