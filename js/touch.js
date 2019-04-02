$(document).ready(function() {
 $('.feature-overlay').on('mouseover', function(){
 $('.active').removeClass('active');
 this.classList.toggle('active');
 });
});
