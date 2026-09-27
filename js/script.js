// ==========================================
// SCRIPT PRINCIPAL - ONG ESPERANÇA
// ==========================================

import {
    renderizarProjetos,
    renderizarAjuda
} from "./templates.js";

import {
    configurarMenu,
    configurarFormulario,
    configurarMascaras,
    configurarModal
} from "./eventos.js";

import {
    configurarRouter
} from "./router.js";

// ==========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("ONG Esperança iniciada!");

    // ======================================
    // SELECIONA OS CONTAINERS
    // ======================================

    const projetosContainer =
        document.querySelector("#projetos-container");

    const ajudaContainer =
        document.querySelector("#ajuda-container");

    // ======================================
    // RENDERIZA OS PROJETOS
    // ======================================

    if (projetosContainer) {

        renderizarProjetos(projetosContainer);

        console.log("Projetos carregados!");
    }

    // ======================================
    // RENDERIZA AS FORMAS DE AJUDA
    // ======================================

    if (ajudaContainer) {

        renderizarAjuda(ajudaContainer);

        console.log("Formas de ajuda carregadas!");
    }

    // ======================================
    // CONFIGURA O MENU
    // ======================================

    // configurarMenu();

    // console.log("Menu configurado!");

    // ======================================
    // CONFIGURA O FORMULÁRIO
    // ======================================

    configurarFormulario();

    // ======================================
    // CONFIGURA AS MÁSCARAS
    // ======================================

    configurarMascaras();

    // ======================================
    // CONFIGURA O MODAL
    // ======================================

    configurarModal();

    // ======================================
    // CONFIGURA O ROUTER
    // ======================================

    configurarRouter();

    // ======================================
    // ANO ATUAL
    // ======================================

    const anoAtual =
        document.querySelector("#ano-atual");

    if (anoAtual) {

        anoAtual.textContent =
            new Date().getFullYear();
    }

    console.log("ONG Esperança pronta!");

});
