function calcularProduto() {
  let produto = prompt('Qual o valor do produto?')
  let saida = document.querySelector('p#res')
  const parcela = 3
  const percentual = 0.10
  let desconto, preco, valorAv, valorAp

  // 1.888,76
  // 1888,76
  // 1888.76

  preco = produto.replace('.', '').replace(',', '.')
  preco = parseFloat(preco)
  
  if (parseFloat(produto) > 0 ) {
    // Pegando os 10%
    desconto = preco * percentual
    
    //Valor à vista
    valorAv = preco - desconto
    //Valor à prazo em 3x
    valorAp = preco / parcela

    saida.innerHTML  = `<p>Valor do produto: R$ ${produto}</p> `
    saida.innerHTML += `<p>Desconto: R$ ${desconto.toFixed(2)}</p> `
    saida.innerHTML += `<p>À vista: R$ ${valorAv.toFixed(2)}</p> `
    saida.innerHTML += `<p>Ou 3x de: R$ ${valorAp.toFixed(2)}</p> `
    
  }else{
    alert('Digite o preço do produto.')
    saida.innerHTML = ''
  }

}

