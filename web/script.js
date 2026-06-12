let quartos = [];
let reservas = [];

function mostrarTela(tela) {
    document.querySelectorAll('[id^="tela-"]').forEach(div => {
        div.classList.add('tela-hidden');
    });

    document.getElementById(`tela-${tela}`).classList.remove('tela-hidden');
}

function cadastrarQuarto() {
    const numero = document.getElementById("numero").value;
    const tipo = document.getElementById("tipo").value;

    if (!numero || !tipo) {
        alert("Preencha todos os campos!");
        return;
    }

    quartos.push({ numero, tipo });
    atualizarQuartos();

    document.getElementById("numero").value = "";
    document.getElementById("tipo").value = "";

    mostrarTela("quartos");
}

function atualizarQuartos() {
    const lista = document.getElementById("lista-quartos");
    lista.innerHTML = "";

    quartos.forEach((quarto, index) => {
        lista.innerHTML += `
            <tr>
                <td>${quarto.numero}</td>
                <td>${quarto.tipo}</td>
                <td>
                    <button class="btn-excluir" onclick="excluirQuarto(${index})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
    });
}

function excluirQuarto(index) {
    quartos.splice(index, 1);
    atualizarQuartos();
}

function cadastrarReserva() {
    const hospede = document.getElementById("hospede").value;
    const entrada = document.getElementById("entrada").value;
    const saida = document.getElementById("saida").value;

    if (!hospede || !entrada || !saida) {
        alert("Preencha todos os campos!");
        return;
    }

    reservas.push({ hospede, entrada, saida });
    atualizarReservas();

    document.getElementById("hospede").value = "";
    document.getElementById("entrada").value = "";
    document.getElementById("saida").value = "";

    mostrarTela("reservas");
}

function atualizarReservas() {
    const lista = document.getElementById("lista-reservas");
    lista.innerHTML = "";

    reservas.forEach((reserva, index) => {
        lista.innerHTML += `
            <tr>
                <td>${reserva.hospede}</td>
                <td>${reserva.entrada}</td>
                <td>${reserva.saida}</td>
                <td>
                    <button class="btn-excluir" onclick="excluirReserva(${index})">
                        Excluir
                    </button>
                </td>
            </tr>
        `;
    });
}

function excluirReserva(index) {
    reservas.splice(index, 1);
    atualizarReservas();
}

function fecharModal() {
    document.getElementById("modal").className = "modal-hidden";
}