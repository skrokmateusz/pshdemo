const pageLoaderHandler = () => {
	const spinnerContainer = document.querySelector('.spinner-container');
	const spinner = document.querySelector('.spinner');
	spinnerContainer.classList.add('spinner-container-hidden');
	spinner.classList.add('spinner-hidden');
};

window.addEventListener('load', pageLoaderHandler);