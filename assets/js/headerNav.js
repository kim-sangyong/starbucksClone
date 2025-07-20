const navItems = document.querySelectorAll('.list_hover');
const subMenus = document.querySelectorAll('.nav_sub_wrap');

    for(let i = 0; i < navItems.length; i++) {
    const navItem = navItems[i];
    const subMenu = subMenus[i];

    function addActive() {
        navItem.classList.add('hover');
        const height = subMenu.scrollHeight;
        subMenu.style.height = height + 'px';
    }

    function removeActive() {
        navItem.classList.remove('hover');
        subMenu.style.height = '0px';
    }

        navItem.addEventListener('mouseover', addActive);
        navItem.addEventListener('mouseout', removeActive);
        subMenu.addEventListener('mouseover', addActive);
        subMenu.addEventListener('mouseout', removeActive);
    }

    // 버튼 클릭 시 클래스 추가
    const searchOpen = document.querySelector('#search_btn_toggle_open');
    const submitBtn = document.querySelector('#search_btn_submit');
    const inputTrans = document.querySelector('#search_input');

        searchOpen.addEventListener('click', () => {
        inputTrans.classList.add('active');
        searchOpen.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    });

    submitBtn.addEventListener('click', (e) => {
        if(inputTrans.value.trim() === '') {
            e.preventDefault();
            alert('검색어를 입력하세요');
        }else {
            e.preventDefault();
            alert('상품을 준비 중입니다!');
            inputTrans.value = ''; // alert 후 검색 창 리셋
        }
    });