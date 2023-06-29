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
/* recommend game */
// 변수 지정
let rcSlideWrapper = document.querySelector('.rc-slide-wrapper'), //ul의 부모
    rcSlideContainer = rcSlideWrapper.querySelector('.rc-slide-container'), //ul
    rcSlides = rcSlideContainer.querySelectorAll('li'),
    rcSlidesCount = rcSlides.length,
    rcSlidesPerView = 4,
    rcSlideWidth = 305,
    rcSlideMargin = 16,
    rcCurrentSlideIdx = 0,
    rcPrevBtn = document.querySelector('#rc-prev'),
    rcNextBtn = document.querySelector('#rc-next');

//슬라이드 가로 너비지정
rcSlideContainer.style.width = `${rcSlidesCount*(rcSlideWidth+rcSlideMargin)}px`;

// if(rcSlidesCount > 1){
//   rcSlides.forEach((rcslide,idx)=>{
//     rcslide.style.left = `${idx*(rcSlideWidth + rcSlideMargin)}px`
//   });
// }

//슬라이드 이동함수
function rcMoveSlide(num){
  rcSlideContainer.style.left = `${-num*(rcSlideWidth + rcSlideMargin)}px`;
  rcCurrentSlideIdx = num;
  console.log(rcCurrentSlideIdx);
  if (rcCurrentSlideIdx === rcSlidesCount - 1) {
    rcNextBtn.classList.add('disabled');
  } else {
    rcNextBtn.classList.remove('disabled');
  };

  if(rcCurrentSlideIdx === 0){
    rcPrevBtn.classList.add('disabled');
  } else {
    rcPrevBtn.classList.remove('disabled');
  }
}

// 좌우컨트롤
rcNextBtn.addEventListener('click',()=>{
  rcMoveSlide(rcCurrentSlideIdx+1);
});
rcPrevBtn.addEventListener('click',()=>{
  rcMoveSlide(rcCurrentSlideIdx-1);
});
rcMoveSlide(0);
/* new game */
let newSlideWrapper = document.querySelector('.new-slide-wrapper'),
  newSlideContainer = newSlideWrapper.querySelector('.new-slide-container'),
  newSlides = newSlideContainer.querySelectorAll('.new-slide-container > li');
  newSlidesCount = newSlides.length,
  newCurrentSlideIdx = 0,
  newSlideMargin = 14,
  newSlideWidth = 415,
  newSlidePerView = 3,
  newPrevBtn = document.querySelector('#new-prev'),
  newNextBtn = document.querySelector('#new-next');
  
//슬라이드 가로 너비지정
newSlideContainer.style.width = `${newSlidesCount*(newSlideWidth + newSlideMargin)}px`;

// if(newSlidesCount > 1){
//   newSlides.forEach((newSlide,Idx)=>{
//     newSlide.style.left = `${Idx*(newSlideWidth + newSlideMargin)}px`;
//   });
// }

//슬라이드 이동함수
function newMoveSlide(num){
  newSlideContainer.style.left = `${-num*(newSlideWidth + newSlideMargin)}px`;
  newCurrentSlideIdx = num;
  console.log(newCurrentSlideIdx);
  if(newCurrentSlideIdx === newSlidesCount - 1){
    newNextBtn.classList.add('disabled');
  } else {
    newNextBtn.classList.remove('disabled');
  };

  if(newCurrentSlideIdx === 0){
    newPrevBtn.classList.add('disabled');
  } else {
    newPrevBtn.classList.remove('disabled');
  }
}
newNextBtn.addEventListener('click',()=>{
  newMoveSlide(newCurrentSlideIdx+1);
});
newPrevBtn.addEventListener('click',()=>{
  newMoveSlide(newCurrentSlideIdx-1);
});
newMoveSlide(0);


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
