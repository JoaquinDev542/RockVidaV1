// Loader
window.addEventListener('load', function () {
    
  let hamburger = document.querySelector(".hamburger");
  let menuOpen = document.querySelector(".menuOpen");

  hamburger.addEventListener('click', function () {
      menuOpen.classList.toggle("active");
  });

  if (document.querySelector(".main")) {
      gsap.to('.main .quotesContainers__one', {
        xPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: '.main .quotesContainers__one',
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      });
    }
    
    if (document.querySelector(".quotes")) {
      gsap.to('.quotes .quotesContainers__two', {
        xPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: '.quotes .quotesContainers__two',
          start: "top center",
          end: "bottom top",
          scrub: true
        }
      });
    }
    let heroContentFirst = document.querySelector(".heroContent--first");
    let heroContentSecond = document.querySelector(".heroContent--second");
    let heroContentThird = document.querySelector(".heroContent--third");
    let heroPoints__circleFirst = document.querySelector(".heroPoints__circle--first");
    let heroPoints__circleSecond = document.querySelector(".heroPoints__circle--second");
    let heroPoints__circleThird = document.querySelector(".heroPoints__circle--third");

    heroPoints__circleFirst.addEventListener('click', function () {
      heroContentFirst.classList.remove("active");
      heroContentSecond.classList.remove("active");
      heroContentThird.classList.remove("active");
      heroContentThird.classList.remove("active2");
      heroPoints__circleFirst.classList.remove("active");
      heroPoints__circleSecond.classList.remove("active");
      heroPoints__circleThird.classList.remove("active");
    });

    heroPoints__circleSecond.addEventListener('click', function () {
      heroContentFirst.classList.add("active");
      heroContentSecond.classList.add("active");
      heroContentSecond.classList.remove("active2");
      heroContentThird.classList.remove("active");
      heroPoints__circleFirst.classList.add("active");
      heroPoints__circleSecond.classList.add("active");
      heroPoints__circleThird.classList.remove("active");
    });

    heroPoints__circleThird.addEventListener('click', function () {
      heroContentFirst.classList.add("active");
      heroContentSecond.classList.add("active2");
      heroContentThird.classList.add("active");
      heroContentThird.classList.remove("active2");
      heroPoints__circleFirst.classList.add("active");
      heroPoints__circleThird.classList.add("active");
      heroPoints__circleSecond.classList.remove("active");
    });

    var x = window.matchMedia("(min-width: 1024px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

  function myFunction(x) {
    if (x.matches) { 
      if (document.querySelector(".quotes")) {
        gsap.to('.quotes .quotesContainersone', {
          xPercent: -5,
          ease: "none",
          scrollTrigger: {
            trigger: '.main .quotesContainersone',
            start: "top center",
            end: "bottom top",
            scrub: true
          }
        });
      }

      if (document.querySelector(".quotes")) {
        gsap.to('.quotes .quotesContainerstwo', {
          xPercent: 5,
          ease: "none",
          scrollTrigger: {
            trigger: '.quotes .quotesContainerstwo',
            start: "top center",
            end: "bottom top",
            scrub: true
          }
        });
      }
    } else {

    } 
  } 
})
