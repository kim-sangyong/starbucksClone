const btn = document.querySelector('#show_swiper_btn');
const btnImg = btn.querySelector('#noti_btn'); // a태그에 직접 id를 부여했기때문에 이미지를 찾지못함
                                        //  다시 이벤트를 img로 적용
const swiperSection = document.querySelector('.slider_wrap');
  let mySwiper;

  btn.addEventListener('click', function (e) {
  e.preventDefault();

  const isOpen = swiperSection.classList.contains('open');

  if (isOpen) {
    // 닫기
    swiperSection.classList.remove('open');
    btnImg.src = 'assets/images/btn_down.png';
    btnImg.alt = '프로모션 펼치기';
  } else {
    // 열기
    swiperSection.classList.add('open');
    btnImg.src = 'assets/images/btn_up.png';
    btnImg.alt = '프로모션 숨기기';

    // 슬라이더 최초 1회만 실행
    if (!mySwiper) {
      mySwiper = new Swiper('.swiper', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 750,
        effect: 'slide',

        // 반응형, 0부터 491px 까지 1개만 이상부터 2개 보여짐
        breakpoints: {
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          491: {
            slidesPerView: 2,
            centeredSlides: true,
          }
        }
      });
    }
  }
});