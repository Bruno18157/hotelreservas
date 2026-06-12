const db = require("../data/connection");

const listarPorQuarto = async (req, res) => {
    const quarto_id = req.params.quarto_id;

    const reservas = await db.query("SELECT * FROM reservas WHERE quarto_id = ?", [quarto_id]);

    res.send(reservas[0]).end();
};

const cadastrar = async (req, res) => {
    const { hospede, data_entrada, data_saida, quarto_id } = req.body;

    const criar = await db.query("INSERT INTO reservas VALUES (DEFAULT, ?, ?, ?, ?)", [hospede, data_entrada, data_saida, quarto_id]);
    res.send({
        id: criar[0].insertId,
        hospede,
        data_entrada,
        data_saida,
        quarto_id
    }).end();
};

const excluir = async (req, res) => {
    const id = req.params.id;

    const deletar = await db.query("DELETE FROM reservas WHERE id = ?", [id]);
    if (deletar[0].affectedRows === 1) {
        res.send("Reserva excluída com sucesso!").end();
    } else {
        res.status(500).send("Erro ao excluir reserva").end();
    }
};

const buscar = async (req, res) => {
    const id = req.params.id;

    const reserva = await db.query("SELECT * FROM reservas WHERE id = ?", [id]);

    res.send(reserva[0]).end();
};

module.exports = {
    listarPorQuarto,
    cadastrar,
    excluir,
    buscar
};