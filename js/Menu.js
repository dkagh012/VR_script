const LeftMenuOpen = document.querySelector(".open");
const LeftMenu = document.querySelector(".left");
LeftMenuOpen.addEventListener("click", () => {
  if (LeftMenuOpen.querySelector("i").className === "xi-bars") {
    LeftMenu.classList.add("OpenMenu");
    LeftMenuOpen.querySelector("i").className = "xi-close";
  } else if (LeftMenuOpen.querySelector("i").className === "xi-close") {
    LeftMenu.classList.remove("OpenMenu");
    LeftMenuOpen.querySelector("i").className = "xi-bars";
  }
});
