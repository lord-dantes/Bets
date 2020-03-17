const toggleOpenMenus = document.querySelectorAll(".js-open-menu");
const menus = document.querySelectorAll(".js-menu");

toggleOpenMenus.forEach((btn, idx) => {
  btn.addEventListener("click", handlOpenMenu.bind(this, idx));
});

function handlOpenMenu(idx) {
	let one = document.querySelectorAll('.menu-open');
	let two = document.querySelectorAll('.b-r-open');
	if (!one.length == 0) {one[0].classList.remove('menu-open');};
	if (!two.length == 0) {two[0].classList.remove('b-r-open');};
  menus[idx].classList.toggle("menu-open");
  toggleOpenMenus[idx].classList.toggle("b-r-open");
}