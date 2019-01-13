$(document).ready(function() {
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var prevScroll = 0;
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if (scrollTop - prevScroll > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      prevScroll = scrollTop;
    } else if (prevScroll - scrollTop > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      prevScroll = scrollTop;
    }
  });
});
