$(document).ready(function (){
  $('#aparecer').hide();
  $('#desaparecer').click(function(){

    $('.desaparecer').fadeOut('slow');
    $('#desaparecer').hide();
    $('#aparecer').show();

    $('#aparecer').click(function() {
      $('.desaparecer').fadeIn('slow');
      $('#aparecer').hide();
      $('#desaparecer').show();
    });
  });

  
  $('#desliza').click(function(){
    console.log("DEBBUG:", "ENTRA A DESLIZA");
    $('.slideDiv').slideToggle('slow');

  });

});
