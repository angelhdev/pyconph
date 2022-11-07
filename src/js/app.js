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

const filters = document.querySelectorAll('.filter-sponsor');

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
