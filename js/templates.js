// ==========================================
// TEMPLATES - ONG ESPERANÇA
// Criação dinâmica de elementos com DOM
// ==========================================

// Dados dos projetos
export const projetos = [
    {
        icone: "📚",
        titulo: "Educação para Todos",
        descricao:
            "Oferecemos apoio educacional, materiais escolares e atividades para crianças e jovens."
    },
    {
        icone: "🍲",
        titulo: "Alimentação Solidária",
        descricao:
            "Distribuímos alimentos e cestas básicas para famílias em situação de vulnerabilidade."
    },
    {
        icone: "🤝",
        titulo: "Apoio às Famílias",
        descricao:
            "Promovemos ações sociais para ajudar famílias que precisam de apoio e orientação."
    }
];

// Formas de ajudar
export const formasAjuda = [
    {
        icone: "💰",
        titulo: "Faça uma doação",
        descricao:
            "Sua contribuição ajuda a manter nossos projetos e alcançar mais pessoas.",
        tipo: "doacao"
    },
    {
        icone: "🙋",
        titulo: "Seja voluntário",
        descricao:
            "Doe seu tempo e suas habilidades para fazer parte das nossas ações sociais.",
        tipo: "voluntario"
    },
    {
        icone: "📢",
        titulo: "Divulgue nossa causa",
        descricao:
            "Compartilhe nosso trabalho com amigos e familiares e ajude nossa mensagem a chegar mais longe.",
        tipo: "divulgacao"
    }
];

// ==========================================
// CRIA CARD DE PROJETO
// ==========================================

export function criarCardProjeto(projeto) {

    // Cria o elemento principal
    const card = document.createElement("article");

    // Adiciona a classe CSS
    card.classList.add("card");

    // Cria o ícone
    const icone = document.createElement("div");
    icone.classList.add("icone");
    icone.textContent = projeto.icone;

    // Cria o título
    const titulo = document.createElement("h3");
    titulo.textContent = projeto.titulo;

    // Cria a descrição
    const descricao = document.createElement("p");
    descricao.textContent = projeto.descricao;

    // Adiciona os elementos dentro do card
    card.append(icone, titulo, descricao);

    return card;
}

// ==========================================
// CRIA CARD DE COMO AJUDAR
// ==========================================

export function criarCardAjuda(ajuda) {

    const card = document.createElement("article");
    card.classList.add("card");

    const icone = document.createElement("div");
    icone.classList.add("icone");
    icone.textContent = ajuda.icone;

    const titulo = document.createElement("h3");
    titulo.textContent = ajuda.titulo;

    const descricao = document.createElement("p");
    descricao.textContent = ajuda.descricao;

    const botao = document.createElement("button");

    botao.classList.add("btn", "btn-principal");
    botao.textContent = ajuda.tipo === "doacao"
        ? "Quero doar"
        : "Saiba mais";

    // Identificação para o evento do botão
    if (ajuda.tipo === "doacao") {

        botao.id = "abrir-modal";

    } else {

        botao.addEventListener("click", () => {

            alert(
                `Obrigado pelo interesse em "${ajuda.titulo}"! Entre em contato conosco para participar.`
            );

        });

    }

    card.append(
        icone,
        titulo,
        descricao,
        botao
    );

    return card;
}

// ==========================================
// RENDERIZA PROJETOS NO HTML
// ==========================================

export function renderizarProjetos(container) {

    // Limpa o conteúdo existente
    container.replaceChildren();

    // Percorre os projetos
    projetos.forEach((projeto) => {

        const card = criarCardProjeto(projeto);

        // Insere o card no DOM
        container.appendChild(card);

    });
}

// ==========================================
// RENDERIZA FORMAS DE AJUDA NO HTML
// ==========================================

export function renderizarAjuda(container) {

    container.replaceChildren();

    formasAjuda.forEach((ajuda) => {

        const card = criarCardAjuda(ajuda);

        container.appendChild(card);

    });
}
