
// dropdown
if ( $(window).width() > 767){
    $('.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(500);
    });
}
//dropdwon mobile version
else{
$('.dropdown-toggle').dropdown();
}