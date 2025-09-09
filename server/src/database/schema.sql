-- Supprimer les tables si elles existent déjà
DROP TABLE IF EXISTS costume_materials CASCADE;

DROP TABLE IF EXISTS costume_tags CASCADE;

DROP TABLE IF EXISTS costume_translations CASCADE;

DROP TABLE IF EXISTS costumes CASCADE;

-- Table principale des costumes
CREATE TABLE costumes (
    id SERIAL PRIMARY KEY,
    category TEXT NOT NULL,
    difficulty TEXT NOT NULL,
    price_range TEXT NOT NULL,
    image_url TEXT,
    popularity INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des traductions pour chaque costume
CREATE TABLE costume_translations (
    id SERIAL PRIMARY KEY,
    costume_id INT REFERENCES costumes (id) ON DELETE CASCADE,
    language_code VARCHAR(5) NOT NULL,
    name TEXT NOT NULL,
    description TEXT
);

-- Table des tags
CREATE TABLE costume_tags (
    id SERIAL PRIMARY KEY,
    costume_id INT REFERENCES costumes (id) ON DELETE CASCADE,
    tag TEXT NOT NULL
);

-- Table des matériaux nécessaires pour fabriquer un costume
CREATE TABLE costume_materials (
    id SERIAL PRIMARY KEY,
    costume_id INT REFERENCES costumes (id) ON DELETE CASCADE,
    material TEXT NOT NULL,
    quantity TEXT
);