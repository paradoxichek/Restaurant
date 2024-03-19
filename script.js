let burger = document.querySelector(".menu_burger_items");
let buttonBurger = document.querySelector(".menu_burger");
let buttonModal = document.querySelector("#modal");
let modalMenu = document.querySelector(".modal");
let modalBg = document.querySelector(".modal_bg");
let closeModal = document.querySelector(".cross");





buttonBurger.onclick = () => {
  burger.classList.toggle("dispp");
};

buttonModal.onclick = () => {
  modalMenu.style.top = "50%";
  modalBg.style.top = "0%";
  document.body.classList.add("no_scroll");
};

closeModal.onclick = () => {
  modalMenu.style.top = "-50%";
  modalBg.style.top = "-100%";
  document.body.clas;

  sList.remove("no_scroll");
};
modalBg.onclick = () => {
  modalMenu.style.top = "-50%";
  modalBg.style.top = "-100%";
  document.body.classList.remove("no_scroll");
};
