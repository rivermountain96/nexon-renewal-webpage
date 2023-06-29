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
    slidesPerView = 4,
    slideWidth = 305,
    slideMargin = 20,
    currentSlideIdx = 0,
    prevBtn = document.querySelector('#rc-prev'),
    nextBtn = document.querySelector('#rc-next');

//슬라이드 가로 너비지정

slideContainer.style.width = `${slidesCount*(slideWidth+slideMargin)}px`;

for(let i = 0; i < slidesCount; i++){
  let cloneSlide = slides[i].cloneNode(true);
  cloneSlide.classList.add('clone');
  slideContainer.appendChild(cloneSlide);
}

for(let i = slidesCount - 1; i >= 0; i--){
  let cloneSlide = slides[i].cloneNode(true);
  cloneSlide.classList.add('clone');
  slideContainer.prepend(cloneSlide);
}


//  슬라이드는 원래 있던 것들만 배치함. 복사본들도 돌아가게끔 해줘야함
// 그러므로 다시 슬라이드 변수 선언(4개 -> 8개)
let newSlides = document.querySelectorAll('.rc-slide-container li')

slides.forEach((slide,idx)=>{
  slide.style.left = `${idx*(slideWidth+slideMargin)}px`;
});

// // 원래 보는시점을 클론 첫번째말고 오리지날 첫번째로 맞춰
// function setSlide(){
//   // ul {transform:translate(-3000px)}
//   let ulMoveAmt = `${slidesCount*(slideWidth + slideMargin)}px`;
//   slideContainer.style.transform = `translateX(${ulMoveAmt})`;
// }
// setSlide();










//슬라이드 이동함수
function moveSlide(num){
  slideContainer.style.left = `${-num*(slideWidth+slideMargin)}px`;
  currentSlideIdx = num;

}

// 좌우컨트롤
nextBtn.addEventListener('click',()=>{

  moveSlide(currentSlideIdx+1);

});

prevBtn.addEventListener('click',()=>{

  moveSlide(currentSlideIdx-1);

});




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
