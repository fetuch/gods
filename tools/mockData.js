const gods = [
  {
    id: 1,
    name: "Horus",
    slug: "horus",
    description:
      "Horus or Her, Heru, Hor in Ancient Egyptian, is one of the most significant ancient Egyptian deities who served many functions, most notably god of kingship and the sky.",
    domain: ["kings", "sky", "war", "protection"],
    avatar: "horus.png"
  },
  {
    id: 2,
    name: "Set",
    slug: "set",
    description:
      "Set or Seth is a god of chaos, fire, deserts, trickery, storms, envy, disorder, violence, and foreigners in ancient Egyptian religion.",
    domain: ["chaos", "trickery", "deserts", "violence"],
    avatar: "seth.jpg"
  },
  {
    id: 3,
    name: "Odin",
    slug: "odin",
    description:
      "Also known as Wōden, Wōdan and Wuotan. Associated with wisdom, healing, death, royalty, the gallows, knowledge, war, battle, victory, sorcery, poetry, frenzy.",
    domain: ["war", "pain"],
    avatar: "odin.jpg"
  },
  {
    id: 4,
    name: "Ares",
    slug: "ares",
    description:
      "One of the Twelve Olympians, the son of Zeus and Hera. Represents the physical or violent and untamed aspect of war.",
    domain: ["war"],
    avatar: "ares.jpg"
  },
  {
    id: 5,
    name: "Athena",
    slug: "athena",
    description:
      "An ancient Greek goddess associated with wisdom, handicraft, and warfare.",
    domain: ["war", "wisdom"],
    avatar: "athena.jpg"
  },
  {
    id: 6,
    name: "Zeus",
    slug: "zeus",
    description:
      "The sky and thunder god in ancient Greek religion, who rules as king of the gods of Mount Olympus.",
    domain: ["war", "wisdom"],
    avatar: "zeus.jpg"
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
