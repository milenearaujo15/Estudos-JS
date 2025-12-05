//Calcular média dos números
let lista = [1, 2, 3, 4, 5]
let totalSoma = 0

for (let item of lista) {
    totalSoma += item
}

let media = totalSoma / lista.length
console.log(media)