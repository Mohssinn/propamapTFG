create database library;

create table books(
    section int,
    title text,
    author text
);

insert into books values
    (3, 'Dugi', 'Dwa'),
    (2, 'dwa', 'fnw');


create table users(
    username text,
    password text
);

insert into users values
    ('joe', 'joe123'),
    ('ryan', 'ryan123'),
    ('cameron', 'cameron123');