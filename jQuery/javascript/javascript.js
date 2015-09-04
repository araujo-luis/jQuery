$(document).ready(function(){
    $('#boton').click(function(){
        var Agregar =$('input[name=checkListItem]').val();
        $('.lista').append('<div class="item">'+Agregar+'</div>');
    });

  $(document).on('click','.item',function(){
    console.log("DEBBUG: ", "Entro a funcion de remove()");

    $(this).remove();
  });
});
