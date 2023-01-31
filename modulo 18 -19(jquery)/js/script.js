function teste() {
  jQuery('body').html('<h2>daleeeee</h2>');
}

// teste();

// se o cara colocar exemplo jQuery('h4') ele vai trazer um objeto com todos os h4 do dom, e se colocar jQuery('h4').text(), ele tras o conteudo é massa para colocar em uma possivel variavel fazer um split e talz

//  forma abreviada de criar função no jQuery

// jQuery(function ($) {
//   let titulo = $('h4'); // seletor de tag
//   let conteudo = $('container'); // seletor de class
//   let tituloPrincipal = $('#principal'); // de id

//   console.log(titulo.first);
// });

$(document).ready(function () {
  $('.featured-item h4').click(function () {
    $(this).css({
      color: 'red',
    });
  });

  $('.naoClicar').mouseenter(function () {
    alert('tá doidinho para clicar né');
  });

  $('.featured-item a').on('click', function (event) {
    event.preventDefault();
    alert('link indisponivel');
  });

  $('.owl-carousel').owlCarousel();
  $('.featured-item a').addClass('btn btn-success');


  //callback

  $('.featured-item:nth(0)').hide(2000, function () {
    // este é o call back
    console.log($(this).find('h4').text() + ' esgotado')
  })
    .show(2000, function () {
      console.log($(this).find('h4').text() + ' produto em estoque')
    })

  // animações

  const duracao = 1000
  // $('.featured-item:nth(1)')
  //   .hide(duracao)
  //   .show(duracao)
  //   .fadeOut(duracao)
  //   .fadeIn(duracao)
  //   .toggle(duracao)
  //   .toggle(duracao)

  $('#form-submit').on('click', function (event) {
    event.preventDefault()
    if ($('#email').val() = '')
      $('#email').animate({
        'border': '2px solid #f00'
      })


  })

});



