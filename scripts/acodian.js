  // 자바스크립트로 'TOP' 링크를 클릭했을 때 페이지 맨 위로 스크롤되는 기능을 추가합니다.
  const topLink = document.querySelector('.to_the_top a');

  topLink.addEventListener('click', (event) => {
    // 기본 동작인 링크 이동을 취소합니다.
    event.preventDefault();

    // ScrollIntoView() 메서드를 사용하여 문서의 맨 위로 스크롤합니다.
    // smooth 속성을 추가하면 스크롤이 부드럽게 이루어집니다.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

//누르면 맨 아래로 내려감

 // 자바스크립트로 화살표를 클릭했을 때 맨 아래로 스크롤되는 기능을 추가합니다.
const arrowButton = document.querySelector('.to_the_top_mobile');

arrowButton.addEventListener('click', () => {
  // ScrollIntoView() 메서드를 사용하여 문서의 맨 아래로 스크롤합니다.
  // smooth 속성을 추가하면 스크롤이 부드럽게 이루어집니다.
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
});

//1차 프리모드

var swiper_main_01 = new Swiper(".doctor_swiper", {
  initialSlide: 6,
  slidesPerView: "2",
  spaceBetween: 10,
  loop: false,
  freeMode: true,
  resistance : false,
  breakpoints: {
    391: {
      initialSlide: 6,
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
  });

//왼쪽에서 오른쪽으로 나오기, wrapper에 클래스주면 스와이퍼가 작동 안 함

const doctor_swiper = document.querySelector('.info_section')
window.addEventListener('scroll',()=>{
  if(window.pageYOffset >= doctor_swiper.offsetTop-700){
    doctor_swiper.classList.remove('myan_01_doctor_back')
    doctor_swiper.classList.add('myan_01_doctor')
    }
    else{
      doctor_swiper.classList.remove('myan_01_doctor')
      doctor_swiper.classList.add('myan_01_doctor_back')
    }
})

//3면
document.addEventListener("DOMContentLoaded", () => {
    const carouselItems = document.querySelectorAll(".carousel-item_00");
    const selectButtons = document.querySelectorAll(".select_button > a");
    const comparisonSliders = document.querySelectorAll(".comparison-slider");
    const prevBtn = document.querySelector(".prev_00");
    const nextBtn = document.querySelector(".next_00");
    let currentIndex_00 = 0;
  
    // 초기에 첫 번째 항목과 링크를 보여주도록 합니다.
    showItem(currentIndex_00);
  
    // 이전 버튼 클릭 이벤트 처리
    prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      hideItem(currentIndex_00);
      currentIndex_00 = (currentIndex_00 - 1 + carouselItems.length) % carouselItems.length;
      showItem(currentIndex_00);
    });
  
    // 다음 버튼 클릭 이벤트 처리
    nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      hideItem(currentIndex_00);
      currentIndex_00 = (currentIndex_00 + 1) % carouselItems.length;
      showItem(currentIndex_00);
    });
  
    // 각 링크를 클릭할 때마다 이벤트 리스너 등록
    selectButtons.forEach((link, index) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        hideItem(currentIndex_00);
        currentIndex_00 = index;
        showItem(currentIndex_00);
      });
    });
  
    function showItem(index) {
      selectButtons[index].classList.add("active_00");
      comparisonSliders[index].classList.add("active_00");
    }
  
    function hideItem(index) {
      selectButtons[index].classList.remove("active_00");
      comparisonSliders[index].classList.remove("active_00");
    }
  });
//4번째 면 아코디언
const bd = document.querySelector('.select_button_02');
const selectButtons_02 = document.querySelectorAll(".select_button_02 a");
let isScrolling = false;

selectButtons_02.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();

    // 기존에 active 클래스가 적용된 요소가 있다면 제거
    const activeButton = document.querySelector(".select_button_02 a.active");
    if (activeButton) {
      activeButton.classList.remove('active');
    }

    // 클릭된 요소에 active 클래스 추가
    this.classList.add('active');
  });
});

bd.addEventListener('scroll', () => {
  isScrolling = true;

  clearTimeout(isScrolling);
  isScrolling = setTimeout(() => {
    isScrolling = false;
  }, 100);
});

bd.addEventListener('wheel', (e) => {
  if (isScrolling) {
    e.preventDefault();
  } else {
    bd.scrollLeft += e.deltaY;
  }
}, { passive: false }); // { passive: false }를 추가하여 passive 이벤트가 아님을 명시

document.body.addEventListener('wheel', (e) => {
  if (isScrolling && e.target.closest('.select_button_02')) {
    e.stopPropagation();
  } else if (e.target.closest('.select_button_02')) {
    e.preventDefault();
    bd.scrollLeft += e.deltaY;
  }
}, { passive: false }); // { passive: false }를 추가하여 passive 이벤트가 아님을 명시
//
const selectButtons = document.querySelectorAll('.myan_04 .select_button_01 a');
const myan_04_slider_wrap = document.querySelectorAll('.myan_04 .myan_04_slider_wrap');
console.log(selectButtons, myan_04_slider_wrap);

selectButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

    // 클릭한 버튼에만 active 클래스 추가하고 나머지 버튼들의 active 클래스 제거
    selectButtons.forEach((btn) => {
      if (btn === button) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // 콘솔 로그에 active 클래스 확인
    selectButtons.forEach((btn) => {
      console.log(btn.classList.contains("active"));
    });
  });
});
// 슬라이더의 초기 설정: 첫 번째 요소만 보이도록 설정
myan_04_slider_wrap.forEach((slide, index) => {
  if (index === 0) {
    slide.style.opacity = '1';
  } else {
    slide.style.opacity = '0';
  }
});
selectButtons.forEach((i,index) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('작동중_01')
    for(let i of myan_04_slider_wrap){
      i.style.opacity = '0'
      i.style.zIndex = -1
    }
    myan_04_slider_wrap[index].style.opacity = '1'
    myan_04_slider_wrap[index].style.zIndex = 100
  });
});
selectButtons_02.forEach((i,index) => {
  i.addEventListener("click", (e) => {
    e.preventDefault();
    console.log('작동중_02')
    for(let i of myan_04_slider_wrap){
      i.style.opacity = '0'
      i.style.zIndex = -1
    }
    myan_04_slider_wrap[index].style.opacity = '1'
    myan_04_slider_wrap[index].style.zIndex = 100
  });
});
//myan_04_slider_wrap 없애기
//4면



//전체 탭
const before_after_slide = document.querySelectorAll('.myan_04 .total_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide .before_after_container')
const before_after_slide_001 = document.querySelectorAll('.myan_04 .total_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_001 .before_after_container')
const before_after_slide_002 = document.querySelectorAll('.myan_04 .total_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_002 .before_after_container')
const before_after_slide_003 = document.querySelectorAll('.myan_04 .total_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_003 .before_after_container')
const before_after_slide_004 = document.querySelectorAll('.myan_04 .total_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_004 .before_after_container')
const before_after_slide_005 = document.querySelectorAll('.myan_04 .total_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_005 .before_after_container')
const before_after_slide_006 = document.querySelectorAll('.myan_04 .total_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_006 .before_after_container')
const before_after_slide_007 = document.querySelectorAll('.myan_04 .total_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_007 .before_after_container')
const before_after_slide_008 = document.querySelectorAll('.myan_04 .total_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_008 .before_after_container')
//가슴 탭
const before_after_slide_01 = document.querySelectorAll('.myan_04 .breast_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide .before_after_container')
const before_after_slide_001_01 = document.querySelectorAll('.myan_04 .breast_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_001 .before_after_container')
const before_after_slide_002_01 = document.querySelectorAll('.myan_04 .breast_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_002 .before_after_container')
const before_after_slide_003_01 = document.querySelectorAll('.myan_04 .breast_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_003 .before_after_container')
const before_after_slide_004_01 = document.querySelectorAll('.myan_04 .breast_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_004 .before_after_container')
const before_after_slide_005_01 = document.querySelectorAll('.myan_04 .breast_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_005 .before_after_container')
const before_after_slide_006_01 = document.querySelectorAll('.myan_04 .breast_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_006 .before_after_container')
const before_after_slide_007_01 = document.querySelectorAll('.myan_04 .breast_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_007 .before_after_container')
const before_after_slide_008_01 = document.querySelectorAll('.myan_04 .breast_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_008 .before_after_container')
//엉덩이 탭
const before_after_slide_02 = document.querySelectorAll('.myan_04 .hip_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide .before_after_container')
const before_after_slide_001_02 = document.querySelectorAll('.myan_04 .hip_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_001 .before_after_container')
const before_after_slide_002_02 = document.querySelectorAll('.myan_04 .hip_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_002 .before_after_container')
const before_after_slide_003_02 = document.querySelectorAll('.myan_04 .hip_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_003 .before_after_container')
const before_after_slide_004_02 = document.querySelectorAll('.myan_04 .hip_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_004 .before_after_container')
const before_after_slide_005_02 = document.querySelectorAll('.myan_04 .hip_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_005 .before_after_container')
const before_after_slide_006_02 = document.querySelectorAll('.myan_04 .hip_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_006 .before_after_container')
const before_after_slide_007_02 = document.querySelectorAll('.myan_04 .hip_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_007 .before_after_container')
const before_after_slide_008_02 = document.querySelectorAll('.myan_04 .hip_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_008 .before_after_container')
//줄기세포 탭
const before_after_slide_03 = document.querySelectorAll('.myan_04 .stem_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide .before_after_container')
const before_after_slide_001_03 = document.querySelectorAll('.myan_04 .stem_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_001 .before_after_container')
const before_after_slide_002_03 = document.querySelectorAll('.myan_04 .stem_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_002 .before_after_container')
const before_after_slide_003_03 = document.querySelectorAll('.myan_04 .stem_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_003 .before_after_container')
const before_after_slide_004_03 = document.querySelectorAll('.myan_04 .stem_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_004 .before_after_container')
const before_after_slide_005_03 = document.querySelectorAll('.myan_04 .stem_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_005 .before_after_container')
const before_after_slide_006_03 = document.querySelectorAll('.myan_04 .stem_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_006 .before_after_container')
const before_after_slide_007_03 = document.querySelectorAll('.myan_04 .stem_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_007 .before_after_container')
const before_after_slide_008_03 = document.querySelectorAll('.myan_04 .stem_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_008 .before_after_container')
//눈성형 탭
const before_after_slide_04 = document.querySelectorAll('.myan_04 .eye_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide .before_after_container')
const before_after_slide_001_04 = document.querySelectorAll('.myan_04 .eye_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_001 .before_after_container')
const before_after_slide_002_04 = document.querySelectorAll('.myan_04 .eye_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_002 .before_after_container')
const before_after_slide_003_04 = document.querySelectorAll('.myan_04 .eye_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_003 .before_after_container')
const before_after_slide_004_04 = document.querySelectorAll('.myan_04 .eye_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_004 .before_after_container')
const before_after_slide_005_04 = document.querySelectorAll('.myan_04 .eye_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_005 .before_after_container')
const before_after_slide_006_04 = document.querySelectorAll('.myan_04 .eye_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_006 .before_after_container')
const before_after_slide_007_04 = document.querySelectorAll('.myan_04 .eye_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_007 .before_after_container')
const before_after_slide_008_04 = document.querySelectorAll('.myan_04 .eye_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_008 .before_after_container')
//코성형 탭
const before_after_slide_05 = document.querySelectorAll('.myan_04 .nose_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide .before_after_container')
const before_after_slide_001_05 = document.querySelectorAll('.myan_04 .nose_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_001 .before_after_container')
const before_after_slide_002_05 = document.querySelectorAll('.myan_04 .nose_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_002 .before_after_container')
const before_after_slide_003_05 = document.querySelectorAll('.myan_04 .nose_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_003 .before_after_container')
const before_after_slide_004_05 = document.querySelectorAll('.myan_04 .nose_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_004 .before_after_container')
const before_after_slide_005_05 = document.querySelectorAll('.myan_04 .nose_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_005 .before_after_container')
const before_after_slide_006_05 = document.querySelectorAll('.myan_04 .nose_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_006 .before_after_container')
const before_after_slide_007_05 = document.querySelectorAll('.myan_04 .nose_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_007 .before_after_container')
const before_after_slide_008_05 = document.querySelectorAll('.myan_04 .nose_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_008 .before_after_container')
//얼굴성형 탭
const before_after_slide_06 = document.querySelectorAll('.myan_04 .face_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide .before_after_container')
const before_after_slide_001_06 = document.querySelectorAll('.myan_04 .face_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_001 .before_after_container')
const before_after_slide_002_06 = document.querySelectorAll('.myan_04 .face_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_002 .before_after_container')
const before_after_slide_003_06 = document.querySelectorAll('.myan_04 .face_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_003 .before_after_container')
const before_after_slide_004_06 = document.querySelectorAll('.myan_04 .face_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_004 .before_after_container')
const before_after_slide_005_06 = document.querySelectorAll('.myan_04 .face_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_005 .before_after_container')
const before_after_slide_006_06 = document.querySelectorAll('.myan_04 .face_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_006 .before_after_container')
const before_after_slide_007_06 = document.querySelectorAll('.myan_04 .face_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_007 .before_after_container')
const before_after_slide_008_06 = document.querySelectorAll('.myan_04 .face_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_008 .before_after_container')
//여성성형 탭
const before_after_slide_07 = document.querySelectorAll('.myan_04 .girl_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide .before_after_container')
const before_after_slide_001_07 = document.querySelectorAll('.myan_04 .girl_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_001 .before_after_container')
const before_after_slide_002_07 = document.querySelectorAll('.myan_04 .girl_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_002 .before_after_container')
const before_after_slide_003_07 = document.querySelectorAll('.myan_04 .girl_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_003 .before_after_container')
const before_after_slide_004_07 = document.querySelectorAll('.myan_04 .girl_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_004 .before_after_container')
const before_after_slide_005_07 = document.querySelectorAll('.myan_04 .girl_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_005 .before_after_container')
const before_after_slide_006_07 = document.querySelectorAll('.myan_04 .girl_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_006 .before_after_container')
const before_after_slide_007_07 = document.querySelectorAll('.myan_04 .girl_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_007 .before_after_container')
const before_after_slide_008_07 = document.querySelectorAll('.myan_04 .girl_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_008 .before_after_container')
//기타성형 탭
const before_after_slide_08 = document.querySelectorAll('.myan_04 .etc_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide .before_after_container')
const before_after_slide_001_08 = document.querySelectorAll('.myan_04 .etc_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_001 .before_after_container')
const before_after_slide_002_08 = document.querySelectorAll('.myan_04 .etc_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_002 .before_after_container')
const before_after_slide_003_08 = document.querySelectorAll('.myan_04 .etc_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_003 .before_after_container')
const before_after_slide_004_08 = document.querySelectorAll('.myan_04 .etc_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_004 .before_after_container')
const before_after_slide_005_08 = document.querySelectorAll('.myan_04 .etc_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_005 .before_after_container')
const before_after_slide_006_08 = document.querySelectorAll('.myan_04 .etc_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_006 .before_after_container')
const before_after_slide_007_08 = document.querySelectorAll('.myan_04 .etc_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_007 .before_after_container')
const before_after_slide_008_08 = document.querySelectorAll('.myan_04 .etc_slider_wrap .before_after_swiper_myan_04 .swiper-wrapper .before_after_slide_008 .before_after_container')

//셀렉트 아코디언 부분 - 얘네만 고정하고 나머지 none 하면 바뀌게
const acodian_myan_4 = document.querySelectorAll('.myan_04 .select_direction ul li')
const acodian_myan_4_a = document.querySelectorAll('.myan_04 .select_direction ul li a')
const acodian_myan_4_line = document.querySelectorAll('.myan_04 .select_direction ul li span')
//
console.log( acodian_myan_4, acodian_myan_4_a, acodian_myan_4_line, before_after_slide_001)

//버튼아코디언
acodian_myan_4.forEach((i,index)=>{
    i.addEventListener('click',(e)=>{
        e.preventDefault();
        //슬라이드
        //전체 슬라이드 전45도옆
        for(let j of before_after_slide_001){j.style.display = 'none'}
        before_after_slide_001[index].style.display = 'block'
        for(let j of before_after_slide_002){j.style.display = 'none'}
        before_after_slide_002[index].style.display = 'block'
        for(let j of before_after_slide_003){j.style.display = 'none'}
        before_after_slide_003[index].style.display = 'block'
        for(let j of before_after_slide_004){j.style.display = 'none'}
        before_after_slide_004[index].style.display = 'block'
        for(let j of before_after_slide_005){j.style.display = 'none'}
        before_after_slide_005[index].style.display = 'block'
        for(let j of before_after_slide_006){j.style.display = 'none'}
        before_after_slide_006[index].style.display = 'block'
        for(let j of before_after_slide_007){j.style.display = 'none'}
        before_after_slide_007[index].style.display = 'block'
        for(let j of before_after_slide_008){j.style.display = 'none'}
        before_after_slide_008[index].style.display = 'block'
        //가슴 슬라이드 전45도옆
        for(let j of before_after_slide_001_01){j.style.display = 'none'}
        before_after_slide_001_01[index].style.display = 'block'
        for(let j of before_after_slide_002_01){j.style.display = 'none'}
        before_after_slide_002_01[index].style.display = 'block'
        for(let j of before_after_slide_003_01){j.style.display = 'none'}
        before_after_slide_003_01[index].style.display = 'block'
        for(let j of before_after_slide_004_01){j.style.display = 'none'}
        before_after_slide_004_01[index].style.display = 'block'
        for(let j of before_after_slide_005_01){j.style.display = 'none'}
        before_after_slide_005_01[index].style.display = 'block'
        for(let j of before_after_slide_006_01){j.style.display = 'none'}
        before_after_slide_006_01[index].style.display = 'block'
        for(let j of before_after_slide_007_01){j.style.display = 'none'}
        before_after_slide_007_01[index].style.display = 'block'
        for(let j of before_after_slide_008_01){j.style.display = 'none'}
        before_after_slide_008_01[index].style.display = 'block'
        //엉덩이 슬라이드 전45도옆
        for(let j of before_after_slide_001_02){j.style.display = 'none'}
        before_after_slide_001_02[index].style.display = 'block'
        for(let j of before_after_slide_002_02){j.style.display = 'none'}
        before_after_slide_002_02[index].style.display = 'block'
        for(let j of before_after_slide_003_02){j.style.display = 'none'}
        before_after_slide_003_02[index].style.display = 'block'
        for(let j of before_after_slide_004_02){j.style.display = 'none'}
        before_after_slide_004_02[index].style.display = 'block'
        for(let j of before_after_slide_005_02){j.style.display = 'none'}
        before_after_slide_005_02[index].style.display = 'block'
        for(let j of before_after_slide_006_02){j.style.display = 'none'}
        before_after_slide_006_02[index].style.display = 'block'
        for(let j of before_after_slide_007_02){j.style.display = 'none'}
        before_after_slide_007_02[index].style.display = 'block'
        for(let j of before_after_slide_008_02){j.style.display = 'none'}
        before_after_slide_008_02[index].style.display = 'block'
        //줄기세포 슬라이드 전45도옆
        for(let j of before_after_slide_001_03){j.style.display = 'none'}
        before_after_slide_001_03[index].style.display = 'block'
        for(let j of before_after_slide_002_03){j.style.display = 'none'}
        before_after_slide_002_03[index].style.display = 'block'
        for(let j of before_after_slide_003_03){j.style.display = 'none'}
        before_after_slide_003_03[index].style.display = 'block'
        for(let j of before_after_slide_004_03){j.style.display = 'none'}
        before_after_slide_004_03[index].style.display = 'block'
        for(let j of before_after_slide_005_03){j.style.display = 'none'}
        before_after_slide_005_03[index].style.display = 'block'
        for(let j of before_after_slide_006_03){j.style.display = 'none'}
        before_after_slide_006_03[index].style.display = 'block'
        for(let j of before_after_slide_007_03){j.style.display = 'none'}
        before_after_slide_007_03[index].style.display = 'block'
        for(let j of before_after_slide_008_03){j.style.display = 'none'}
        before_after_slide_008_03[index].style.display = 'block'
        //눈 슬라이드 전45도옆
        for(let j of before_after_slide_001_04){j.style.display = 'none'}
        before_after_slide_001_04[index].style.display = 'block'
        for(let j of before_after_slide_002_04){j.style.display = 'none'}
        before_after_slide_002_04[index].style.display = 'block'
        for(let j of before_after_slide_003_04){j.style.display = 'none'}
        before_after_slide_003_04[index].style.display = 'block'
        for(let j of before_after_slide_004_04){j.style.display = 'none'}
        before_after_slide_004_04[index].style.display = 'block'
        for(let j of before_after_slide_005_04){j.style.display = 'none'}
        before_after_slide_005_04[index].style.display = 'block'
        for(let j of before_after_slide_006_04){j.style.display = 'none'}
        before_after_slide_006_04[index].style.display = 'block'
        for(let j of before_after_slide_007_04){j.style.display = 'none'}
        before_after_slide_007_04[index].style.display = 'block'
        for(let j of before_after_slide_008_04){j.style.display = 'none'}
        before_after_slide_008_04[index].style.display = 'block'
        //코 슬라이드 전45도옆
        for(let j of before_after_slide_001_05){j.style.display = 'none'}
        before_after_slide_001_05[index].style.display = 'block'
        for(let j of before_after_slide_002_05){j.style.display = 'none'}
        before_after_slide_002_05[index].style.display = 'block'
        for(let j of before_after_slide_003_05){j.style.display = 'none'}
        before_after_slide_003_05[index].style.display = 'block'
        for(let j of before_after_slide_004_05){j.style.display = 'none'}
        before_after_slide_004_05[index].style.display = 'block'
        for(let j of before_after_slide_005_05){j.style.display = 'none'}
        before_after_slide_005_05[index].style.display = 'block'
        for(let j of before_after_slide_006_05){j.style.display = 'none'}
        before_after_slide_006_05[index].style.display = 'block'
        for(let j of before_after_slide_007_05){j.style.display = 'none'}
        before_after_slide_007_05[index].style.display = 'block'
        for(let j of before_after_slide_008_05){j.style.display = 'none'}
        before_after_slide_008_05[index].style.display = 'block'
        //얼굴 슬라이드 전45도옆
        for(let j of before_after_slide_001_06){j.style.display = 'none'}
        before_after_slide_001_06[index].style.display = 'block'
        for(let j of before_after_slide_002_06){j.style.display = 'none'}
        before_after_slide_002_06[index].style.display = 'block'
        for(let j of before_after_slide_003_06){j.style.display = 'none'}
        before_after_slide_003_06[index].style.display = 'block'
        for(let j of before_after_slide_004_06){j.style.display = 'none'}
        before_after_slide_004_06[index].style.display = 'block'
        for(let j of before_after_slide_005_06){j.style.display = 'none'}
        before_after_slide_005_06[index].style.display = 'block'
        for(let j of before_after_slide_006_06){j.style.display = 'none'}
        before_after_slide_006_06[index].style.display = 'block'
        for(let j of before_after_slide_007_06){j.style.display = 'none'}
        before_after_slide_007_06[index].style.display = 'block'
        for(let j of before_after_slide_008_06){j.style.display = 'none'}
        before_after_slide_008_06[index].style.display = 'block'
        //여성 슬라이드 전45도옆
        for(let j of before_after_slide_001_07){j.style.display = 'none'}
        before_after_slide_001_07[index].style.display = 'block'
        for(let j of before_after_slide_002_07){j.style.display = 'none'}
        before_after_slide_002_07[index].style.display = 'block'
        for(let j of before_after_slide_003_07){j.style.display = 'none'}
        before_after_slide_003_07[index].style.display = 'block'
        for(let j of before_after_slide_004_07){j.style.display = 'none'}
        before_after_slide_004_07[index].style.display = 'block'
        for(let j of before_after_slide_005_07){j.style.display = 'none'}
        before_after_slide_005_07[index].style.display = 'block'
        for(let j of before_after_slide_006_07){j.style.display = 'none'}
        before_after_slide_006_07[index].style.display = 'block'
        for(let j of before_after_slide_007_07){j.style.display = 'none'}
        before_after_slide_007_07[index].style.display = 'block'
        for(let j of before_after_slide_008_07){j.style.display = 'none'}
        before_after_slide_008_07[index].style.display = 'block'
        //기타 슬라이드 전45도옆
        for(let j of before_after_slide_001_08){j.style.display = 'none'}
        before_after_slide_001_08[index].style.display = 'block'
        for(let j of before_after_slide_002_08){j.style.display = 'none'}
        before_after_slide_002_08[index].style.display = 'block'
        for(let j of before_after_slide_003_08){j.style.display = 'none'}
        before_after_slide_003_08[index].style.display = 'block'
        for(let j of before_after_slide_004_08){j.style.display = 'none'}
        before_after_slide_004_08[index].style.display = 'block'
        for(let j of before_after_slide_005_08){j.style.display = 'none'}
        before_after_slide_005_08[index].style.display = 'block'
        for(let j of before_after_slide_006_08){j.style.display = 'none'}
        before_after_slide_006_08[index].style.display = 'block'
        for(let j of before_after_slide_007_08){j.style.display = 'none'}
        before_after_slide_007_08[index].style.display = 'block'
        for(let j of before_after_slide_008_08){j.style.display = 'none'}
        before_after_slide_008_08[index].style.display = 'block'
        //아래부터는 li관련
        for(let j of acodian_myan_4_a){j.style.color = '#000'}
        acodian_myan_4_a[index].style.color = '#d63d17'
        for(let j of acodian_myan_4_line){j.style.transform = 'scaleX(0)'}
        acodian_myan_4_line[index].style.transform = 'scaleX(1)'
    })
})
  //4차 메인 스와이프, 스와이퍼 안 쓰고 (전체)
  const beforeAfterObjects = document.querySelectorAll(".total_slider_wrap .before_after_image_grid_00 .before_after_object a");
  const slideWrapper = document.querySelector(".total_slider_wrap .before_after_slides");
  const slideItems = document.querySelectorAll(".total_slider_wrap .before_after_slide");
  const slideWidth = slideItems[0].offsetWidth; // 슬라이드 너비 + 마진 값
  let currentIndex = 0;
  
  console.log(
    beforeAfterObjects, slideWrapper, slideItems, slideWidth
  )
  // 초기에 첫 번째 요소에 보더 추가
  beforeAfterObjects[currentIndex].style.border = "2px solid red";
  
  function moveSlide(index) {
    const translateValue = -index * slideWidth;
    slideWrapper.style.transition = "transform 0.3s ease"; // 슬라이드 이동을 부드럽게 만들기 위해 transition 추가
  
    // 현재 슬라이드의 opacity 속성을 1로 설정하여 보이도록 함
    slideItems[currentIndex].style.opacity = 0;
  
    // 슬라이드 이동
    slideWrapper.style.transform = `translateX(${translateValue}px)`;
  
    // 다음 슬라이드의 opacity 속성을 0으로 설정하여 투명하게 만듦
    currentIndex = index;
    slideItems[currentIndex].style.opacity = 1;
  
    // 슬라이드가 왼쪽으로 벗어날 경우, 보정하여 가운데 정렬되도록 함
    const maxTranslateValue = -(slideItems.length - 1) * slideWidth;
    if (translateValue < maxTranslateValue) {
      slideWrapper.style.transform = `translateX(${maxTranslateValue}px)`;
    } else if (translateValue > 0) {
      slideWrapper.style.transform = "translateX(0)";
    }
  
    // 모든 before_after_object에서 보더 값 제거
    beforeAfterObjects.forEach((object) => {
      object.style.border = "none";
    });
  
    // 현재 슬라이드에 보더 값 추가
    beforeAfterObjects[currentIndex].style.border = "2px solid #d63d17";
  }
  
  document.querySelector(".total_slider_wrap .prev_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = (currentIndex - 1 + slideItems.length) % slideItems.length;
    moveSlide(currentIndex);
  });
  
  document.querySelector(".total_slider_wrap .next_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex = (currentIndex + 1) % slideItems.length;
    moveSlide(currentIndex);
  });
  
  beforeAfterObjects.forEach((object, index) => {
    object.addEventListener("click", function (event) {
      console.log('작동')
      event.preventDefault();
      currentIndex = index;
      moveSlide(currentIndex);
    });
  });
  //4차 메인 스와이프, 스와이퍼 안 쓰고 (가슴)
  const beforeAfterObjects_01 = document.querySelectorAll(".breast_slider_wrap .before_after_image_grid_01 .before_after_object a");
  const slideWrapper_01 = document.querySelector(".breast_slider_wrap .before_after_slides");
  const slideItems_01 = document.querySelectorAll(".breast_slider_wrap .before_after_slide");
  /* display=none으로 해서 offsetWidth = 1249로 해야됨. 근데 가변형하면 안 될 듯, -> 수정사항 - 그게 아니라 absolute로 하면 해결됨.  */
  const slideWidth_01 = slideItems_01[0].offsetWidth; // 슬라이드 너비 + 마진 값
  let currentIndex_01 = 0;
  console.log(
    beforeAfterObjects_01, slideWrapper_01, slideItems_01, slideWidth_01
  )
  
  // 초기에 첫 번째 요소에 보더 추가
  beforeAfterObjects_01[currentIndex_01].style.border = "2px solid red";
  
  function moveslide_01(index_01) {
    const translatevalue_01 = -index_01 * slideWidth_01;
    slideWrapper_01.style.transition = "transform 0.3s ease"; // 슬라이드 이동을 부드럽게 만들기 위해 transition 추가
  
    // 현재 슬라이드의 opacity 속성을 1로 설정하여 보이도록 함
    slideItems_01[currentIndex_01].style.opacity = 0;
  
    // 슬라이드 이동
    slideWrapper_01.style.transform = `translateX(${translatevalue_01}px)`;
  
    // 다음 슬라이드의 opacity 속성을 0으로 설정하여 투명하게 만듦
    currentIndex_01 = index_01;
    slideItems_01[currentIndex_01].style.opacity = 1;
  
    // 슬라이드가 왼쪽으로 벗어날 경우, 보정하여 가운데 정렬되도록 함
    const maxtranslatevalue_01 = -(slideItems_01.length - 1) * slideWidth_01;
    if (translatevalue_01 < maxtranslatevalue_01) {
      slideWrapper_01.style.transform = `translateX(${maxtranslatevalue_01}px)`;
    } else if (translatevalue_01 > 0) {
      slideWrapper_01.style.transform = "translateX(0)";
    }
  
    // 모든 before_after_object에서 보더 값 제거
    beforeAfterObjects_01.forEach((object) => {
      object.style.border = "none";
    });
  
    // 현재 슬라이드에 보더 값 추가
    beforeAfterObjects_01[currentIndex_01].style.border = "2px solid #d63d17";
  }
  
  document.querySelector(".breast_slider_wrap .prev_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_01 = (currentIndex_01 - 1 + slideItems_01.length) % slideItems_01.length;
    moveslide_01(currentIndex_01);
  });
  
  document.querySelector(".breast_slider_wrap .next_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_01 = (currentIndex_01 + 1) % slideItems_01.length;
    moveslide_01(currentIndex_01);
  });
  
  beforeAfterObjects_01.forEach((object, index_01) => {
    object.addEventListener("click", function (event) {
      console.log('작동')
      event.preventDefault();
      currentIndex_01 = index_01;
      moveslide_01(currentIndex_01);
    });
  });
  //4차 메인 스와이프, 스와이퍼 안 쓰고 (엉덩이)
  const beforeAfterObjects_02 = document.querySelectorAll(".hip_slider_wrap .before_after_image_grid_02 .before_after_object a");
  const slideWrapper_02 = document.querySelector(".hip_slider_wrap .before_after_slides");
  const slideItems_02 = document.querySelectorAll(".hip_slider_wrap .before_after_slide");
  
  const slideWidth_02 = slideItems_02[0].offsetWidth; // 슬라이드 너비 + 마진 값
  let currentIndex_02 = 0;
  
  // 초기에 첫 번째 요소에 보더 추가
  beforeAfterObjects_02[currentIndex_02].style.border = "2px solid red";
  
  function moveslide_02(index_02) {
    const translatevalue_02 = -index_02 * slideWidth_02;
    slideWrapper_02.style.transition = "transform 0.3s ease"; // 슬라이드 이동을 부드럽게 만들기 위해 transition 추가
  
    // 현재 슬라이드의 opacity 속성을 1로 설정하여 보이도록 함
    slideItems_02[currentIndex_02].style.opacity = 0;
  
    // 슬라이드 이동
    slideWrapper_02.style.transform = `translateX(${translatevalue_02}px)`;
  
    // 다음 슬라이드의 opacity 속성을 0으로 설정하여 투명하게 만듦
    currentIndex_02 = index_02;
    slideItems_02[currentIndex_02].style.opacity = 1;
  
    // 슬라이드가 왼쪽으로 벗어날 경우, 보정하여 가운데 정렬되도록 함
    const maxtranslatevalue_02 = -(slideItems_02.length - 1) * slideWidth_02;
    if (translatevalue_02 < maxtranslatevalue_02) {
      slideWrapper_02.style.transform = `translateX(${maxtranslatevalue_02}px)`;
    } else if (translatevalue_02 > 0) {
      slideWrapper_02.style.transform = "translateX(0)";
    }
  
    // 모든 before_after_object에서 보더 값 제거
    beforeAfterObjects_02.forEach((object) => {
      object.style.border = "none";
    });
  
    // 현재 슬라이드에 보더 값 추가
    beforeAfterObjects_02[currentIndex_02].style.border = "2px solid #d63d17";
  }
  
  document.querySelector(".hip_slider_wrap .prev_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_02 = (currentIndex_02 - 1 + slideItems_02.length) % slideItems_02.length;
    moveslide_02(currentIndex_02);
  });
  
  document.querySelector(".hip_slider_wrap .next_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_02 = (currentIndex_02 + 1) % slideItems_02.length;
    moveslide_02(currentIndex_02);
  });
  
  beforeAfterObjects_02.forEach((object, index_02) => {
    object.addEventListener("click", function (event) {
      event.preventDefault();
      currentIndex_02 = index_02;
      moveslide_02(currentIndex_02);
    });
  });
  //4차 메인 스와이프, 스와이퍼 안 쓰고 (줄기세포/흉터)
  const beforeAfterObjects_03 = document.querySelectorAll(".stem_slider_wrap .before_after_object a");
  const slideWrapper_03 = document.querySelector(".stem_slider_wrap .before_after_slides");
  const slideItems_03 = document.querySelectorAll(".stem_slider_wrap .before_after_slide");
  const slideWidth_03 = slideItems_03[0].offsetWidth; // 슬라이드 너비 + 마진 값
  let currentIndex_03 = 0;
  
  // 초기에 첫 번째 요소에 보더 추가
  beforeAfterObjects_03[currentIndex_03].style.border = "2px solid red";
  
  function moveslide_03(index_03) {
    const translatevalue_03 = -index_03 * slideWidth_03;
    slideWrapper_03.style.transition = "transform 0.3s ease"; // 슬라이드 이동을 부드럽게 만들기 위해 transition 추가
  
    // 현재 슬라이드의 opacity 속성을 1로 설정하여 보이도록 함
    slideItems_03[currentIndex_03].style.opacity = 0;
  
    // 슬라이드 이동
    slideWrapper_03.style.transform = `translateX(${translatevalue_03}px)`;
  
    // 다음 슬라이드의 opacity 속성을 0으로 설정하여 투명하게 만듦
    currentIndex_03 = index_03;
    slideItems_03[currentIndex_03].style.opacity = 1;
  
    // 슬라이드가 왼쪽으로 벗어날 경우, 보정하여 가운데 정렬되도록 함
    const maxtranslatevalue_03 = -(slideItems_03.length - 1) * slideWidth_03;
    if (translatevalue_03 < maxtranslatevalue_03) {
      slideWrapper_03.style.transform = `translateX(${maxtranslatevalue_03}px)`;
    } else if (translatevalue_03 > 0) {
      slideWrapper_03.style.transform = "translateX(0)";
    }
  
    // 모든 before_after_object에서 보더 값 제거
    beforeAfterObjects_03.forEach((object) => {
      object.style.border = "none";
    });
  
    // 현재 슬라이드에 보더 값 추가
    beforeAfterObjects_03[currentIndex_03].style.border = "2px solid #d63d17";
  }
  
  document.querySelector(".stem_slider_wrap .prev_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_03 = (currentIndex_03 - 1 + slideItems_03.length) % slideItems_03.length;
    moveslide_03(currentIndex_03);
  });
  
  document.querySelector(".stem_slider_wrap .next_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_03 = (currentIndex_03 + 1) % slideItems_03.length;
    moveslide_03(currentIndex_03);
  });
  
  beforeAfterObjects_03.forEach((object, index_03) => {
    object.addEventListener("click", function (event) {
      event.preventDefault();
      currentIndex_03 = index_03;
      moveslide_03(currentIndex_03);
    });
  });
  //4차 메인 스와이프, 스와이퍼 안 쓰고 (눈)
  const beforeAfterObjects_04 = document.querySelectorAll(".eye_slider_wrap .before_after_object a");
  const slideWrapper_04 = document.querySelector(".eye_slider_wrap .before_after_slides");
  const slideItems_04 = document.querySelectorAll(".eye_slider_wrap .before_after_slide");
  const slideWidth_04 = slideItems_04[0].offsetWidth; // 슬라이드 너비 + 마진 값
  let currentIndex_04 = 0;
  
  // 초기에 첫 번째 요소에 보더 추가
  beforeAfterObjects_04[currentIndex_04].style.border = "2px solid red";
  
  function moveslide_04(index_04) {
    const translatevalue_04 = -index_04 * slideWidth_04;
    slideWrapper_04.style.transition = "transform 0.3s ease"; // 슬라이드 이동을 부드럽게 만들기 위해 transition 추가
  
    // 현재 슬라이드의 opacity 속성을 1로 설정하여 보이도록 함
    slideItems_04[currentIndex_04].style.opacity = 0;
  
    // 슬라이드 이동
    slideWrapper_04.style.transform = `translateX(${translatevalue_04}px)`;
  
    // 다음 슬라이드의 opacity 속성을 0으로 설정하여 투명하게 만듦
    currentIndex_04 = index_04;
    slideItems_04[currentIndex_04].style.opacity = 1;
  
    // 슬라이드가 왼쪽으로 벗어날 경우, 보정하여 가운데 정렬되도록 함
    const maxtranslatevalue_04 = -(slideItems_04.length - 1) * slideWidth_04;
    if (translatevalue_04 < maxtranslatevalue_04) {
      slideWrapper_04.style.transform = `translateX(${maxtranslatevalue_04}px)`;
    } else if (translatevalue_04 > 0) {
      slideWrapper_04.style.transform = "translateX(0)";
    }
  
    // 모든 before_after_object에서 보더 값 제거
    beforeAfterObjects_04.forEach((object) => {
      object.style.border = "none";
    });
  
    // 현재 슬라이드에 보더 값 추가
    beforeAfterObjects_04[currentIndex_04].style.border = "2px solid #d63d17";
  }
  
  document.querySelector(".eye_slider_wrap .prev_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_04 = (currentIndex_04 - 1 + slideItems_04.length) % slideItems_04.length;
    moveslide_04(currentIndex_04);
  });
  
  document.querySelector(".eye_slider_wrap .next_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_04 = (currentIndex_04 + 1) % slideItems_04.length;
    moveslide_04(currentIndex_04);
  });
  
  beforeAfterObjects_04.forEach((object, index_04) => {
    object.addEventListener("click", function (event) {
      event.preventDefault();
      currentIndex_04 = index_04;
      moveslide_04(currentIndex_04);
    });
  });
  //4차 메인 스와이프, 스와이퍼 안 쓰고 (코)
  const beforeAfterObjects_05 = document.querySelectorAll(".nose_slider_wrap .before_after_object a");
  const slideWrapper_05 = document.querySelector(".nose_slider_wrap .before_after_slides");
  const slideItems_05 = document.querySelectorAll(".nose_slider_wrap .before_after_slide");
  const slideWidth_05 = slideItems_05[0].offsetWidth; // 슬라이드 너비 + 마진 값
  let currentIndex_05 = 0;
  
  // 초기에 첫 번째 요소에 보더 추가
  beforeAfterObjects_05[currentIndex_05].style.border = "2px solid red";
  
  function moveslide_05(index_05) {
    const translatevalue_05 = -index_05 * slideWidth_05;
    slideWrapper_05.style.transition = "transform 0.3s ease"; // 슬라이드 이동을 부드럽게 만들기 위해 transition 추가
  
    // 현재 슬라이드의 opacity 속성을 1로 설정하여 보이도록 함
    slideItems_05[currentIndex_05].style.opacity = 0;
  
    // 슬라이드 이동
    slideWrapper_05.style.transform = `translateX(${translatevalue_05}px)`;
  
    // 다음 슬라이드의 opacity 속성을 0으로 설정하여 투명하게 만듦
    currentIndex_05 = index_05;
    slideItems_05[currentIndex_05].style.opacity = 1;
  
    // 슬라이드가 왼쪽으로 벗어날 경우, 보정하여 가운데 정렬되도록 함
    const maxtranslatevalue_05 = -(slideItems_05.length - 1) * slideWidth_05;
    if (translatevalue_05 < maxtranslatevalue_05) {
      slideWrapper_05.style.transform = `translateX(${maxtranslatevalue_05}px)`;
    } else if (translatevalue_05 > 0) {
      slideWrapper_05.style.transform = "translateX(0)";
    }
  
    // 모든 before_after_object에서 보더 값 제거
    beforeAfterObjects_05.forEach((object) => {
      object.style.border = "none";
    });
  
    // 현재 슬라이드에 보더 값 추가
    beforeAfterObjects_05[currentIndex_05].style.border = "2px solid #d63d17";
  }
  
  document.querySelector(".nose_slider_wrap .prev_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_05 = (currentIndex_05 - 1 + slideItems_05.length) % slideItems_05.length;
    moveslide_05(currentIndex_05);
  });
  
  document.querySelector(".nose_slider_wrap .next_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_05 = (currentIndex_05 + 1) % slideItems_05.length;
    moveslide_05(currentIndex_05);
  });
  
  beforeAfterObjects_05.forEach((object, index_05) => {
    object.addEventListener("click", function (event) {
      event.preventDefault();
      currentIndex_05 = index_05;
      moveslide_05(currentIndex_05);
    });
  });
  //4차 메인 스와이프, 스와이퍼 안 쓰고 (얼굴)
  const beforeAfterObjects_06 = document.querySelectorAll(".face_slider_wrap .before_after_object a");
  const slideWrapper_06 = document.querySelector(".face_slider_wrap .before_after_slides");
  const slideItems_06 = document.querySelectorAll(".face_slider_wrap .before_after_slide");
  const slideWidth_06 = slideItems_06[0].offsetWidth; // 슬라이드 너비 + 마진 값
  let currentIndex_06 = 0;
  
  // 초기에 첫 번째 요소에 보더 추가
  beforeAfterObjects_06[currentIndex_06].style.border = "2px solid red";
  
  function moveslide_06(index_06) {
    const translatevalue_06 = -index_06 * slideWidth_06;
    slideWrapper_06.style.transition = "transform 0.3s ease"; // 슬라이드 이동을 부드럽게 만들기 위해 transition 추가
  
    // 현재 슬라이드의 opacity 속성을 1로 설정하여 보이도록 함
    slideItems_06[currentIndex_06].style.opacity = 0;
  
    // 슬라이드 이동
    slideWrapper_06.style.transform = `translateX(${translatevalue_06}px)`;
  
    // 다음 슬라이드의 opacity 속성을 0으로 설정하여 투명하게 만듦
    currentIndex_06 = index_06;
    slideItems_06[currentIndex_06].style.opacity = 1;
  
    // 슬라이드가 왼쪽으로 벗어날 경우, 보정하여 가운데 정렬되도록 함
    const maxtranslatevalue_06 = -(slideItems_06.length - 1) * slideWidth_06;
    if (translatevalue_06 < maxtranslatevalue_06) {
      slideWrapper_06.style.transform = `translateX(${maxtranslatevalue_06}px)`;
    } else if (translatevalue_06 > 0) {
      slideWrapper_06.style.transform = "translateX(0)";
    }
  
    // 모든 before_after_object에서 보더 값 제거
    beforeAfterObjects_06.forEach((object) => {
      object.style.border = "none";
    });
  
    // 현재 슬라이드에 보더 값 추가
    beforeAfterObjects_06[currentIndex_06].style.border = "2px solid #d63d17";
  }
  
  document.querySelector(".face_slider_wrap .prev_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_06 = (currentIndex_06 - 1 + slideItems_06.length) % slideItems_06.length;
    moveslide_06(currentIndex_06);
  });
  
  document.querySelector(".face_slider_wrap .next_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_06 = (currentIndex_06 + 1) % slideItems_06.length;
    moveslide_06(currentIndex_06);
  });
  
  beforeAfterObjects_06.forEach((object, index_06) => {
    object.addEventListener("click", function (event) {
      event.preventDefault();
      currentIndex_06 = index_06;
      moveslide_06(currentIndex_06);
    });
  });
  //4차 메인 스와이프, 스와이퍼 안 쓰고 (여성)
  const beforeAfterObjects_07 = document.querySelectorAll(".girl_slider_wrap .before_after_object a");
  const slideWrapper_07 = document.querySelector(".girl_slider_wrap .before_after_slides");
  const slideItems_07 = document.querySelectorAll(".girl_slider_wrap .before_after_slide");
  const slideWidth_07 = slideItems_07[0].offsetWidth; // 슬라이드 너비 + 마진 값
  let currentIndex_07 = 0;
  
  // 초기에 첫 번째 요소에 보더 추가
  beforeAfterObjects_07[currentIndex_07].style.border = "2px solid red";
  
  function moveslide_07(index_07) {
    const translatevalue_07 = -index_07 * slideWidth_07;
    slideWrapper_07.style.transition = "transform 0.3s ease"; // 슬라이드 이동을 부드럽게 만들기 위해 transition 추가
  
    // 현재 슬라이드의 opacity 속성을 1로 설정하여 보이도록 함
    slideItems_07[currentIndex_07].style.opacity = 0;
  
    // 슬라이드 이동
    slideWrapper_07.style.transform = `translateX(${translatevalue_07}px)`;
  
    // 다음 슬라이드의 opacity 속성을 0으로 설정하여 투명하게 만듦
    currentIndex_07 = index_07;
    slideItems_07[currentIndex_07].style.opacity = 1;
  
    // 슬라이드가 왼쪽으로 벗어날 경우, 보정하여 가운데 정렬되도록 함
    const maxtranslatevalue_07 = -(slideItems_07.length - 1) * slideWidth_07;
    if (translatevalue_07 < maxtranslatevalue_07) {
      slideWrapper_07.style.transform = `translateX(${maxtranslatevalue_07}px)`;
    } else if (translatevalue_07 > 0) {
      slideWrapper_07.style.transform = "translateX(0)";
    }
  
    // 모든 before_after_object에서 보더 값 제거
    beforeAfterObjects_07.forEach((object) => {
      object.style.border = "none";
    });
  
    // 현재 슬라이드에 보더 값 추가
    beforeAfterObjects_07[currentIndex_07].style.border = "2px solid #d63d17";
  }
  
  document.querySelector(".girl_slider_wrap .prev_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_07 = (currentIndex_07 - 1 + slideItems_07.length) % slideItems_07.length;
    moveslide_07(currentIndex_07);
  });
  
  document.querySelector(".girl_slider_wrap .next_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_07 = (currentIndex_07 + 1) % slideItems_07.length;
    moveslide_07(currentIndex_07);
  });
  
  beforeAfterObjects_07.forEach((object, index_07) => {
    object.addEventListener("click", function (event) {
      event.preventDefault();
      currentIndex_07 = index_07;
      moveslide_07(currentIndex_07);
    });
  });
  //4차 메인 스와이프, 스와이퍼 안 쓰고 (기타)
  const beforeAfterObjects_08 = document.querySelectorAll(".etc_slider_wrap .before_after_object a");
  const slideWrapper_08 = document.querySelector(".etc_slider_wrap .before_after_slides");
  const slideItems_08 = document.querySelectorAll(".etc_slider_wrap .before_after_slide");
  const slideWidth_08 = slideItems_08[0].offsetWidth; // 슬라이드 너비 + 마진 값
  let currentIndex_08 = 0;
  
  // 초기에 첫 번째 요소에 보더 추가
  beforeAfterObjects_08[currentIndex_08].style.border = "2px solid red";
  
  function moveslide_08(index_08) {
    const translatevalue_08 = -index_08 * slideWidth_08;
    slideWrapper_08.style.transition = "transform 0.3s ease"; // 슬라이드 이동을 부드럽게 만들기 위해 transition 추가
  
    // 현재 슬라이드의 opacity 속성을 1로 설정하여 보이도록 함
    slideItems_08[currentIndex_08].style.opacity = 0;
  
    // 슬라이드 이동
    slideWrapper_08.style.transform = `translateX(${translatevalue_08}px)`;
  
    // 다음 슬라이드의 opacity 속성을 0으로 설정하여 투명하게 만듦
    currentIndex_08 = index_08;
    slideItems_08[currentIndex_08].style.opacity = 1;
  
    // 슬라이드가 왼쪽으로 벗어날 경우, 보정하여 가운데 정렬되도록 함
    const maxtranslatevalue_08 = -(slideItems_08.length - 1) * slideWidth_08;
    if (translatevalue_08 < maxtranslatevalue_08) {
      slideWrapper_08.style.transform = `translateX(${maxtranslatevalue_08}px)`;
    } else if (translatevalue_08 > 0) {
      slideWrapper_08.style.transform = "translateX(0)";
    }
  
    // 모든 before_after_object에서 보더 값 제거
    beforeAfterObjects_08.forEach((object) => {
      object.style.border = "none";
    });
  
    // 현재 슬라이드에 보더 값 추가
    beforeAfterObjects_08[currentIndex_08].style.border = "2px solid #d63d17";
  }
  
  document.querySelector(".etc_slider_wrap .prev_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_08 = (currentIndex_08 - 1 + slideItems_08.length) % slideItems_08.length;
    moveslide_08(currentIndex_08);
  });
  
  document.querySelector(".etc_slider_wrap .next_btn").addEventListener("click", (e) => {
    e.preventDefault();
    currentIndex_08 = (currentIndex_08 + 1) % slideItems_08.length;
    moveslide_08(currentIndex_08);
  });
  
  beforeAfterObjects_08.forEach((object, index_08) => {
    object.addEventListener("click", function (event) {
      event.preventDefault();
      currentIndex_08 = index_08;
      moveslide_08(currentIndex_08);
    });
  });