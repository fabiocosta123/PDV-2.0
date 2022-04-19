function incluirVenda() {
    let quantidade = document.querySelector('#quantidade')
    let codigo = document.querySelector('#codigo')
    let nomeProduto = document.querySelector('#nomeProduto')
    let preco = document.querySelector('#preco')


    let incluirVenda = []
    incluirVenda = JSON.parse(localStorage.getItem('arrayProdutos'))

    incluirVenda.forEach(element => {
        if (codigo.value == element.id) {
            function produto() {
                nomeProduto = element.nameProduto
            }
        } else {
            alert('tente outra vez')
        }
    });
}


