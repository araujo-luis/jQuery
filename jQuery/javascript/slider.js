$('#imagen1').hide();
$('#imagen2').hide();
$('#imagen3').hide();
var actual=0;
var anterior=0;


function cambiarAutomaticamente(valor){
  console.log("SE EJECUTO", actual);
  anterior=actual;
  actual = (valor==3)?1: valor=valor+1;
  imagenActual(actual);


}
function imagenActual(valor){
  if (valor===actual) {
    return;
  }
  actual=valor;
  setTimeout(cambiarImagen(actual,anterior),2000)
  console.log(actual);
  anterior=valor;

}

function cambiarImagen(newImg,oldImg){
  console.log(actual);
  $('#imagen'+oldImg).fadeOut(1000);
  $('#imagen'+newImg).fadeIn(1000);

}
$(document).ready(function(){
  $('#imagen1').fadeIn(1000);
});
