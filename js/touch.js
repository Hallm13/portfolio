$(document).ready(function() {
 $('.feature-overlay').on('touchstart', function(){
 $('.active').removeClass('active');
 this.classList.toggle('active');
 });
});
