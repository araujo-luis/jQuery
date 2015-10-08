$(document).ready(function(){
  var alto = $(window).height();
  console.log("ALTO: ",alto);
  ajustesIniciales();

  function ajustesIniciales(){
    $("div#body").css({"margin-top":alto- 80 +"px"});
  }

  $(document).scroll(function(){
    var scrollTop = $(this).scrollTop();
    console.log("SCROLL TOP: ", scrollTop);
    var pixeles = scrollTop/70;
    if(scrollTop < alto){
      $("div#contenedor").css({
        "-webkit-filter": "blur("+ pixeles +"px)",
        "background-position": "center -"+pixeles*10+"px"
      });
    }
  });
});
