//Exercícios: Fluxo de Controle — Execução Condicional e Repetições 

const menu = 1;

switch (menu) {
    case 1:
        console.log("Exercício 1 selecionando. Executando...\n");
        exercicio1();
        break;

    case 2:
        console.log("Exercício 2 selecionando. Executando...\n");
        exercicio2();
        break;

    case 3:
        console.log("Exercício 3 selecionando. Executando...\n");
        exercicio3();
        break;

    case 4:
        console.log("Exercício 4 selecionando. Executando...\n");
        exercicio4();
        break;

    case 5:
        console.log("Exercício 5 selecionando. Executando...\n");
        exercicio5();
        break;

    case 6:
        console.log("Exercício 6 selecionando. Executando...\n");
        exercicio6();
        break;

    case 7:
        console.log("Exercício 7 selecionando. Executando...\n");
        exercicio7();
        break;

    case 8:
        console.log("Exercício 8 selecionando. Executando...\n");
        exercicio8();
        break;

    case 9:
        console.log("Exercício 9 selecionando. Executando...\n");
        exercicio9();
        break;

    case 10:
        console.log("Exercício 10 selecionando. Executando...\n");
        exercicio10();
        break;

    case 11:
        console.log("Exercício 11 selecionando. Executando...\n");
        exercicio11();
        break;

    case 12:
        console.log("Exercício 12 selecionando. Executando...\n");
        exercicio12();
        break;

    case 13:
        console.log("Exercício 13 selecionando. Executando...\n");
        exercicio13();
        break;

    case 14:
        console.log("Exercício 14 selecionando. Executando...\n");
        exercicio14();
        break;

    case 15:
        console.log("Exercício 15 selecionando. Executando...\n");
        exercicio15();
        break;

    case 16:
        console.log("Exercício 16 selecionando. Executando...\n");
        exercicio16();
        break;

    case 17:
        console.log("Exercício 17 selecionando. Executando...\n");
        exercicio17();
        break;

    case 18:
        console.log("Exercício 18 selecionando. Executando...\n");
        exercicio18();
        break;

    case 19:
        console.log("Exercício 19 selecionando. Executando...\n");
        exercicio19();
        break;

    case 20:
        console.log("Exercício 20 selecionando. Executando...\n");
        exercicio20();
        break;
}


// EXERCÍCIOS //
// FACIL //

function exercicio1() {
    const n = 13;

    if (n > 0) console.log("Positivo");
    else console.log("Negativo");
}



function exercicio2() {
    const n = 77;

    if (n % 2 === 0) console.log("Par");
    else console.log("Ímpar");
}



function exercicio3() {
    const turno = "N";

    if (turno === "M") console.log("Bom dia");
    else if (turno === "T") console.log("Boa tarde");
    else console.log("Boa noite");
}



function exercicio4() {
    const a = 7, b = 21;

    console.log(a > b ? a : b);
}



function exercicio5() {
    const n = 7;

    console.log(n >= 0 ? "Positivo" : "Negativo");
}


function exercicio6() {
    const opcao = 1;

    switch (opcao) {
        case 1: console.log("Início"); break;
        case 2: console.log("Sobre"); break;
        case 3: console.log("Sair"); break;
    }
}



function exercicio7() {
    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }
}



function exercicio8() {
    let i = 5;

    do {
        console.log(i);
        i--;
    } while (i >= 1);
}



function exercicio9() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}



function exercicio10() {
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += i;
    }

    console.log(soma);
}



function exercicio11() {
    const arr = [0, 1, 2, 3, 4];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


function exercicio12() {
    const nomes = ["Eloize", "Ana Laura", "Guilherme"];

    for (let n of nomes) {
        console.log(n);
    }
}



function exercicio13() {
    const usuario = {
        nome: "Tadeu",
        idade: 17,
        curso: "ADS"
    };

    for (let k in usuario) {
        console.log(k + ": " + usuario[k]);
    }
}



function exercicio14() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) break;
        console.log(i);
    }
}



function exercicio15() {
    for (let i = 1; i <= 10; i++) {
        if (i === 7) continue;
        console.log(i);
    }
}

// MÉDIOS //

function exercicio16() {
    const nota = 10;

    if (nota < 6) console.log("Reprovado");
    else if (nota < 8) console.log("Recuperação");
    else console.log("Aprovado");
}

// -------------------------------

function exercicio17() {
    const n = 7;

    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

// -------------------------------

function exercicio18() {
    const arr = [7, "e", 13, true, 3];
    let count = 0;

    for (let v of arr) {
        if (typeof v === "number") count++;
    }

    console.log(count);
}

// -------------------------------
// DIFICIL //

function exercicio19() {
    const palavra = "ana";

    const reversa = palavra.split("").reverse().join("");

    if (palavra === reversa) {
        console.log("Palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

// -------------------------------

function exercicio20() {
    let op = 3;

    while (op !== 3) {
        switch (op) {
            case 1:
                console.log("Inicio");
                break;
            case 2:
                console.log("Cardapio");
                break;
            case 3:
                console.log("Sair");
                break;
        }
    }

    console.log("Menu encerrado");
}