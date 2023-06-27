// main5 start

let main5SWrapper = document.querySelector('.main5-slide-wrapper'),
    main5SContainer = main5SWrapper.querySelector('.main5-big-slide-container'),
    main5Slides= main5SContainer.querySelectorAll('.main5-slide-container'),
    main5slideCount = main5Slides.length,
    main5currentSlideIdx = 0,
    main5prevBtn = main5SWrapper.querySelector('.main5-chev-wrap.left'),
    main5nextBtn = main5SWrapper.querySelector('.main5-chev-wrap.right'),
    timer,
    main5SlideWidth = `1280px`;

// main5 done