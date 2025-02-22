$(".receipts-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});
const slides = document.querySelector('.slides');
        const slide = document.querySelectorAll('.slide');
        const indicatorsContainer = document.querySelector('.indicators');
        let index = 0;

        slide.forEach((_, i) => {
            const indicator = document.createElement('div');
            indicator.classList.add('indicator');
            if (i === 0) indicator.classList.add('active');
            indicator.addEventListener('click', () => {
                index = i;
                updateSlide();
            });
            indicatorsContainer.appendChild(indicator);
        });

        document.querySelector('.next').addEventListener('click', () => {
            index = (index + 1) % slide.length;
            updateSlide();
        });

        document.querySelector('.prev').addEventListener('click', () => {
            index = (index - 1 + slide.length) % slide.length;
            updateSlide();
        });

        function updateSlide() {
            slides.style.transform = `translateX(${-index * 100}%)`;
            document.querySelectorAll('.indicator').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }