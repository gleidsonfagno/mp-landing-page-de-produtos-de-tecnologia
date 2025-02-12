function scrollToSection(select) {
  const sectionId = select.value;
  if (sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth", // Rolagem suave
    });
  }
}

const menumobile = document.querySelector(".menu")
const menu = document.querySelector("#menu-open");

function toggleMenu() {
  menu.classList.toggle("active");
  console.log("Menu aberto");

  menumobile.style.display ===  "flex" ? menumobile.style.display = "none" : menumobile.style.display = "flex";
}