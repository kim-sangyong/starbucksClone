window.addEventListener('scroll', function() {
    // 2700

    // 콜롬비아 라니뇨
        function colombiaScroll (selector, ss) { // 파라미터로 클래스들을 받음
            const elements = document.querySelector(selector);
            const ele = document.querySelector(ss);

            if(elements) { // selector라면
                elements.style.opacity = '1';
                elements.style.transform = 'translateX(0)';
            }
            if(ele) {
                ele.style.opacity = '1';
            }
        } 
        // 콜롬비아 라니뇨 스크롤 이벤트
        if (window.scrollY >= 410) {
            colombiaScroll('#coffee_scroll_event');
            colombiaScroll('#colombia_scroll_event');
        }
        // if(window.scrollY >= 300 && window.innerWidth >= 884) {
        //     colombiaScroll('#coffee_scroll_event');
        //     colombiaScroll('#colombia_scroll_event'); // 함수를 만들어 중복 제거
        // }
        // if(window.scrollY >= 2400 && window.innerWidth <= 883) {
        //     colombiaScroll('#res_coffee_scroll_event');
        //     colombiaScroll('#colombia_scroll_event');
        // }
        
        // 리저브 커피 opacity
        if(window.scrollY >= 720) {
            const reserveCoffee = document.querySelector('.reserve_coffee');

            reserveCoffee.style.opacity = '1';
        }
        // Pick Your Favorite 스크롤 이벤트
        if(window.scrollY >= 1330) {
            favoriteScroll('#fav_scroll_title');
            favoriteScroll('#fav_scroll_txt');
            favoriteScroll('#fav_opacity'); // opacity만 적용
        }
        // RESERVE MAGAZINE 스크롤 이벤트
        if(window.scrollY >= 1910) {
            const reserveScroll = document.querySelector('#reserve_opacity');

            reserveScroll.style.opacity = '1';
        }
        // store 스크롤 이벤트
        if(window.scrollY >= 2280) {
            storeScroll('#store_opacity'); // opacity 적용
            storeScroll('#store_scroll_01');
            storeScroll('#store_scroll_02');
            storeScroll('#store_scroll_03');
        }
    });

        // 메인 섹션 opacity
        window.addEventListener('load', function() {
            const opacity = [
                '#main_img_opacity',
                '#mango_opacity',
                '#double_opacity',
                '#salt_opacity',
                '#main_btn_opacity'
            ];

            // 각 배열을 순서대로 0.5초마다 실행
            opacity.forEach((selector, index) => {
                // selector는 배열의 데이터 값들, index는 각 배열의 순서
                setTimeout(() => {
                    mainOpacity(selector);
                    }, index * 500); // 0번째는 바로 실행 1번부터 0.5초 간격으로 opacity 실행
                });
            });
            // main opacity
            function mainOpacity(mainSelector) {
                const mainElements = document.querySelector(mainSelector);

                if(mainElements) {
                    mainElements.style.opacity = '1';
                }
            }


        // tablet,mobile 메인 섹션
        window.addEventListener('load', function() {
            const resOpacity = [
                '#main_slogan_op',
                '#drink_img01_op',
                '#drink_img02_op',
                '#drink_img03_op',
                '#res_btn_op'
            ];

            // 각 배열을 순서대로 0.5초마다 실행
            resOpacity.forEach((selector, index) => {
                // selector는 배열의 데이터 값들, index는 각 배열의 순서
                setTimeout(() => {
                    mainOpacity(selector);
                    }, index * 500); // 0번째는 바로 실행 1번부터 0.5초 간격으로 opacity 실행
                });
            });
            // main opacity
            function resOpacity(resSelector) {
                const resElements = document.querySelector(resSelector);

                if(resElements) {
                    resElements.style.opacity = '1';
                }
            }

            // Pick Your Favorite
            function favoriteScroll (favSelector) {
                const favElements = document.querySelector(favSelector);

                if(favElements) {
                    favElements.style.opacity = '1';
                }
                //  fav_opacity가 아니라면 다른 조건들은 translate적용
                if(favElements !== 'fav_opacity') {
                    favElements.style.transform = 'translateX(0)';
                }
            }

            // store
            function storeScroll (storeSelector) {
                const storeElements = document.querySelector(storeSelector);

                if(storeElements) {
                    storeElements.style.opacity = '1';
                }
                if(storeElements !== 'store_opacity') {
                    storeElements.style.transform = 'translateX(0)';
                }
            }