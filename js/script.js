swiper = new Swiper('.swiper', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	slidesPerView: 1.2,

	spaceBetween: 16,

	slidesPerGroup: 1,

	breakpoints: {
		// when window width is >= 320px
		500: {
			slidesPerView: 2.4
		}
	}
});

const brandsShowMore = document.querySelector('.show-more__btn'),
	brandsContainer = document.querySelector('.brands__container'),
	brandsShowMoreTxt = brandsShowMore.querySelector('.show-more__text');


brandsShowMore.addEventListener('click', () => {

	brandsContainer.classList.toggle('brands__container--show-more');
	brandsShowMoreTxt.classList.toggle('show-more__text--hide');

	if (brandsContainer.classList.contains('brands__container--show-more')) {

		brandsShowMoreTxt.textContent = 'Скрыть';
	} else {
		brandsShowMoreTxt.textContent = 'Показать все';
	}
});