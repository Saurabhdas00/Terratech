// Add this script to handle smooth scrolling when clicking on navigation links
function redirectToSomewhere(){
    window.location.href = "https://app.powerbi.com/groups/me/reports/e79ad090-c24a-45ea-b612-9297c336fda5?pbi_source=desktop"}
function redirectTofile1(){
        window.location.href = "https://app.powerbi.com/groups/me/reports/6d1d3d85-3726-4192-a67b-dc096b8264eb?pbi_source=desktop"}
function redirectTofile2(){
            window.location.href = "https://app.powerbi.com/groups/me/reports/19273cf0-580d-4cfb-a078-17f2fd0d11c1/ReportSection36366e729b295454cb92?experience=power-bi"}
function redirecttofile3(){
                window.location.href = "https://app.powerbi.com/groups/me/reports/f711bbec-32e9-4e3c-a3cc-b32ca9e1db60?pbi_source=desktop"}

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
function handleButtonClick() {
    var clickMeButton = document.getElementById("clickMeButton");
    clickMeButton.classList.toggle("clicked");
    redirectToSomewhere(); // Call your existing function logic
}

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
document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If you need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

