document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');

    let currentIndex = 0;

    function showSlide(index) {
        const translateValue = -index * 100 + '%';
        container.style.transform = 'translateX(' + translateValue + ')';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Automatic slide change (optional)
    setInterval(nextSlide, 5000); // Change slide every 5 seconds

    // Event listeners for next and previous buttons (optional)
    document.querySelector('#nextBtn').addEventListener('click', nextSlide);
    document.querySelector('#prevBtn').addEventListener('click', prevSlide);
});
