CREATE DATABASE hotel_db;

USE hotel_db;

CREATE TABLE quartos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    numero VARCHAR(10) NOT NULL,
    tipo VARCHAR(50) NOT NULL
);

CREATE TABLE reservas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hospede VARCHAR(100) NOT NULL,
    data_entrada DATE NOT NULL,
    data_saida DATE NOT NULL,
    quarto_id INT NOT NULL,
    FOREIGN KEY (quarto_id) REFERENCES quartos(id)
);

INSERT INTO quartos (numero, tipo) VALUES
('101', 'Luxo'),
('102', 'Suite');

INSERT INTO reservas (hospede, data_entrada, data_saida, quarto_id) VALUES
('João Silva', '2024-06-10', '2024-06-12', 1),
('Maria Souza', '2024-06-15', '2024-06-18', 2);