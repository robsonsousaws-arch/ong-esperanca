// ==========================================
// ROUTER - ONG ESPERANÇA
// Navegação SPA usando Hash
// ==========================================

const rotas = {
    inicio: "#inicio",
    sobre: "#sobre",
    projetos: "#projetos",
    ajudar: "#ajudar",
    contato: "#contato"
};

// ==========================================
// ATUALIZA LINK ATIVO
// ==========================================

function atualizarLinkAtivo() {

    const hashAtual =
        window.location.hash || "#inicio";

    const links =
        document.querySelectorAll("#menu a");

    links.forEach((link) => {

        link.classList.remove("ativo");
        link.removeAttribute("aria-current");

        if (link.getAttribute("href") === hashAtual) {

            link.classList.add("ativo");
            link.setAttribute(
                "aria-current",
                "page"
            );
        }
    });
}

// ==========================================
// NAVEGA PARA UMA SEÇÃO
// ==========================================

function navegar() {

    const hash =
        window.location.hash || "#inicio";

    const id =
        hash.substring(1);

    const secao =
        document.getElementById(id);

    if (secao) {

        secao.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    atualizarLinkAtivo();
}

// ==========================================
// CONFIGURA O ROUTER
// ==========================================

export function configurarRouter() {

    // Quando o endereço muda
    window.addEventListener(
        "hashchange",
        navegar
    );

    // Configuração inicial
    atualizarLinkAtivo();

    // Se não existir uma rota, usa início
    if (!window.location.hash) {

        history.replaceState(
            null,
            "",
            "#inicio"
        );
    }
}
