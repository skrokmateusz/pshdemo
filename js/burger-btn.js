const burgerButton = document.querySelector('.burger-btn');
const burgerNav = document.querySelector('.burger-nav');
const burgerIcon = document.querySelector('.burger-btn__bars');

const navigationHandler = () => {
	burgerNav.classList.toggle('burger-nav--active');
	burgerIcon.classList.toggle('burger-btn__bars--active');
};

burgerButton.addEventListener('click', navigationHandler);