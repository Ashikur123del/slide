 var swiper = new Swiper(".swiper-container", {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
       
        breakpoints: {
           
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
           
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            
            1400: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

