//classes
class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        if (this.admin === true) {
            return true
        }
        return false;
    }
}

//utilizando herança com extends
class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false 
console.log(Adm1.isAdmin()) // true



/////////////////////////////////////////////////////////////////////////
//operações map, reduce, filter, find
const usuarios = [
    {
        nome: 'Diego',
        idade: 23,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Gabriel',
        idade: 15,
        empresa: 'Rocketseat'
    },
    {
        nome: 'Lucas',
        idade: 30,
        empresa: 'Facebook'
    },
];

//utilizando map para retornar todas as idades dos usuários
const usandoMap = usuarios.map((usuario) => usuario.idade);
console.log(usandoMap);

//utilizando filter para retornar somente usuário com mais de 18 anos e que trabalham na RocktSeat
const usandoFilter = usuarios.filter((usuario) => usuario.idade > 18 && usuario.empresa === "Rocketseat");

console.log(usandoFilter);

//utilizando o find para procurar um usuário que trabalhe no Facebook
const usandoFind = usuarios.find((usuario) => usuario.empresa === "Facebook");

console.log(usandoFind);

//unindo operações para multiplicar a idade de todos usuários por dois e depois realizar um filtro nos usuários que possuem no máximo 50 anos
usuarios.forEach((usuario) => usuario.idade = usuario.idade * 2)
const unindoOperacoes = usuarios.filter((usuario) => usuario.idade > 50);
console.log(unindoOperacoes);


////////////////////////////////////////////////////////
//Transformando funções em arrow functions
//3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
    return item + 10;
});

console.log(arr.map((item) => item + 10));

//3.2
function mostraIdade(usuario) {
    return usuario.idade;
}
mostraIdade(usuarios);

const mostraIdadeArrow = (usuario) => usuario.idade;
console.log(mostraIdadeArrow(usuarios[0]));

// 3.3 
const nomeUsuario = "Diego";
const idade = 23;
function mostraUsuario(nomeUsuario = 'Diego', idade = 18) {
    return { nomeUsuario, idade };
}
mostraUsuario(nomeUsuario, idade);
mostraUsuario(nomeUsuario);

const mostraUsuarioArrow = (nomeUsuario = 'Diego', idade = 18) => ({ nomeUsuario, idade });

console.log(mostraUsuarioArrow("Pedro", 31));
console.log(mostraUsuarioArrow("Pedro"));


// 3.4 
const promise = function () {
    return new Promise(function (resolve, reject) {
        return resolve();
    })
}
const promiseArrow = () => {
    return new Promise((resolve, reject) => resolve());
}





//////////////////////////////////////
// Destructuring
const empresa = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
const { nome, endereco: { cidade, estado } } = empresa;
console.log(nome); // Rocketseat 
console.log(cidade); // Rio do Sul 
console.log(estado); // SC

//Destructuring 2
function mostraInfo(usuario) {
    return `${usuario.nome} tem ${usuario.idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

function mostraInfoDestructed({ nome, idade }) {
    return `${nome} tem ${idade} anos`
}

console.log(mostraInfoDestructed({ nome: 'Diego', idade: 23 }));



///////////////////////////////////
//SPREAD

const array = [1, 2, 3, 4, 5, 6]

const [x, ...y] = array;
console.log(x);
console.log(y);

//SPREAD 2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul', uf: 'SC',
        pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: "Pedro"};
const usuario3 = {...usuario, endereço: {cidade: "Fortaleza"}};
console.log(usuario2);
console.log(usuario3);

//REST
function soma(...params) {
    return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21 
console.log(soma(1, 2)); // 3

/////////////////////////////
//Literals
const usuarioLiteral = 'Diego'; const idadeLiteral = 23;
console.log('O usuário ' + usuarioLiteral + ' possui ' + idadeLiteral + ' anos');
console.log(`O usuário ${usuarioLiteral} possui ${idadeLiteral} anos`);