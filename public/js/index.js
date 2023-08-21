var wiper = new Swiper(".myswiper", {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1000, //2000ms= 2s;
    effect: "coverflow",
    grabCursor:true,
    centeredSlides: true,
    slidesPreView: "auto",
    coverflowEffect: {
        rotate: 0,
        strech: 0,
        depth: 300,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },

});