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

var filters = document.querySelectorAll('.filter-sponsor');

filters.forEach((filter) => {
	filter.addEventListener('click', function () {
		var current = document.querySelector('.filter-sponsor.active');
		current.classList.remove('active');

		this.classList.add('active');

		let selectedFilter = filter.getAttribute('data-filter');
		let itemsToHide = document.querySelectorAll(
			`.list-sponsor .item:not([data-filter='${selectedFilter}'])`
		);
		let itemsToShow = document.querySelectorAll(
			`.list-sponsor [data-filter='${selectedFilter}']`
		);

		if (selectedFilter == 'all') {
			itemsToHide = [];
			itemsToShow = document.querySelectorAll(
				'.list-sponsor [data-filter]'
			);
		}

		itemsToHide.forEach((el) => {
			el.classList.add('hidden');
			el.classList.remove('flex');
		});

		itemsToShow.forEach((el) => {
			el.classList.remove('hidden');
			el.classList.add('flex');
		});
	});
});

(function () {
	// your page initialization code here
	// the DOM will be available here

	var tabScrollerWrap = document.querySelector('.tabs-scroller-wrapper');
	var tabScroller = document.getElementById('tab-scroller');
	var scrollerBtn = document.querySelector('.scroller-btn');
	var scrollerBtnLeft = document.getElementById('scroller-btn-left');
	var scrollerBtnRight = document.getElementById('scroller-btn-right');
	var navTabsSlider = document.querySelector('.nav-tabs-slider');

	var tabScrollerWrapWidth = tabScrollerWrap.offsetWidth;
	var totalWidth = 0;

	var scrollerChildNodes = document.querySelectorAll('#tab-scroller li');

	scrollerChildNodes.forEach(function (child) {
		totalWidth += child.offsetWidth;
	});

	if (totalWidth > tabScrollerWrapWidth) {
		scrollerBtn.classList.remove('inactive');
	} else {
		scrollerBtn.classList.add('inactive');
	}

	if (tabScroller.scrollLeft == 0) {
		scrollerBtnLeft.classList.add('inactive');
	} else {
		scrollerBtnLeft.classList.remove('inactive');
	}

	scrollerBtnRight.addEventListener('click', function () {
		scrollTo(navTabsSlider, 0, 200, 300);

		console.log(tabScroller.scrollLeft + ' px');
	});

	scrollerBtnLeft.addEventListener('click', function () {
		scrollTo(navTabsSlider, 0, -200, 300);
	});

	function scrollTo(element, top, left, duration) {
		var startTop = element.scrollTop;
		var startLeft = element.scrollLeft;
		var changeTop = top - startTop;
		var changeLeft = left - startLeft;
		var startDate = new Date().getTime();

		var animateScroll = function () {
			var currentDate = new Date().getTime();
			var currentTime = currentDate - startDate;
			element.scrollTop = Math.easeInOutQuad(
				currentTime,
				startTop,
				changeTop,
				duration
			);
			element.scrollLeft = Math.easeInOutQuad(
				currentTime,
				startLeft,
				changeLeft,
				duration
			);

			if (currentTime < duration) {
				requestAnimationFrame(animateScroll);
			} else {
				element.scrollTop = top;
				element.scrollLeft = left;
			}
		};
		animateScroll();
	}

	Math.easeInOutQuad = function (t, b, c, d) {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	};

	scrollerHide();

	function scrollerHide() {
		var tabScroller = document.getElementById('tab-scroller');
		var scrollerBtnLeft = document.getElementById('scroller-btn-left');
		var scrollerBtnRight = document.getElementById('scroller-btn-right');

		var scrollLeftPrev = 0;

		tabScroller.addEventListener('scroll', function () {
			var newScrollLeft = tabScroller.scrollLeft;
			var width = tabScroller.offsetWidth;
			var scrollWidth = tabScroller.scrollWidth;

			console.log({ width, newScrollLeft, scrollWidth });
			if (scrollWidth - newScrollLeft == width) {
				scrollerBtnRight.classList.add('inactive');
			} else {
				scrollerBtnRight.classList.remove('inactive');
			}

			if (newScrollLeft === 0) {
				scrollerBtnLeft.classList.add('inactive');
			} else {
				scrollerBtnLeft.classList.remove('inactive');
			}
			scrollLeftPrev = newScrollLeft;
		});
	}
})();
