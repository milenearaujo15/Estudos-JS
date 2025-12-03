function extrair(campo) { 
    return function(pessoas){
        return pessoas[campo]
    }
}

const pessoas = [
    { nome: "Ana", idade: 18 },
    { nome: "Bia", idade: 22 },
    { nome: "Carlos", idade: 15 },
];

let novo = pessoas.map(extrair("nome"))
console.log(novo)