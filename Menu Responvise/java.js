var contador = 1;

$(document).ready(function(){
  var ancho = window.innerWidth;
  console.log(ancho);
  $(".menu_bar").click(function(){
    if (contador===1) {
      $("nav").animate({
        left:'0'
      });
      contador=0;
    }else{
      contador=1;
      $("nav").animate({
        left:'-100%'
      });
    }



  });
  $(".submenu").click(function(){

      $(this).children(".hijos").slideToggle();
    


  })
});
