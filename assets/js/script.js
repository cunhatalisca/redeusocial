
const menuShow = () => {

    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/img/close_white_36dp.svg";
    }
}

const modal = document.querySelector('.modal-container');

function openModal() {
    modal.classList.add('activate-modal')
}

function removeModal() {
    modal.classList.remove('activate-modal')
}

