
// Slider
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
//! Menu
var trigger = document.getElementById('toggle');
var box = document.getElementById('menu');

toggle.addEventListener('click', function() {
  box.classList.toggle('active');
});

// ! Scroll
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
});

// ! Modal

let modal = document.getElementById('Modal');
let btn = document.getElementById("modalBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "flex";
};
span.onclick = function() {
    modal.style.display = "none";
};
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    };
};
