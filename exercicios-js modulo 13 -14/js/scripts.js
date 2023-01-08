
// function gerarmedia() {
//   var a = parseInt(document.getElementById('a').value);
//   var b = parseInt(document.getElementById('b').value);
//   var c = parseInt(document.getElementById('c').value);

//   var media = (a + b + c) / 3;

//   document.getElementById('resultado').innerHTML = media;
// }



// // switch

// switch (cor) {
//   case 'branco':
//     meuCarro = 'branco'
//     break;
//   case 'vermelho':
//     meuCarro = 'vermelho'
//     break;
//   case 'amarelo':
//     meuCarro = 'amarelo'
//     break;

//   default:
//     console.log('nao temos as cores desejada')
// }


// var nota1 = 5
// var nota2 = 10
// var nota3 = 7

// var media = (nota1 + nota2 + nota3) / 3
// if (media >= 7) {
//   console.log('aluno aprovado')
// } else {
//   console.log('aluno reprovado')
// }
// // laços de repetição


// // primeira parte atribui
// //segunda parte condição
// //terceira parte interação
// var km;
// var revisao = 3;

// for (km = 0; km < revisao; km++) {
//   console.log('pode rodar' + km);
// }

// var alunos = [
//   [6, 7, 9],
//   [5, 4, 8],
//   [3, 1, 2]
// ]
// var nota = 0;

// for (var i = 0; i < alunos.length; i++) {
//   nota = 0
//   var aluno = alunos[i]
//   console.log("aluno:", aluno);

//   for (c = 0; c < aluno.length; c++) {
//     nota += aluno[c]
//   }

//   media = nota / 3

//   if (media >= 7) {
//     resultado = 'aprovado'
//   } else {
//     resultado = 'reprovado'
//   }
//   console.log("media: " + media + "-" + resultado)
// }

// // while 

// var contador = 10;

// while (contador > 0) {
//   contador--;
//   console.log(contador)
// }

// // funçoes

// function calcularMedia(notas) {
//   var soma = 0
//   for (c = 0; c < notas.length; c++) {
//     soma += notas[c]
//   }

//   media = soma / notas.length;

//   return media
// }

// console.log("media: " + calcularMedia([10, 6]))


// para o form 1

document.addEventListener('submit', function (evento) {
  evento.preventDefault();


  let meuForm = document.getElementById('formulario-01');
  let dados = new FormData(meuForm);

  let objeto = {}
  let notas = 0

  for (let key of dados.keys()) {
    objeto[key] = dados.get(key)

    notas += parseInt(dados.get(key))
  }

  console.log(objeto)
})