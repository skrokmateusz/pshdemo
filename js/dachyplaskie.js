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

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach(el => observer.observe(el))
