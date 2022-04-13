import * as cadastrar from "cadastro.js";
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

 
}




