module.exports = `

    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

    DROP TABLE IF EXISTS rooms CASCADE;
    CREATE TABLE IF NOT EXISTS rooms(
        id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
        name VARCHAR(255) NOT NULL,
        num VARCHAR(255) NOT NULL,
        building VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
    );

    INSERT INTO rooms (id, name, num, building)
    VALUES ('b30ae9e9-56ef-47de-bf58-64530d7a98f8', 'Auditório', '1', 'Bloco A');

    INSERT INTO rooms (id, name, num, building)
    VALUES ('b30ae9e9-56ef-47de-bf58-64530d7a98f9', 'Sala de Reuniões', '1', 'Bloco C');

    INSERT INTO rooms (id, name, num, building)
    VALUES ('b30ae9e9-56ef-47de-bf58-64530d7a98f5', 'Sala de Reuniões', '2', 'Bloco C');

    DROP TABLE IF EXISTS reservations;
    CREATE TABLE IF NOT EXISTS reservations(
        id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
        description VARCHAR(255),
        bookingDate VARCHAR(255) NOT NULL,
        bookingStart VARCHAR NOT NULL,
        bookingEnd VARCHAR NOT NULL,
        userId VARCHAR(255) NOT NULL,
        roomId UUID NOT NULL,
        PRIMARY KEY (id),
        FOREIGN KEY (roomId) REFERENCES rooms
    );

    INSERT INTO reservations (
        id,
        description,
        bookingDate,
        bookingStart,
        bookingEnd,
        userId,
        roomId
        )
    VALUES (
        'b30ae9e9-56ef-47de-bf58-64530d7a98f9',
        'Teste 1',
        '2023-03-25',
        '16:00:00',
        '19:00:00',
        'gabriel@gmail.com',
        'b30ae9e9-56ef-47de-bf58-64530d7a98f8'
        );

`;
