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
    allSlideWrapper = document.querySelector('.view-wrapper .main5-slide-wrapper'),
    allslideChev = document.querySelector('.view-wrapper .main5-slide-chev-wrap'),
    allViewWrapper = document.querySelector('.view-wrapper .all-view-wrapper'),
    tagViewWrapper = document.querySelector('.view-wrapper .tag-view-wrapper'),
    tags = document.querySelectorAll('.tag-list-wrapper .tag-list ul li'),
    allPageNum = allViewWrapper.querySelector('.page-num'),
    allViewPages = allViewWrapper.querySelectorAll('.all-view > li'),
    allpager = allViewWrapper.querySelector('.pager'),
    allpagerHTML = '',
    pageCount = allViewPages.length,
    currentPageIdx = 0;
    
console.log(currentPageIdx);
  
allViewPages.forEach((page) => {
  allpagerHTML += `<a href="" class="mono-light2-bg"></a>`;
})

allpager.innerHTML = allpagerHTML;

let pagerBtns = allpager.querySelectorAll('a');

function movepage(numb) {
  currentPageIdx = numb;
  for (let page of allViewPages) {
    page.classList.remove('active');
  } allViewPages[currentPageIdx].classList.add('active');
  if (currentPageIdx == 3) {
    allPageNum.innerText = `45 / 45`;
  } else {
    allPageNum.innerText = `${ (numb+1) * 12} / 45`;
  }
}
movepage(0);

pagerBtns.forEach((pagerBtn, idx) => {
  pagerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    movepage(idx)
    })
})

seeTypeBtn.forEach((item, idx) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    for (item of seeTypeBtn) {
      item.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
  })
})

function activeMaster() {
  allSlideWrapper.classList.remove('active');
  allslideChev.classList.remove('active');
  allViewWrapper.classList.remove('active');
  tagViewWrapper.classList.remove('active');
};

seeTypeSlide.addEventListener('click', () => {
  activeMaster();
  allSlideWrapper.classList.add('active');
  allslideChev.classList.add('active');
})

seeTypeAll.addEventListener('click', () => {
  activeMaster();
  allViewWrapper.classList.add('active');
})

tags.forEach((tag) => {
  tag.addEventListener('click', (e) => {
    for (tag of tags) {
      tag.classList.remove('clicked');
    }
    e.currentTarget.classList.add('clicked');
    activeMaster();
    tagViewWrapper.classList.add('active');
    seeTypeBtn.forEach(item => {
      item.classList.remove('active');
    })
  })
})


let allslideContainer = allSlideWrapper.querySelector('.main5-big-slide-container'),
    allslides = allslideContainer.querySelectorAll('.main5-slide-container'),
    slides1 = allslideContainer.querySelector('.main5-slide-container:first-child'),
    allslideCount = allslides.length,
    allcurrentSlideIdx = 0,
    alltimer,
    allprevBtn = document.querySelector('.view-wrapper .chev-wrap.left'),
    allnextBtn = document.querySelector('.view-wrapper .chev-wrap.right')
    slidePageNum = allSlideWrapper.querySelector('.page-num');


if(allslideCount > 1){
  allslides.forEach((item, idx) => {
    item.style.left = `${idx * 100}%`;
  })
};

function allmoveSlide(num) {
  allslideContainer.style.left = `${-num * 100}%`
  allcurrentSlideIdx = num;
  if (allcurrentSlideIdx === allslideCount - 1) {
    allnextBtn.classList.add('disabled');
  } else {
    allnextBtn.classList.remove('disabled');
  }
  if (allcurrentSlideIdx === 0) {
    allprevBtn.classList.add('disabled');
  } else {
    allprevBtn.classList.remove('disabled');
  }
  if (allcurrentSlideIdx == 11) {
    slidePageNum.innerText = `45 / 45`;
  } else {
    slidePageNum.innerText = `${(allcurrentSlideIdx + 1) * 4} / 45`;
  }
  allslides[allcurrentSlideIdx].classList.add('active');
}

allmoveSlide(0);

allnextBtn.addEventListener('click', () => {
  if (allcurrentSlideIdx != allslideCount - 1) {
    allmoveSlide(allcurrentSlideIdx + 1)
  }
});

allprevBtn.addEventListener('click', () => {
  if (allcurrentSlideIdx > 0) {
    allmoveSlide(allcurrentSlideIdx - 1)
  }
  if (allcurrentSlideIdx = allslideCount - 1) {
    allmoveSlide(0);
  }
});

function allautoSlide() {
  alltimer = setInterval(() => {
    let nextIdx = (allcurrentSlideIdx + 1) % allslideCount;
    allmoveSlide(nextIdx);
  }, 3000);
}

allautoSlide();

let chevWrapp = document.querySelector('.main5-slide-chev-wrap');

allSlideWrapper.addEventListener('mouseenter', () => {
  clearInterval(alltimer);
});
allSlideWrapper.addEventListener('mouseleave', () => {
  allautoSlide();
});
chevWrapp.addEventListener('mouseenter', () => {
  clearInterval(alltimer);
});
chevWrapp.addEventListener('mouseleave', () => {
  allautoSlide();
});