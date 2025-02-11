function scrollToSection(select) {
  const sectionId = select.value;
  if (sectionId) {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth", // Rolagem suave
    });
  }
}

