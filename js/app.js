$(document).ready(function(){

    // window.onscroll = function() {myFunction()};

    // var navbar = document.getElementById("navbar");
    // var sticky = navbar.offsetTop;

    // function myFunction() {
    // if (window.pageYOffset >= sticky) {
    //     navbar.classList.add("sticky")
    // } else {
    //     navbar.classList.remove("sticky");
    // }
    // }

    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click', function(){
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function(){
        mobileNav.classList.remove('open');
    });


});