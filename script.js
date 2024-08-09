const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual atividade é comumente encontrada em uma festa do agricultor?",
        alternativas: [
            {
                texto: "Demostrações de técnicas agrícolas sustentaveís",
            },
            {
                texto: "malabarismo, escalada e pulo de paraquedas",
            },
        ]
    },
    {
        enunciado: "O que é uma festa agricola?",
        alternativas: [
            {
                texto: "Uma festa que celebra a agricultura e a vida rural com feiras, exposições e entretenimento.",
            },
            {
                texto: "Um samba sem música",
            }
        ]
    },
    {
        enunciado: "Qual é o objetivo principal da festa agricola?",
        alternativas: [
            {
                texto: "Promover a agricultura local e conectar a comunidade com produtores rurais.",
            },
            {
                texto: "caçar animais por diversão",
            }
        ]
    },
    {
        enunciado: "Como posso participar de uma festa agrícola como expositor?",
        alternativas: [
            {
                texto: "Entre em contato com os organizadores para informações sobre inscrição e requisitos.",
            },
            {
                texto: "rastreie os participantes e invada o local",
            }
        ]
    },
    {
        enunciado: "Quando e onde geralmente acontecem as festas agrícolas? ",
        alternativas: [
            {
                texto: "Normalmente na primavera ou verão, em áreas rurais, feiras ou parques locais.",
            },
            {
                texto: "No inverno, na cidade grande",
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você finalizou o questionario.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "Parabéns"
}

mostraPergunta()