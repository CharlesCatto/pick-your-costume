-- Désactive les contraintes de clés étrangères temporairement
SET FOREIGN_KEY_CHECKS = 0;

-- Supprime les tables si elles existent (pour un reset propre)
DROP TABLE IF EXISTS costume_materials;

DROP TABLE IF EXISTS costume_tags;

DROP TABLE IF EXISTS costumes;

-- Réactive les contraintes
SET FOREIGN_KEY_CHECKS = 1;

-- Crée les tables
CREATE TABLE costumes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
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
    description TEXT,
    image_url VARCHAR(255),
    popularity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE costume_tags (
    id INT PRIMARY KEY AUTO_INCREMENT,
    costume_id INT,
    tag VARCHAR(50) NOT NULL,
    FOREIGN KEY (costume_id) REFERENCES costumes (id) ON DELETE CASCADE,
    UNIQUE KEY unique_costume_tag (costume_id, tag)
);

CREATE TABLE costume_materials (
    id INT PRIMARY KEY AUTO_INCREMENT,
    costume_id INT,
    material VARCHAR(100) NOT NULL,
    quantity VARCHAR(100),
    FOREIGN KEY (costume_id) REFERENCES costumes (id) ON DELETE CASCADE
);