// ==========================================
// STORAGE - ONG ESPERANÇA
// Armazenamento de dados no navegador
// ==========================================

const CHAVE_MENSAGENS = "ongEsperanca_mensagens";
const CHAVE_DOACAO = "ongEsperanca_ultimaDoacao";

// ==========================================
// OBTÉM MENSAGENS SALVAS
// ==========================================

export function obterMensagens() {

    const dados = localStorage.getItem(CHAVE_MENSAGENS);

    if (!dados) {
        return [];
    }

    try {
        return JSON.parse(dados);
    } catch (erro) {
        console.error("Erro ao ler mensagens:", erro);
        return [];
    }
}

// ==========================================
// SALVA UMA NOVA MENSAGEM
// ==========================================

export function salvarMensagem(mensagem) {

    const mensagens = obterMensagens();

    mensagens.push({
        nome: mensagem.nome,
        email: mensagem.email,
        telefone: mensagem.telefone,
        mensagem: mensagem.mensagem,
        dataEnvio: new Date().toLocaleString("pt-BR")
    });

    localStorage.setItem(
        CHAVE_MENSAGENS,
        JSON.stringify(mensagens)
    );
}

// ==========================================
// SALVA INFORMAÇÃO DA DOAÇÃO
// ==========================================

export function salvarDoacao(valor) {

    const doacao = {
        valor: valor,
        data: new Date().toLocaleString("pt-BR")
    };

    localStorage.setItem(
        CHAVE_DOACAO,
        JSON.stringify(doacao)
    );
}

// ==========================================
// OBTÉM A ÚLTIMA DOAÇÃO
// ==========================================

export function obterUltimaDoacao() {

    const dados = localStorage.getItem(CHAVE_DOACAO);

    if (!dados) {
        return null;
    }

    try {
        return JSON.parse(dados);
    } catch (erro) {
        console.error("Erro ao ler doação:", erro);
        return null;
    }
}
