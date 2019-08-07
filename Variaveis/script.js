//DECLARAÇÃO DE UMA VARIAVEL, E ATRIBUINDO VALORES
var nome = 'Mazola';
var idade = 23;
var possuiFaculdade = true;
console.log(`Olá meu nome é ${nome}, eu tenho ${idade} anos e tenho faculdade ${possuiFaculdade}`);

//METODO DRY, AS VARAIVEIS SERVEM PARA ISSO, PARA NAO FICAR REPTINDO TODA HORA OS NUMEROS OU NOMES, E COLOCAMOS
//AS VARIAVEIS. AS VARIAVEIS REPLICAM AQUELE NOME, CASO QUEIRA ALTERAR O NOME, BASTA ALTERAR O VALOR DA VARIAVEL
var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco);

//DECLARAR VÁRIAVEIS EM 1 LINHA
var sobrenome = 'Mazola', 
    cidade = 'SP';
console.log(sobrenome, cidade);

//SEM VALOR
var semDefinir;
console.log(semDefinir);

//PADROES DE VÁRIAVEIS: NÃO COMEÇAR COM NUMEROS, CASE SENSITIVE, PALAVRAS RESERVADAS
//E CRIAMOS UTILIZANDO O METODO CAMELCASE: abrirModal

//VARIAVEL NÃO FOI DEFINIDA
console.log(aindaNaoDefine);

//HOISTING: QUANDO CRIAMOS AS VARIAVEIS, ELA SEMPRE VÃO PARA CIMA
//ex:
console.log(comida);
comida = 'pizza'
console.log(comida);

//REATRIBUINDO O VALOR, DIFERENÇA EM LET, VAR E CONST
var timevar = 'Flamengo';
timevar = 'Corinthians'

//NÃO DEIXA SE REDELARAR NO MESMO ESCOPO já var da
let timelet = 'Flamengo';
// let time = 'Corinthians' //isso nao pode
timelet = 'Corinthians'

//A COSNT NÃO DEIXA REDEFINIR VALOR, COMEÇOU ASSIM, TERMINARÁ ASSIM EM QUALQUER ESCOPO

//EXERCICIO
var nomeEx = 'Fernando';
var idadeEx = 23;
var comidaEx;
comidaEx = 'Parmegiana';
var variavel1, variavel2, variavel3, variavel4, variavel5;