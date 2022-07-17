document.addEventListener("DOMContentLoaded", () => {

    const swiper = new Swiper('.swiper', {

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        slidesPerView: 1.2,

        loop: true,

        spaceBetween: 16,

        slidesPerGroup: 1,

        breakpoints: {

            500: {
                slidesPerView: 2.4
            }
        },

    });

    if (window.matchMedia('(min-width: 767px)').matches) {
        swiper.destroy();
    }

    const brandsShowMore = document.querySelector('.show-more__btn');
    const brandsContainer = document.querySelector('.brands__list-items');
    const brandsShowMoreTxt = brandsShowMore.querySelector('.show-more__text');

    const toggleBrandsShowMore = () => {
        brandsContainer.classList.toggle('brands__list-items--show-more');
        brandsShowMoreTxt.classList.toggle('show-more__text--hide');

        if (brandsContainer.classList.contains('brands__list-items--show-more')) {

            brandsShowMoreTxt.textContent = 'Скрыть';
        } else {
            brandsShowMoreTxt.textContent = 'Показать все';
        }
    }

    brandsShowMore.addEventListener('click', toggleBrandsShowMore);
});