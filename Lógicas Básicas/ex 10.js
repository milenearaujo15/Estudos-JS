//contador de letras na palavra ao contrario
function contador(palavra) {
    let contagens = {}

    for (let i = palavra.length-1; i >= 0; i--) {
        if(contagens[palavra[i]]){
            contagens[palavra[i]] += 1
        }else{
            contagens[palavra[i]] =1
        }
    }
    return contagens;
}

let palavra = "milene";

console.log(contador(palavra));