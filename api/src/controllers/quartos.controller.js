const db = require("../data/connection");

const listar = async (req, res) => {
    const quartos = await db.query("SELECT * FROM quartos");
    res.send(quartos[0]).end();
};

const cadastrar = async (req, res) => {
    const { numero, tipo } = req.body;

    const criar = await db.query("INSERT INTO quartos VALUES (DEFAULT, ?, ?)", [numero, tipo]);
    res.send({
        id: criar[0].insertId,
        numero,
        tipo
    }).end();
};

const excluir = async (req, res) => {
    const id = req.params.id;

    const deletar = await db.query("DELETE FROM quartos WHERE id = ?", [id]);
    if (deletar[0].affectedRows === 1) {
        res.send("Quarto excluído com sucesso!").end();
    } else {
        res.status(500).send("Erro ao excluir quarto").end();
    }
};

const buscar = async (req, res) => {
    const id = req.params.id;
    
    const quarto = await db.query("SELECT * FROM quartos WHERE id = ?", [id]);

    res.send(quarto[0]).end();
};

module.exports = {
    listar,
    cadastrar,
    excluir,
    buscar
};