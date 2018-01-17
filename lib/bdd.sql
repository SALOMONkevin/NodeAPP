drop table if exists utilisateur;

CREATE TABLE utilisateur (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(14) NOT NULL,
    pseudo VARCHAR(16) NOT NULL,
    email TEXT,
    PRIMARY KEY (id)
)
ENGINE=INNODB DEFAULT CHARSET=utf8;

INSERT INTO utilisateur (nom,prenom,pseudo,email) VALUES ('Test', 'Test', 'Test','test@test.test');