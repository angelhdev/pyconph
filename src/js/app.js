// Initial state
var scrollPos = 0;
let scrollDirection = '';
let swiperIsFocused = false;
let swiperReachEnd = false;
let swiperReachBeginning = false;

let scrollIcon = document.querySelector('.icon-scroll');
let sponsorSection = document.getElementById('sponsors');
let sponsorSwiper = document.getElementById('sponsors-swiper');

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

var swiper = new Swiper('.sponsorSwiper', {
	direction: 'vertical',
	slidesPerView: 1,
	spaceBetween: 0,
	mousewheel: true,
	invert: true,
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

swiper.on('reachBeginning', function () {
	swiperReachBeginning = true;
});

swiper.on('reachEnd', function () {
	swiperReachEnd = true;
});

swiper.on('slideChange', function () {
	if (swiperReachBeginning) {
		exitFullSwiperMode();

		window.scrollTo({
			top: getOffset(sponsorSection).top,
			behavior: 'smooth',
		});
	}

	if (swiperReachEnd || swiper.activeIndex + 1 == swiper.slides.length) {
		exitFullSwiperMode();
	}
});

document.addEventListener('scroll', (e) => {
	handleSponsorSwiper();
	handleScrollDirection();
});

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

// swiper.on('reachEnd', function () {
// 	console.log('reached end of slide');

// 	$('body').removeClass('overflow-hidden');
// 	$('#sponsors').removeClass('vertical-slider-show');
// });

// var targetOffset = $('#sponsors').offset().top;
// var firstLoad = true;

// $(window).on('scroll', function () {
// 	if (firstLoad && $(window).scrollTop() > targetOffset) {
// 		$('body').addClass('overflow-hidden');
// 		$('#sponsors').addClass('vertical-slider-show');

// 		firstLoad = false;
// 	}
// });

function enterFullSwiperMode() {
	sponsorSection.classList.add('swiper-fixed');
	sponsorSwiper.classList.remove('touch-none', 'pointer-events-none');
	document.body.classList.add('overflow-hidden');
}

function exitFullSwiperMode() {
	sponsorSection.classList.remove('swiper-fixed');
	sponsorSwiper.classList.add('touch-none', 'pointer-events-none');
	document.body.classList.remove('overflow-hidden');
}

function handleScrollDirection() {
	if (document.body.getBoundingClientRect().top > scrollPos) {
		scrollDirection = 'up';
	} else {
		scrollDirection = 'down';
	}

	// saves the new position for iteration.
	scrollPos = document.body.getBoundingClientRect().top;
}

function handleSponsorSwiper() {
	var offsets = getOffset(sponsorSection);
	var pageOffset = window.pageYOffset;

	if (
		pageOffset >= offsets.top &&
		pageOffset <= offsets.top + offsets.height &&
		!swiperReachEnd
	) {
		window.scrollTo(0, offsets.top);
		enterFullSwiperMode();
	}

	if (pageOffset < offsets.top) {
		swiperReachEnd = false;
	}
}

function getOffset(el) {
	const rect = el.getBoundingClientRect();
	return {
		left: rect.left + window.scrollX,
		top: rect.top + window.scrollY,
		height: rect.height,
		bottom: window.scrollY - rect.height,
	};
}
