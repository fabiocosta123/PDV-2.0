
function login() {
    let usuario = document.querySelector('#usuario')
    let senha = document.querySelector('#senha')
    let listaUsuario = []
   
    listaUsuario = JSON.parse(localStorage.getItem('cad'))

    listaUsuario.forEach((element) => {
        if(usuario.value == element.usuario && senha.value == element.senha){
            window.open('menu.html', '_self')
        }else {
            alert('Dados incorretos, verifique os dados digitados')
        }
    });
}





