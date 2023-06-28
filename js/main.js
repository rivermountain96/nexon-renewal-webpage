/* 이현정 구현 부분*/
/* main carousel */

/*
let slideWrapper = document.querySelector(".mainslide-wrapper");
let slideContainer = slideWrapper.querySelector(".mainslide-container");
let slides = slideContainer.querySelectorAll(".mainslide");
let slideCount = slides.length;
let currentSlideIdx = 0;
let pager = slideWrapper.querySelector(".pager");
let timer;
let pagerHTML = "";
let slideWidth = document.body.offsetWidth;
let prevBtn = slideWrapper.querySelector("#prev");
let nextBtn = slideWrapper.querySelector("#next");

function setSlide() {
  if (slideCount > 1) {
    let containerWidth = slideWidth * slideCount;
    slideContainer.style.width = `${containerWidth}px`;

    slides.forEach((item, idx) => {
      item.style.width = `${slideWidth}px`;
      let url = item.getAttribute("data-url");
      let title = item.getAttribute("data-title");
      console.log(url)
      console.log(title)

      pagerHTML += `<a href="">
      <span>
        <img
          src=${url}
        />
      </span>
      <span>${title}</span>
    </a>
    `;
    });
  }
}

setSlide();

pager.innerHTML = pagerHTML;
let pagerBtn = pager.querySelectorAll("a");

function moveSlide(num) {
  slideContainer.style.transform = `translateX(${-num * slideWidth}px)`;
  currentSlideIdx = num;
  console.log(currentSlideIdx);

  updateNav();
}

updateNav();

function updateNav() {
  for (let sl of slides) {
    sl.classList.remove("active");
  }
  slides[currentSlideIdx].classList.add("active");

  for (let pb of pagerBtn) {
    pb.classList.remove("active");
  }
  pagerBtn[currentSlideIdx].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  if (currentSlideIdx < slideCount - 1) {
    moveSlide(currentSlideIdx + 1);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentSlideIdx > 0) {
    moveSlide(currentSlideIdx - 1);
  }
});

pagerBtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    moveSlide(idx);
  });
});

//자동 슬라이드
function autoSlide() {
  timer = setInterval(() => {
    let nextIdx = (currentSlideIdx + 1) % slideCount;
    moveSlide(nextIdx);
  }, 3000);
}

autoSlide();

slideWrapper.addEventListener("mouseover", () => {
  clearInterval(timer);
});

slideWrapper.addEventListener("mouseout", () => {
  autoSlide();
});
*/

/* 이현정 구현 부분 종료*/

/* 이강산 구현 부분 */

/* 이강산 구현 부분 종료*/


/* 이은서 구현 부분 */

// main5 start

let seeTypeBtn = document.querySelectorAll('.tag-list-wrapper .see'),
    seeTypeSlide = document.querySelector('.tag-list-wrapper .type-slide'),
    seeTypeAll = document.querySelector('.tag-list-wrapper .type-all'),
    slideWrapper = document.querySelector('.view-wrapper .main5-slide-wrapper'),
    slideChev = document.querySelector('.view-wrapper .main5-slide-chev-wrap'),
    allViewWrapper = document.querySelector('.view-wrapper .all-view-wrapper'),
    tagViewWrapper = document.querySelector('.view-wrapper .tag-view-wrapper'),
    tags = document.querySelectorAll('.tag-list-wrapper .tag-list ul li');
    
seeTypeBtn.forEach((item, idx) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    for (item of seeTypeBtn) {
      item.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
  })
})

seeTypeSlide.addEventListener('click', () => {
  slideWrapper.classList.add('active');
  slideChev.classList.add('active');
  allViewWrapper.classList.remove('active');
  tagViewWrapper.classList.remove('active');
})

seeTypeAll.addEventListener('click', () => {
  allViewWrapper.classList.add('active');
  slideWrapper.classList.remove('active');
  slideChev.classList.remove('active');
  tagViewWrapper.classList.remove('active');
})

tags.forEach((tag) => {
  tag.addEventListener('click', (e) => {
    for (tag of tags) {
      tag.classList.remove('clicked');
    }
    e.currentTarget.classList.add('clicked');
    slideWrapper.classList.remove('active');
    slideChev.classList.remove('active');
    allViewWrapper.classList.remove('active');
    tagViewWrapper.classList.add('active');
    seeTypeBtn.forEach(item => {
      item.classList.remove('active');
    })
  })
})

let slideContainer = slideWrapper.querySelector('.main5-big-slide-container'),
    slides = slideContainer.querySelectorAll('.main5-slide-container'),
    slides1 = slideContainer.querySelector('.main5-slide-container:first-child'),
    slideCount = slides.length,
    currentSlideIdx = 0,
    timer,
    prevBtn = document.querySelector('.view-wrapper .chev-wrap.left'),
    nextBtn = document.querySelector('.view-wrapper .chev-wrap.right')
    pageNum = slideWrapper.querySelector('.page-num');
    

console.log(slides)
console.log(nextBtn);
console.log(prevBtn);


if(slideCount > 1){
  slides.forEach((item, idx) => {
    item.style.left = `${idx * 100}%`;
  })
};

function moveSlide(num) {
  slideContainer.style.left = `${-num * 100}%`
  currentSlideIdx = num;
  console.log(currentSlideIdx);
  if (currentSlideIdx === slideCount - 1) {
    nextBtn.classList.add('disabled');
  } else {
    nextBtn.classList.remove('disabled');
  }
  if (currentSlideIdx === 0) {
    prevBtn.classList.add('disabled');
  } else {
    prevBtn.classList.remove('disabled');
  }
  pageNum.innerText = `${(currentSlideIdx+1)*4} / 45`;
  slides[currentSlideIdx].classList.add('active');
}

moveSlide(0);

nextBtn.addEventListener('click', () => {
  if (currentSlideIdx != slideCount - 1) {
    moveSlide(currentSlideIdx + 1)
  }
});
prevBtn.addEventListener('click', () => {
  if (currentSlideIdx > 0) {
    moveSlide(currentSlideIdx - 1)
  }
});

console.log(currentSlideIdx);

function autoSlide() {
  timer = setInterval(() => {
    let nextIdx = (currentSlideIdx + 1) % slideCount;
    moveSlide(nextIdx);
  }, 3000);
}

autoSlide();