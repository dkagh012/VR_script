const LeftMenuOpen = document.querySelector(".open");
const LeftMenu = document.querySelector(".left");
const RightImage = document.querySelector(".right");
const LeftMenuItem = LeftMenu.querySelectorAll(".MenuItem");
console.log(LeftMenuItem);

// 마우스 이벤트 리스너 제거 (옵션)
RightImage.addEventListener('mousedown', () => {
  // 클릭 시 커서 스타일 변경
  RightImage.style.cursor = 'all-scroll'; // 원하는 커서 스타일로 변경
});

RightImage.addEventListener('mouseup', () => {
  // 마우스 클릭 해제 시 원래 커서 스타일로 변경
  RightImage.style.cursor = 'default'; // 원래 커서 스타일로 변경
});

LeftMenuItem.forEach((item) => {
  item.addEventListener('click', () => {
    LeftMenuItem.forEach((item) => {
      item.classList.remove('Clicked');
    });
    item.classList.add('Clicked');
  });
});

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
