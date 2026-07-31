// ================================
// Python Masterclass - script.js
// ================================

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Sticky Navbar Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(
    ".feature-card, .learn-card, .pricing-card, .cta, .hero-image"
);

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }

    });
}, {
    threshold: 0.15
});

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

    revealObserver.observe(element);

});

// Hero Image Hover Effect
const heroImage = document.querySelector(".hero-image img");

if (heroImage) {

    heroImage.addEventListener("mouseenter", () => {
        heroImage.style.transform = "scale(1.03)";
    });

    heroImage.addEventListener("mouseleave", () => {
        heroImage.style.transform = "scale(1)";
    });

}

// Button Click Animation
document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function() {

        this.style.transform = "scale(0.96)";

        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);

    });

});

// Animated Counter
const counters = document.querySelectorAll(".hero-rating h3");

function runCounter(counter) {

    const text = counter.innerText;

    if (text.includes("+")) {

        const target = parseInt(text.replace(/\D/g, ""));
        let count = 0;

        const increment = Math.ceil(target / 100);

        const timer = setInterval(() => {

            count += increment;

            if (count >= target) {
                counter.innerText = target + "+";
                clearInterval(timer);
            } else {
                counter.innerText = count + "+";
            }

        }, 20);

    }

}

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            runCounter(entry.target);

            counterObserver.unobserve(entry.target);

        }

    });

});

counters.forEach(counter => {
    counterObserver.observe(counter);
});

// Dynamic Footer Year
const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = footer.innerHTML.replace(
        "2026",
        new Date().getFullYear()
    );

}

console.log("✅ Python Masterclass Loaded Successfully");