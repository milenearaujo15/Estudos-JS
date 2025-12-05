//Encontrar o maior número da lista
let lista = [1, 2, 3, 4, 5]
let maior = lista[0]

for (let item of lista) {
    if (item > maior){
        maior = item
    }
}
console.log(maior)
