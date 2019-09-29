DROP DATABASE prezidents_db;
CREATE DATABASE prezidents_db;

/* this is how i connect to a database*/
USE prezidents_db;

CREATE TABLE presidents (
    id INT NOT NULL AUTO_INCREMENT, /* NOT NULL means that this column can not be empty, and it is called a constraint */
    pres_name VARCHAR(255),
    PRIMARY KEY(id) /* if you don't do line 11, you get an error */
);