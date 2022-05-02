import 
function incluirVenda() {
    let quantidade = document.querySelector('#quantidade')
    let codigo = document.querySelector('#codigo')
    let nomeProduto = document.querySelector('#nomeProduto')
    let preco = document.querySelector('#preco')


    let incluirVenda = []
    incluirVenda = JSON.parse(localStorage.getItem('arrayProdutos'))
   
    incluirVenda.forEach(element => {
        if (codigo.value == element.id) {
            function produto() {                               //colocar de forma dinamica um valor em um campo
              let recebeProduto = element.nameProduto
              
              document.getElementById('nomeProduto') = recebeProduto
              
            
            }
        } else {
            alert('tente outra vez')
        }
    });
}


