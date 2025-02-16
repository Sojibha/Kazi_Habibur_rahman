document.addEventListener("DOMContentLoaded", function () {
    let sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach((section) => {
            let sectionPos = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;
            if (sectionPos < windowHeight - 50) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections();
});
