const LeftMenuOpen = document.querySelector(".open");
const LeftMenu = document.querySelector(".left");
LeftMenuOpen.addEventListener("click", () => {
  if (LeftMenuOpen.querySelector("i").className === "xi-bars") {
    LeftMenu.classList.add("OpenMenu");
    LeftMenuOpen.querySelector("i").className = "xi-close";
    LeftMenuOpen.classList.add("ChangeBtn");
  } else if (LeftMenuOpen.querySelector("i").className === "xi-close") {
    LeftMenu.classList.remove("OpenMenu");
    LeftMenuOpen.querySelector("i").className = "xi-bars";
    LeftMenuOpen.classList.remove("ChangeBtn");
  }
});
