//Encontrar o menor número
let lista = [1, 2, 3, 4, 5]
let menor = lista[0]

for (let item of lista) {
    if (item < menor){
        menor = item
    }
}
console.log(menor)
