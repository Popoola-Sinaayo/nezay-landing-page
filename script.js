document.addEventListener("DOMContentLoaded", function() {
    const featuresContainer = document.querySelector(".features");
    const featureItems = document.querySelectorAll(".feat");

    featureItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            const topPosition = `${index * 100 / 3}%`;

            featuresContainer.style.setProperty("--filled-top-position", topPosition);

            featureItems.forEach(feat => feat.classList.remove("active-feat"));
            item.classList.add("active-feat");
        });
    });
});

// FAQ accordion – retractable/expandable
document.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!btn || !answer) return;

    btn.addEventListener("click", () => {
        const isOpen = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", isOpen);
        answer.hidden = !isOpen;
    });
});

// Active quote Style
const quotes = document.querySelectorAll('.quotes-group .quote');

quotes.forEach(quote => {
    quote.addEventListener('click', () => {
        quotes.forEach(quote => quote.classList.remove('active'));

        quote.classList.add('active');
    });
});

// Mobile nav toggle (hamburger)
const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const mainNavigation = document.querySelector("#main-navigation");

if (mobileNavToggle && mainNavigation) {
    mobileNavToggle.addEventListener("click", () => {
        const isOpen = mainNavigation.classList.toggle("is-open");
        mobileNavToggle.classList.toggle("is-open", isOpen);
        mobileNavToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after selecting an item on mobile
    mainNavigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mainNavigation.classList.remove("is-open");
            mobileNavToggle.classList.remove("is-open");
            mobileNavToggle.setAttribute("aria-expanded", "false");
        });
    });
}
