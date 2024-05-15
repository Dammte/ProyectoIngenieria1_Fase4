document.addEventListener('DOMContentLoaded', function () {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const roomCarousel = document.querySelector('.room-carousel');

    let scrollAmount = 0;
    const cardWidth = document.querySelector('.room-card').offsetWidth;

    nextBtn.addEventListener('click', function () {
        if (scrollAmount < roomCarousel.scrollWidth - cardWidth) {
            scrollAmount += cardWidth;
            roomCarousel.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });

    prevBtn.addEventListener('click', function () {
        if (scrollAmount > 0) {
            scrollAmount -= cardWidth;
            roomCarousel.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });
});
