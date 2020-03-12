
const toggleOpenMenus = document.querySelectorAll(".js-open-menu");
const menus = document.querySelectorAll(".js-menu");

toggleOpenMenus.forEach((btn, idx) => {
  btn.addEventListener("click", handlOpenMenu.bind(this, idx));
});

function handlOpenMenu(idx) {
  menus[idx].classList.toggle("menu-open");
  toggleOpenMenus[idx].classList.toggle("b-r-open");
}
