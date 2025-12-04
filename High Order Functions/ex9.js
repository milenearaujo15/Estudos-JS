function abrirCofre() {
    console.log("Cofre aberto!");
}


function requireSenha(senhaCorreta) {
    return function (senhaDigitada, fn) {
        if (senhaDigitada === senhaCorreta){
            fn()
        }else{
            console.log("Senha incorreto")
        }
    }
}

const senhaSecreta = requireSenha("1234");
senhaSecreta("1234", abrirCofre); // deve abrir
senhaSecreta("0000", abrirCofre); // deve bloquear