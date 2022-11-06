// Initial state
var scrollPos = 0;
let scrollDirection = '';
let swiperIsFocused = false;
let swiperReachEnd = false;
let swiperReachBeginning = false;
let swiperIndex = 0;

let scrollIcon = document.querySelector('.icon-scroll');
let sponsorSection = document.getElementById('sponsors');
let sponsorSwiper = document.getElementById('sponsors-swiper');

scrollIcon.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
});

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

swiper.on('transitionEnd', function () {
	swiperIndex = swiper.realIndex;
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
		tabcontent[i].classList.remove('block');
		tabcontent[i].classList.add('hidden');
	}
	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove('active');
	}

	document.getElementById(tabId).classList.remove('hidden');
	document.getElementById(tabId).classList.add('block');
	evt.currentTarget.classList.add('active');
}

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

		if(swiperIndex != 0) swiper.slideTo(0);
		
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
