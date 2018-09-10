$(document).ready(function() {
  $('.feature-overlay').mouseover(function() {
    $( this ).css('opacity', '1');
    if ($('.feature-overlay').css('opacity') ==='1') {
      $('.feature-overlay').css('opacity', '0');
    }
  });
  // $('.feature-overlay').mouseout(function() {
  //   $( this ).css('opacity', '0');
  // });

  $('.feature-overlay').on('touchstart', function() {
    $( this ).css('opacity', '1');
  });
  // $('.feature-overlay').on('touchend', function() {
  //   $( this ).css('opacity', '0');
  // });
});
