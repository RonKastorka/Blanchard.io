
// header
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
    new SimpleBar(dropdown, {
    /* чтобы изначально ползунок был виден */
    autoHide: false,
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 25,
  });
  })
  
  const headerBtn = document.querySelectorAll('.header-btm__nav');
  const drops = document.querySelectorAll('.dropdown');
  headerBtn.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentHeaderBtn = e.currentTarget;
      let drop = currentHeaderBtn.closest('.header-btm__item').querySelector('.dropdown');

      headerBtn.forEach(el => {
        if (el !== currentHeaderBtn) {
          el.classList.remove('header-btm__nav--active');
        }
       });

      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('dropdown__active');
        }
      }); 

      drop.classList.toggle('dropdown__active') 
      currentHeaderBtn.classList.toggle('header-btm__nav--active');
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-btm__list')) {
        headerBtn.forEach(el => {
            el.classList.remove('header-btm__nav--active');
         });
  
        drops.forEach(el => {
            el.classList.remove('dropdown__active');
        }); 
      }
    });
  });

// burger
  const burgerBtn = document.querySelector('.header__burger');
  const burgerMenu = document.querySelector('.burger');
  const burgerLine = document.querySelector('.header__burger-line');
  const burgerNavBtn = document.querySelector('.burger__link');
    burgerBtn.addEventListener('click', (e) => {
      burgerMenu.classList.toggle('burger--active');
      burgerLine.classList.toggle('header__burger-line--disactive');
      burgerBtn.classList.toggle('header__burger--active');
      searchInput.classList.remove('search__input--active');
      searchBtnClose.classList.remove('search__btn-close--active');
      searchBtn.classList.remove('search__btn--active');
      headerSearch.classList.remove('search--active');
    });
    burgerNavBtn.addEventListener('click', (e) => {
      burgerMenu.classList.remove('burger--active');
      burgerLine.classList.remove('header__burger-line--disactive');
      burgerBtn.classList.remove('header__burger--active');
    });

// search menu
  const searchBtn = document.querySelector('.search__btn');
  const searchInput = document.querySelector('.search__input');
  const searchBtnClose = document.querySelector('.search__btn-close');
  const headerSearch = document.querySelector('.search');
    searchBtn.addEventListener('click', (e) => {
      searchInput.classList.add('search__input--active');
      searchBtnClose.classList.add('search__btn-close--active');
      searchBtn.classList.add('search__btn--active');
      headerSearch.classList.add('search--active');
    }); 
    searchBtnClose.addEventListener('click', (e) => {
      searchInput.classList.remove('search__input--active');
      searchBtnClose.classList.remove('search__btn-close--active');
      searchBtn.classList.remove('search__btn--active');
      headerSearch.classList.remove('search--active');
    });

// hero слайдер
const swiper = new Swiper('.hero__swiper-conteiner', {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  keyboard: true,
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

// gallery селект
const element = document.querySelector('.select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  searchResultLimit: 2
});

// gallery слайдер
const swiperGallery = new Swiper('.gallery__swiper-container', {
  keyboard: true,
  grid: {
    rows: 1,
    fill: "row"
  },
  navigation: {
    nextEl: '.gallery__btn-left',
    prevEl: '.gallery__btn-right',
    disabledClass: 'gallery__btn-disabled',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },

    768: {
      spaceBetween: 34,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },

    1482: {
      slidesPerView: 3,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },

    2500: {
      slidesPerView: 6,
    },
  },
  a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

});

// catalog аккордион
$(".accordion").accordion({
  active: 0,
  heightStyle: "content",
  collapsible: true,
  classes: {
    "icon": 'accordion__icon'
  }
});

// catalog tabs
document.querySelectorAll('.catalog__link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
  document.querySelectorAll('.catalog__link').forEach(function(btn){
  btn.classList.remove('catalog__link--active')});
  e.currentTarget.classList.add('catalog__link--active');
  document.querySelectorAll('.artist').forEach(function(tabsBtn){
    tabsBtn.classList.remove('artist--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('artist--active');
  });
});

// events слайдер
const swiperEvents = new Swiper('.events__list', {
  slidesPerView: 3,
  keyboard: true,
  slidesPerGroup: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: '.events__btn-prev',
    prevEl: '.events__btn-next',
    disabledClass: 'events__btn-disabled',
  },

    breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,
      pagination: {
        el: '.events__pagination',
        clickable: true,
      },
    },

    660: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
      pagination: {
        el: '.events__pagination',
        clickable: true,
      },
    },

    989: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
      pagination: {
        el: '.events__pagination',
        clickable: true,
      },
    },

    1300: {
      slidesPerView: 3,
      spaceBetween: 50,
    },

    1950: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    
    2500: {
      slidesPerView: 5,
    },
  },
});

// tooltip
(() => {
  tippy('.js-tooltip-btn', {
    theme: 'tooltip-style',
    animation: 'perspective',
    duration: 200,
  });
})();

// project слайдер
const swiperProject = new Swiper('.projects__swiper', {
  slidesPerView: 3,
  // loop: true,
  keyboard: true,
  spaceBetween: 50,
  navigation: {
    nextEl: '.projects__btn-prev',
    prevEl: '.projects__btn-next',
    disabledClass: 'projects__btn-disabled',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },

    989: {
      slidesPerView: 2,
      spaceBetween: 50,
    },

    1780: {
      slidesPerView: 3,
    },
    1920: {
      slidesPerView: 3,
    },
    2500: {
      slidesPerView: 6,
    },
  },
});

  // InputMask
  const phoneInput = document.querySelector('input[type="tel"]');
  const im = new Inputmask("+7 (999) 999-99-99");
  im.mask(phoneInput);

  // Validate
  function validateForm(selector, rules, successModal) {
    new window.JustValidate(selector, {
      rules: rules,

      messages: {
        name: {
          required: 'напишите своё имя',
        },
        tel: {
          required: 'напишите свой телефон',
        },
      },

      colorWrong: '#D11616',

      submitHandler: function (form) {
        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              const modalElement = modal.querySelector(successModal);
              const pagePosition = openModal(modalElement);
              controlModal(modalElement, pagePosition);
            };
          };
        };

        xhr.open('POST', 'mail.php', true);
        xhr.send(formData);

        form.reset();
      },
    });
  };

  validateForm('.contacts-form', {
    name: {
      required: true,
    },
    tel: {
      required: true,
    },
  }, '.modal-alert');

  // Map
  ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [55.757596886188026,37.60533711907949],
            zoom: 15
            });

      var myPlacemark = new ymaps.Placemark([55.757596886188026,37.60533711907949], {}, {
        iconLayout: 'default#imageWithContent',
        iconImageHref: '/img/marker.svg',
        iconImageSize: [20, 20],
        geometry: {
              type: "Point",
              coordinates: [55.757596886188026,37.60533711907949],
          }
      });
      myMap.geoObjects.add(myPlacemark);
    }

    // плавный скрол
    document.querySelectorAll('.js-scroll-link').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
  
          const href = this.getAttribute('href').substring(1);
          const scrollTarget = document.getElementById(href);
          const elementPosition = scrollTarget.getBoundingClientRect().top;
  
          window.scrollBy({
              top: elementPosition,
              behavior: 'smooth'
          });
      });
    }); 
    
    (() => {
      const MOBILE_WIDTH = 660;
      
      function getWindowWidth () {
        return Math.max(
          document.body.scrollWidth,
          document.documentElement.scrollWidth,
          document.body.offsetWidth,
          document.documentElement.offsetWidth,
          document.body.clientWidth,
          document.documentElement.clientWidth
        );
      }
      
      function scrollToContent (link, isMobile) {
        if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
          return;
        }
      
        const href = link.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const elementPosition = scrollTarget.getBoundingClientRect().top;
      
        window.scrollBy({
            top: elementPosition,
            behavior: 'smooth'
        });
      }
      
      document.querySelectorAll('.js-scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
      
            scrollToContent(this, true);
        });
      });
    })();
});


