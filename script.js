function redirectToSomewhere(){
    window.location.href = "https://abes365-my.sharepoint.com/:u:/g/personal/gagan_22b0231040_abes_ac_in/EWW-Uk1nAc1Lj5-ve4tT4LoBurtOPPm613L80Sl4cN4IRw?e=dNgfLZ";
}
document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('click');
    const menuIcon = document.querySelector('.menu-btn i');
    const navUl = document.querySelector('nav ul');

    menuBtn.addEventListener('click', function () {
        navUl.classList.toggle('show');
        menuIcon.classList.toggle('fa-times');
    });
});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    const slides = document.querySelectorAll('.swiper-slide');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Hide all images
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Display the current image
    slides[slideIndex - 1].style.display = 'block';
}