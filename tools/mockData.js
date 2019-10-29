const gods = [
  {
    id: 1,
    name: "Horus",
    slug: "horus",
    description:
      "Horus or Her, Heru, Hor in Ancient Egyptian, is one of the most significant ancient Egyptian deities who served many functions, most notably god of kingship and the sky.",
    domain: ["kings", "sky", "war", "protection"]
  },
  {
    id: 2,
    name: "Set",
    slug: "set",
    description:
      "Set or Seth is a god of chaos, fire, deserts, trickery, storms, envy, disorder, violence, and foreigners in ancient Egyptian religion.",
    domain: ["chaos", "trickery", "deserts", "violence"]
  },
  {
    id: 3,
    name: "Kokou",
    slug: "kokou",
    description:
      "In the Yoruba religion of Benin, a Kokou is one of the most highly feared warrior Undergods.",
    domain: ["war", "pain"]
  },
  {
    id: 4,
    name: "Ares",
    slug: "ares",
    description:
      "One of the Twelve Olympians, the son of Zeus and Hera. Represents the physical or violent and untamed aspect of war.",
    domain: ["war"]
  },
  {
    id: 5,
    name: "Athena",
    slug: "athena",
    description:
      "An ancient Greek goddess associated with wisdom, handicraft, and warfare.",
    domain: ["war", "wisdom"]
  }
];

const newGod = {
  id: null,
  name: "",
  description: "",
  domain: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newGod,
  gods
};