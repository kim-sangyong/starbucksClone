document.querySelector('#tablet_nav_open').addEventListener('click', (e) => {
    e.preventDefault();
    
    document.querySelector('#nav_bg_event').style.display = 'block';
        
        document.querySelector('#nav_width_event').classList.add('width_open');

        document.querySelector('#stew').classList.add('close_stew');
    });

    document.querySelector('#nav_close').addEventListener('click', (e) => {
    e.preventDefault();

    // 배경 숨기기
    setTimeout(() => {
        document.querySelector('#nav_bg_event').style.display = 'none';
    }, 400 );

    // width_open 클래스 즉시 제거하지 않고 0.3초 뒤에 삭제하기
    setTimeout(() => {
        document.querySelector('#nav_width_event').classList.remove('width_open');
    }, 300);

    // close_stew 클래스도 0.2초 뒤에 삭제하기
    setTimeout(() => {
        document.querySelector('#stew').classList.remove('close_stew');
    }, 200);
});

    // 네브 열고 닫기 
    const menuBtns = document.querySelectorAll('.tablet_menu_btn');

    menuBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    e.preventDefault();

    const parentUl = btn.closest('ul');
    const navItems = parentUl.querySelectorAll('.nav_list_item');

    // 열림 여부 판단
    const isOpen = navItems[0].classList.contains('list_item_down');

    // 메뉴 열기/닫기
    navItems.forEach((item) => {
      item.classList.toggle('list_item_down');
    });
    
    const imgs = btn.querySelectorAll('.nav_btn');
    imgs.forEach((img) => {
      img.src = isOpen
        ? 'assets/images/header-responsive/tablet_menu_down.png'
        : 'assets/images/header-responsive/tablet_menu_up.png';

      img.alt = isOpen ? '하위 메뉴 열기' : '하위 메뉴 닫기';
    });
  });
});