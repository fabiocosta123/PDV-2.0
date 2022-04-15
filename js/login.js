/*import * as cadastrar from "cadastro.js";
let usuario = document.querySelector('#usuario')
let senha = document.querySelector('#senha')


const newLocal = localStorage.getItem(cad)
console.log(newLocal);
function login(){
    if(usuario.value || senha.value != newLocal.usuario || newLocal.senha){
        alert('Dados incorretos, verifique os dados')
    } else {
        alert('tudo certo')
    }

 
}*/

function login() {
    let usuario = document.querySelector('#usuario')
    let senha = document.querySelector('#senha')
    let listaUsuario = []
    let user = {
        nome: '',
        usuario: '',
        senha: ''
    }

    listaUsuario = JSON.parse(localStorage.getItem('cad'))

    listaUsuario.forEach((element) => {
        if(usuario.value == element.usuario && senha.value == element.senha){
            window.open('menu.html', '_self')
        }else {
            alert('Dados incorretos, verifique os dados digitados')
        }
    });
}





