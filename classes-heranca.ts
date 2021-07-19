class Car {

    private velocidadeAtual: number = 0;
    
    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) { } 


    private alterarVelocidade(delta: number) {
      const novaVelocidade = this.velocidadeAtual + delta;

        if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
         this.velocidadeAtual = novaVelocidade;
        } else {
         this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima: 0
        }
    }

    acelerar() {
        this.alterarVelocidade(5);
    }
    
    frear() {
        this.alterarVelocidade(-5);
    }
}


// Herança
class Camaro extends Car {
    private turbo = false;

    constructor() {
     super('Chevrolet', 'Camaro', 500);   
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

const camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();
