drop table if exists utilisateur;

CREATE TABLE utilisateur (
    id INT NOT NULL AUTO_INCREMENT,
	pseudo VARCHAR(16) NOT NULL,
	mdp varchar(30) not null,
	prenom VARCHAR(14) NOT NULL,
    nom VARCHAR(255) NOT NULL,
    email TEXT,
    PRIMARY KEY (id)
)
ENGINE=INNODB DEFAULT CHARSET=utf8;

INSERT INTO utilisateur (pseudo,mdp,prenom,nom,email) VALUES ('sushi', 'mdpsushi', 'arthur','deguines','test@test.test');