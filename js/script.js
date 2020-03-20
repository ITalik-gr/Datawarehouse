

$('.slider').slick({
  dots: true,
  infinite: false,
  speed: 1000,
  arrows: true,
  centerMode: true,
  canterPadding: '60px',
  variableWidth: true,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),
});

var trigger = document.getElementById('toggle');
var box = document.getElementById('menu');

toggle.addEventListener('click', function() {
  box.classList.toggle('active');
});