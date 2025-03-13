// Cookie Consent
document.addEventListener("DOMContentLoaded", () => {
    const cookieConsent = document.getElementById("cookieConsent")
    const cookieAccept = document.getElementById("cookieAccept")

    // Check if user has already accepted cookies
    if (!localStorage.getItem("cookieConsent")) {
        cookieConsent.style.display = "block"
    }

    cookieAccept.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "true")
        cookieConsent.style.display = "none"
    })

})

const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Experiences slider
const experiencesTrack = document.getElementById('experiencesTrack');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const experienceCards = document.querySelectorAll('.experience-card');
let experienceIndex = 0;
let experienceWidth;

function updateExperienceWidth() {
    if (window.innerWidth >= 992) {
        experienceWidth = 33.333;
    } else if (window.innerWidth >= 768) {
        experienceWidth = 50;
    } else {
        experienceWidth = 100;
    }
}

updateExperienceWidth();
window.addEventListener('resize', updateExperienceWidth);

function moveExperiencesSlider() {
    experiencesTrack.style.transform = `translateX(-${experienceIndex * experienceWidth}%)`;

    // Update active card
    experienceCards.forEach(card => card.classList.remove('active'));
    if (experienceCards[experienceIndex]) {
        experienceCards[experienceIndex].classList.add('active');
    }
}

prevButton.addEventListener('click', () => {
    if (experienceIndex > 0) {
        experienceIndex--;
        moveExperiencesSlider();
    }
});

nextButton.addEventListener('click', () => {
    if (experienceIndex < experienceCards.length - Math.floor(100 / experienceWidth)) {
        experienceIndex++;
        moveExperiencesSlider();
    }
});

