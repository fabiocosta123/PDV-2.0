let nome = document.querySelector('#nome')
let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')


function cadastrar() {
    cad = []
    cadastrar = {
        nome: nome.value, usuario: usuario.value, senha: senha.value
    }
    cad.push(cadastrar)
    localStorage.cad = JSON.stringify(cad)
}




