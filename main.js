const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, // Oprava: změna "slidePerView" na "slidesPerView"
    speed: 600,
    parallax: true,
    loop: true,
    // dont show arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    grabCursor: true
});
