// import wordBank from "../../wordle-bank.txt";
export const defaultboard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = () => {
  try {
    const wordArr = [
      "aback",
      "abase",
      "abate",
      "abbey",
      "abbot",
      "abhor",
      "abide",
      "abled",
      "abode",
      "abort",
      "about",
      "above",
      "abuse",
      "abyss",
      "acorn",
      "acrid",
      "actor",
      "acute",
      "adage",
      "adapt",
      "adept",
      "admin",
      "admit",
      "adobe",
      "adopt",
      "adore",
      "adorn",
      "adult",
      "affix",
      "afire",
      "afoot",
      "afoul",
      "after",
      "again",
      "agape",
      "agate",
      "agent",
      "agile",
      "aging",
      "aglow",
      "agony",
      "agora",
      "agree",
      "ahead",
      "aider",
      "aisle",
      "alarm",
      "album",
      "alert",
      "algae",
      "alibi",
      "alien",
      "align",
      "alike",
      "alive",
      "allay",
      "alley",
      "allot",
      "allow",
      "alloy",
      "aloft",
      "alone",
      "along",
      "aloof",
      "aloud",
      "alpha",
      "altar",
      "alter",
      "amass",
      "amaze",
      "amber",
      "amble",
      "amend",
      "amiss",
      "amity",
      "among",
      "ample",
      "amply",
      "amuse",
      "angel",
      "anger",
      "angle",
      "angry",
      "angst",
      "anime",
      "ankle",
      "annex",
      "annoy",
      "annul",
      "anode",
      "antic",
      "anvil",
      "aorta",
      "apart",
      "aphid",
      "aping",
      "apnea",
      "apple",
      "apply",
      "apron",
      "aptly",
      "arbor",
      "ardor",
      "arena",
      "argue",
      "arise",
      "armor",
      "aroma",
      "arose",
      "array",
      "arrow",
      "arson",
      "artsy",
      "ascot",
      "ashen",
      "aside",
      "askew",
      "assay",
      "asset",
      "atoll",
      "atone",
      "attic",
      "audio",
      "audit",
      "augur",
      "aunty",
      "avail",
      "avert",
      "avian",
      "avoid",
      "await",
      "awake",
      "award",
      "aware",
      "awash",
      "awful",
      "awoke",
      "axial",
      "axiom",
      "axion",
      "azure",
      "bacon",
      "badge",
      "badly",
      "bagel",
      "baggy",
      "baker",
      "baler",
      "balmy",
      "banal",
      "banjo",
      "barge",
      "baron",
      "basal",
      "basic",
      "basil",
      "basin",
      "basis",
      "baste",
      "batch",
      "bathe",
      "baton",
      "batty",
      "bawdy",
      "bayou",
      "beach",
      "beady",
      "beard",
      "beast",
      "beech",
      "beefy",
      "befit",
      "began",
      "begat",
      "beget",
      "begin",
      "begun",
      "being",
      "belch",
      "belie",
      "belle",
      "belly",
      "below",
      "bench",
      "beret",
      "berry",
      "berth",
      "beset",
      "betel",
      "bevel",
      "bezel",
      "bible",
      "bicep",
      "biddy",
      "bigot",
      "bilge",
      "billy",
      "binge",
      "bingo",
      "biome",
      "birch",
      "birth",
      "bison",
      "bitty",
      "black",
      "blade",
      "blame",
      "bland",
      "blank",
      "blare",
      "blast",
      "blaze",
      "bleak",
      "bleat",
      "bleed",
      "bleep",
      "blend",
      "bless",
      "blimp",
      "blind",
      "blink",
      "bliss",
      "blitz",
      "bloat",
      "block",
      "bloke",
      "blond",
      "blood",
      "bloom",
      "blown",
      "bluer",
      "bluff",
      "blunt",
      "blurb",
      "blurt",
      "blush",
      "board",
      "boast",
      "bobby",
      "boney",
      "bongo",
      "bonus",
      "booby",
      "boost",
      "booth",
      "booty",
      "booze",
      "boozy",
      "borax",
      "borne",
      "bosom",
      "bossy",
      "botch",
      "bough",
      "boule",
      "bound",
      "bowel",
      "boxer",
      "brace",
      "braid",
      "brain",
      "brake",
      "brand",
      "brash",
      "brass",
      "brave",
      "bravo",
      "brawl",
      "brawn",
      "bread",
      "break",
      "breed",
      "briar",
      "bribe",
      "brick",
      "bride",
      "brief",
      "brine",
      "bring",
      "brink",
      "briny",
      "brisk",
      "broad",
      "broil",
      "broke",
      "brood",
      "brook",
      "broom",
      "broth",
      "brown",
      "brunt",
      "brush",
      "brute",
      "buddy",
      "budge",
      "buggy",
      "bugle",
      "build",
      "built",
      "bulge",
      "bulky",
      "bully",
      "bunch",
      "bunny",
      "burly",
      "burnt",
      "burst",
      "bused",
      "bushy",
      "butch",
      "butte",
      "buxom",
      "buyer",
      "bylaw",
      "cabal",
      "cabby",
      "cabin",
      "cable",
      "cacao",
      "cache",
      "cacti",
      "caddy",
      "cadet",
      "cadre",
      "caged",
      "cager",
      "cagey",
      "cakes",
      "calyx",
      "camel",
      "cameo",
      "campy",
      "canal",
      "candy",
      "canoe",
      "canon",
      "canto",
      "caper",
      "cappy",
      "carat",
      "cards",
      "caret",
      "cargo",
      "carol",
      "carry",
      "carve",
      "cased",
      "casky",
      "caste",
      "catch",
      "cater",
      "catty",
      "caulk",
      "cause",
      "caved",
      "cease",
      "cedar",
      "ceded",
      "cello",
      "cento",
      "ceres",
      "chafe",
      "chaff",
      "chain",
      "chair",
      "chalk",
      "champ",
      "chant",
      "chaos",
      "chard",
      "charm",
      "chart",
      "chase",
      "chasm",
      "chats",
      "cheap",
      "cheat",
      "check",
      "cheek",
      "cheep",
      "cheer",
      "chess",
      "chest",
      "chews",
      "chewy",
      "chick",
      "chide",
      "chief",
      "child",
      "chill",
      "chime",
      "chimp",
      "china",
      "chine",
      "chink",
      "chino",
      "chips",
      "chirp",
      "chive",
      "chock",
      "choir",
      "choke",
      "chomp",
      "chops",
      "chord",
      "chore",
      "chose",
      "chowk",
      "chows",
      "chrome",
      "chug",
      "chum",
      "chump",
      "chunk",
      "churn",
      "chute",
      "cider",
      "cigar",
      "cilia",
      "cider",
      "cigar",
      "cilia",
      "cinch",
      "circa",
      "cider",
      "cigar",
      "cilia",
      "cider",
      "cigar",
      "cilia",
      "circa",
      "cirri",
      "cited",
      "civic",
      "cider",
      "cigar",
      "cilia",
      "clack",
      "claim",
      "clamor",
      "clamp",
      "clams",
      "clang",
      "clank",
      "clash",
      "clasp",
      "class",
      "clasp",
      "class",
      "clean",
      "clear",
      "cleat",
      "clefs",
      "clerk",
      "click",
      "cliff",
      "climb",
      "cling",
      "clink",
      "clips",
      "cloak",
      "clock",
      "clods",
      "clogs",
      "clone",
      "clove",
      "clown",
      "cloys",
      "clubs",
      "cluck",
      "clued",
      "clues",
      "clump",
      "clung",
      "coach",
      "coast",
      "coats",
      "cocoa",
      "codex",
      "codes",
      "codon",
      "coeds",
      "cogent",
      "coggy",
      "coils",
      "coins",
      "coirs",
      "colas",
      "colby",
      "colds",
      "colic",
      "colon",
      "color",
      "colts",
      "combs",
      "comer",
      "comes",
      "comet",
      "comfy",
      "comic",
      "comma",
      "comus",
      "conch",
      "condo",
      "coney",
      "conga",
      "conic",
      "conks",
      "cooed",
      "cooky",
      "cools",
      "coons",
      "coops",
      "coots",
      "coped",
      "copes",
      "cops",
      "copse",
      "coral",
      "cords",
      "cores",
      "corgi",
      "corks",
      "corms",
      "corns",
      "corny",
      "corps",
      "cosby",
      "cosmo",
      "costs",
      "cotes",
      "coupe",
      "court",
      "coves",
      "covet",
      "covey",
      "cowed",
      "cower",
      "cowl",
      "cowls",
      "coyly",
      "cozen",
      "cozes",
      "crack",
      "craft",
      "cramp",
      "crane",
      "crank",
      "crash",
      "crass",
      "crate",
      "crave",
      "crawl",
      "craze",
      "crazy",
      "creak",
      "cream",
      "credo",
      "creed",
      "creek",
      "creep",
      "creme",
      "crepe",
      "crept",
      "crest",
      "cribs",
      "crick",
      "cried",
      "cries",
      "crime",
      "crisp",
      "croak",
      "crock",
      "crone",
      "crook",
      "croon",
      "cross",
      "croup",
      "crowd",
      "crown",
      "crumb",
      "crump",
      "crust",
      "crypt",
      "cubby",
      "cubit",
      "cuffs",
      "cuing",
      "culls",
      "cumin",
      "cuppa",
      "cupid",
      "curds",
      "cured",
      "cures",
      "curie",
      "curls",
      "curly",
      "curry",
      "curse",
      "curve",
      "curvy",
      "cushy",
      "cuter",
      "cutes",
      "cutie",
      "cutup",
      "cycle",
      "cynic",
      "cysts",
      "czars",
      "dacha",
      "daddy",
      "daily",
      "dairy",
      "daisy",
      "dales",
      "dance",
      "dandy",
      "dared",
      "dares",
      "darks",
      "darns",
      "darts",
      "dashy",
      "dated",
      "dates",
      "datum",
      "daubs",
      "daunt",
      "david",
      "davit",
      "dawns",
      "dawts",
      "dazed",
      "dazes",
      "phlox",
      "phone",
      "phony",
      "photo",
      "piano",
      "picky",
      "piece",
      "piggy",
      "piled",
      "pilgr",
      "pilot",
      "pinch",
      "pined",
      "pingo",
      "pinko",
      "pinky",
      "pinto",
      "pious",
      "pipal",
      "piped",
      "piper",
      "pique",
      "pitch",
      "pithy",
      "pivot",
      "pixel",
      "place",
      "placid",
      "plage",
      "plaid",
      "plain",
      "plait",
      "plane",
      "plank",
      "plant",
      "plasm",
      "plate",
      "plato",
      "plaza",
      "plead",
      "pleat",
      "plena",
      "plian",
      "plink",
      "plod",
      "plods",
      "plops",
      "plow",
      "plows",
      "pluck",
      "plumb",
      "plume",
      "plump",
      "plums",
      "plunk",
      "plush",
      "plush",
      "pluto",
      "plzthx",
      "pocks",
      "podgy",
      "poems",
      "poesy",
      "poets",
      "pogos",
      "point",
      "poise",
      "poked",
      "poker",
      "pokes",
      "pokey",
      "polar",
      "polio",
      "polka",
      "polls",
      "polly",
      "polo",
      "polyp",
      "polys",
      "pomps",
      "ponds",
      "pones",
      "pooch",
      "poofs",
      "pools",
      "pools",
      "poops",
      "popsy",
      "porch",
      "pored",
      "pores",
      "porky",
      "porno",
      "ports",
      "posed",
      "poser",
      "poses",
      "posit",
      "posse",
      "posts",
      "pouch",
      "pound",
      "power",
      "prams",
      "prank",
      "prawn",
      "prays",
      "preen",
      "preps",
      "press",
      "preys",
      "price",
      "pride",
      "prigs",
      "prima",
      "prime",
      "primp",
      "print",
      "prior",
      "prise",
      "prism",
      "privy",
      "probe",
      "prods",
      "prof",
      "profs",
      "progs",
      "promo",
      "prompt",
      "prone",
      "prong",
      "proof",
      "props",
      "prose",
      "prosy",
      "proud",
      "prove",
      "prowl",
      "proxy",
      "prune",
      "pryed",
      "psych",
      "pubic",
      "pucka",
      "pucks",
      "pudgy",
      "puffs",
      "puffy",
      "pukka",
      "pukes",
      "pulch",
      "pules",
      "puler",
      "pules",
      "pulls",
      "pulps",
      "pulpy",
      "pulse",
      "pumas",
      "pumps",
      "punch",
      "punky",
      "punts",
      "pupas",
      "pupil",
      "puppy",
      "puree",
      "purge",
      "purrs",
      "purse",
      "pursy",
      "puses",
      "pushy",
      "pussy",
      "putts",
      "putty",
      "pygmy",
      "pylon",
      "pyres",
      "pyxis",
      "quack",
      "quaff",
      "quail",
      "quake",
      "quaky",
      "quale",
      "qualm",
      "quand",
      "quant",
      "quark",
      "quart",
      "quash",
      "quasi",
      "quays",
      "queal",
      "queen",
      "queer",
      "quell",
      "query",
      "quest",
      "queue",
      "quick",
      "quids",
      "quiet",
      "quill",
      "quilt",
      "quint",
      "quips",
      "quire",
      "quirk",
      "quits",
      "quods",
      "quoin",
      "quoit",
      "quota",
      "quote",
      "quoth",
      "rabid",
      "racer",
      "racks",
      "radii",
      "radio",
      "radix",
      "radon",
      "rafts",
      "rages",
      "rains",
      "raids",
      "rails",
      "raise",
      "rally",
      "rally",
      "ralph",
      "ramps",
      "ranch",
      "rands",
      "range",
      "rangy",
      "ranks",
      "rants",
      "raped",
      "rapes",
      "rapid",
      "rared",
      "rares",
      "rased",
      "rases",
      "rasps",
      "rated",
      "rater",
      "rates",
      "ratio",
      "ratty",
      "ravel",
      "raven",
      "raves",
      "rawer",
      "rawer",
      "rayon",
      "razed",
      "razes",
      "razor",
      "reach",
      "react",
      "ready",
      "realm",
      "reams",
      "reaps",
      "rearm",
      "rears",
      "rebel",
      "rebut",
      "recap",
      "recks",
      "recur",
      "redes",
      "redly",
      "redye",
      "reeds",
      "reefs",
      "reels",
      "reign",
      "reins",
      "relax",
      "relay",
      "relic",
      "remit",
      "remix",
      "renal",
      "rends",
      "renew",
      "rents",
      "repay",
      "repel",
      "repin",
      "reply",
      "reran",
      "rerun",
      "reset",
      "resin",
      "resow",
      "rests",
      "retch",
      "retro",
      "retry",
      "reuse",
      "revel",
      "revue",
      "rheum",
      "rhino",
      "rhyme",
      "rials",
      "ribby",
      "ricer",
      "rices",
      "ricin",
      "rider",
      "rides",
      "ridge",
      "ridgy",
      "riels",
      "rifer",
      "riffs",
      "rifle",
      "rifts",
      "right",
      "rigid",
      "rigor",
      "riled",
      "riles",
      "rills",
      "rinds",
      "rings",
      "rinks",
      "rinse",
      "riots",
      "ripey",
      "risen",
      "riser",
      "rises",
      "risky",
      "risks",
      "risky",
      "risks",
      "risky",
      "risky",
      "risus",
      "rival",
      "rived",
      "riven",
      "river",
      "rives",
      "rivet",
      "roach",
      "roads",
      "roams",
      "roans",
      "roars",
      "roast",
      "robed",
      "robes",
      "robin",
      "robot",
      "rocks",
      "rocky",
      "rodeo",
      "roger",
      "rogue",
      "roils",
      "roily",
      "roles",
      "rolls",
      "roman",
      "roofs",
      "rooks",
      "rooky",
      "rooms",
      "roomy",
      "roose",
      "roost",
      "roots",
      "rooty",
      "roped",
      "ropes",
      "roses",
      "roset",
      "roshi",
      "rosin",
      "rosy",
      "rotas",
      "rotch",
      "rotes",
      "rotis",
      "rotor",
      "rouen",
      "roues",
      "rouge",
      "rough",
      "round",
      "roups",
      "roupy",
      "rouse",
      "roust",
      "route",
      "routh",
      "roved",
      "roven",
      "rover",
      "roves",
      "rowan",
      "rowdy",
      "rowed",
      "rowel",
      "rowen",
      "rower",
      "rowse",
      "roxic",
      "royal",
      "rubes",
      "ruble",
      "rubus",
      "ruche",
      "rucks",
      "ruddy",
      "ruder",
      "ruffe",
      "ruffs",
      "rufus",
      "ruger",
      "ruing",
      "ruins",
      "ruled",
      "ruler",
      "rules",
      "rumor",
      "rumox",
      "rumps",
      "runes",
      "rungs",
      "runic",
      "runny",
      "runts",
      "runty",
      "rupee",
      "rural",
      "ruses",
      "rushy",
      "rusks",
      "rusts",
      "rusty",
      "rutin",
      "rutty",
      "saber",
      "sable",
      "sabot",
      "sabra",
      "sabre",
      "sacks",
      "sacra",
      "sades",
      "sadly",
      "safer",
      "safes",
      "sagas",
      "sager",
      "sages",
      "saggy",
      "sahib",
      "saids",
      "sails",
      "saint",
      "saker",
      "sakes",
      "sakis",
      "salad",
      "salem",
      "sales",
      "sally",
      "salol",
      "salon",
      "salts",
      "salty",
      "samba",
      "sands",
      "sandy",
      "saned",
      "saner",
      "sanes",
      "sanga",
      "santo",
      "saree",
      "sarge",
      "saris",
      "sarod",
      "sated",
      "sates",
      "satin",
      "satis",
      "satyr",
      "sauce",
      "sauch",
      "saucy",
      "sauls",
      "sault",
      "sauna",
      "saute",
      "saver",
      "savor",
      "savvy",
      "sawed",
      "sawer",
      "saxes",
      "sayid",
      "scabs",
      "scads",
      "scags",
      "scamp",
      "scams",
      "scans",
      "scant",
      "scape",
      "scare",
      "scarf",
      "scary",
      "scats",
      "scatt",
      "scaup",
      "scene",
      "scent",
      "schmo",
      "schul",
      "schwa",
      "scion",
      "scold",
      "scone",
      "scoot",
      "scope",
      "scops",
      "score",
      "scorn",
      "scour",
      "scout",
      "scowl",
      "scows",
      "scrag",
      "scram",
      "scrap",
      "scree",
      "screw",
      "scrim",
      "scrip",
      "scrod",
      "scrub",
      "scrum",
      "scudi",
      "scudo",
      "scuds",
      "scuff",
      "sculk",
      "scull",
      "sculp",
      "scums",
      "scups",
      "scurf",
      "scuta",
      "scute",
      "scuts",
      "seals",
      "seams",
      "seamy",
      "sears",
      "seats",
      "sebum",
      "sects",
      "sedan",
      "sedge",
      "sedgy",
      "sedum",
      "seeds",
      "seedy",
      "seeks",
      "seels",
      "seely",
      "seems",
      "seeps",
      "seepy",
      "seers",
      "segni",
      "segno",
      "segos",
      "segue",
      "seifs",
      "seine",
      "seise",
      "seism",
      "seize",
      "selfs",
      "selva",
      "semes",
      "semis",
      "sends",
      "sengi",
      "senor",
      "sensa",
      "sense",
      "senti",
      "sepal",
      "sepia",
      "sepic",
      "sepos",
      "serac",
      "serai",
      "seral",
      "sered",
      "serer",
      "seres",
      "serfs",
      "serge",
      "serif",
      "serin",
      "serum",
      "serve",
      "setup",
      "seven",
      "sever",
      "sewer",
      "shack",
      "shade",
      "shady",
      "shaft",
      "shake",
      "shaky",
      "shale",
      "shall",
      "shalt",
      "shame",
      "shank",
      "shape",
      "shard",
      "share",
      "shark",
      "sharp",
      "shave",
      "shawl",
      "shear",
      "sheen",
      "sheep",
      "sheer",
      "sheet",
      "sheik",
      "shelf",
      "shell",
      "shied",
      "shift",
      "shine",
      "shiny",
      "shire",
      "shirk",
      "shirt",
      "shoal",
      "shock",
      "shone",
      "shook",
      "shoot",
      "shore",
      "shorn",
      "short",
      "shout",
      "shove",
      "shown",
      "showy",
      "shrew",
      "shrub",
      "shrug",
      "shuck",
      "shunt",
      "shush",
      "shyly",
      "siege",
      "sieve",
      "sight",
      "sigma",
      "silky",
      "silly",
      "since",
      "sinew",
      "singe",
      "siren",
      "sissy",
      "sixth",
      "sixty",
      "skate",
      "skier",
      "skiff",
      "skill",
      "skimp",
      "skirt",
      "skulk",
      "skull",
      "skunk",
      "slack",
      "slain",
      "slang",
      "slant",
      "slash",
      "slate",
      "slave",
      "sleek",
      "sleep",
      "sleet",
      "slept",
      "slice",
      "slick",
      "slide",
      "slime",
      "slimy",
      "sling",
      "slink",
      "sloop",
      "slope",
      "slosh",
      "sloth",
      "slump",
      "slung",
      "slunk",
      "slurp",
      "slush",
      "slyly",
      "smack",
      "small",
      "smart",
      "smash",
      "smear",
      "smell",
      "smelt",
      "smile",
      "smirk",
      "smite",
      "smith",
      "smock",
      "smoke",
      "smoky",
      "smote",
      "snack",
      "snail",
      "snake",
      "snaky",
      "snare",
      "snarl",
      "sneak",
      "sneer",
      "snide",
      "sniff",
      "snipe",
      "snoop",
      "snore",
      "snort",
      "snout",
      "snowy",
      "snuck",
      "snuff",
      "soapy",
      "sober",
      "soggy",
      "solar",
      "solid",
      "solve",
      "sonar",
      "sonic",
      "sooth",
      "sooty",
      "sorry",
      "sound",
      "south",
      "sower",
      "space",
      "spade",
      "spank",
      "spare",
      "spark",
      "spasm",
      "spawn",
      "speak",
      "spear",
      "speck",
      "speed",
      "spell",
      "spelt",
      "spend",
      "spent",
      "sperm",
      "spice",
      "spicy",
      "spied",
      "spiel",
      "spike",
      "spiky",
      "spill",
      "spilt",
      "spine",
      "spiny",
      "spire",
      "spite",
      "splat",
      "split",
      "spoil",
      "spoke",
      "spoof",
      "spook",
      "spool",
      "spoon",
      "spore",
      "sport",
      "spout",
      "spray",
      "spree",
      "sprig",
      "spunk",
      "spurn",
      "spurt",
      "squad",
      "squat",
      "squib",
      "stack",
      "staff",
      "stage",
      "staid",
      "stain",
      "stair",
      "stake",
      "stale",
      "stalk",
      "stall",
      "stamp",
      "stand",
      "stank",
      "stare",
      "stark",
      "start",
      "stash",
      "state",
      "stave",
      "stead",
      "steak",
      "steal",
      "steam",
      "steed",
      "steel",
      "steep",
      "steer",
      "stein",
      "stern",
      "stick",
      "stiff",
      "still",
      "stilt",
      "sting",
      "stink",
      "stint",
      "stock",
      "stoic",
      "stoke",
      "stole",
      "stomp",
      "stone",
      "stony",
      "stood",
      "stool",
      "stoop",
      "store",
      "stork",
      "storm",
      "story",
      "stout",
      "stove",
      "strap",
      "straw",
      "stray",
      "strip",
      "strut",
      "stuck",
      "study",
      "stuff",
      "stump",
      "stung",
      "stunk",
      "stunt",
      "style",
      "suave",
      "sugar",
      "suing",
      "suite",
      "sulky",
      "sully",
      "sumac",
      "sunny",
      "super",
      "surer",
      "surge",
      "surly",
      "sushi",
      "swami",
      "swamp",
      "swarm",
      "swash",
      "swath",
      "swear",
      "sweat",
      "sweep",
      "sweet",
      "swell",
      "swept",
      "swift",
      "swill",
      "swine",
      "swing",
      "swirl",
      "swish",
      "swoon",
      "swoop",
      "sword",
      "swore",
      "sworn",
      "swung",
      "synod",
      "syrup",
      "tabby",
      "table",
      "taboo",
      "tacit",
      "tacky",
      "taffy",
      "taint",
      "taken",
      "taker",
      "tally",
      "talon",
      "tamer",
      "tango",
      "tangy",
      "taper",
      "tapir",
      "tardy",
      "tarot",
      "taste",
      "tasty",
      "tatty",
      "taunt",
      "tawny",
      "teach",
      "teary",
      "tease",
      "teddy",
      "teeth",
      "tempo",
      "tenet",
      "tenor",
      "tense",
      "tenth",
      "tepee",
      "tepid",
      "terra",
      "terse",
      "testy",
      "thank",
      "theft",
      "their",
      "theme",
      "there",
      "these",
      "theta",
      "thick",
      "thief",
      "thigh",
      "thing",
      "think",
      "third",
      "thong",
      "thorn",
      "those",
      "three",
      "threw",
      "throb",
      "throw",
      "thrum",
      "thumb",
      "thump",
      "thyme",
      "tiara",
      "tibia",
      "tidal",
      "tiger",
      "tight",
      "tilde",
      "timer",
      "timid",
      "tipsy",
      "titan",
      "tithe",
      "title",
      "toast",
      "today",
      "toddy",
      "token",
      "tonal",
      "tonga",
      "tonic",
      "tooth",
      "topaz",
      "topic",
      "torch",
      "torso",
      "torus",
      "total",
      "totem",
      "touch",
      "tough",
      "towel",
      "tower",
      "toxic",
      "toxin",
      "trace",
      "track",
      "tract",
      "trade",
      "trail",
      "train",
      "trait",
      "tramp",
      "trash",
      "trawl",
      "tread",
      "treat",
      "trend",
      "triad",
      "trial",
      "tribe",
      "trice",
      "trick",
      "tried",
      "tripe",
      "trite",
      "troll",
      "troop",
      "trope",
      "trout",
      "trove",
      "truce",
      "truck",
      "truer",
      "truly",
      "trump",
      "trunk",
      "truss",
      "trust",
      "truth",
      "tryst",
      "tubal",
      "tuber",
      "tulip",
      "tulle",
      "tumor",
      "tunic",
      "turbo",
      "tutor",
      "twang",
      "tweak",
      "tweed",
      "tweet",
      "twice",
      "twine",
      "twirl",
      "twist",
      "twixt",
      "tying",
      "udder",
      "ulcer",
      "ultra",
      "umbra",
      "uncle",
      "uncut",
      "under",
      "undid",
      "undue",
      "unfed",
      "unfit",
      "unify",
      "union",
      "unite",
      "unity",
      "unlit",
      "unmet",
      "unset",
      "untie",
      "until",
      "unwed",
      "unzip",
      "upper",
      "upset",
      "urban",
      "urine",
      "usage",
      "usher",
      "using",
      "usual",
      "usurp",
      "utile",
      "utter",
      "vague",
      "valet",
      "valid",
      "valor",
      "value",
      "valve",
      "vapid",
      "vapor",
      "vault",
      "vaunt",
      "vegan",
      "venom",
      "venue",
      "verge",
      "verse",
      "verso",
      "verve",
      "vicar",
      "video",
      "vigil",
      "vigor",
      "villa",
      "vinyl",
      "viola",
      "viper",
      "viral",
      "virus",
      "visit",
      "visor",
      "vista",
      "vital",
      "vivid",
      "vixen",
      "vocal",
      "vodka",
      "vogue",
      "voice",
      "voila",
      "vomit",
      "voter",
      "vouch",
      "vowel",
      "vying",
      "wacky",
      "wafer",
      "wager",
      "wagon",
      "waist",
      "waive",
      "waltz",
      "warty",
      "waste",
      "watch",
      "water",
      "waver",
      "waxen",
      "weary",
      "weave",
      "wedge",
      "weedy",
      "weigh",
      "weird",
      "welch",
      "welsh",
      "wench",
      "whack",
      "whale",
      "wharf",
      "wheat",
      "wheel",
      "whelp",
      "where",
      "which",
      "whiff",
      "while",
      "whine",
      "whiny",
      "whirl",
      "whisk",
      "white",
      "whole",
      "whoop",
      "whose",
      "widen",
      "wider",
      "widow",
      "width",
      "wield",
      "wight",
      "willy",
      "wimpy",
      "wince",
      "winch",
      "windy",
      "wiser",
      "wispy",
      "witch",
      "witty",
      "woken",
      "woman",
      "women",
      "woody",
      "wooer",
      "wooly",
      "woozy",
      "wordy",
      "world",
      "worry",
      "worse",
      "worst",
      "worth",
      "would",
      "wound",
      "woven",
      "wrack",
      "wrath",
      "wreak",
      "wreck",
      "wrest",
      "wring",
      "wrist",
      "write",
      "wrong",
      "wrote",
      "wrung",
      "wryly",
      "yacht",
      "yearn",
      "yeast",
      "yield",
      "young",
      "youth",
      "zebra",
      "zesty",
      "zonal",
    ];

    const wordSet = new Set(wordArr);
    let actualWords = wordArr[Math.floor(Math.random() * wordArr.length)];
    return { wordSet, actualWords }; // Return both wordSet and actualWords
  } catch (error) {
    console.error("Error generating wordSet:", error);
    throw error;
  }
};

//     const wordSet = new Set(wordArr);
//     let actualWords;
//     // actualWords = Array.from(wordSet)[Math.floor(Math.random() * wordSet.size)];
//     actualWords = wordArr[Math.floor(Math.random() * wordArr.length)];
//     return wordSet;
//   } catch (error) {
//     console.error("Error generating wordSet:", error);
//     throw error;
//   }
// };
