const LeftMenuOpen = document.querySelector(".open");
const LeftMenu = document.querySelector(".left");
const LeftMenuItem = LeftMenu.querySelector(".left");
const Right = document.querySelector(".right");
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
Right.addEventListener("click", () => {
  LeftMenu.classList.remove("OpenMenu");
  LeftMenuOpen.querySelector("i").className = "xi-bars";
  LeftMenuOpen.classList.remove("ChangeBtn");
});
