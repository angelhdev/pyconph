// Testing gsap
let scrollIcon = document.querySelector('.icon-scroll');

// if (scrollIcon) {
//     scrollIcon.onclick = function(e) {
//         e.preventDefault();
//         gsap.to(window, {duration: 1, scrollTo:".main"});
//     };
// }

scrollIcon.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



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

const scrollSponsors = document.querySelector("#sponsors");

// var results, result, timeout;
// var delay = 500;

// $(window).scroll(function() {
//     clearTimeout(timeout);
    
//     timeout = setTimeout(function() {
//         // 
//     }, delay);
// });

var targetOffset = $("#sponsors").offset().top;

var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {   
        $('#con2').css({"border-top":"2px solid #f4f5f8"});
        $('#con3').css({"border-top":"2px solid #2e375b"});
    } else {
      // ...
    }
});