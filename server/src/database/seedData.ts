export const costumes = [
	// HORROR - CLASSIQUES
	{
		id: 1,
		category: "horror",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/vampire.jpg",
		popularity: 4,
		tags: ["blood", "cape", "fangs", "nocturnal"],
		materials: [
			{ material: "cape_noire", quantity: "1" },
			{ material: "crocs_plastique", quantity: "1 set" },
			{ material: "maquillage_blanc", quantity: "1 tube" },
		],
		translations: [
			{
				language_code: "en",
				name: "Vampire",
				description: "Classic vampire costume with cape and fangs",
				materials: [
					{ material: "Black cape", quantity: "1" },
					{ material: "Plastic fangs", quantity: "1 set" },
					{ material: "White face paint", quantity: "1 tube" },
				],
			},
			{
				language_code: "fr",
				name: "Vampire",
				description: "Costume de vampire classique avec cape et crocs",
				materials: [
					{ material: "Cape noire", quantity: "1" },
					{ material: "Crocs en plastique", quantity: "1 set" },
					{ material: "Maquillage blanc", quantity: "1 tube" },
				],
			},
		],
	},
	{
		id: 2,
		category: "horror",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/zombie.jpg",
		popularity: 5,
		tags: ["undead", "blood", "apocalypse", "walking dead"],
		materials: [
			{ material: "vieux_vetements", quantity: "1 set" },
			{ material: "faux_sang", quantity: "1 bouteille" },
			{ material: "maquillage_gris", quantity: "1 tube" },
		],
		translations: [
			{
				language_code: "en",
				name: "Zombie",
				description: "Undead zombie with torn clothes and realistic wounds",
				materials: [
					{ material: "Old clothes", quantity: "1 set" },
					{ material: "Fake blood", quantity: "1 bottle" },
					{ material: "Grey face paint", quantity: "1 tube" },
				],
			},
			{
				language_code: "fr",
				name: "Zombie",
				description:
					"Zombie mort-vivant avec des vêtements déchirés et des blessures réalistes",
				materials: [
					{ material: "Vieux vêtements", quantity: "1 set" },
					{ material: "Faux sang", quantity: "1 bouteille" },
					{ material: "Maquillage gris", quantity: "1 tube" },
				],
			},
		],
	},
	{
		id: 3,
		category: "horror",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/frankenstein.jpg",
		popularity: 4,
		tags: ["monster", "stitches", "bolts", "classic"],
		materials: [
			{ material: "maquillage_vert", quantity: "1 tube" },
			{ material: "boulons_cou", quantity: "2" },
			{ material: "perruque_noire", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Frankenstein's Monster",
				description: "The classic reanimated monster with bolts and stitches",
				materials: [
					{ material: "Green face paint", quantity: "1 tube" },
					{ material: "Neck bolts", quantity: "2" },
					{ material: "Black wig", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Monstre de Frankenstein",
				description:
					"Le monstre classique réanimé avec des boulons et des sutures",
				materials: [
					{ material: "Maquillage vert", quantity: "1 tube" },
					{ material: "Boulons de cou", quantity: "2" },
					{ material: "Perruque noire", quantity: "1" },
				],
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
		popularity: 5,
		tags: ["broom", "hat", "magic", "cauldron"],
		materials: [
			{ material: "chapeau_sorciere", quantity: "1" },
			{ material: "balai", quantity: "1" },
			{ material: "robe_noire", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Witch",
				description: "Traditional witch costume with hat and broom",
				materials: [
					{ material: "Witch hat", quantity: "1" },
					{ material: "Broom", quantity: "1" },
					{ material: "Black dress", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Sorcière",
				description: "Costume de sorcière traditionnel avec chapeau et balai",
				materials: [
					{ material: "Chapeau de sorcière", quantity: "1" },
					{ material: "Balai", quantity: "1" },
					{ material: "Robe noire", quantity: "1" },
				],
			},
		],
	},
	{
		id: 5,
		category: "fantasy",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/wizard.jpg",
		popularity: 4,
		tags: ["magic", "staff", "robe", "spellbook"],
		materials: [
			{ material: "robe_magicien", quantity: "1" },
			{ material: "chapeau_pointu", quantity: "1" },
			{ material: "baton_magique", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Wizard",
				description: "Powerful wizard with robe, hat and magical staff",
				materials: [
					{ material: "Wizard robe", quantity: "1" },
					{ material: "Pointed hat", quantity: "1" },
					{ material: "Magic staff", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Magicien",
				description: "Puissant magicien avec robe, chapeau et bâton magique",
				materials: [
					{ material: "Robe de magicien", quantity: "1" },
					{ material: "Chapeau pointu", quantity: "1" },
					{ material: "Bâton magique", quantity: "1" },
				],
			},
		],
	},
	{
		id: 6,
		category: "fantasy",
		difficulty: "hard",
		price_range: "medium",
		image_url: "/images/fairy.jpg",
		popularity: 4,
		tags: ["wings", "sparkle", "magic", "nature"],
		materials: [
			{ material: "ailes_fee", quantity: "1 pair" },
			{ material: "robe_etincelante", quantity: "1" },
			{ material: "baguette_magique", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Fairy",
				description: "Enchanting fairy with wings and magical accessories",
				materials: [
					{ material: "Fairy wings", quantity: "1 pair" },
					{ material: "Sparkly dress", quantity: "1" },
					{ material: "Magic wand", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Fée",
				description: "Fée enchanteresse avec ailes et accessoires magiques",
				materials: [
					{ material: "Ailes de fée", quantity: "1 pair" },
					{ material: "Robe étincelante", quantity: "1" },
					{ material: "Baguette magique", quantity: "1" },
				],
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
		popularity: 5,
		tags: ["cape", "mask", "hero", "comics"],
		materials: [
			{ material: "cape", quantity: "1" },
			{ material: "masque", quantity: "1" },
			{ material: "combinaison", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Superhero",
				description: "Custom superhero costume with cape and mask",
				materials: [
					{ material: "Cape", quantity: "1" },
					{ material: "Mask", quantity: "1" },
					{ material: "Bodysuit", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Super-héros",
				description: "Costume de super-héros personnalisé avec cape et masque",
				materials: [
					{ material: "Cape", quantity: "1" },
					{ material: "Masque", quantity: "1" },
					{ material: "Combinaison", quantity: "1" },
				],
			},
		],
	},
	{
		id: 8,
		category: "movie",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/pirate.jpg",
		popularity: 4,
		tags: ["sea", "sword", "treasure", "parrot"],
		materials: [
			{ material: "cache_oeil", quantity: "1" },
			{ material: "epee_jouet", quantity: "1" },
			{ material: "chemise_rayee", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Pirate",
				description: "Swashbuckling pirate with eye patch and sword",
				materials: [
					{ material: "Eye patch", quantity: "1" },
					{ material: "Toy sword", quantity: "1" },
					{ material: "Striped shirt", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Pirate",
				description: "Pirate flamboyant avec cache-œil et épée",
				materials: [
					{ material: "Cache-œil", quantity: "1" },
					{ material: "Épée jouet", quantity: "1" },
					{ material: "Chemise rayée", quantity: "1" },
				],
			},
		],
	},
	{
		id: 9,
		category: "movie",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/astronaut.jpg",
		popularity: 5,
		tags: ["space", "nasa", "moon", "explorer"],
		materials: [
			{ material: "casque_spatial", quantity: "1" },
			{ material: "combinaison_blanche", quantity: "1" },
			{ material: "reservoir_oxygene", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Astronaut",
				description: "Space explorer with helmet and NASA-style suit",
				materials: [
					{ material: "Space helmet", quantity: "1" },
					{ material: "White bodysuit", quantity: "1" },
					{ material: "Oxygen tank", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Astronaute",
				description:
					"Explorateur spatial avec casque et combinaison style NASA",
				materials: [
					{ material: "Casque spatial", quantity: "1" },
					{ material: "Combinaison blanche", quantity: "1" },
					{ material: "Réservoir d'oxygène", quantity: "1" },
				],
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
		popularity: 5,
		tags: ["whiskers", "tail", "ears", "playful"],
		materials: [
			{ material: "oreilles_chat", quantity: "1 pair" },
			{ material: "queue", quantity: "1" },
			{ material: "justaucorps_noir", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Cat",
				description: "Playful cat with ears, tail and whiskers",
				materials: [
					{ material: "Cat ears", quantity: "1 pair" },
					{ material: "Tail", quantity: "1" },
					{ material: "Black leotard", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Chat",
				description: "Chat joueur avec oreilles, queue et moustaches",
				materials: [
					{ material: "Oreilles de chat", quantity: "1 pair" },
					{ material: "Queue", quantity: "1" },
					{ material: "Justaucorps noir", quantity: "1" },
				],
			},
		],
	},
	{
		id: 11,
		category: "animal",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/lion.jpg",
		popularity: 4,
		tags: ["majestic", "wild", "king", "safari"],
		materials: [
			{ material: "criniere_lion", quantity: "1" },
			{ material: "combinaison_marron", quantity: "1" },
			{ material: "kit_maquillage", quantity: "1 set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Lion",
				description: "King of the jungle with majestic mane",
				materials: [
					{ material: "Lion mane", quantity: "1" },
					{ material: "Brown bodysuit", quantity: "1" },
					{ material: "Face paint", quantity: "1 set" },
				],
			},
			{
				language_code: "fr",
				name: "Lion",
				description: "Roi de la jungle avec une crinière majestueuse",
				materials: [
					{ material: "Crinière de lion", quantity: "1" },
					{ material: "Combinaison marron", quantity: "1" },
					{ material: "Kit de maquillage", quantity: "1 set" },
				],
			},
		],
	},
	{
		id: 12,
		category: "animal",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/butterfly.jpg",
		popularity: 4,
		tags: ["wings", "colorful", "delicate", "spring"],
		materials: [
			{ material: "ailes_papillon", quantity: "1 pair" },
			{ material: "robe_coloree", quantity: "1" },
			{ material: "bandeau_antennes", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Butterfly",
				description: "Colorful butterfly with delicate wings",
				materials: [
					{ material: "Butterfly wings", quantity: "1 pair" },
					{ material: "Colorful dress", quantity: "1" },
					{ material: "Antenna headband", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Papillon",
				description: "Papillon coloré avec des ailes délicates",
				materials: [
					{ material: "Ailes de papillon", quantity: "1 pair" },
					{ material: "Robe colorée", quantity: "1" },
					{ material: "Bandeau à antennes", quantity: "1" },
				],
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
		popularity: 3,
		tags: ["medical", "stethoscope", "lab coat", "health"],
		materials: [
			{ material: "blouse_blanche", quantity: "1" },
			{ material: "stethoscope", quantity: "1" },
			{ material: "masque_visage", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Doctor",
				description: "Medical professional with lab coat and stethoscope",
				materials: [
					{ material: "White lab coat", quantity: "1" },
					{ material: "Stethoscope", quantity: "1" },
					{ material: "Face mask", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Docteur",
				description: "Professionnel médical avec blouse et stéthoscope",
				materials: [
					{ material: "Blouse blanche", quantity: "1" },
					{ material: "Stéthoscope", quantity: "1" },
					{ material: "Masque de protection", quantity: "1" },
				],
			},
		],
	},
	{
		id: 14,
		category: "professional",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/firefighter.jpg",
		popularity: 4,
		tags: ["hero", "fire", "helmet", "rescue"],
		materials: [
			{ material: "casque_pompier", quantity: "1" },
			{ material: "veste_jaune", quantity: "1" },
			{ material: "tuyau", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Firefighter",
				description: "Brave firefighter with helmet and jacket",
				materials: [
					{ material: "Firefighter helmet", quantity: "1" },
					{ material: "Yellow jacket", quantity: "1" },
					{ material: "Hose", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Pompier",
				description: "Courageux pompier avec casque et veste",
				materials: [
					{ material: "Casque de pompier", quantity: "1" },
					{ material: "Veste jaune", quantity: "1" },
					{ material: "Tuyau", quantity: "1" },
				],
			},
		],
	},
	{
		id: 15,
		category: "professional",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/chef.jpg",
		popularity: 3,
		tags: ["cooking", "food", "apron", "kitchen"],
		materials: [
			{ material: "toque_chef", quantity: "1" },
			{ material: "tablier_blanc", quantity: "1" },
			{ material: "cuillere_bois", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Chef",
				description: "Professional chef with hat and apron",
				materials: [
					{ material: "Chef hat", quantity: "1" },
					{ material: "White apron", quantity: "1" },
					{ material: "Wooden spoon", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Chef cuisinier",
				description: "Chef professionnel avec toque et tablier",
				materials: [
					{ material: "Toque de chef", quantity: "1" },
					{ material: "Tablier blanc", quantity: "1" },
					{ material: "Cuillère en bois", quantity: "1" },
				],
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
		popularity: 4,
		tags: ["armor", "sword", "shield", "castle"],
		materials: [
			{ material: "armure_complete", quantity: "1 set" },
			{ material: "epee", quantity: "1" },
			{ material: "bouclier", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Medieval Knight",
				description: "Brave knight in shining armor with sword and shield",
				materials: [
					{ material: "Armor set", quantity: "1" },
					{ material: "Sword", quantity: "1" },
					{ material: "Shield", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Chevalier Médiéval",
				description:
					"Brave chevalier en armure étincelante avec épée et bouclier",
				materials: [
					{ material: "Armure complète", quantity: "1 set" },
					{ material: "Épée", quantity: "1" },
					{ material: "Bouclier", quantity: "1" },
				],
			},
		],
	},
	{
		id: 17,
		category: "historical",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/pharaoh.jpg",
		popularity: 3,
		tags: ["egypt", "pyramid", "gold", "ancient"],
		materials: [
			{ material: "coiffe_pharaon", quantity: "1" },
			{ material: "lin_blanc", quantity: "2 meters" },
			{ material: "bijoux_or", quantity: "set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Egyptian Pharaoh",
				description: "Ancient Egyptian ruler with headdress and accessories",
				materials: [
					{ material: "Pharaoh headdress", quantity: "1" },
					{ material: "White linen", quantity: "2 meters" },
					{ material: "Gold jewelry", quantity: "set" },
				],
			},
			{
				language_code: "fr",
				name: "Pharaon Égyptien",
				description:
					"Souverain de l'Égypte ancienne avec coiffe et accessoires",
				materials: [
					{ material: "Coiffe de pharaon", quantity: "1" },
					{ material: "Lin blanc", quantity: "2 meters" },
					{ material: "Bijoux en or", quantity: "set" },
				],
			},
		],
	},
	{
		id: 18,
		category: "historical",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/flapper.jpg",
		popularity: 3,
		tags: ["1920s", "jazz", "fringe", "great gatsby"],
		materials: [
			{ material: "robe_frangée", quantity: "1" },
			{ material: "bandeau_plumes", quantity: "1" },
			{ material: "collier_perles", quantity: "1 strand" },
		],
		translations: [
			{
				language_code: "en",
				name: "1920s Flapper",
				description: "Roaring twenties dancer with fringe dress and headband",
				materials: [
					{ material: "Fringe dress", quantity: "1" },
					{ material: "Feather headband", quantity: "1" },
					{ material: "Long pearls", quantity: "1 strand" },
				],
			},
			{
				language_code: "fr",
				name: "Flapper des Années 20",
				description:
					"Danseuse des années folles avec robe à franges et bandeau",
				materials: [
					{ material: "Robe frangée", quantity: "1" },
					{ material: "Bandeau à plumes", quantity: "1" },
					{ material: "Collier de perles", quantity: "1 rang" },
				],
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
		popularity: 5,
		tags: ["ocean", "tail", "scales", "underwater"],
		materials: [
			{ material: "queue_sirene", quantity: "1" },
			{ material: "haut_coquillage", quantity: "1" },
			{ material: "maquillage_brillant", quantity: "set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Mermaid",
				description: "Mystical mermaid with shimmering tail",
				materials: [
					{ material: "Mermaid tail", quantity: "1" },
					{ material: "Seashell top", quantity: "1" },
					{ material: "Shimmery makeup", quantity: "set" },
				],
			},
			{
				language_code: "fr",
				name: "Sirène",
				description: "Sirène mystique avec queue scintillante",
				materials: [
					{ material: "Queue de sirène", quantity: "1" },
					{ material: "Haut coquillage", quantity: "1" },
					{ material: "Maquillage brillant", quantity: "set" },
				],
			},
		],
	},
	{
		id: 20,
		category: "fantasy",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/unicorn.jpg",
		popularity: 5,
		tags: ["rainbow", "horn", "magical", "sparkle"],
		materials: [
			{ material: "corne_licorne", quantity: "1" },
			{ material: "perruque_arcenciel", quantity: "1" },
			{ material: "tutu_brillant", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Unicorn",
				description: "Magical unicorn with horn and rainbow colors",
				materials: [
					{ material: "Unicorn horn", quantity: "1" },
					{ material: "Rainbow wig", quantity: "1" },
					{ material: "Sparkly tutu", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Licorne",
				description: "Licorne magique avec corne et couleurs arc-en-ciel",
				materials: [
					{ material: "Corne de licorne", quantity: "1" },
					{ material: "Perruque arc-en-ciel", quantity: "1" },
					{ material: "Tutu brillant", quantity: "1" },
				],
			},
		],
	},
	{
		id: 21,
		category: "fantasy",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/dragon.jpg",
		popularity: 4,
		tags: ["fire", "wings", "scales", "mythical"],
		materials: [
			{ material: "masque_dragon", quantity: "1" },
			{ material: "ailes", quantity: "1 pair" },
			{ material: "combinaison_ecailles", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Dragon",
				description: "Fierce dragon with wings and scales",
				materials: [
					{ material: "Dragon mask", quantity: "1" },
					{ material: "Wings", quantity: "1 pair" },
					{ material: "Scale pattern bodysuit", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Dragon",
				description: "Dragon féroce avec ailes et écailles",
				materials: [
					{ material: "Masque de dragon", quantity: "1" },
					{ material: "Ailes", quantity: "1 pair" },
					{ material: "Combinaison à écailles", quantity: "1" },
				],
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
		popularity: 4,
		tags: ["food", "mexican", "funny", "delicious"],
		materials: [
			{ material: "combinaison_marron", quantity: "1" },
			{ material: "ingredients_feutrine", quantity: "set" },
			{ material: "frange_laitue", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Taco",
				description: "Delicious walking taco costume",
				materials: [
					{ material: "Brown bodysuit", quantity: "1" },
					{ material: "Felt ingredients", quantity: "set" },
					{ material: "Lettuce fringe", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Taco",
				description: "Délicieux costume de taco ambulant",
				materials: [
					{ material: "Combinaison marron", quantity: "1" },
					{ material: "Ingrédients en feutrine", quantity: "set" },
					{ material: "Frange laitue", quantity: "1" },
				],
			},
		],
	},
	{
		id: 23,
		category: "funny",
		difficulty: "easy",
		price_range: "medium",
		image_url: "/images/dinosaur.jpg",
		popularity: 5,
		tags: ["giant", "inflatable", "prehistoric", "funny"],
		materials: [
			{ material: "costume_gonflable", quantity: "1" },
			{ material: "batterie", quantity: "1" },
			{ material: "petit_ventilateur", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Inflatable Dinosaur",
				description: "Giant inflatable T-Rex costume",
				materials: [
					{ material: "Inflatable costume", quantity: "1" },
					{ material: "Battery pack", quantity: "1" },
					{ material: "Small fan", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Dinosaure Gonflable",
				description: "Costume de T-Rex géant gonflable",
				materials: [
					{ material: "Costume gonflable", quantity: "1" },
					{ material: "Pack batterie", quantity: "1" },
					{ material: "Petit ventilateur", quantity: "1" },
				],
			},
		],
	},
	{
		id: 24,
		category: "funny",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/banana.jpg",
		popularity: 3,
		tags: ["fruit", "yellow", "simple", "funny"],
		materials: [
			{ material: "costume_banane", quantity: "1" },
			{ material: "collants_jaunes", quantity: "1 pair" },
		],
		translations: [
			{
				language_code: "en",
				name: "Banana",
				description: "Simple yet hilarious banana costume",
				materials: [
					{ material: "Banana costume", quantity: "1" },
					{ material: "Yellow tights", quantity: "1 pair" },
				],
			},
			{
				language_code: "fr",
				name: "Banane",
				description: "Costume de banane simple mais hilarant",
				materials: [
					{ material: "Costume banane", quantity: "1" },
					{ material: "Collants jaunes", quantity: "1 pair" },
				],
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
		popularity: 5,
		tags: ["marvel", "web", "superhero", "comics"],
		materials: [
			{ material: "costume_spiderman", quantity: "1" },
			{ material: "lance_toile", quantity: "2" },
			{ material: "masque", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Spider-Man",
				description: "Friendly neighborhood Spider-Man",
				materials: [
					{ material: "Spider-Man suit", quantity: "1" },
					{ material: "Web shooter", quantity: "2" },
					{ material: "Mask", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Spider-Man",
				description: "L'ami du quartier Spider-Man",
				materials: [
					{ material: "Costume Spider-Man", quantity: "1" },
					{ material: "Lance-toile", quantity: "2" },
					{ material: "Masque", quantity: "1" },
				],
			},
		],
	},
	{
		id: 26,
		category: "movie",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/batman.jpg",
		popularity: 5,
		tags: ["dc", "cape", "cowl", "superhero"],
		materials: [
			{ material: "costume_chauve_souris", quantity: "1" },
			{ material: "cape", quantity: "1" },
			{ material: "ceinture_utilitaire", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Batman",
				description: "Dark knight crime fighter",
				materials: [
					{ material: "Batsuit", quantity: "1" },
					{ material: "Cape", quantity: "1" },
					{ material: "Utility belt", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Batman",
				description: "Justicier masqué, chevalier noir",
				materials: [
					{ material: "Costume chauve-souris", quantity: "1" },
					{ material: "Cape", quantity: "1" },
					{ material: "Ceinture utilitaire", quantity: "1" },
				],
			},
		],
	},
	{
		id: 27,
		category: "movie",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/wonderwoman.jpg",
		popularity: 4,
		tags: ["dc", "amazon", "warrior", "superhero"],
		materials: [
			{ material: "bustier_jupe", quantity: "1 set" },
			{ material: "tiare", quantity: "1" },
			{ material: "lasso_verite", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Wonder Woman",
				description: "Amazonian warrior princess",
				materials: [
					{ material: "Bodice and skirt", quantity: "1 set" },
					{ material: "Tiara", quantity: "1" },
					{ material: "Lasso of truth", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Wonder Woman",
				description: "Princesse guerrière amazone",
				materials: [
					{ material: "Bustier et jupe", quantity: "1 set" },
					{ material: "Tiare", quantity: "1" },
					{ material: "Lasso de vérité", quantity: "1" },
				],
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
		popularity: 5,
		tags: ["nintendo", "plumber", "video game", "mustache"],
		materials: [
			{ material: "casquette_rouge", quantity: "1" },
			{ material: "salopette", quantity: "1" },
			{ material: "fausse_moustache", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Mario",
				description: "Italian plumber from the Mushroom Kingdom",
				materials: [
					{ material: "Red cap", quantity: "1" },
					{ material: "Overalls", quantity: "1" },
					{ material: "Fake mustache", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Mario",
				description: "Plombier italien du Royaume Champignon",
				materials: [
					{ material: "Casquette rouge", quantity: "1" },
					{ material: "Salopette", quantity: "1" },
					{ material: "Fausse moustache", quantity: "1" },
				],
			},
		],
	},
	{
		id: 29,
		category: "movie",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/laracroft.jpg",
		popularity: 4,
		tags: ["adventure", "archaeologist", "video game", "action"],
		materials: [
			{ material: "debardeur", quantity: "1" },
			{ material: "shorts", quantity: "1" },
			{ material: "holster", quantity: "2" },
		],
		translations: [
			{
				language_code: "en",
				name: "Lara Croft",
				description: "Tomb Raider adventurer",
				materials: [
					{ material: "Tank top", quantity: "1" },
					{ material: "Shorts", quantity: "1" },
					{ material: "Holster", quantity: "2" },
				],
			},
			{
				language_code: "fr",
				name: "Lara Croft",
				description: "Aventurière de Tomb Raider",
				materials: [
					{ material: "Débardeur", quantity: "1" },
					{ material: "Shorts", quantity: "1" },
					{ material: "Holster", quantity: "2" },
				],
			},
		],
	},
	{
		id: 30,
		category: "movie",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/amongus.jpg",
		popularity: 4,
		tags: ["video game", "space", "impostor", "simple"],
		materials: [
			{ material: "combinaison_coloree", quantity: "1" },
			{ material: "sac_dos", quantity: "1" },
			{ material: "visiere", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Among Us Character",
				description: "Suspicious space crewmate",
				materials: [
					{ material: "Colored bodysuit", quantity: "1" },
					{ material: "Backpack", quantity: "1" },
					{ material: "Visor", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Personnage Among Us",
				description: "Membre d'équipage spatial suspect",
				materials: [
					{ material: "Combinaison colorée", quantity: "1" },
					{ material: "Sac à dos", quantity: "1" },
					{ material: "Visière", quantity: "1" },
				],
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
		popularity: 3,
		tags: ["internet", "tall", "suit", "creepy"],
		materials: [
			{ material: "costume_noir", quantity: "1" },
			{ material: "masque_blanc", quantity: "1" },
			{ material: "extensions_tentacules", quantity: "4-8" },
		],
		translations: [
			{
				language_code: "en",
				name: "Slender Man",
				description: "Internet urban legend tall man",
				materials: [
					{ material: "Black suit", quantity: "1" },
					{ material: "White mask", quantity: "1" },
					{ material: "Tentacle extensions", quantity: "4-8" },
				],
			},
			{
				language_code: "fr",
				name: "Slender Man",
				description: "Légende urbaine d'internet, l'homme grand et mince",
				materials: [
					{ material: "Costume noir", quantity: "1" },
					{ material: "Masque blanc", quantity: "1" },
					{ material: "Extensions tentacules", quantity: "4-8" },
				],
			},
		],
	},
	{
		id: 32,
		category: "horror",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/demogorgon.jpg",
		popularity: 4,
		tags: ["stranger things", "flower face", "monster", "upside down"],
		materials: [
			{ material: "masque_monstre", quantity: "1" },
			{ material: "combinaison", quantity: "1" },
			{ material: "pieces_prothetiques", quantity: "set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Demogorgon",
				description: "Stranger Things otherworldly creature",
				materials: [
					{ material: "Monster mask", quantity: "1" },
					{ material: "Bodysuit", quantity: "1" },
					{ material: "Prosthetic pieces", quantity: "set" },
				],
			},
			{
				language_code: "fr",
				name: "Démogorgon",
				description: "Créature d'un autre monde de Stranger Things",
				materials: [
					{ material: "Masque de monstre", quantity: "1" },
					{ material: "Combinaison", quantity: "1" },
					{ material: "Pièces prothétiques", quantity: "set" },
				],
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
		popularity: 4,
		tags: ["bamboo", "cute", "black and white", "china"],
		materials: [
			{ material: "sweat_panda", quantity: "1" },
			{ material: "leggings_noirs", quantity: "1 pair" },
			{ material: "bambou", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Panda",
				description: "Cute black and white bamboo lover",
				materials: [
					{ material: "Panda hoodie", quantity: "1" },
					{ material: "Black leggings", quantity: "1 pair" },
					{ material: "Bamboo stick", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Panda",
				description: "Mignon panda noir et blanc amateur de bambou",
				materials: [
					{ material: "Sweat panda", quantity: "1" },
					{ material: "Leggings noirs", quantity: "1 pair" },
					{ material: "Bambou", quantity: "1" },
				],
			},
		],
	},
	{
		id: 34,
		category: "animal",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/bee.jpg",
		popularity: 3,
		tags: ["insect", "stripes", "wings", "honey"],
		materials: [
			{ material: "rayures_noir_jaune", quantity: "1" },
			{ material: "ailes_abeille", quantity: "1 pair" },
			{ material: "bandeau_antennes", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Bee",
				description: "Buzzing bee with stripes and wings",
				materials: [
					{ material: "Black and yellow stripes", quantity: "1" },
					{ material: "Bee wings", quantity: "1 pair" },
					{ material: "Antenna headband", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Abeille",
				description: "Abeille bourdonnante avec rayures et ailes",
				materials: [
					{ material: "Rayures noir et jaune", quantity: "1" },
					{ material: "Ailes d'abeille", quantity: "1 pair" },
					{ material: "Bandeau à antennes", quantity: "1" },
				],
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
		popularity: 3,
		tags: ["forest", "pointy ears", "nature", "magical"],
		materials: [
			{ material: "oreilles_pointues", quantity: "1 pair" },
			{ material: "tunique_verte", quantity: "1" },
			{ material: "arc_fleches", quantity: "1 set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Elf",
				description: "Woodland elf with pointy ears and nature elements",
				materials: [
					{ material: "Pointy ears", quantity: "1 pair" },
					{ material: "Green tunic", quantity: "1" },
					{ material: "Bow and arrow", quantity: "1 set" },
				],
			},
			{
				language_code: "fr",
				name: "Elfe",
				description:
					"Elfe des bois avec oreilles pointues et éléments naturels",
				materials: [
					{ material: "Oreilles pointues", quantity: "1 pair" },
					{ material: "Tunique verte", quantity: "1" },
					{ material: "Arc et flèches", quantity: "1 set" },
				],
			},
		],
	},
	{
		id: 36,
		category: "fantasy",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/dwarf.jpg",
		popularity: 3,
		tags: ["beard", "axe", "mining", "strong"],
		materials: [
			{ material: "fausse_barbe", quantity: "1" },
			{ material: "hache", quantity: "1" },
			{ material: "casque", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Dwarf",
				description: "Stout dwarf with beard and axe",
				materials: [
					{ material: "Fake beard", quantity: "1" },
					{ material: "Axe", quantity: "1" },
					{ material: "Helmet", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Nain",
				description: "Nain robuste avec barbe et hache",
				materials: [
					{ material: "Fausse barbe", quantity: "1" },
					{ material: "Hache", quantity: "1" },
					{ material: "Casque", quantity: "1" },
				],
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
		popularity: 3,
		tags: ["rome", "colosseum", "warrior", "sandals"],
		materials: [
			{ material: "pieces_armure", quantity: "set" },
			{ material: "casque", quantity: "1" },
			{ material: "epee", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Roman Gladiator",
				description: "Ancient Roman warrior with armor and helmet",
				materials: [
					{ material: "Armor pieces", quantity: "set" },
					{ material: "Helmet", quantity: "1" },
					{ material: "Sword", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Gladiateur Romain",
				description: "Guerrier de la Rome antique avec armure et casque",
				materials: [
					{ material: "Pièces d'armure", quantity: "set" },
					{ material: "Casque", quantity: "1" },
					{ material: "Épée", quantity: "1" },
				],
			},
		],
	},
	{
		id: 38,
		category: "historical",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/victorian.jpg",
		popularity: 3,
		tags: ["elegant", "dress", "19th century", "corset"],
		materials: [
			{ material: "robe_victorienne", quantity: "1" },
			{ material: "parasol", quantity: "1" },
			{ material: "gants", quantity: "1 pair" },
		],
		translations: [
			{
				language_code: "en",
				name: "Victorian Lady",
				description: "Elegant Victorian era woman with dress and accessories",
				materials: [
					{ material: "Victorian dress", quantity: "1" },
					{ material: "Parasol", quantity: "1" },
					{ material: "Gloves", quantity: "1 pair" },
				],
			},
			{
				language_code: "fr",
				name: "Dame Victorienne",
				description:
					"Élégante femme de l'époque victorienne avec robe et accessoires",
				materials: [
					{ material: "Robe victorienne", quantity: "1" },
					{ material: "Parasol", quantity: "1" },
					{ material: "Gants", quantity: "1 pair" },
				],
			},
		],
	},

	// HUMOUR - SUPPLEMENT
	{
		id: 39,
		category: "funny",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/baby.jpg",
		popularity: 4,
		tags: ["oversized", "diaper", "funny", "pacifier"],
		materials: [
			{ material: "body_bebe", quantity: "1" },
			{ material: "tétine_geante", quantity: "1" },
			{ material: "bonnet_bebe", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Giant Baby",
				description: "Oversized baby with diaper and pacifier",
				materials: [
					{ material: "Onesie", quantity: "1" },
					{ material: "Giant pacifier", quantity: "1" },
					{ material: "Baby bonnet", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Bébé Géant",
				description: "Bébé surdimensionné avec couche et tétine",
				materials: [
					{ material: "Body bébé", quantity: "1" },
					{ material: "Tétine géante", quantity: "1" },
					{ material: "Bonnet bébé", quantity: "1" },
				],
			},
		],
	},
	{
		id: 40,
		category: "funny",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/waldo.jpg",
		popularity: 3,
		tags: ["stripes", "book", "search", "iconic"],
		materials: [
			{ material: "chemise_rayee", quantity: "1" },
			{ material: "pantalon_bleu", quantity: "1" },
			{ material: "bonnet_pompon", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Where's Waldo",
				description: "The iconic striped shirt and hat character",
				materials: [
					{ material: "Striped shirt", quantity: "1" },
					{ material: "Blue pants", quantity: "1" },
					{ material: "Bobble hat", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Où est Charlie",
				description: "Le personnage iconique avec chemise rayée et bonnet",
				materials: [
					{ material: "Chemise rayée", quantity: "1" },
					{ material: "Pantalon bleu", quantity: "1" },
					{ material: "Bonnet à pompon", quantity: "1" },
				],
			},
		],
	},

	// PERSONNAGES DE FILMS CULTES
	{
		id: 41,
		category: "movie",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/ghostbuster.jpg",
		popularity: 4,
		tags: ["proton pack", "ghost", "80s", "classic"],
		materials: [
			{ material: "combinaison_pilot", quantity: "1" },
			{ material: "pack_protons", quantity: "1" },
			{ material: "piège_fantôme", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Ghostbuster",
				description: "Paranormal investigator with proton pack",
				materials: [
					{ material: "Jumpsuit", quantity: "1" },
					{ material: "Proton pack", quantity: "1" },
					{ material: "Ghost trap", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Chasseur de Fantômes",
				description: "Chasseur de fantômes avec pack à protons",
				materials: [
					{ material: "Combinaison pilote", quantity: "1" },
					{ material: "Pack à protons", quantity: "1" },
					{ material: "Piège à fantôme", quantity: "1" },
				],
			},
		],
	},
	{
		id: 42,
		category: "movie",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/indianajones.jpg",
		popularity: 4,
		tags: ["adventure", "archaeologist", "whip", "fedora"],
		materials: [
			{ material: "chapeau_fedora", quantity: "1" },
			{ material: "veste_cuir", quantity: "1" },
			{ material: "fouet", quantity: "1" },
		],
		translations: [
			{
				language_code: "en",
				name: "Indiana Jones",
				description: "Adventurous archaeologist with hat and whip",
				materials: [
					{ material: "Fedora hat", quantity: "1" },
					{ material: "Leather jacket", quantity: "1" },
					{ material: "Whip", quantity: "1" },
				],
			},
			{
				language_code: "fr",
				name: "Indiana Jones",
				description: "Archéologue aventurier avec chapeau et fouet",
				materials: [
					{ material: "Chapeau fedora", quantity: "1" },
					{ material: "Veste en cuir", quantity: "1" },
					{ material: "Fouet", quantity: "1" },
				],
			},
		],
	},

	// CREATURES ADDITIONNELLES
	{
		id: 43,
		category: "fantasy",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/phoenix.jpg",
		popularity: 4,
		tags: ["fire", "bird", "rebirth", "mythical"],
		materials: [
			{ material: "ailes_plumes", quantity: "1 pair" },
			{ material: "costume_orange_rouge", quantity: "1" },
			{ material: "effets_flamme", quantity: "set" },
		],
		translations: [
			{
				language_code: "en",
				name: "Phoenix",
				description: "Mythical fire bird with flame effects",
				materials: [
					{ material: "Feather wings", quantity: "1 pair" },
					{ material: "Orange-red costume", quantity: "1" },
					{ material: "Flame effects", quantity: "set" },
				],
			},
			{
				language_code: "fr",
				name: "Phénix",
				description: "Oiseau de feu mythique avec effets de flammes",
				materials: [
					{ material: "Ailes en plumes", quantity: "1 pair" },
					{ material: "Costume orange-rouge", quantity: "1" },
					{ material: "Effets de flamme", quantity: "set" },
				],
			},
		],
	},
	{
		id: 44,
		category: "horror",
		difficulty: "hard",
		price_range: "high",
		image_url: "/images/cthulhu.jpg",
		popularity: 3,
		tags: ["lovecraft", "tentacles", "cosmic", "elder god"],
		materials: [
			{ material: "masque_tentacules", quantity: "1" },
			{ material: "robes", quantity: "1" },
			{ material: "ailes", quantity: "1 pair" },
		],
		translations: [
			{
				language_code: "en",
				name: "Cthulhu",
				description: "Cosmic horror entity with tentacles",
				materials: [
					{ material: "Tentacle mask", quantity: "1" },
					{ material: "Robes", quantity: "1" },
					{ material: "Wings", quantity: "1 pair" },
				],
			},
			{
				language_code: "fr",
				name: "Cthulhu",
				description: "Entité d'horreur cosmique avec tentacules",
				materials: [
					{ material: "Masque à tentacules", quantity: "1" },
					{ material: "Robes", quantity: "1" },
					{ material: "Ailes", quantity: "1 pair" },
				],
			},
		],
	},

	// COSTUMES DE NOËL
	{
		id: 45,
		category: "holiday",
		difficulty: "easy",
		price_range: "low",
		image_url: "/images/santa.jpg",
		popularity: 5,
		tags: ["christmas", "gifts", "red", "jolly"],
		materials: [
			{ material: "costume_rouge", quantity: "1" },
			{ material: "fausse_barbe_blanche", quantity: "1" },
			{ material: "bottes_noires", quantity: "1 pair" },
		],
		translations: [
			{
				language_code: "en",
				name: "Santa Claus",
				description: "Jolly Christmas gift-bringer",
				materials: [
					{ material: "Red suit", quantity: "1" },
					{ material: "White beard", quantity: "1" },
					{ material: "Black boots", quantity: "1 pair" },
				],
			},
			{
				language_code: "fr",
				name: "Père Noël",
				description: "Bonhomme jovial qui apporte les cadeaux de Noël",
				materials: [
					{ material: "Costume rouge", quantity: "1" },
					{ material: "Fausse barbe blanche", quantity: "1" },
					{ material: "Bottes noires", quantity: "1 pair" },
				],
			},
		],
	},
	{
		id: 46,
		category: "holiday",
		difficulty: "medium",
		price_range: "medium",
		image_url: "/images/gingerbread.jpg",
		popularity: 4,
		tags: ["christmas", "cookie", "sweet", "holiday"],
		materials: [
			{ material: "combinaison_marron", quantity: "1" },
			{ material: "details_glacage", quantity: "set" },
			{ material: "boutons_bonbons", quantity: "3" },
		],
		translations: [
			{
				language_code: "en",
				name: "Gingerbread Man",
				description: "Sweet cookie come to life",
				materials: [
					{ material: "Brown bodysuit", quantity: "1" },
					{ material: "Icing details", quantity: "set" },
					{ material: "Candy buttons", quantity: "3" },
				],
			},
			{
				language_code: "fr",
				name: "Bonhomme Pain d'Épices",
				description: "Petit biscuit sucré qui prend vie",
				materials: [
					{ material: "Combinaison marron", quantity: "1" },
					{ material: "Détails en glaçage", quantity: "set" },
					{ material: "Boutons en bonbon", quantity: "3" },
				],
			},
		],
	},
];
