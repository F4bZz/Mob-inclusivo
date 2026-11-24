
// ==========================
// ELEMENTOS DO HTML
// ==========================

const formulario = document.getElementById("registroForm");

const campoNome = document.getElementById("nome");

const campoCategoria = document.getElementById("categoria");

const campoRelato = document.getElementById("relato");

const cardsContainer = document.getElementById("cardsContainer");

const contador = document.getElementById("contador");

const mensagem = document.getElementById("mensagem");

const emptyState = document.getElementById("emptyState");

// ==========================
// CONTADOR DE REGISTROS
// ==========================

let totalRegistros = 0;

function atualizarContador() {

    contador.textContent =
        totalRegistros === 1
            ? "1 registro"
            : `${totalRegistros} registros`;

}

// ==========================
// FORMATAÇÃO DA DATA
// ==========================

function obterDataAtual() {

    const agora = new Date();

    return agora.toLocaleString("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
    });

}

// ==========================
// CRIAÇÃO DOS CARDS
// ==========================

function criarCard(nome, categoria, relato) {

    const card = document.createElement("article");

    card.classList.add("card");

    // Título do card
    const titulo = document.createElement("h3");

    titulo.textContent = "Registro de Acessibilidade";

    // Nome
    const nomeElemento = document.createElement("p");

    nomeElemento.classList.add("card-info");

    const nomeLabel = document.createElement("strong");

    nomeLabel.textContent = "Nome: ";

    nomeElemento.append(nomeLabel, document.createTextNode(nome));

    // Categoria
    const categoriaElemento = document.createElement("p");

    categoriaElemento.classList.add("card-info");

    const categoriaLabel = document.createElement("strong");

    categoriaLabel.textContent = "Categoria: ";

    categoriaElemento.append(
        categoriaLabel,
        document.createTextNode(categoria)
    );

    // Relato
    const relatoContainer = document.createElement("div");

    relatoContainer.classList.add("card-relato");

    const relatoLabel = document.createElement("strong");

    relatoLabel.textContent = "Relato: ";

    const relatoTexto = document.createElement("p");

    relatoTexto.textContent = relato;

    relatoContainer.append(relatoLabel, relatoTexto);

    // Data
    const dataElemento = document.createElement("p");

    dataElemento.classList.add("card-data");

    dataElemento.textContent = `Data: ${obterDataAtual()}`;

    // Status
    const statusElemento = document.createElement("span");

    statusElemento.classList.add("status");

    statusElemento.textContent = "Recebido";

    // Montagem do card
    card.append(
        titulo,
        nomeElemento,
        categoriaElemento,
        relatoContainer,
        dataElemento,
        statusElemento
    );

    return card;

}

// ==========================
// ENVIO DO FORMULÁRIO
// ==========================

formulario.addEventListener("submit", function(event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Captura os valores
    const nome = campoNome.value.trim();

    const categoria = campoCategoria.value;

    const relato = campoRelato.value.trim();

    // Validação
    if (!nome || !categoria || !relato) {

        mensagem.textContent =
            "Por favor, preencha todos os campos.";

        return;

    }

    // Remove mensagem de estado vazio
    if (emptyState) {

        emptyState.remove();

    }

    // Cria o novo card
    const novoCard = criarCard(
        nome,
        categoria,
        relato
    );

    // Adiciona o card ao mural
    cardsContainer.prepend(novoCard);

    // Atualiza contador
    totalRegistros++;

    atualizarContador();

    // Mensagem de sucesso
    mensagem.textContent =
        "Registro salvo com sucesso!";

    // Limpa o formulário
    formulario.reset();

    // Retorna o foco ao campo nome
    campoNome.focus();

});
