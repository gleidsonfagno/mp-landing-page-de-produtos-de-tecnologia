function scrollToSection(select) {
  const sectionId = select.value;
  if (sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth", // Rolagem suave
    });
  }
}

const menumobile = document.querySelector(".menu");
function toggleMenu() {
  menumobile.style.display === "flex"
    ? (menumobile.style.display = "none")
    : (menumobile.style.display = "flex");
}
