export const costumes = [
	// HORROR - CLASSIQUES
	{
		id: 1,
		category: "horror",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/vampire.jpg",
		popularity: 8,
		tags: ["blood", "cape", "fangs", "nocturnal"],
		materials: [
			{ material: "Black cape", quantity: "1" },
			{ material: "Plastic fangs", quantity: "1 set" },
			{ material: "White face paint", quantity: "1 tube" },
		],
		translations: [
			{
				language_code: "en",
				name: "Vampire",
				description: "Classic vampire costume with cape and fangs",
			},
			{
				language_code: "fr",
				name: "Vampire",
				description: "Costume de vampire classique avec cape et crocs",
			},
		],
	},
	{
		id: 2,
		category: "horror",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/zombie.jpg",
		popularity: 9,
		tags: ["undead", "blood", "apocalypse", "walking dead"],
		materials: [
			{ material: "Old clothes", quantity: "1 set" },
			{ material: "Fake blood", quantity: "1 bottle" },
			{ material: "Grey face paint", quantity: "1 tube" },
		],
		translations: [
			{
				language_code: "en",
				name: "Zombie",
				description: "Undead zombie with torn clothes and realistic wounds",
			},
			{
				language_code: "fr",
				name: "Zombie",
				description:
					"Zombie mort-vivant avec des vêtements déchirés et des blessures réalistes",
			},
		],
	},
	{
		id: 3,
		category: "horror",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/frankenstein.jpg",
		popularity: 7,
		tags: ["monster", "stitches", "bolts", "classic"],
		materials: [
			{ material: "Green face paint", quantity: "1 tube" },
			{ material: "Neck bolts", quantity: "2" },
			{ material: "Black wig", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Frankenstein's Monster",
				description: "The classic reanimated monster with bolts and stitches",
			},
			{
				language_code: "fr",
				name: "Monstre de Frankenstein",
				description:
					"Le monstre classique réanimé avec des boulons et des sutures",
			},
		],
	},

	// FANTASY - MAGIE
	{
		id: 4,
		category: "fantasy",
		difficulty: "medium",
		price_range: "low",
		image_url: "/images/witch.jpg",
		popularity: 8,
		tags: ["broom", "hat", "magic", "cauldron"],
		materials: [
			{ material: "Witch hat", quantity: "1" },
			{ material: "Broom", quantity: "1" },
			{ material: "Black dress", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Witch",
				description: "Traditional witch costume with hat and broom",
			},
			{
				language_code: "fr",
				name: "Sorcière",
				description: "Costume de sorcière traditionnel avec chapeau et balai",
			},
		],
	},
	{
		id: 5,
		category: "fantasy",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/wizard.jpg",
		popularity: 7,
		tags: ["magic", "staff", "robe", "spellbook"],
		materials: [
			{ material: "Wizard robe", quantity: "1" },
			{ material: "Pointed hat", quantity: "1" },
			{ material: "Magic staff", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Wizard",
				description: "Powerful wizard with robe, hat and magical staff",
			},
			{
				language_code: "fr",
				name: "Magicien",
				description: "Puissant magicien avec robe, chapeau et bâton magique",
			},
		],
	},
	{
		id: 6,
		category: "fantasy",
		difficulty: "hard",
		price_range: "medium",
		image_url: "/images/fairy.jpg",
		popularity: 8,
		tags: ["wings", "sparkle", "magic", "nature"],
		materials: [
			{ material: "Fairy wings", quantity: "1 pair" },
			{ material: "Sparkly dress", quantity: "1" },
			{ material: "Magic wand", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Fairy",
				description: "Enchanting fairy with wings and magical accessories",
			},
			{
				language_code: "fr",
				name: "Fée",
				description: "Fée enchanteresse avec ailes et accessoires magiques",
			},
		],
	},

	// MOVIE/TV - POP CULTURE
	{
		id: 7,
		category: "movie",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/superhero.jpg",
		popularity: 9,
		tags: ["cape", "mask", "hero", "comics"],
		materials: [
			{ material: "Cape", quantity: "1" },
			{ material: "Mask", quantity: "1" },
			{ material: "Bodysuit", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Superhero",
				description: "Custom superhero costume with cape and mask",
			},
			{
				language_code: "fr",
				name: "Super-héros",
				description: "Costume de super-héros personnalisé avec cape et masque",
			},
		],
	},
	{
		id: 8,
		category: "movie",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/pirate.jpg",
		popularity: 8,
		tags: ["sea", "sword", "treasure", "parrot"],
		materials: [
			{ material: "Eye patch", quantity: "1" },
			{ material: "Toy sword", quantity: "1" },
			{ material: "Striped shirt", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Pirate",
				description: "Swashbuckling pirate with eye patch and sword",
			},
			{
				language_code: "fr",
				name: "Pirate",
				description: "Pirate flamboyant avec cache-œil et épée",
			},
		],
	},
	{
		id: 9,
		category: "movie",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/astronaut.jpg",
		popularity: 9,
		tags: ["space", "nasa", "moon", "explorer"],
		materials: [
			{ material: "Space helmet", quantity: "1" },
			{ material: "White bodysuit", quantity: "1" },
			{ material: "Oxygen tank", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Astronaut",
				description: "Space explorer with helmet and NASA-style suit",
			},
			{
				language_code: "fr",
				name: "Astronaute",
				description:
					"Explorateur spatial avec casque et combinaison style NASA",
			},
		],
	},

	// ANIMALS - ADORABLES
	{
		id: 10,
		category: "animal",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/cat.jpg",
		popularity: 9,
		tags: ["whiskers", "tail", "ears", "playful"],
		materials: [
			{ material: "Cat ears", quantity: "1 pair" },
			{ material: "Tail", quantity: "1" },
			{ material: "Black leotard", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Cat",
				description: "Playful cat with ears, tail and whiskers",
			},
			{
				language_code: "fr",
				name: "Chat",
				description: "Chat joueur avec oreilles, queue et moustaches",
			},
		],
	},
	{
		id: 11,
		category: "animal",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/lion.jpg",
		popularity: 8,
		tags: ["majestic", "wild", "king", "safari"],
		materials: [
			{ material: "Lion mane", quantity: "1" },
			{ material: "Brown bodysuit", quantity: "1" },
			{ material: "Face paint", quantity: "1 set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Lion",
				description: "King of the jungle with majestic mane",
			},
			{
				language_code: "fr",
				name: "Lion",
				description: "Roi de la jungle avec une crinière majestueuse",
			},
		],
	},
	{
		id: 12,
		category: "animal",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/butterfly.jpg",
		popularity: 7,
		tags: ["wings", "colorful", "delicate", "spring"],
		materials: [
			{ material: "Butterfly wings", quantity: "1 pair" },
			{ material: "Colorful dress", quantity: "1" },
			{ material: "Antenna headband", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Butterfly",
				description: "Colorful butterfly with delicate wings",
			},
			{
				language_code: "fr",
				name: "Papillon",
				description: "Papillon coloré avec des ailes délicates",
			},
		],
	},

	// PROFESSIONNELS - MÉTIERS
	{
		id: 13,
		category: "professional",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/doctor.jpg",
		popularity: 7,
		tags: ["medical", "stethoscope", "lab coat", "health"],
		materials: [
			{ material: "White lab coat", quantity: "1" },
			{ material: "Stethoscope", quantity: "1" },
			{ material: "Face mask", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Doctor",
				description: "Medical professional with lab coat and stethoscope",
			},
			{
				language_code: "fr",
				name: "Docteur",
				description: "Professionnel médical avec blouse et stéthoscope",
			},
		],
	},
	{
		id: 14,
		category: "professional",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/firefighter.jpg",
		popularity: 8,
		tags: ["hero", "fire", "helmet", "rescue"],
		materials: [
			{ material: "Firefighter helmet", quantity: "1" },
			{ material: "Yellow jacket", quantity: "1" },
			{ material: "Hose", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Firefighter",
				description: "Brave firefighter with helmet and jacket",
			},
			{
				language_code: "fr",
				name: "Pompier",
				description: "Courageux pompier avec casque et veste",
			},
		],
	},
	{
		id: 15,
		category: "professional",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/chef.jpg",
		popularity: 7,
		tags: ["cooking", "food", "apron", "kitchen"],
		materials: [
			{ material: "Chef hat", quantity: "1" },
			{ material: "White apron", quantity: "1" },
			{ material: "Wooden spoon", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Chef",
				description: "Professional chef with hat and apron",
			},
			{
				language_code: "fr",
				name: "Chef cuisinier",
				description: "Chef professionnel avec toque et tablier",
			},
		],
	},

	// HISTORIQUE - ÉPOQUES
	{
		id: 16,
		category: "historical",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/knight.jpg",
		popularity: 8,
		tags: ["armor", "sword", "shield", "castle"],
		materials: [
			{ material: "Armor set", quantity: "1" },
			{ material: "Sword", quantity: "1" },
			{ material: "Shield", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Medieval Knight",
				description: "Brave knight in shining armor with sword and shield",
			},
			{
				language_code: "fr",
				name: "Chevalier Médiéval",
				description:
					"Brave chevalier en armure étincelante avec épée et bouclier",
			},
		],
	},
	{
		id: 17,
		category: "historical",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/pharaoh.jpg",
		popularity: 7,
		tags: ["egypt", "pyramid", "gold", "ancient"],
		materials: [
			{ material: "Pharaoh headdress", quantity: "1" },
			{ material: "White linen", quantity: "2 meters" },
			{ material: "Gold jewelry", quantity: "set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Egyptian Pharaoh",
				description: "Ancient Egyptian ruler with headdress and accessories",
			},
			{
				language_code: "fr",
				name: "Pharaon Égyptien",
				description:
					"Souverain de l'Égypte ancienne avec coiffe et accessoires",
			},
		],
	},
	{
		id: 18,
		category: "historical",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/flapper.jpg",
		popularity: 6,
		tags: ["1920s", "jazz", "fringe", "great gatsby"],
		materials: [
			{ material: "Fringe dress", quantity: "1" },
			{ material: "Feather headband", quantity: "1" },
			{ material: "Long pearls", quantity: "1 strand" },
		],
		translations: [
			{
				language_code: "en",
				name: "1920s Flapper",
				description: "Roaring twenties dancer with fringe dress and headband",
			},
			{
				language_code: "fr",
				name: "Flapper des Années 20",
				description:
					"Danseuse des années folles avec robe à franges et bandeau",
			},
		],
	},

	// CREATURES MYTHIQUES
	{
		id: 19,
		category: "fantasy",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/mermaid.jpg",
		popularity: 9,
		tags: ["ocean", "tail", "scales", "underwater"],
		materials: [
			{ material: "Mermaid tail", quantity: "1" },
			{ material: "Seashell top", quantity: "1" },
			{ material: "Shimmery makeup", quantity: "set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Mermaid",
				description: "Mystical mermaid with shimmering tail",
			},
			{
				language_code: "fr",
				name: "Sirène",
				description: "Sirène mystique avec queue scintillante",
			},
		],
	},
	{
		id: 20,
		category: "fantasy",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/unicorn.jpg",
		popularity: 8,
		tags: ["rainbow", "horn", "magical", "sparkle"],
		materials: [
			{ material: "Unicorn horn", quantity: "1" },
			{ material: "Rainbow wig", quantity: "1" },
			{ material: "Sparkly tutu", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Unicorn",
				description: "Magical unicorn with horn and rainbow colors",
			},
			{
				language_code: "fr",
				name: "Licorne",
				description: "Licorne magique avec corne et couleurs arc-en-ciel",
			},
		],
	},
	{
		id: 21,
		category: "fantasy",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/dragon.jpg",
		popularity: 8,
		tags: ["fire", "wings", "scales", "mythical"],
		materials: [
			{ material: "Dragon mask", quantity: "1" },
			{ material: "Wings", quantity: "1 pair" },
			{ material: "Scale pattern bodysuit", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Dragon",
				description: "Fierce dragon with wings and scales",
			},
			{
				language_code: "fr",
				name: "Dragon",
				description: "Dragon féroce avec ailes et écailles",
			},
		],
	},

	// HUMOUR - DÉLICIEUSEMENT DRÔLE
	{
		id: 22,
		category: "funny",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/taco.jpg",
		popularity: 7,
		tags: ["food", "mexican", "funny", "delicious"],
		materials: [
			{ material: "Brown bodysuit", quantity: "1" },
			{ material: "Felt ingredients", quantity: "set" },
			{ material: "Lettuce fringe", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Taco",
				description: "Delicious walking taco costume",
			},
			{
				language_code: "fr",
				name: "Taco",
				description: "Délicieux costume de taco ambulant",
			},
		],
	},
	{
		id: 23,
		category: "funny",
		difficulty: "easy",
		price_range: "medium",
		image_url: "/images/dinosaur.jpg",
		popularity: 9,
		tags: ["giant", "inflatable", "prehistoric", "funny"],
		materials: [
			{ material: "Inflatable costume", quantity: "1" },
			{ material: "Battery pack", quantity: "1" },
			{ material: "Small fan", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Inflatable Dinosaur",
				description: "Giant inflatable T-Rex costume",
			},
			{
				language_code: "fr",
				name: "Dinosaure Gonflable",
				description: "Costume de T-Rex géant gonflable",
			},
		],
	},
	{
		id: 24,
		category: "funny",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/banana.jpg",
		popularity: 6,
		tags: ["fruit", "yellow", "simple", "funny"],
		materials: [
			{ material: "Banana costume", quantity: "1" },
			{ material: "Yellow tights", quantity: "1 pair" },
		],
		translations: [
			{
				language_code: "en",
				name: "Banana",
				description: "Simple yet hilarious banana costume",
			},
			{
				language_code: "fr",
				name: "Banane",
				description: "Costume de banane simple mais hilarant",
			},
		],
	},

	// SUPER-HÉROS SPÉCIFIQUES
	{
		id: 25,
		category: "movie",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/spiderman.jpg",
		popularity: 9,
		tags: ["marvel", "web", "superhero", "comics"],
		materials: [
			{ material: "Spider-Man suit", quantity: "1" },
			{ material: "Web shooter", quantity: "2" },
			{ material: "Mask", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Spider-Man",
				description: "Friendly neighborhood Spider-Man",
			},
			{
				language_code: "fr",
				name: "Spider-Man",
				description: "L'ami du quartier Spider-Man",
			},
		],
	},
	{
		id: 26,
		category: "movie",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/batman.jpg",
		popularity: 9,
		tags: ["dc", "cape", "cowl", "superhero"],
		materials: [
			{ material: "Batsuit", quantity: "1" },
			{ material: "Cape", quantity: "1" },
			{ material: "Utility belt", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Batman",
				description: "Dark knight crime fighter",
			},
			{
				language_code: "fr",
				name: "Batman",
				description: "Justicier masqué, chevalier noir",
			},
		],
	},
	{
		id: 27,
		category: "movie",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/wonderwoman.jpg",
		popularity: 8,
		tags: ["dc", "amazon", "warrior", "superhero"],
		materials: [
			{ material: "Bodice and skirt", quantity: "1 set" },
			{ material: "Tiara", quantity: "1" },
			{ material: "Lasso of truth", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Wonder Woman",
				description: "Amazonian warrior princess",
			},
			{
				language_code: "fr",
				name: "Wonder Woman",
				description: "Princesse guerrière amazone",
			},
		],
	},

	// PERSONNAGES DE JEUX VIDÉO
	{
		id: 28,
		category: "movie",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/mario.jpg",
		popularity: 9,
		tags: ["nintendo", "plumber", "video game", "mustache"],
		materials: [
			{ material: "Red cap", quantity: "1" },
			{ material: "Overalls", quantity: "1" },
			{ material: "Fake mustache", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Mario",
				description: "Italian plumber from the Mushroom Kingdom",
			},
			{
				language_code: "fr",
				name: "Mario",
				description: "Plombier italien du Royaume Champignon",
			},
		],
	},
	{
		id: 29,
		category: "movie",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/laracroft.jpg",
		popularity: 8,
		tags: ["adventure", "archaeologist", "video game", "action"],
		materials: [
			{ material: "Tank top", quantity: "1" },
			{ material: "Shorts", quantity: "1" },
			{ material: "Holster", quantity: "2" },
		],
		translations: [
			{
				language_code: "en",
				name: "Lara Croft",
				description: "Tomb Raider adventurer",
			},
			{
				language_code: "fr",
				name: "Lara Croft",
				description: "Aventurière de Tomb Raider",
			},
		],
	},
	{
		id: 30,
		category: "movie",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/amongus.jpg",
		popularity: 7,
		tags: ["video game", "space", "impostor", "simple"],
		materials: [
			{ material: "Colored bodysuit", quantity: "1" },
			{ material: "Backpack", quantity: "1" },
			{ material: "Visor", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Among Us Character",
				description: "Suspicious space crewmate",
			},
			{
				language_code: "fr",
				name: "Personnage Among Us",
				description: "Membre d'équipage spatial suspect",
			},
		],
	},

	// MONSTRES MODERNES
	{
		id: 31,
		category: "horror",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/slenderman.jpg",
		popularity: 6,
		tags: ["internet", "tall", "suit", "creepy"],
		materials: [
			{ material: "Black suit", quantity: "1" },
			{ material: "White mask", quantity: "1" },
			{ material: "Tentacle extensions", quantity: "4-8" },
		],
		translations: [
			{
				language_code: "en",
				name: "Slender Man",
				description: "Internet urban legend tall man",
			},
			{
				language_code: "fr",
				name: "Slender Man",
				description: "Légende urbaine d'internet, l'homme grand et mince",
			},
		],
	},
	{
		id: 32,
		category: "horror",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/demogorgon.jpg",
		popularity: 7,
		tags: ["stranger things", "flower face", "monster", "upside down"],
		materials: [
			{ material: "Monster mask", quantity: "1" },
			{ material: "Bodysuit", quantity: "1" },
			{ material: "Prosthetic pieces", quantity: "set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Demogorgon",
				description: "Stranger Things otherworldly creature",
			},
			{
				language_code: "fr",
				name: "Démogorgon",
				description: "Créature d'un autre monde de Stranger Things",
			},
		],
	},

	// ANIMALS - PLUS D'OPTIONS
	{
		id: 33,
		category: "animal",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/panda.jpg",
		popularity: 8,
		tags: ["bamboo", "cute", "black and white", "china"],
		materials: [
			{ material: "Panda hoodie", quantity: "1" },
			{ material: "Black leggings", quantity: "1 pair" },
			{ material: "Bamboo stick", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Panda",
				description: "Cute black and white bamboo lover",
			},
			{
				language_code: "fr",
				name: "Panda",
				description: "Mignon panda noir et blanc amateur de bambou",
			},
		],
	},
	{
		id: 34,
		category: "animal",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/bee.jpg",
		popularity: 7,
		tags: ["insect", "stripes", "wings", "honey"],
		materials: [
			{ material: "Black and yellow stripes", quantity: "1" },
			{ material: "Bee wings", quantity: "1 pair" },
			{ material: "Antenna headband", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Bee",
				description: "Buzzing bee with stripes and wings",
			},
			{
				language_code: "fr",
				name: "Abeille",
				description: "Abeille bourdonnante avec rayures et ailes",
			},
		],
	},

	// FANTASY - ADDITIONNEL
	{
		id: 35,
		category: "fantasy",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/elf.jpg",
		popularity: 7,
		tags: ["forest", "pointy ears", "nature", "magical"],
		materials: [
			{ material: "Pointy ears", quantity: "1 pair" },
			{ material: "Green tunic", quantity: "1" },
			{ material: "Bow and arrow", quantity: "1 set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Elf",
				description: "Woodland elf with pointy ears and nature elements",
			},
			{
				language_code: "fr",
				name: "Elfe",
				description:
					"Elfe des bois avec oreilles pointues et éléments naturels",
			},
		],
	},
	{
		id: 36,
		category: "fantasy",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/dwarf.jpg",
		popularity: 6,
		tags: ["beard", "axe", "mining", "strong"],
		materials: [
			{ material: "Fake beard", quantity: "1" },
			{ material: "Axe", quantity: "1" },
			{ material: "Helmet", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Dwarf",
				description: "Stout dwarf with beard and axe",
			},
			{
				language_code: "fr",
				name: "Nain",
				description: "Nain robuste avec barbe et hache",
			},
		],
	},

	// HISTORIQUE - SUPPLEMENT
	{
		id: 37,
		category: "historical",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/gladiator.jpg",
		popularity: 7,
		tags: ["rome", "colosseum", "warrior", "sandals"],
		materials: [
			{ material: "Armor pieces", quantity: "set" },
			{ material: "Helmet", quantity: "1" },
			{ material: "Sword", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Roman Gladiator",
				description: "Ancient Roman warrior with armor and helmet",
			},
			{
				language_code: "fr",
				name: "Gladiateur Romain",
				description: "Guerrier de la Rome antique avec armure et casque",
			},
		],
	},
	{
		id: 38,
		category: "historical",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/victorian.jpg",
		tags: ["elegant", "dress", "19th century", "corset"],
		materials: [
			{ material: "Victorian dress", quantity: "1" },
			{ material: "Parasol", quantity: "1" },
			{ material: "Gloves", quantity: "1 pair" },
		],
		translations: [
			{
				language_code: "en",
				name: "Victorian Lady",
				description: "Elegant Victorian era woman with dress and accessories",
			},
			{
				language_code: "fr",
				name: "Dame Victorienne",
				description:
					"Élégante femme de l'époque victorienne avec robe et accessoires",
			},
		],
	},
	{
		id: 39,
		category: "funny",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/baby.jpg",
		tags: ["oversized", "diaper", "funny", "pacifier"],
		materials: [
			{ material: "Onesie", quantity: "1" },
			{ material: "Giant pacifier", quantity: "1" },
			{ material: "Baby bonnet", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Giant Baby",
				description: "Oversized baby with diaper and pacifier",
			},
			{
				language_code: "fr",
				name: "Bébé Géant",
				description: "Bébé surdimensionné avec couche et tétine",
			},
		],
	},
	{
		id: 40,
		category: "funny",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/waldo.jpg",
		tags: ["stripes", "book", "search", "iconic"],
		materials: [
			{ material: "Striped shirt", quantity: "1" },
			{ material: "Blue pants", quantity: "1" },
			{ material: "Bobble hat", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Where's Waldo",
				description: "The iconic striped shirt and hat character",
			},
			{
				language_code: "fr",
				name: "Où est Charlie",
				description: "Le personnage iconique avec chemise rayée et bonnet",
			},
		],
	},
	{
		id: 41,
		category: "movie",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/ghostbuster.jpg",
		tags: ["proton pack", "ghost", "80s", "classic"],
		materials: [
			{ material: "Jumpsuit", quantity: "1" },
			{ material: "Proton pack", quantity: "1" },
			{ material: "Ghost trap", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Ghostbuster",
				description: "Paranormal investigator with proton pack",
			},
			{
				language_code: "fr",
				name: "Chasseur de Fantômes",
				description: "Chasseur de fantômes avec pack à protons",
			},
		],
	},
	{
		id: 42,
		category: "movie",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/indianajones.jpg",
		tags: ["adventure", "archaeologist", "whip", "fedora"],
		materials: [
			{ material: "Fedora hat", quantity: "1" },
			{ material: "Leather jacket", quantity: "1" },
			{ material: "Whip", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Indiana Jones",
				description: "Adventurous archaeologist with hat and whip",
			},
			{
				language_code: "fr",
				name: "Indiana Jones",
				description: "Archéologue aventurier avec chapeau et fouet",
			},
		],
	},
	{
		id: 43,
		category: "fantasy",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/phoenix.jpg",
		tags: ["fire", "bird", "rebirth", "mythical"],
		materials: [
			{ material: "Feather wings", quantity: "1 pair" },
			{ material: "Orange-red costume", quantity: "1" },
			{ material: "Flame effects", quantity: "set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Phoenix",
				description: "Mythical fire bird with flame effects",
			},
			{
				language_code: "fr",
				name: "Phénix",
				description: "Oiseau de feu mythique avec effets de flammes",
			},
		],
	},
	{
		id: 44,
		category: "horror",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/cthulhu.jpg",
		tags: ["lovecraft", "tentacles", "cosmic", "elder god"],
		materials: [
			{ material: "Tentacle mask", quantity: "1" },
			{ material: "Robes", quantity: "1" },
			{ material: "Wings", quantity: "1 pair" },
		],
		translations: [
			{
				language_code: "en",
				name: "Cthulhu",
				description: "Cosmic horror entity with tentacles",
			},
			{
				language_code: "fr",
				name: "Cthulhu",
				description: "Entité d'horreur cosmique avec tentacules",
			},
		],
	},
	{
		id: 45,
		category: "holiday",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/santa.jpg",
		tags: ["christmas", "gifts", "red", "jolly"],
		materials: [
			{ material: "Red suit", quantity: "1" },
			{ material: "White beard", quantity: "1" },
			{ material: "Black boots", quantity: "1 pair" },
		],
		translations: [
			{
				language_code: "en",
				name: "Santa Claus",
				description: "Jolly Christmas gift-bringer",
			},
			{
				language_code: "fr",
				name: "Père Noël",
				description: "Bonhomme jovial qui apporte les cadeaux de Noël",
			},
		],
	},
	{
		id: 46,
		category: "holiday",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/gingerbread.jpg",
		tags: ["christmas", "cookie", "sweet", "holiday"],
		materials: [
			{ material: "Brown bodysuit", quantity: "1" },
			{ material: "Icing details", quantity: "set" },
			{ material: "Candy buttons", quantity: "3" },
		],
		translations: [
			{
				language_code: "en",
				name: "Gingerbread Man",
				description: "Sweet cookie come to life",
			},
			{
				language_code: "fr",
				name: "Bonhomme Pain d'Épices",
				description: "Petit biscuit sucré qui prend vie",
			},
		],
	},
];
