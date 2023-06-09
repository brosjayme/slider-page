 var swiper = new Swiper(".slide-content", {
    slidersPerview: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor:'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0:{
            slidersPerview: 1,
        },
        520:{
            slidersPerview: 2,
        },
        950:{
            slidersPerview: 3,
        },
    }
 })
