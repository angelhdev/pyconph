let scrollIcon = document.querySelector('.icon-scroll');

scrollIcon.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
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

swiper.on('reachEnd', function () {
	console.log('reached end of slide');

	$('body').removeClass('overflow-hidden');
	$('#sponsors').removeClass('vertical-slider-show');
});

var targetOffset = $('#sponsors').offset().top;
var firstLoad = true;

$(window).on('scroll', function () {
	if (firstLoad && $(window).scrollTop() > targetOffset) {
		$('body').addClass('overflow-hidden');
		$('#sponsors').addClass('vertical-slider-show');

		firstLoad = false;
	}
});
