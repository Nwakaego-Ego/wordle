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
    let wordArr = [

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
  "cache

",
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
  "dazes"
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
