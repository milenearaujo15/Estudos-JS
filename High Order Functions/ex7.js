function logar(soma) {
    return function (...args) {
        console.log("Chamando função...")
        return soma(...args)
    }
}

function soma(a, b) {
    return a + b;
}

const somaComLog = logar(soma);

console.log(somaComLog(3, 4));