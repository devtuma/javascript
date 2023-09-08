// Variáveis e constantes organizadas
var range1 = prompt("Qual o menor valor Inicial?");
var range2 = prompt("Qual o maior valor final ?");
var rangeTotal;
var rangeOK;
var rangeRespostaOK;
var numSorteado = 0;
var numerosTentados = [];
var numEscolhido = prompt("Qual o número sorteado ?");
var compEscolhaResult = (numSorteado) == (numEscolhido);
var j = 0;
let min = Math.floor(range1);
let max = Math.floor(range2);

// Funções não foram alteradas
function comparaRange2() {
    while (range2 <= range1) {
        if (range2 == range1) {
            alert("Valor: " + range2 + " inserido é igual ao primeiro valor: " + range1);
        } else {
            alert("Valor: " + range2 + " inserido é menor que o primeiro valor: " + range1);
        }
        range2 = prompt("Qual o maior valor final ?");
    }
}

function calculaRange() {
    rangeTotal = (range2 - range1 + 1);
    rangeOK = (rangeTotal > 2) && (rangeTotal < 6);
}

function verificaRespostaDentroRange() {
    rangeRespostaOK = (numEscolhido >= range1) && (numEscolhido <= range2);
    while (!rangeRespostaOK) {
        numEscolhido = prompt("Numero escolhido fora do Range, escolha um numero entre " + range1 + " e " + range2);
        rangeRespostaOK = (numEscolhido >= range1) && (numEscolhido <= range2);
    }
}

// O restante do código não foi alterado
