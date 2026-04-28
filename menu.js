//Altere a variavel "menu" para testar o switch casa.

const menu = 3;

switch(menu) {
    case 1:
    console.log("Exercício 1 selecionando. Executando...\n");
    ternario();
    break;

    case 2:
    console.log("Exercício 2 selecionando. Executando...\n");
    forin();
    break;

    case 3:
    console.log("Exercício 3 selecionando. Executando...\n");
    forof();
    break;
}

function ternario(){
    const temp = 25;


const clima = temp < 0
? "Congelante"
: temp < 15
  ? "Frio"
  : temp < 30
    ? "Agradável"
    : "Quente";

console.log(clima);
}

function forin(){

const usuario = {
    nome: "Lucas",
    idade: 28,
    cargo: "Desenvolvedor"
};

for (let chave in usuario){
    console.log(`${chave}: ${usuario[chave]}`);
}
}

function forof(){

const tecnologias = ["JavaScript", "React", "Node.js"];

for (let tech of tecnologias){
    console.log(`Estudando: ${tech}`);
}
}