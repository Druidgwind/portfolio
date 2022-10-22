const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});



let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// const body = document.querySelector("body");
// var typed = new Typed(".type", {
//     strings: ["Estudante", "Servidor Público", "Designer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true
// })

if (this.scrollY > 500) {
    $('.scroll-up-btn').addClass("show");
} else {
    $('.scroll-up-btn').removeClass("show");
}
$('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
});
