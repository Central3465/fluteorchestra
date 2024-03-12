document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const sidebarLinks = document.querySelectorAll("#sidebar a");

    // Display the #home section by default
    sections.forEach((sec) => {
        if (sec.id === "home") {
            sec.style.display = "block";
        } else {
            sec.style.display = "none";
        }
    });

    // Trigger click event on the #home section link
    sidebarLinks.forEach((link, index) => {
        if (link.getAttribute("href") === "#home") {
            link.click(); // Simulate a click on the #home section link
        }

        link.addEventListener("click", () => {
            // Hide all sections
            sections.forEach((sec) => (sec.style.display = "none"));

            // Display the corresponding section based on the index
            sections[index].style.display = "block";
        });
    });
});