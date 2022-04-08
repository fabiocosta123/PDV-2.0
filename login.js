function carregar(){
    document.getElementById('nome').value = localStorage.nome
    document.getElementById('usuario').value = localStorage.usuario
    document.getElementById('senha').value = localStorage.senha
    if(usuario == localStorage.usuario){
        alert('nome ok')

    }else {
        alert('nome incorreto')
    }
}

//window.open('menu.html', '_self')
