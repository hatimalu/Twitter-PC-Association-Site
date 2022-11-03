var tph = $('.top').height();

$(window).scroll(function() {
  var top = $(window).scrollTop();
  if (tph > top) {
    $('header').css('background-color', 'rgba(255,255,255,0)');
    } else {
    $('header').css('background-color', 'rgba(255,255,255,0.5)');
  }
});