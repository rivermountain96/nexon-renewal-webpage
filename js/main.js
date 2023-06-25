/* main carousel */

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
      pagerHTML += `<a href="">
      <span>
        <img
          src="https://velog.velcdn.com/images/hyunny123/post/e143d1e1-e0af-4dda-8c63-e9c2274bf298/image.png"
        />
      </span>
      <span>FACEPLAY</span>
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
