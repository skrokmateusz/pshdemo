const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				console.log(entry.target.id)
				entry.target.classList.add('show')
				entry.target.classList.remove('hidden')
			} else {
				entry.target.classList.add('hidden')
				// entry.target.classList.remove('show')
			}
		})
	},
	{
		threshold: 0.1,
	}
)

const pageLoaderHandler = () => {
	const spinnerContainer = document.querySelector('.spinner-container')
	const spinner = document.querySelector('.spinner')
	spinnerContainer.classList.add('spinner-container-hidden')
	spinner.classList.add('spinner-hidden')
}

window.addEventListener('load', pageLoaderHandler)

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach(el => observer.observe(el))
