document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const contentSections = document.querySelectorAll(".content-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = e.target.dataset.target + "-content";

      const currentActiveContent = document.querySelector(
        ".content-section.active"
      );
      if (currentActiveContent) {
        currentActiveContent.classList.remove("active");
      }

      navLinks.forEach((navLink) => navLink.classList.remove("active-link"));

      e.target.classList.add("active-link");

      const newActiveContent = document.getElementById(targetId);
      if (newActiveContent) {
        newActiveContent.classList.add("active");
      }
    });
  });
});
