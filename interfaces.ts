// Interface para tipar alguns dados. Melhor usar interfaces ao invés de Types, por serem semelhantes. Possível trabalhar com Classes
interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Vitor',
        email:'email@email.com'
    }
}

function setUser(usuario: Usuario) {
    // ...
}