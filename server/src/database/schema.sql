-- Désactive les contraintes de clés étrangères temporairement
SET FOREIGN_KEY_CHECKS = 0;

-- Supprime les tables si elles existent (pour un reset propre)
DROP TABLE IF EXISTS costume_translations;

DROP TABLE IF EXISTS costume_materials;

DROP TABLE IF EXISTS costume_tags;

DROP TABLE IF EXISTS costumes;

-- Réactive les contraintes
SET FOREIGN_KEY_CHECKS = 1;

-- Table principale des costumes
CREATE TABLE costumes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    category ENUM(
        'fantasy',
        'horror',
        'movie',
        'animal',
        'professional',
        'historical',
        'funny',
        'holiday'
    ) NOT NULL,
    difficulty ENUM('easy', 'medium', 'hard') NOT NULL,
    price_range ENUM(
        'low',
        'medium',
        'high',
        'luxury'
    ) NOT NULL,
    image_url VARCHAR(255),
    popularity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des traductions pour les costumes
CREATE TABLE costume_translations (
    id INT PRIMARY KEY AUTO_INCREMENT,
    costume_id INT NOT NULL,
    language_code VARCHAR(5) NOT NULL DEFAULT 'en', -- ex: 'en', 'fr', 'es'
    name VARCHAR(100) NOT NULL,
    description TEXT,
    FOREIGN KEY (costume_id) REFERENCES costumes (id) ON DELETE CASCADE,
    UNIQUE KEY unique_costume_language (costume_id, language_code)
);

-- Table des tags
CREATE TABLE costume_tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    costume_id INT,
    tag VARCHAR(50) NOT NULL,
    FOREIGN KEY (costume_id) REFERENCES costumes (id) ON DELETE CASCADE,
    UNIQUE KEY unique_costume_tag (costume_id, tag)
);

-- Table des matériaux
CREATE TABLE costume_materials (
    id INT PRIMARY KEY AUTO_INCREMENT,
    costume_id INT,
    material VARCHAR(100) NOT NULL,
    quantity VARCHAR(100),
    FOREIGN KEY (costume_id) REFERENCES costumes (id) ON DELETE CASCADE
);