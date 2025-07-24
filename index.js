document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const contentSections = document.querySelectorAll(".content-section");

  let activeSection = document.querySelector(".content-section.active");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = e.target.dataset.target + "-content";
      const newActiveSection = document.getElementById(targetId);

      // If it's the same section, do nothing
      if (activeSection === newActiveSection) return;

      // Remove active-link class from all links
      navLinks.forEach((nav) => nav.classList.remove("active-link"));
      e.target.classList.add("active-link");

      // Smooth fade out the current section
      activeSection.style.opacity = "0";
      activeSection.style.visibility = "hidden";
      activeSection.style.transition =
        "opacity 0.5s ease, visibility 0.5s ease";

      // Delay to allow fade-out before switching
      setTimeout(() => {
        activeSection.classList.remove("active");

        // Prepare new section for fade-in
        newActiveSection.classList.add("active");
        newActiveSection.style.opacity = "0";
        newActiveSection.style.visibility = "visible";
        newActiveSection.style.transition =
          "opacity 0.5s ease, visibility 0.3s ease";

        // Trigger reflow to ensure transition applies
        void newActiveSection.offsetWidth;

        // Start fade-in
        newActiveSection.style.opacity = "1";

        activeSection = newActiveSection;
      }, 500); // Match CSS transition time
    });
  });
});
