/* 이현정 구현 부분*/
/* popup */

let popup = document.querySelector(".popup");
let pCloseBtn = popup.querySelector("#close");
let dayCheck = popup.querySelector("#daycheck");

function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
}

function cookieCheck(name) {
  let cookieArr = document.cookie.split(";");
  let visited = false;
  for (let cookie of cookieArr) {
    if (cookie.search(name) > -1) {
      visited = true;
      break;
    }
  }
  if (!visited) {
    popup.setAttribute("open", "");
  }
}
cookieCheck("team");

pCloseBtn.addEventListener("click", () => {
  popup.removeAttribute("open");
  if (dayCheck.checked) {
    setCookie("team", "marathon", 1);
  } else {
    setCookie("team", "marathon", -1);
  }
});

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

function setPager() {
  let pagerHTML = "";
  mainSlides.forEach((item, idx) => {
    let url = item.getAttribute("data-url");
    let title = item.getAttribute("data-title");
    pagerHTML += `<li>
    <a href=""> <span>
    <img src="${url}"/>
  </span>
  <span>${title}</span></a></li> 
    `;
  });
  mainPager.innerHTML = pagerHTML;
}
setPager();

let mainPagers = mainPager.querySelectorAll("li");

mainPagers.forEach((mainPagerli, idx) => {
  mainPagerli.addEventListener("click", (e) => {
    e.preventDefault();
    moveSlide(idx);
  });
});

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

let mainNewSlides = document.querySelectorAll(".mainslide-container li");

mainNewSlides.forEach((slide, idx) => {
  slide.style.left = `${idx * mainSlideWidth}px`;
});

function setSlide() {
  let ulMoveAmt = mainSlideWidth * -mainSlideCount + "px";
  mainSlideContainer.style.transform = `translateX(${ulMoveAmt})`;
  mainSlideContainer.classList.add("animated");
}
setSlide();

function moveSlide(num) {
  mainSlideContainer.style.left = -num * mainSlideWidth + "px";
  mainCurrentSlideIdx = num;

  if (
    mainCurrentSlideIdx == -mainSlideCount ||
    mainCurrentSlideIdx == mainSlideCount + (mainSlideCount - 1)
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
  //pager
  let pageIdx = mainCurrentSlideIdx;

  if (mainCurrentSlideIdx < 0) {
    pageIdx = mainCurrentSlideIdx + mainSlideCount;
  } else if (mainCurrentSlideIdx > mainSlideCount - 1) {
    pageIdx = mainCurrentSlideIdx - mainSlideCount;
  }
  mainPagers.forEach((item) => {
    item.classList.remove("active");
  });

  mainPagers[pageIdx].classList.add("active");
}

moveSlide(0);

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

/* 이강산 구현 부분 */
/* recommend game */
// 변수 지정

let rcSlideWrapper = document.querySelector(".rc-slide-wrapper"), //ul의 부모
  rcSlideContainer = rcSlideWrapper.querySelector(".rc-slide-container"), //ul
  rcSlides = rcSlideContainer.querySelectorAll("li"),
  rcSlidesCount = rcSlides.length,
  rcSlidesPerView = 4,
  rcSlideWidth = 305,
  rcSlideMargin = 16,
  rcCurrentSlideIdx = 0,
  rcPrevBtn = document.querySelector("#rc-prev"),
  rcNextBtn = document.querySelector("#rc-next");

//슬라이드 가로 너비지정
rcSlideContainer.style.width = `${
  rcSlidesCount * (rcSlideWidth + rcSlideMargin)
}px`;

//슬라이드 이동함수
function rcMoveSlide(num) {
  rcSlideContainer.style.left = `${-num * (rcSlideWidth + rcSlideMargin)}px`;
  rcCurrentSlideIdx = num;

  if (rcCurrentSlideIdx === rcSlidesCount - 1) {
    rcNextBtn.classList.add("disabled");
  } else {
    rcNextBtn.classList.remove("disabled");
  }

  if (rcCurrentSlideIdx === 0) {
    rcPrevBtn.classList.add("disabled");
  } else {
    rcPrevBtn.classList.remove("disabled");
  }
}

// 좌우컨트롤
rcNextBtn.addEventListener("click", () => {
  rcMoveSlide(rcCurrentSlideIdx + 1);
});
rcPrevBtn.addEventListener("click", () => {
  rcMoveSlide(rcCurrentSlideIdx - 1);
});
rcMoveSlide(0);
/* new game */

let newSlideWrapper = document.querySelector(".new-slide-wrapper"),
  newSlideContainer = newSlideWrapper.querySelector(".new-slide-container"),
  newSlides = newSlideContainer.querySelectorAll(".new-slide-container > li"),
  newSlidesCount = newSlides.length,
  newCurrentSlideIdx = 0,
  newSlideMargin = 14,
  newSlideWidth = 415,
  newSlidePerView = 3,
  newPrevBtn = document.querySelector("#new-prev"),
  newNextBtn = document.querySelector("#new-next");

//슬라이드 가로 너비지정
newSlideContainer.style.width = `${
  newSlidesCount * (newSlideWidth + newSlideMargin)
}px`;

//슬라이드 이동함수
function newMoveSlide(num) {
  newSlideContainer.style.left = `${-num * (newSlideWidth + newSlideMargin)}px`;
  newCurrentSlideIdx = num;

  if (newCurrentSlideIdx === newSlidesCount - 1) {
    newNextBtn.classList.add("disabled");
  } else {
    newNextBtn.classList.remove("disabled");
  }

  if (newCurrentSlideIdx === 0) {
    newPrevBtn.classList.add("disabled");
  } else {
    newPrevBtn.classList.remove("disabled");
  }
}
newNextBtn.addEventListener("click", () => {
  newMoveSlide(newCurrentSlideIdx + 1);
});
newPrevBtn.addEventListener("click", () => {
  newMoveSlide(newCurrentSlideIdx - 1);
});
newMoveSlide(0);

/* 이강산 구현 부분 종료*/

/* 이은서 구현 부분 */

// main5 start

let seeTypeBtn = document.querySelectorAll(".tag-list-wrapper .see"),
  seeTypeSlide = document.querySelector(".tag-list-wrapper .type-slide"),
  seeTypeAll = document.querySelector(".tag-list-wrapper .type-all"),
  allSlideWrapper = document.querySelector(
    ".view-wrapper .main5-slide-wrapper"
  ),
  allslideChev = document.querySelector(".view-wrapper .main5-slide-chev-wrap"),
  allViewWrapper = document.querySelector(".view-wrapper .all-view-wrapper"),
  gameCards = document.querySelectorAll(".all-view > li"),
  tagArr = [],
  tagCounter = 1,
  PerPage = 12,
  gameCardsCount = gameCards.length,
  pageCount = Math.ceil(gameCardsCount / PerPage),
  tags = document.querySelectorAll(".tag-list-wrapper .tag-list ul li"),
  allPageNum = allViewWrapper.querySelector(".page-num"),
  allpager = allViewWrapper.querySelector(".pager"),
  allpagerHTML = "",
  allWidth = 1280,
  gameCardMargin = 16,
  currentPageIdx = 0;

// 페이저 생성

for (let i = 0; i < pageCount; i++) {
  allpagerHTML += `<a href="" class="mono-light2-bg"></a>`;
}
allpager.innerHTML = allpagerHTML;

let pagerBtns = allpager.querySelectorAll("a");

// 전체게임보기 페이저

function display(idx) {
  let start = idx * PerPage;
  let end = start + PerPage;
  let gameCardArray = [...gameCards];
  for (ra of gameCardArray) {
    ra.style.display = "none";
  }
  let newGameCards = gameCardArray.slice(start, end);
  for (ngc of newGameCards) {
    ngc.style.display = "block";
  }
  currentPageIdx = idx;
  if (currentPageIdx == 3) {
    allPageNum.innerText = `${gameCardsCount} / ${gameCardsCount}`;
  } else {
    allPageNum.innerText = `${(idx + 1) * PerPage} / ${gameCardsCount}`;
  }
}

pagerBtns.forEach((pb, idx) => {
  pb.addEventListener("click", (e) => {
    e.preventDefault();
    for (pb of pagerBtns) {
      pb.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    display(idx);
  });
});

function pagerNone() {
  allpager.style.display = "none";
  allPageNum.style.display = "none";
}

// 태그 필터

tags.forEach((tag) => {
  tag.addEventListener("click", (e) => {
    pagerNone();
    for (tag of tags) {
      tag.classList.remove("clicked");
    }
    e.currentTarget.classList.add("clicked");
    activeMaster();
    allViewWrapper.classList.add("active");
    seeTypeBtn.forEach((item) => {
      item.classList.remove("active");
    });
    let target = e.target.dataset.filter;

    for (let gameCard of gameCards) {
      gameCard.style.display = "none";
    }
    allViewWrapper.style.marginRight = `-${gameCardMargin}px`;

    let targetList = document.querySelectorAll(target);
    for (let list of targetList) {
      list.style.display = "block";
    }
  });
});

// 보기 버튼 전환

seeTypeBtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    for (item of seeTypeBtn) {
      item.classList.remove("active");
    }
    e.currentTarget.classList.add("active");
  });
});

function activeMaster() {
  allSlideWrapper.classList.remove("active");
  allslideChev.classList.remove("active");
  allViewWrapper.classList.remove("active");
}

seeTypeSlide.addEventListener("click", () => {
  for (let tag of tags) {
    tag.classList.remove("clicked");
  }
  activeMaster();
  allSlideWrapper.classList.add("active");
  allslideChev.classList.add("active");
});

seeTypeAll.addEventListener("click", () => {
  for (let tag of tags) {
    tag.classList.remove("clicked");
  }
  activeMaster();
  allViewWrapper.classList.add("active");
  allpager.style.display = "block";
  allPageNum.style.display = "block";
  allViewWrapper.style.marginRight = `-${gameCardMargin}px`;
  display(0);
});

// 슬라이드

let allslideContainer = allSlideWrapper.querySelector(
    ".main5-big-slide-container"
  ),
  allslides = allslideContainer.querySelectorAll(".main5-slide-container"),
  slides1 = allslideContainer.querySelector(
    ".main5-slide-container:first-child"
  ),
  allslideCount = allslides.length,
  allcurrentSlideIdx = 0,
  alltimer,
  allprevBtn = document.querySelector(".view-wrapper .chev-wrap.left"),
  allnextBtn = document.querySelector(".view-wrapper .chev-wrap.right");
slidePageNum = allSlideWrapper.querySelector(".page-num");

if (allslideCount > 1) {
  allslides.forEach((item, idx) => {
    item.style.left = `${idx * 100}%`;
  });
}

function allmoveSlide(num) {
  allslideContainer.style.left = `${-num * 100}%`;
  allcurrentSlideIdx = num;

  if (allcurrentSlideIdx === allslideCount - 1) {
    allnextBtn.classList.add("disabled");
  } else {
    allnextBtn.classList.remove("disabled");
  }
  if (allcurrentSlideIdx === 0) {
    allprevBtn.classList.add("disabled");
  } else {
    allprevBtn.classList.remove("disabled");
  }
  if (allcurrentSlideIdx == 11) {
    slidePageNum.innerText = `${gameCardsCount} / ${gameCardsCount}`;
  } else {
    slidePageNum.innerText = `${
      (allcurrentSlideIdx + 1) * 4
    } / ${gameCardsCount}`;
  }
  allslides[allcurrentSlideIdx].classList.add("active");
}

allmoveSlide(0);

allnextBtn.addEventListener("click", () => {
  if (allcurrentSlideIdx != allslideCount - 1) {
    allmoveSlide(allcurrentSlideIdx + 1);
  }
});

allprevBtn.addEventListener("click", () => {
  if (allcurrentSlideIdx == allslideCount - 1) {
    allmoveSlide(0);
  }
  if (allcurrentSlideIdx > 0) {
    allmoveSlide(allcurrentSlideIdx - 1);
  }
});

function allautoSlide() {
  alltimer = setInterval(() => {
    let nextIdx = (allcurrentSlideIdx + 1) % allslideCount;
    allmoveSlide(nextIdx);
  }, 3000);
}

allautoSlide();

let chevWrapp = document.querySelector(".main5-slide-chev-wrap");

allSlideWrapper.addEventListener("mouseenter", () => {
  clearInterval(alltimer);
});
allSlideWrapper.addEventListener("mouseleave", () => {
  allautoSlide();
});
chevWrapp.addEventListener("mouseenter", () => {
  clearInterval(alltimer);
});
chevWrapp.addEventListener("mouseleave", () => {
  allautoSlide();
});

/* 이은서 구현 부분 종료*/

/* 한지희 구현 부분 시작 */
let bannerImg = document.querySelector(".banner-wrapper iframe");
bannerImg.addEventListener("mouseover", () => {
  bannerImg.classList.add("active");
});
bannerImg.addEventListener("mouseout", () => {
  if (bannerImg.classList.contains("active")) {
    bannerImg.classList.remove("active");
  }
});
