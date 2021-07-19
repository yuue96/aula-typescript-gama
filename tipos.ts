// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Yu';

// Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [23, 487, 73842];

// Tuple (um pouco parecido com Array)
let jogadores: [string, string, string];          // pode ser [string, number, boolean]
jogadores = ['Fulano', 'Ciclano', 'Beltrano'];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any (aceita qualquer coisa)
const retornoDaAPI: any[] = [123, 'Yu', false];

// Void (quando função não retorna nada)
function printarNaTela(msg: string): void {      // se não escrever void, o JS infere que é void
    console.log(msg); 
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    // ...
}
criar({
    propriedade: 1,
})

// criar('nome') dá erro, pois seria string


// Never (coisas que nunca ocorrem)
function loopInfinito(): never {
    while(true){ }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('Falhou');
}

// Union Types

function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias (criar atalhos para os tipos)
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}
       
const funcionarios: Funcionario[] = [{
    nome: 'Vitor',
    sobrenome: 'Farias',
    dataNascimento: new Date
}, {
    nome: 'Adailton',
    sobrenome: 'Cleas',
    dataNascimento: new Date
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome de funcionários: ', funcionario.nome);
    }
}


// Nulo ou opcional

let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;      // opcional
}
const contato: Contato = {
    nome: 'Vitor',
    telefone1: '73847324832',
}


// Type Assertion (define o tipo de uma deternminada variável)
const minhaIdade: any = 23;
(minhaIdade as number).toString();   // (minhaIdade as boolean).to...
// ou (<number> minhaIdade).toString();


const input = document.getElementById('numero1') as HTMLInputElement;      // ou const input = <HTMLInputElement> document.getElementById('numero1');
console.log(input.value);
