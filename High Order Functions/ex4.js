function maiorQue(n) {
    return function (x){
        return x > n
    }
}
 const lista =[4,5,8,3,9,6,12,45,65,34,7,2,4]
 let teste = lista.filter(maiorQue(10))

 console.log(teste)