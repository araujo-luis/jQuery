var bandera = true;
$(window).scroll(function() {
  var scroll = $(this).scrollTop();


  $(".logo").css({
    "transform": "translate(0px, "+scroll/2+"%)"
  });
  $(".pajaro-fondo").css({
    "transform": "translate(0px, "+scroll/4+"%)"
  });

  $(".pajaro-frente").css({
    "transform": "translate(0px, -"+ scroll/50+"%)"
  });

  if(scroll>= 400 && bandera){
    bandera = false;
    setTimeout(numeros,1);

  }


});


function numeros() {
  var numero = 0;
  var parar;

  parar = setInterval(function () {
    numero++;
    console.log(numero);
    $(".numeros").text("$"+numero);

    if(numero== 100){
      clearInterval(parar);
    }
  }, 10);




}
