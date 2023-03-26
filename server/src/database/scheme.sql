CREATE DATABASE meetingrooms;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS rooms CASCADE;
CREATE TABLE IF NOT EXISTS rooms(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    num VARCHAR(255) NOT NULL,
    building VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS reservations;
CREATE TABLE IF NOT EXISTS reservations(
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    description VARCHAR(255),
    bookingDate DATE NOT NULL,
    bookingStart VARCHAR(255) NOT NULL,
    bookingEnd VARCHAR(255) NOT NULL,
    userId VARCHAR(255) NOT NULL,
    roomId UUID NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (roomId) REFERENCES rooms
);

