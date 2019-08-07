// Crie uma função para verificar se um valor é Truthy
function isTrue(valor){
  if(valor){
    return 'É verdadeiro'
  }else{
    return 'É falso'
  }
  /**
   * ou
   return !!valor
   */
}

console.log(isTrue(true));
// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado(lado){
  return lado * 4;
}
console.log(perimetroQuadrado(4));
// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function isName(nome, sobrenome){
  if(typeof nome == 'string'){
    return `Seu nome completo é ${nome} ${sobrenome}`;
  }else{
    return 'Valor inválido, por favor informe um texto'
  }
}
console.log(isName('Fernando', 'Mazola'));


// Crie uma função que verifica se um número é par
function numberPar(numero){
  if(typeof numero === 'number'){
    if(numero % 2 === 0){
      return `O número ${numero} é par`
    }else{
      return `O número ${numero} não é par`
    }
  }else{
    return 'Valor inválido, por favor informe um texto'
  }
}
console.log(numberPar(2));
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function typeDado(valor){
  return `O tipo dessa váriavel é ${typeof valor}`;
}
console.log(typeDado(2));
// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log('Fernando Mazola');
});



var totalPaises = 193;
// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(jaVisitei(20));
console.log(precisoVisitar(20));












