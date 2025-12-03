function somar(a, b) {
    return a + b;
}

const lista = [2,5,6,90,4]
let total = lista.reduce(somar)
console.log(total)