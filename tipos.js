"use strict";
// Boolean
const contaPaga = false;
// Number
const idade = 23;
const avaliacao = 4.5;
// String
const nome = 'Yu';
// Array
const idades = [23, 28, 45];
const idades2 = [23, 487, 73842];
// Tuple (um pouco parecido com Array)
let jogadores; // pode ser [string, number, boolean]
jogadores = ['Fulano', 'Ciclano', 'Beltrano'];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const statusDaAprovacao = StatusAprovacao.Aprovado;
// Any (aceita qualquer coisa)
const retornoDaAPI = [123, 'Yu', false];
// Void (quando função não retorna nada)
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
const u = undefined;
const n = null;
// Object
function criar(objeto) {
    // ...
}
criar({
    propriedade: 1,
});
// criar('nome') dá erro, pois seria string
// Never (coisas que nunca ocorrem)
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Falhou');
}
// Union Types
function exibirNota(nota) {
    console.log(`A nota é ${nota}`);
}
exibirNota('10');
exibirNota(10);
const funcionarios = [{
        nome: 'Vitor',
        sobrenome: 'Farias',
        dataNascimento: new Date
    }, {
        nome: 'Adailton',
        sobrenome: 'Cleas',
        dataNascimento: new Date
    }];
function tratarFuncionarios(funcionarios) {
    for (let funcionario of funcionarios) {
        console.log('Nome de funcionários: ', funcionario.nome);
    }
}
// Nulo ou opcional
let altura = 1.6;
altura = null;
const contato = {
    nome: 'Vitor',
    telefone1: '73847324832',
};
// Type Assertion (define o tipo de uma deternminada variável)
const minhaIdade = 23;
minhaIdade.toString(); // (minhaIdade as boolean).to...
// ou (<number> minhaIdade).toString();
const input = document.getElementById('numero1'); // ou const input = <HTMLInputElement> document.getElementById('numero1');
console.log(input.value);
