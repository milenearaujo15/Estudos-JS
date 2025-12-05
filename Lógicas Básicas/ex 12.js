//Remover valores repetidos de um array
function filtro2(lista) {
    let lista_filtrada = []

    for (let i = 0; i < lista.length; i++) {
        if(!lista_filtrada.includes(lista[i])){
            lista_filtrada.push(lista[i])
        }
    }
    return lista_filtrada;
}

let lista = [1,2,3,4,5,6,2,4,2,5,6]
console.log(filtro2(lista))