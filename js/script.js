const imgElement = document.querySelector('.wrapper');
const imageArray = document.querySelectorAll('.image');

let index = 1;
document.querySelector('.image1').classList.add('visible');
let isInitial = true;
let imgChanger = null;
let indexOfCurrentImage;

const initialChangeImageHandler = () => {
	if (isInitial) {
		index > 4 ? (index = 1) : index++;
		const currentImage = document.querySelector(`.image${index}`);
		currentImage.classList.add('visible');
		if (index === 1) {
			const prevImage = document.querySelector(`.image5`);
			prevImage.classList.remove('visible');
		} else {
			const prevImage = document.querySelector(`.image${index - 1}`);
			prevImage.classList.remove('visible');
		}
	}
};
const initialImgChanger = setInterval(initialChangeImageHandler, 3000);

const hoverOnLiItem = e => {
	const burgerIcon = e.target.closest('div').className;
	if (burgerIcon !== 'nav__container') {
		return;
	}
	if (isInitial) {
		clearInterval(initialImgChanger);
	}
	if (imgChanger) {
		clearInterval(imgChanger);
	}

	imageArray.forEach(item => item.classList.remove('visible'));
	indexOfCurrentImage = e.target.closest('li').id;
	const currentImage = document.querySelector(`.image${indexOfCurrentImage}`);
	currentImage.classList.add('visible');
	isInitial = false;
};

const lostHoverOnLiItem = e => {
	const burgerIcon = e.target.closest('div');
	if (e.target) {
		const changeImageHandler = () => {
			const imageOnLostHover = document.querySelector(`.image${indexOfCurrentImage}`);
			imageOnLostHover.classList.remove('visible');
			index = indexOfCurrentImage;
			indexOfCurrentImage > 4 ? (indexOfCurrentImage = 1) : indexOfCurrentImage++;
			const currentImage = document.querySelector(`.image${indexOfCurrentImage}`);
			currentImage.classList.add('visible');
			if (indexOfCurrentImage === 1) {
				const prevImage = document.querySelector(`.image5`);
				prevImage.classList.remove('visible');
			} else {
				const prevImage = document.querySelector(`.image${indexOfCurrentImage - 1}`);
				prevImage.classList.remove('visible');
			}
		};
		imgChanger = setInterval(changeImageHandler, 3000);
	}
};

document.body.addEventListener('mouseover', hoverOnLiItem);
document.body.addEventListener('mouseleave', lostHoverOnLiItem);
