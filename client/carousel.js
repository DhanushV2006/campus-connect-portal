const track = document.getElementById("carouselTrack");
const slides = document.querySelectorAll(".slide");
const nextButton = document.getElementById("nextBtn");
const prevButton = document.getElementById("prevBtn");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(index) {
    currentSlide = index;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle("active-dot", i === currentSlide);
    });
}

nextButton.addEventListener("click", function () {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);
});

prevButton.addEventListener("click", function () {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", function () {
        showSlide(index);
    });
});

showSlide(0);