const iconMenu = document.querySelector('.nav__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.nav__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('--locked');
        iconMenu.classList.toggle('nav__icon--active');
        menuBody.classList.toggle('nav__body--active');
    });
}