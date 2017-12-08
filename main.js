$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

//smooth scroll w3schools tutorial: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll


$('#one').mouseover(function(){
	$("#one").css('text-shadow', '2px 2px #C7C5B2');
});

$('#one').mouseout(function(){
	$("#one").css('text-shadow', 'none');
});

$('#two').mouseover(function(){
	$("#two").css('text-shadow', '2px 2px #807F3C');
});

$('#two').mouseout(function(){
	$("#two").css('text-shadow', 'none');
});

$('#about').mouseover(function(){
	$("#about").css('text-shadow', '2px 2px gray');
});

$('#about').mouseout(function(){
	$("#about").css('text-shadow', 'none');
});

$('#title1').mouseover(function(){
	$("#title1").css('text-shadow', '2px 2px #C7C5B2');
});

$('#title1').mouseout(function(){
	$("#title1").css('text-shadow', 'none');
});

$('#oneText').mouseover(function(){
	$("#oneText").css('box-shadow', '4px 4px #807F3C');
});

$('#oneText').mouseout(function(){
	$("#oneText").css('box-shadow', 'none');
});

$('#twoText').mouseover(function(){
	$("#twoText").css('box-shadow', '4px 4px #807F3C');
});

$('#twoText').mouseout(function(){
	$("#twoText").css('box-shadow', 'none');
});


$('#issue2Img').mouseover(function(){
	$("#issue2Img").css('box-shadow', '-4px -4px #C7C5B2');
});

$('#issue2Img').mouseout(function(){
	$("#issue2Img").css('box-shadow', 'none');
});

$('#issue1Img').mouseover(function(){
	$("#issue1Img").css('box-shadow', '-4px -4px #C7C5B2');
});

$('#issue1Img').mouseout(function(){
	$("#issue1Img").css('box-shadow', 'none');
});
