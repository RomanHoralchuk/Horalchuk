document.addEventListener("DOMContentLoaded", function () {
    // ==========================
    // Carousel
    // ==========================
    const carousel = document.querySelector(".wt-testimonials-carousel");
    const items = document.querySelectorAll(".wt-testimonial-item");
    const dotsContainer = document.querySelector(".wt-dots");

    let itemsPerView;
    let totalSlides;
    let currentSlide = 0;
    let autoSlide;

    function calculateItemsPerView() {
        const width = window.innerWidth;
        if (width <= 480) return 1;
        if (width <= 768) return 2;
        return 3;
    }

    function setupDots() {
        dotsContainer.innerHTML = "";
        itemsPerView = calculateItemsPerView();
        totalSlides = items.length - (itemsPerView - 1);

        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("span");
            if (i === currentSlide) dot.classList.add("active");
            dot.addEventListener("click", () => {
                currentSlide = i;
                updateCarousel();
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateCarousel() {
        const itemWidthWithMargin = items[0].offsetWidth + parseFloat(getComputedStyle(items[0]).marginLeft) + parseFloat(getComputedStyle(items[0]).marginRight);
        const offset = -itemWidthWithMargin * currentSlide;
        carousel.style.transform = `translateX(${offset}px)`;

        const dots = dotsContainer.querySelectorAll("span");
        dots.forEach((d, i) => {
            d.classList.toggle("active", i === currentSlide);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, 4000);
    }

    function initCarousel() {
        currentSlide = 0;

        setupDots();
        updateCarousel();
        resetAutoSlide();
    }
    initCarousel();
    window.addEventListener("resize", initCarousel);




    // ==========================
    // Toggle menu
    // ==========================
    const toggleButton = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    if (toggleButton && navMenu) {
        toggleButton.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

});











// document.addEventListener("DOMContentLoaded", () => {

// });
