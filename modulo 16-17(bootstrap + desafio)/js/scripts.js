// efeito maquina de escrever

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 75 * i);
  });
}

// Se estiver tendo problemas com performance, utilize o FOR loop como abaixo no local do forEach
// function typeWriter(elemento) {
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML = '';
//   for(let i = 0; i < textoArray.length; i++) {
//     setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//   }
// }

const texto = document.querySelector('.efeito-form');
typeWriter(texto);


//  função de embaralhar texto

function embaralharTexto() {
  const sobre = ['breos', 'ebsro', 'ebosr', 'soerb', 'esbor', 'sobre'];
  const produtos = ['dpsoutor', 'srdtpoou', 'trduosop', 'tusdropo', 'dptorsou', 'produtos']

  const textoSobre = document.querySelector('.title-sobre');
  const textoProdutos = document.querySelector('.title-produtos');

  sobre.forEach((palavra, indice) => {
    const timer1 = setTimeout(() => {
      textoSobre.innerText = palavra;
      clearTimeout(timer1);
    }, 200 * indice)
  })
  produtos.forEach((palavra, indice) => {
    const timer2 = setTimeout(() => {
      textoProdutos.innerText = palavra;
      clearTimeout(timer2);
    }, 200 * indice)
  })

}

embaralharTexto()