

class Data {
    // public dia: number;
    mes: number;            // se escrever private, altera o acesso ao dado (orientação ao objeto)
    ano: number;

    constructor(public dia: number, mes: number, ano: number = 1970) {
        // this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}

const data = new Data(1, 1, 2020);
console.log(data.dia);

const data2 = new Data(1,1);


// Modificadores de acesso
class Carro {

    private velocidadeAtual: number = 0;
    
    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { } 

    acelerar() {
        const aceleracao = 5;
        if (this.velocidadeAtual + aceleracao <= this.velocidadeMaxima) {
                this.velocidadeAtual += aceleracao
        }
    }

    frear() {
            const frenagem = 5;
            this.velocidadeAtual -= frenagem;
    }
}

const carro = new Carro('Honda', 'Civic', 200);
carro.acelerar();

// Possível criar modificadores aos próprios métodos da classe:
//
//  private alterarVelocidade(delta: number) {
//   const novaVelocidade = this.velocidadeAtual + delta;
//   
//    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
//      this.velocidadeAtual = novaVelocidade;
//    } else {
//      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima: 0
//    }
//  }
//
//    acelerar() {
//        this.alterarVelocidade(5);
//    }
//
//    frear() {
//        this.alterarVelocidade(-5);
//    }
//}
//
// const carro = new Carro('Honda', 'Civic', 200);
// carro.acelerar();


