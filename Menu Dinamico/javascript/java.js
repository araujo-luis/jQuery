$(document).ready(function(){
  //contendedor del banner donde el alto es el tamaño de la pantalla
  $("#banner").css({"height": $(window).height()+"px"})
  var bandera = false;
  var scroll;
  //cuando se haga scroll
  $(window).scroll(function(){
    //guarda la distancia en pixeles del scroll
    scroll  = $(window).scrollTop();
//si se llega a scroll 200
    if(scroll>200){
      //este if es para no saturar el navegadors y que solo se aplique una vez
      if(!bandera){
        $("#logo").css({"margin-top":"-0.3em", "width":"6em", "height":"6em"});
        $("header").css({"background-color": "#1A237E", "opacity": "0.75"})
        bandera=true;
      }
    }else{
      if(bandera){
        $("#logo").css({"margin-top":"17em", "width":"17em", "height":"17em"});
        $("header").css({"background-color": "transparent", "opacity": "1"})
        bandera=false;
      }
    }


  });
});
