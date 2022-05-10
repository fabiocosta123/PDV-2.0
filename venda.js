localStorage.getItem(produtos);

let tPagar = 0;
function incluirVenda() {
  let quantidade = document.querySelector("#quantidade").value;
  let codigo = document.querySelector("#codigo").value;
  let nomeProduto = document.querySelector("#nomeProduto").value;
  let preco = document.querySelector("#preco").value;
  let incluirVenda = [];
  let txtPagar = document.querySelector("#totalPagar");
  //está inserindo valores no rodapé <total a pagar>, falta fazer a soma do total a pagar
  let pagar = quantidade * preco;
  tPagar += pagar;
  txtPagar.innerHTML = `Total a pagar R$ ${tPagar.toFixed(2)}`;
}
