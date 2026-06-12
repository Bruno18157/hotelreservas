const express = require("express");

const router = express.Router();

const {
    cadastrar,
    listarPorQuarto,
    buscar,
    excluir
} = require("../controllers/reservas.controller");

router.post("/cadastrar", cadastrar);
router.get("/listar/:quarto_id", listarPorQuarto);
router.get("/buscar/:id", buscar);
router.delete("/excluir/:id", excluir);

module.exports = router;