// Testing gsap
let scrollIcon = document.querySelector('.icon-scroll');
console.log('1245')
if (scrollIcon) {
    scrollIcon.onclick = function(e) {
        e.preventDefault();
		console.log('12')
        gsap.to(window, {duration: .5, scrollTo:".feature"});
    };
}


let tabsContainer = document.querySelector('#tabs');
let tabTogglers = tabsContainer.querySelectorAll('#tabs a');

tabTogglers.forEach(function (toggler) {
	toggler.addEventListener('click', function (e) {
		e.preventDefault();

		let tabName = this.getAttribute('href');
		let tabContents = document.querySelector('#tab-contents');

		for (let i = 0; i < tabContents.children.length; i++) {
			tabTogglers[i].parentElement.classList.remove(
				'bg-yelloworange',
				'text-white'
			);
			tabTogglers[i].parentElement.classList.add('text-cioccolato');
			tabContents.children[i].classList.remove('hidden');

			if ('#' + tabContents.children[i].id === tabName) {
				continue;
			}
			tabContents.children[i].classList.add('hidden');
		}

		e.target.parentElement.classList.remove('text-cioccolato');
		e.target.parentElement.classList.add('bg-yelloworange', 'text-white');
	});
});