// =============================
// Portfolio Category Filter
// =============================

const filterButtons = document.querySelectorAll(".filter-buttons button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        cards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

            } else if (card.classList.contains(filter)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});

// =============================
// Smooth Fade Animation
// =============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".card").forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";

    observer.observe(card);

});

// =============================
// Navbar Shadow on Scroll
// =============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 40) {

        header.style.boxShadow = "0 10px 20px rgba(0,0,0,.4)";

    } else {

        header.style.boxShadow = "none";

    }

});