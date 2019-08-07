var pessoa = {
  nome: "Mazola",
  idade: 23,

}

//PARA SABER SE É UM MÉTODO DO OBJETO, ELE TEM QUE TER UM SIMBOLO DE QUADRADO ROXO

//MATH É UM OBJETO QUE TEM ATRIBUTOS COMO FUNCTIONS E ATRIBUTOS APENAS VALORES

//TODA VEZ QUE TEM PONTO É UM OBJETO

console.log(setInterval);
console.log(console);


// Crie um objeto com os seus dados pessoais
var fernando = {
  nome: 'fernando',
  sobrenome: 'mazola',
  cpf: '37903280813'
}
console.log(fernando.nome);
// Deve possui pelo menos duas propriedades nome e sobrenome

// Crie um método no objeto anterior, que mostre o seu nome completo
fernando.meunome = function () {
    return `${this.nome} ${this.sobrenome}`;
  }

console.log(fernando.meunome);


// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir: function (pessoa) {
    if (pessoa === 'homem') {
      return true;
    } else {
      return false;
    }

  }
}

if (cachorro.latir('mulher')) {
  console.log('AuaAU');
} else {
  console.log('quieto');
}

var btn = document.querySelector('.btn');

console.log(btn);