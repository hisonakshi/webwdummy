const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    /*autoplay: {
      delay: 2500,
      disableOnInteraction:false,
    },*/
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    }
  });
  
  
  const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop:true,
    /*autoplay: {
      delay: 2500,
      disableOnInteraction:false,
    },*/
    pagination: {
      el: ".award-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    }
  });  