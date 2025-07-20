const footerItemBtn = document.querySelectorAll('.res_footer_btn');

    footerItemBtn.forEach((itemDown) => {
        itemDown.addEventListener('click', (e) => {
            e.preventDefault();

        const menuGroup = itemDown.closest('ul');
        const listItems = menuGroup.querySelectorAll('.res_footer_list_item');
        const arrowImg = itemDown.querySelector('img');

        let isOpen = false;

        // 첫 번째 항목 기준 열림  확인
        if (listItems[0].style.height === '45px') {
            isOpen = true;
        }

        listItems.forEach((item) => {
            if (isOpen) {
                // 닫기
                item.style.height = '0';
                item.style.opacity = '0';
            } else {
                // 열기
                item.style.height = '45px';
                item.style.opacity = '1';
            }
        });

        // 이미지 변경
        if (arrowImg) {
            arrowImg.src = isOpen
                ? 'assets/images/footer-responsive/res_footer_arrow_down.png'
                : 'assets/images/footer-responsive/res_footer_arrow_up.png';
        }
    });
});

const footerSwiper = new Swiper('.footer_swiper_wrap', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,  // img 가운데 정렬
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});