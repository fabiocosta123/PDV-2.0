let quantidade = document.querySelector('#quantidade')
let codigo = document.querySelector('#codigo')
let nomeProduto = document.querySelector('#nomeProduto')
let preco = document.querySelector('#preco')

function incluirVenda(id) {
    let incluirVenda = []
    incluirVenda = JSON.parse(localStorage.getItem('arrayProdutos'))
    for (let i = 0; i <= incluirVenda.lenght; i++) {
        if (codigo.value == incluirVenda.id) {
            alert('deu certo')
        }else {
            alert('tente outra vez')
        }
    }
}

