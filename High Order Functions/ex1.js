function executarOperaçao(a,b, operacao) {
    return operacao(a,b)
}

function soma(a,b) {return a+b}
function subtrai(a,b) {return a-b}
function multiplica(a,b){return a*b}
function divide(a,b){return a/b}

console.log(executarOperaçao(7,3,soma))