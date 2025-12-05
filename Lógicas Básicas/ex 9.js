//filtrar lista com númeors pares
function filtro_inv(lista) {
    let lista_filtrada = []

    for (let i = lista.length-1; i >= 0; i--) {
        if(lista[i]%2 == 0){
            lista_filtrada.push(lista[i])
        }
    }
    return lista_filtrada;
}
let lista_original = [1, 2, 3, 4, 5, 6];

console.log(filtro_inv(lista_original));