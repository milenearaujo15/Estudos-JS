//Juntar duas listas em uma só
function junção(lista1, lista2) {
    return lista1.concat(lista2);
}

let lista1 = [1, 2, 3, 4, 5, 6];
let lista2 = [6, 5, 4, 3, 2, 1];
console.log(junção(lista1, lista2))