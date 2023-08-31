const burgerButton = document.querySelector('.burger-btn')
const burgerNav = document.querySelector('.burger-nav')
const burgerIcon = document.querySelector('.burger-btn__bars')
const imgElement = document.querySelector('.wrapper')

const navigationHandler = () => {
	burgerNav.classList.toggle('burger-nav--active')
	burgerIcon.classList.toggle('burger-btn__bars--active')
}

// const images = ["url('../img/358.JPG')", '../img/IMG_1674.jpg', '../img/IMG_1866.JPG', '../img/IMG_6807.JPG', '../img/IMG_7110.JPG']


let index = 1
let isInitial = true
let imgChanger = null

const initialChangeImageHandler = () => {
	if (isInitial) {
		
		imgElement.classList.remove(`image${index}`)
		index > 4 ? (index = 1) : index++
		imgElement.classList.add(`image${index}`)
	}
}
const initialImgChanger = setInterval(initialChangeImageHandler, 3000)

const lostHoverOnLiItem = e => {
	const deleteClass = Array.from(imgElement.classList)
	const startIndex = deleteClass[1].slice(-1)
	const changeImageHandler = () => {
		imgElement.classList.remove(`image${startIndex}`)
		imgElement.classList.remove(`image${index}`)
		index > 4 ? (index = 1) : index++
		imgElement.classList.add(`image${index}`)
	}
	imgChanger = setInterval(changeImageHandler, 3000)
	return imgChanger
}

const hoverOnLiItem = e => {
	const burgerIcon = e.target.closest('div').className
	if (burgerIcon !== 'nav__container') {
		return
	}
	const deleteClass = Array.from(imgElement.classList)
	imgElement.classList.remove(deleteClass[1])
	if (isInitial) {
		clearInterval(initialImgChanger)
	}
	if (imgChanger) {
		clearInterval(imgChanger)
		imgChanger = null
	}
	const liItem = e.target.closest('li')
	imgElement.classList.add(`image${liItem.id}`)
	isInitial = false
}

const pageLoaderHandler = () => {
	const spinnerContainer = document.querySelector('.spinner-container')
	const spinner = document.querySelector('.spinner')
	spinnerContainer.classList.add('spinner-container-hidden')
	spinner.classList.add('spinner-hidden')
}

window.addEventListener('load', pageLoaderHandler)
burgerButton.addEventListener('click', navigationHandler)
document.body.addEventListener('mouseover', hoverOnLiItem)
document.body.addEventListener('mouseleave', lostHoverOnLiItem)
