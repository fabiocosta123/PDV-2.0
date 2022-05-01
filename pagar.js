function receber() {
  let total = document.querySelector("#total").value;
  let recebido = document.querySelector("#recebido").value;
  if (total < recebido) {
    let troco = recebido - total;
    p.innerHTML = `${troco}`;
  }
}
