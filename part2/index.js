const toggleOpenMenus = document.querySelectorAll(".js-open-menu");
const menus = document.querySelectorAll(".js-menu");

toggleOpenMenus.forEach((btn, idx) => {
  btn.addEventListener("click", handlOpenMenu.bind(this, idx));
});

function handlOpenMenu(idx) {
	let toOpenModal = document.querySelectorAll('.menu-open');
	let OpenModal = document.querySelectorAll('.b-r-open');
	if (!toOpenModal.length == 0) {toOpenModal[0].classList.remove('menu-open');};
	if (!OpenModal.length == 0) {OpenModal[0].classList.remove('b-r-open');};

  menus[idx].classList.toggle("menu-open");
  toggleOpenMenus[idx].classList.toggle("b-r-open");
}