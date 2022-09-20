CREATE DATABASE firstapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
);

INSERT INTO users (name, email) VALUES
    ('joe', 'joe@ibm.com'),
    ('mox', 'mox@gmail.com');


SELECT rast
FROM shadedrelief
FETCH FIRST 10 ROWS ONLY;