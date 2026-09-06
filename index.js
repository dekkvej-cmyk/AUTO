
// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Закриваємо меню після натискання на пункт

document.querySelectorAll(".navbar nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ================= MODAL =================

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalButton = document.getElementById("modalButton");

const detailsButtons = document.querySelectorAll(".details-btn");

detailsButtons.forEach(button => {

    button.addEventListener("click", () => {

        const carName = button.dataset.car;

        modalTitle.textContent = carName;

        modal.classList.add("active");

    });

});


// Закрити модальне вікно

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});


// Закрити при кліку за межами

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});


// ================= MODAL BUTTON =================

modalButton.addEventListener("click", () => {

    modal.classList.remove("active");

    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });

});


// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    if (name.trim() === "" || phone.trim() === "") {
        alert("Будь ласка, заповніть усі поля.");
        return;
    }

    alert(
        `Дякуємо, ${name}!\n\n` +
        `Вашу заявку прийнято.\n` +
        `Ми зв'яжемося з вами за номером ${phone}.`
    );

    form.reset();

});

const heroSwiper = new Swiper(".hero-swiper", {

    loop: true,

    speed: 1000,

    effect: "slide",

    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: ".hero-next",
        prevEl: ".hero-prev"
    },

    pagination: {
        el: ".hero-pagination",
        clickable: true
    }

});
/* ========================================
   REVIEWS SLIDER
======================================== */

const reviews = document.querySelectorAll(".review-card");
const dots = document.querySelectorAll(".review-dot");

const prevButton = document.getElementById("reviewPrev");
const nextButton = document.getElementById("reviewNext");

let currentReview = 0;


/* Показати відгук */

function showReview(index) {

    reviews.forEach((review) => {
        review.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });

    reviews[index].classList.add("active");
    dots[index].classList.add("active");
}


/* Наступний */

nextButton.addEventListener("click", () => {

    currentReview++;

    if (currentReview >= reviews.length) {
        currentReview = 0;
    }

    showReview(currentReview);

});


/* Попередній */

prevButton.addEventListener("click", () => {

    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    showReview(currentReview);

});


/* Клік по точках */

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        currentReview = index;

        showReview(currentReview);

    });

});