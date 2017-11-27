-- create burgers_db
-- switch to or use burgers_db
-- create burgers table with the fields: id (auto increment that serves as primary key), burger_name (a string), devoured (boolean), date (timestamp)

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  date TIMESTAMP,
	PRIMARY KEY (id)
);
