// Certificate slider
const certificateSwiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  speed: 1200,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Dusra Swiper (agar aur bhi hai)
const heroSwiper = new Swiper(".heroSwiper", {
  loop: true,
  autoplay: { delay: 5000 },
});
