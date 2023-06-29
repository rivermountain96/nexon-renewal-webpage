/* 이현정 구현 부분*/ 
/* main carousel */

// let slideWrapper = document.querySelector(".mainslide-wrapper");
// let slideContainer = slideWrapper.querySelector(".mainslide-container");
// let slides = slideContainer.querySelectorAll(".mainslide");
// let slideCount = slides.length;
// let currentSlideIdx = 0;
// let pager = slideWrapper.querySelector(".pager");
// let timer;
// let pagerHTML = "";
// let slideWidth = document.body.offsetWidth;
// let prevBtn = slideWrapper.querySelector("#prev");
// let nextBtn = slideWrapper.querySelector("#next");

// function setSlide() {
//   if (slideCount > 1) {
//     let containerWidth = slideWidth * slideCount;
//     slideContainer.style.width = `${containerWidth}px`;

//     slides.forEach((item, idx) => {
//       item.style.width = `${slideWidth}px`;
//       let url = item.getAttribute("data-url");
//       let title = item.getAttribute("data-title");
//       console.log(url)
//       console.log(title)

//       pagerHTML += `<a href="">
//       <span>
//         <img
//           src=${url}
//         />
//       </span>
//       <span>${title}</span>
//     </a>
//     `;
//     });
//   }
// }

// setSlide();

// pager.innerHTML = pagerHTML;
// let pagerBtn = pager.querySelectorAll("a");

// function moveSlide(num) {
//   slideContainer.style.transform = `translateX(${-num * slideWidth}px)`;
//   currentSlideIdx = num;
//   console.log(currentSlideIdx);

//   updateNav();
// }

// updateNav();

// function updateNav() {
//   for (let sl of slides) {
//     sl.classList.remove("active");
//   }
//   slides[currentSlideIdx].classList.add("active");

//   for (let pb of pagerBtn) {
//     pb.classList.remove("active");
//   }
//   pagerBtn[currentSlideIdx].classList.add("active");
// }

// nextBtn.addEventListener("click", () => {
//   if (currentSlideIdx < slideCount - 1) {
//     moveSlide(currentSlideIdx + 1);
//   }
// });

// prevBtn.addEventListener("click", () => {
//   if (currentSlideIdx > 0) {
//     moveSlide(currentSlideIdx - 1);
//   }
// });

// pagerBtn.forEach((item, idx) => {
//   item.addEventListener("click", (e) => {
//     e.preventDefault();
//     moveSlide(idx);
//   });
// });

// //자동 슬라이드
// function autoSlide() {
//   timer = setInterval(() => {
//     let nextIdx = (currentSlideIdx + 1) % slideCount;
//     moveSlide(nextIdx);
//   }, 3000);
// }

// autoSlide();

// slideWrapper.addEventListener("mouseover", () => {
//   clearInterval(timer);
// });

// slideWrapper.addEventListener("mouseout", () => {
//   autoSlide();
// });

/* 이현정 구현 부분 종료*/ 

/* 이강산 구현 부분 */ 

// 변수 지정
let slideWrapper = document.querySelector('.rc-slide-wrapper'), //ul의 부모
    slideContainer = slideWrapper.querySelector('.rc-slide-container'), //ul
    slides = slideContainer.querySelectorAll('li'),
    slidesCount = slides.length,
    currentSlideIdx = 0,
    prevBtn = document.querySelector('#rc-prev'),
    nextBtn = document.querySelector('#rc-next');


//  슬라이드가 일단 있어야겠지? 근데 슬라이드가 하나 이상이니까 조건을 짜서 가로로 배열하는거겠지
if(slidesCount > 1){
  slides.forEach((item,idx)=>{
    item.style.left = `${idx*100}%`
  })
}

// 슬라이드 이동 함수
function moveSlide(num){
  slideContainer.style.left = `${num*-100}%`;
  currentSlideIdx = num;

  //마지막이면 disabled 클래스명 추가 아니면 제거
  if(currentSlideIdx === slidesCount-1){
    nextBtn.classList.add('disabled');
  }
else {
    nextBtn.classList.remove('disabled');
  }

  //처음이면
  if(currentSlideIdx === 0){
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }
}
moveSlide(0);


// 좌우버튼으로 슬라이드 넘기기
  nextBtn.addEventListener('click',()=>{
    if(slidesCount - 1 > CurrentSlideIdx){
    moveSlide(currentSlideIdx + 1);
    }
  });
//이전버튼
  prevBtn.addEventListener('click',()=>{
    if(currentSlideIdx > 0){
    moveSlide(currentSlideIdx - 1);
    }
  });













  // nextBtn.addEventLister('click',()=>{
  //   //마지막이 아니라면
  //   if(slideCount>)
  //   moveSlide(CurrentSlideIdx + 1);
  // });



  










/* 이강산 구현 부분 종료*/ 


/* 이은서 구현 부분 */ 

// main5 start

// let main5SWrapper = document.querySelector('.main5-slide-wrapper'),
//     main5SContainer = main5SWrapper.querySelector('.main5-big-slide-container'),
//     main5Slides= main5SContainer.querySelectorAll('.main5-slide-container'),
//     main5slideCount = main5Slides.length,
//     main5currentSlideIdx = 0,
//     main5prevBtn = main5SWrapper.querySelector('.main5-chev-wrap.left'),
//     main5nextBtn = main5SWrapper.querySelector('.main5-chev-wrap.right'),
//     timer,
//     main5SlideWidth = `1280px`;

// main5 done

/* 이은서 구현 부분 종료*/ 
