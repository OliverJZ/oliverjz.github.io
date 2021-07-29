$(document).ready(function() {


  $('.plus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    if(value == 9){
      value = 9;
    }else{
      value++;
    }
    $input.val(value);
  });

  $('.minus-btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
      
      if(value == 1){
        value = 1;
      }else{
        value--;
      }

    $input.val(value);
  
  });

  $( window ).resize(function() {
    var height = ($(".div2 iframe").width()/16)*9;

    $(".div2 iframe").css("height", height);
    //$( "#log" ).append( "<div>Handler for .resize() called.</div>" );
  });


	$(window).scroll(function() {
    var width = 50;
    if($(window).width() > 1024){
      width = 650;
    }
    if($(window).width() <= 1024){
      width = 300;
    }
    if($(window).width() <= 760){
      width = 220;
    }
  	if($(document).scrollTop() > width) {
      $('nav').addClass('change');
      $(".nav-links a").css("color", "white");
      $(".logo").css("color", "white");
      $(".tlacidlo").css("color", "white");
      $("nav a").css("color", "white");
      $(".dropdown-content a").css("color", "black");
      $(".dropcontent").css("background-color", "black");

      $(".dropcontent").css("color", "white");

      
    }
    else {
      $('nav').removeClass('change');
      $(".nav-links a").css("color", "black");
      $(".logo").css("color", "black");
      $(".tlacidlo").css("color", "black");
      $("nav a").css("color", "black");
      $(".dropdown-content a").css("color", "black");
      $(".dropcontent").css("background-color", "white");
      $(".dropcontent").css("color", "black");


    
      
    }
  });
}); 


