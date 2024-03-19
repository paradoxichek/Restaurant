let burger = document.querySelector('.menu_burger_items')
let buttonBurger = document.querySelector('.menu_burger')

buttonBurger.onclick = () => {
    console.log('amir');
burger.classList.toggle('dispp')
}

let buttonModal = document.querySelectorAll('#modal')
let modalMenu = document.querySelector('.modal')
let modalBg = document.querySelector('.modal_bg')
let closeModal = document.querySelector('.cross')

buttonModal.forEach(item => {
    item.onclick = () => {
     modalMenu.style.top = '50%'
     modalBg.style.top = '0%'
     document.body.classList.add('no_scroll')
    }
    
});

closeModal.onclick = () => {
    modalMenu.style.top = '-50%'
    modalBg.style.top = '-100%'
    document.body.classList.remove('no_scroll')
   }
modalBg.onclick = () => {
    modalMenu.style.top = '-50%'
    modalBg.style.top = '-100%'
    
    document.body.classList.remove('no_scroll')
    
   }

