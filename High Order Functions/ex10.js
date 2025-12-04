function acessarAdmin() {
    console.log("Área do admin acessada!");
}

function requireRole(roleNecesario) {
    return function (roleUsuario, fn) {
        if (roleUsuario === roleNecesario){
            fn()
        }else{
            console.log("Acesso negado")
        }
    }
}


const adminOnly = requireRole("admin");
adminOnly("admin", acessarAdmin); // deve passar
adminOnly("user", acessarAdmin);  // deve bloquear
