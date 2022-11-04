let scrollIcon = document.querySelector('.icon-scroll');

scrollIcon.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

// let tabsContainer = document.querySelector('#tabs');
// let tabTogglers = tabsContainer.querySelectorAll('#tabs a');

// tabTogglers.forEach(function (toggler) {
// 	toggler.addEventListener('click', function (e) {
// 		e.preventDefault();

// 		let tabName = this.getAttribute('href');
// 		let tabContents = document.querySelector('#tab-contents');

// 		for (let i = 0; i < tabContents.children.length; i++) {
// 			tabTogglers[i].parentElement.classList.remove(
// 				'bg-yelloworange',
// 				'text-white'
// 			);
// 			tabTogglers[i].parentElement.classList.add('text-cioccolato');
// 			tabContents.children[i].classList.remove('hidden');

// 			if ('#' + tabContents.children[i].id === tabName) {
// 				continue;
// 			}
// 			tabContents.children[i].classList.add('hidden');
// 		}

// 		e.target.parentElement.classList.remove('text-cioccolato');
// 		e.target.parentElement.classList.add('bg-yelloworange', 'text-white');
// 	});
// });

// var targetOffset = $('#sponsors').offset().top;

// var $w = $(window).scroll(function () {
// 	if ($w.scrollTop() > targetOffset) {
// 		$('body').css({ overflow: 'hidden' });
// 	}
// });

function toggleTab(evt, tabId) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		// tabcontent[i].style.display = 'none';

		tabcontent[i].classList.remove('block');
		tabcontent[i].classList.add('hidden');
	}
	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		// tablinks[i].className = tablinks[i].className.replace(' active', '');

		tablinks[i].classList.remove('active');
	}

	document.getElementById(tabId).classList.remove('hidden');
	document.getElementById(tabId).classList.add('block');
	evt.currentTarget.classList.add('active');

	// document.getElementById(tabId).style.display = 'block';
	// evt.currentTarget.className += ' active';
}

var swiper = new Swiper('.sponsorsSwiper', {
	direction: 'vertical',
	slidesPerView: 1,
	spaceBetween: 0,
	mousewheel: true,
	mousewheel: {
		forceToAxis: true,
		sensitivity: 1,
		releaseOnEdges: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
