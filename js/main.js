/* 이현정 구현 부분*/
/* main carousel */

let mainSlideWrapper = document.querySelector(".mainslide-wrapper");
let mainSlideContainer = mainSlideWrapper.querySelector("ul");
let mainSlides = mainSlideContainer.querySelectorAll("li");
let mainSlideCount = mainSlides.length;
let mainCurrentSlideIdx = 0;
let mainPager = mainSlideWrapper.querySelector(".pager");
let mainTimer;
let mainPagerHTML = "";
let mainSlideWidth = document.body.offsetWidth;
let mainPrevBtn = mainSlideWrapper.querySelector("#prev");
let mainNextBtn = mainSlideWrapper.querySelector("#next");

// mainSlideContainer.style.width = `${mainSlideCount * mainSlideWidth}px`;

for (let i = 0; i < mainSlideCount; i++) {
  let cloneSlide = mainSlides[i].cloneNode(true);
  cloneSlide.classList.add("clone");
  mainSlideContainer.appendChild(cloneSlide);
}
for (let i = mainSlideCount - 1; i >= 0; i--) {
  let cloneSlide = mainSlides[i].cloneNode(true);
  cloneSlide.classList.add("clone");
  mainSlideContainer.prepend(cloneSlide);
}

newSlides = document.querySelectorAll(".mainslide-container li");

newSlides.forEach((slide, idx) => {
  slide.style.left = `${idx * mainSlideWidth}px`;
});

function setSlide() {
  // ul {transform:translateX(-3000px)}
  let ulMoveAmt = mainSlideWidth * -mainSlideCount + "px";
  mainSlideContainer.style.transform = `translateX(${ulMoveAmt})`;
  mainSlideContainer.classList.add("animated");
}
setSlide();

function moveSlide(num) {
  mainSlideContainer.style.left = -num * mainSlideWidth + "px";
  mainCurrentSlideIdx = num;
  console.log(mainCurrentSlideIdx);
  if (
    mainCurrentSlideIdx == -mainSlideCount ||
    mainCurrentSlideIdx == mainSlideCount
  ) {
    setTimeout(() => {
      mainSlideContainer.classList.remove("animated");
      mainSlideContainer.style.left = "0px";
      mainCurrentSlideIdx = 0;
    }, 500);
    setTimeout(() => {
      mainSlideContainer.classList.add("animated");
    }, 600);
  }
  setPager();
}

function debounce(callback, time) {
  let slideTrigger = true;
  return () => {
    if (slideTrigger) {
      callback();
      slideTrigger = false;
      setTimeout(() => {
        slideTrigger = true;
      }, time);
    }
  };
}

//좌우 컨트롤
mainNextBtn.addEventListener(
  "click",
  debounce(() => {
    moveSlide(mainCurrentSlideIdx + 1);
  }, 500)
);
mainPrevBtn.addEventListener(
  "click",
  debounce(() => {
    moveSlide(mainCurrentSlideIdx - 1);
  }, 500)
);

//무한 캐러셀
let slideinfi = setInterval(() => {
  moveSlide(mainCurrentSlideIdx + 1);
}, 5000);

mainSlideWrapper.addEventListener("mouseover", () => {
  clearInterval(slideinfi);
});

mainSlideWrapper.addEventListener("mouseout", () => {
  slideinfi = setInterval(() => {
    moveSlide(mainCurrentSlideIdx + 1);
  }, 5000);
});

//pager
function setPager() {
  mainPager.innerHTML = "";
  mainSlides.forEach((item, idx) => {
    let url = item.getAttribute("data-url");
    let title = item.getAttribute("data-title");
    let pagerItem = document.createElement("a");
    pagerItem.setAttribute("href", "#");
    pagerItem.innerHTML = `
      <span>
        <img src="${url}"/>
      </span>
      <span>${title}</span>
    `;
    pagerItem.addEventListener("click", (e) => {
      e.preventDefault();
      moveSlide(idx - mainSlideCount);
    });
    if (idx === mainCurrentSlideIdx) {
      pagerItem.classList.add("active");
    }
    mainPager.appendChild(pagerItem);
  });
}
setPager();

// function mainSetSlide() {
//   if (mainSlideCount > 1) {
//     let mainContainerWidth = mainslideWidth * mainSlideCount;
//     mainSlideContainer.style.width = `${mainContainerWidth}px`;

//     mainSlides.forEach((item, idx) => {
//       item.style.width = `${mainslideWidth}px`;
//       let url = item.getAttribute("data-url");
//       let title = item.getAttribute("data-title");
//       // console.log(url);
//       // console.log(title);

//       mainPagerHTML += `<a href="">
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

// mainSetSlide();

// mainPager.innerHTML = mainPagerHTML;
// let mainPagerBtn = mainPager.querySelectorAll("a");

// function mainMoveSlide(num) {
//   mainSlideContainer.style.transform = `translateX(${-num * mainslideWidth}px)`;
//   mainCurrentSlideIdx = num;
//   // console.log(mainCurrentSlideIdx);

//   updateNav();
// }

// updateNav();

// function updateNav() {
//   for (let sl of mainSlides) {
//     sl.classList.remove("active");
//   }
//   mainSlides[mainCurrentSlideIdx].classList.add("active");

//   for (let pb of mainPagerBtn) {
//     pb.classList.remove("active");
//   }
//   mainPagerBtn[mainCurrentSlideIdx].classList.add("active");
// }

// mainNextBtn.addEventListener("click", () => {
//   if (mainCurrentSlideIdx < mainSlideCount - 1) {
//     mainMoveSlide(mainCurrentSlideIdx + 1);
//   }
// });

// mainPrevBtn.addEventListener("click", () => {
//   if (mainCurrentSlideIdx > 0) {
//     mainMoveSlide(mainCurrentSlideIdx - 1);
//   }
// });

// mainPagerBtn.forEach((item, idx) => {
//   item.addEventListener("click", (e) => {
//     e.preventDefault();
//     mainMoveSlide(idx);
//   });
// });

// //자동 슬라이드
// function mainAutoSlide() {
//   mainTimer = setInterval(() => {
//     let nextIdx = (mainCurrentSlideIdx + 1) % mainSlideCount;
//     mainMoveSlide(nextIdx);
//   }, 3000);
// }

// mainAutoSlide();

// mainSlideWrapper.addEventListener("mouseover", () => {
//   clearInterval(mainTimer);
// });

// mainSlideWrapper.addEventListener("mouseout", () => {
//   mainAutoSlide();
// });

//탭이동
let tabMenu = document.querySelectorAll("#tab-menu li a");
let tabSection = document.querySelectorAll("#tab-contents > section");

tabMenu.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    let tabTargetId = e.target.getAttribute("href");
    let tabTargetOST = document.querySelector(tabTargetId).offsetTop;
    window.scrollTo({ left: 0, top: tabTargetOST, behavior: "smooth" });
  });
});

//BackToTop
let btnBtt = document.querySelector("#go-top");
let scrollAmt = 0;

window.addEventListener("scroll", () => {
  scrollAmt = window.scrollY;

  if (scrollAmt > 300) {
    btnBtt.classList.add("active");
  } else {
    btnBtt.classList.remove("active");
  }
});

btnBtt.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});

/* 이현정 구현 부분 종료*/

/* 이강산 구현 부분 */

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
