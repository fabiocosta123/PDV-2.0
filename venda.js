localstorage.getItem(produtos);

function incluirVenda() {
  let quantidade = document.querySelector("#quantidade").value;
  let codigo = document.querySelector("#codigo").value;
  let nomeProduto = document.querySelector("#nomeProduto").value;
  let preco = document.querySelector("#preco").value;
  let incluirVenda = [];
  let txtPagar = document.querySelector("#totalPagar");

  let pagar = quantidade * preco;
  let tPagar = 0;
  tPagar += pagar;
  txtPagar.innerHTML = `Total a pagar R$ ${tPagar.toFixed(2)}`;
}
/*  incluirVenda.forEach(element => {
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
*/
