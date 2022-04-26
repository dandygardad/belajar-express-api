CREATE DATABASE belajar_express;

CREATE TABLE mahasiswa (
    id SERIAL PRIMARY KEY,
    nama VARCHAR(255),
    email VARCHAR(255),
    age INTEGER,
    alamat VARCHAR(255),
    UNIQUE (email)
);