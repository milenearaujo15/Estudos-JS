const prompt = require('prompt-sync')();
const nome = prompt("Digite sua nome: ");
const idade = prompt("Digite sua idade: ");
const senha = prompt("Digite sua senha: ");
const papel = prompt("Você exerce que função: ");

const token = []

function entrar() {
    console.log("Login efetuado com sucesso!");
}

//Middleware de idade
function verificarIdade(idadeMinima) {
    return function (idade) {
        if (idade >= idadeMinima) {
            return true
        } else {
            console.log("Acesso negado")
        }
    }
}


//Middleware de senha
function verificarSenha(senhaCerta) {
    return function (senha) {
        if (senha == senhaCerta) {
            return true
        } else {
            console.log("Acesso negado")
        }
    }
}

function requireRole(roleNecesario) {
    return function (roleUsuario) {
        if (roleUsuario === roleNecesario) {
            return true
        } else {
            console.log("Acesso negado")
        }
    }
}

function gerarToken() {
        let token = ""
        const tamanho = Math.floor(Math.random() * (16 - 8) + 8);
        const minusc = "abcdefghijklmnopqrstuvwxyz"
        const maiusc = minusc.toLocaleUpperCase()
        const num = "0123456789"
        const todos = minusc + maiusc + num

        for (let i = 0; i < tamanho; i++) {
            const indiceAleatorio = Math.floor(Math.random() * todos.length);
            let letraSorteada = todos[indiceAleatorio]
            token += letraSorteada
        }

        console.log("Token: " + token)
    }

const idadeValida = verificarIdade(18)(idade);
const senhaValida = verificarSenha("mi123")(senha);
const roleValido = requireRole("admin")(papel);

if (idadeValida && senhaValida && roleValido) {
    entrar();
    setTimeout(() => {
        gerarToken()
    }, 1000);
}


