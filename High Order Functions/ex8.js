function entrarNaFesta() {
    console.log("Você entrou na festa!");
}

//Middleware
function verificarIdade(idadeMinima) {
    return function (idadeUsuario, fn) {
        if (idadeUsuario >= idadeMinima){
            fn ()
        }else{
            console.log("Acesso negado")
        }
    }
}

const maior18 = verificarIdade(18);
maior18(20, entrarNaFesta); // deve passar
maior18(15, entrarNaFesta); // deve bloquear