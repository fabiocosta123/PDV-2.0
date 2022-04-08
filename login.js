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


function carregar(){

   /* let name = document.getElementById('nome').value 
    let user = document.getElementById('usuario').value
    let password = document.getElementById('senha').value */
    if(usuario == localStorage.usuario){
        alert('nome ok')

    }else {
        alert('nome incorreto')
    }
   
}



//window.open('menu.html', '_self')
