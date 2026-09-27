import { salvarMensagem, salvarDoacao } from "./storage.js";

/* =========================================
   MENU MOBILE
   ========================================= */

export function configurarMenu() {
    const botaoMenu = document.querySelector("#menu-toggle");
    const menu = document.querySelector("#menu");

    if (!botaoMenu || !menu) return;

    botaoMenu.addEventListener("click", () => {
        menu.classList.toggle("aberto");

        const aberto = menu.classList.contains("aberto");

        botaoMenu.setAttribute(
            "aria-expanded",
            aberto ? "true" : "false"
        );
    });

    const links = menu.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("aberto");
            botaoMenu.setAttribute("aria-expanded", "false");
        });
    });
}


/* =========================================
   MÁSCARA DE CPF
   ========================================= */

function aplicarMascaraCPF(campo) {
    campo.addEventListener("input", () => {
        let valor = campo.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d)/,
            "$1.$2"
        );

        valor = valor.replace(
            /(\d{3})(\d{1,2})$/,
            "$1-$2"
        );

        campo.value = valor;
    });
}


/* =========================================
   MÁSCARA DE TELEFONE
   ========================================= */

function aplicarMascaraTelefone(campo) {
    campo.addEventListener("input", () => {
        let valor = campo.value.replace(/\D/g, "");

        valor = valor.substring(0, 11);

        if (valor.length <= 10) {
            valor = valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{4})(\d)/,
                "$1-$2"
            );
        } else {
            valor = valor.replace(
                /^(\d{2})(\d)/,
                "($1) $2"
            );

            valor = valor.replace(
                /(\d{5})(\d)/,
                "$1-$2"
            );
        }

        campo.value = valor;
    });
}


/* =========================================
   MÁSCARA DE CEP
   ========================================= */

function aplicarMascaraCEP(campo) {
    campo.addEventListener("input", () => {
        let valor = campo.value.replace(/\D/g, "");

        valor = valor.substring(0, 8);

        valor = valor.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );

        campo.value = valor;
    });
}


/* =========================================
   VALIDAÇÃO DE CPF
   ========================================= */

function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, "");

    if (cpf.length !== 11) {
        return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    let soma = 0;

    for (let i = 0; i < 9; i++) {
        soma += Number(cpf[i]) * (10 - i);
    }

    let resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    if (resto !== Number(cpf[9])) {
        return false;
    }

    soma = 0;

    for (let i = 0; i < 10; i++) {
        soma += Number(cpf[i]) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if (resto === 10) {
        resto = 0;
    }

    return resto === Number(cpf[10]);
}


/* =========================================
   FEEDBACK DO FORMULÁRIO
   ========================================= */

function mostrarFeedback(mensagem, tipo) {
    const feedback = document.querySelector("#feedback");

    if (!feedback) return;

    feedback.textContent = mensagem;
    feedback.className = "feedback " + tipo;
}


/* =========================================
   FORMULÁRIO DE CONTATO
   ========================================= */

export function configurarFormulario() {
    const formulario = document.querySelector("#formulario");

    if (!formulario) return;

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const nome = document.querySelector("#nome");
        const email = document.querySelector("#email");
        const cpf = document.querySelector("#cpf");
        const telefone = document.querySelector("#telefone");
        const mensagem = document.querySelector("#mensagem");

        if (!nome.value.trim()) {
            mostrarFeedback(
                "Por favor, informe seu nome.",
                "erro"
            );
            nome.focus();
            return;
        }

        if (!email.value.trim()) {
            mostrarFeedback(
                "Por favor, informe seu e-mail.",
                "erro"
            );
            email.focus();
            return;
        }

        if (cpf.value && !validarCPF(cpf.value)) {
            mostrarFeedback(
                "Informe um CPF válido.",
                "erro"
            );
            cpf.focus();
            return;
        }

        if (!telefone.value.trim()) {
            mostrarFeedback(
                "Por favor, informe seu telefone.",
                "erro"
            );
            telefone.focus();
            return;
        }

        if (!mensagem.value.trim()) {
            mostrarFeedback(
                "Por favor, escreva uma mensagem.",
                "erro"
            );
            mensagem.focus();
            return;
        }

        const dados = {
            nome: nome.value.trim(),
            email: email.value.trim(),
            telefone: telefone.value.trim(),
            mensagem: mensagem.value.trim()
        };

        salvarMensagem(dados);

        mostrarFeedback(
            "Mensagem enviada com sucesso! Obrigado pelo contato.",
            "sucesso"
        );

        formulario.reset();
    });
}


/* =========================================
   MÁSCARAS
   ========================================= */

export function configurarMascaras() {
    const cpf = document.querySelector("#cpf");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");

    if (cpf) {
        aplicarMascaraCPF(cpf);
    }

    if (telefone) {
        aplicarMascaraTelefone(telefone);
    }

    if (cep) {
        aplicarMascaraCEP(cep);
    }
}


/* =========================================
   MODAL DE DOAÇÃO
   ========================================= */

export function configurarModal() {
    const modal = document.querySelector("#modal-doacao");
    const fecharModal = document.querySelector("#fechar-modal");
    const botoesDoacao = document.querySelectorAll(".doacao-valor");

    if (!modal) return;

    /*
     * Abre o modal através dos botões
     * criados dinamicamente.
     */
    document.addEventListener("click", (evento) => {
        if (evento.target.id === "abrir-modal") {
            if (typeof modal.showModal === "function") {
                modal.showModal();
            } else {
                modal.classList.add("aberto");
            }
        }
    });

    if (fecharModal) {
        fecharModal.addEventListener("click", () => {
            if (typeof modal.close === "function") {
                modal.close();
            } else {
                modal.classList.remove("aberto");
            }
        });
    }

    botoesDoacao.forEach(botao => {
        botao.addEventListener("click", () => {
            const valor = botao.dataset.valor;

            salvarDoacao(valor);

            alert(
                `Obrigado pela sua intenção de doar R$ ${valor},00!`
            );

            if (typeof modal.close === "function") {
                modal.close();
            } else {
                modal.classList.remove("aberto");
            }
        });
    });
}
