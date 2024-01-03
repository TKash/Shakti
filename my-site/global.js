/*-------------------------------------------
GLOBAL CODE
--------------------------------------------*/

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);
ScrollTrigger.defaults({
  markers: false,
});

//Text split Global code
let typeSplit;
// Split the text up
function runSplit() {
  typeSplit = new SplitType("[split]", {
    types: "words, chars",
    tagName: "span",
  });
}
runSplit();
// Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    typeSplit.revert();
    runSplit();
  }
});

//lINE Text split Global code
let lineSplit;
// Split the text up
function lineSplitfn() {
  typeSplit = new SplitType("[split-lines]", {
    types: "lines",
    tagName: "span",
  });
}
lineSplitfn();
// Update on window resize
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    lineSplit.revert();
    lineSplitfn();
  }
});

//Headings and Body text fade ins
$("[heading-fade]").each(function (index) {
  $(this).css("will-change", "transform");
  gsap.from($(this).find(".char"), {
    opacity: 0,
    filter: "blur(10px)",
    scale: 1.5,
    rotationX: -90,
    rotationY: -30,
    stagger: { each: 0.1 },
    scrollTrigger: {
      start: "top 80%",
      trigger: $(this),
      scrub: false,
    },
  });
});

$("[text-fade]").each(function (index) {
  $(this).css("will-change", "transform");
  gsap.from($(this).find(".line"), {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
    stagger: { each: 0.1 },
    scrollTrigger: {
      start: "top 80%",
      trigger: $(this),
      scrub: false,
    },
  });
});

$("[normal-fade]").each(function (index) {
  $(this).css("will-change", "transform");
  gsap.from($(this), {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
    scrollTrigger: {
      start: "top 80%",
      trigger: $(this),
      scrub: false,
    },
  });
});

$("[staggered-fade]").each(function (index) {
  let trigger = $(this);
  $(this)
    .children()
    .each(function (index, element) {
      $(this).css("will-change", "transform");
      let mm = gsap.matchMedia();
      mm.add("(min-width: 479px)", () => {
        gsap.from(element, {
          opacity: 0,
          filter: "blur(10px)",
          y: 20,
          delay: index * 0.2,
          scrollTrigger: {
            start: "top 80%",
            trigger: trigger,
            scrub: false,
          },
        });
      });
      mm.add("(max-width: 478px)", () => {
        gsap.from(element, {
          opacity: 0,
          filter: "blur(10px)",
          y: 20,
          scrollTrigger: {
            start: "top 80%",
            trigger: $(this),
            scrub: false,
          },
        });
      });
    });
});

//navbar active link underline code
$(".navlink.w--current").find(".underline_mask").addClass("show");
$(".navlink:not(.w--current)").on("mouseenter mouseleave", function () {
  $(this).find(".underline_mask").toggleClass("show");
});

//navbar color change on light/dark sections
$("[section-light]").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav").addClass("light");
      $(".nav_box").addClass("light");
      $(".nav").find(".button").addClass("light");
    },
    onEnterBack: () => {
      $(".nav").addClass("light");
      $(".nav_box").addClass("light");
      $(".nav").find(".button").addClass("light");
    },
  });
});

$("[section-dark]").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".nav").removeClass("light");
      $(".nav_box").removeClass("light");
      $(".nav").find(".button").removeClass("light");
    },
    onEnterBack: () => {
      $(".nav").removeClass("light");
      $(".nav_box").removeClass("light");
      $(".nav").find(".button").removeClass("light");
    },
  });
});

$("[section-red]").each(function (index) {
  ScrollTrigger.create({
    trigger: $(this),
    start: "top 10%",
    end: "bottom 10%",
    onEnter: () => {
      $(".navbar-red-img").addClass("hide");
      $(".navbar-white-img").addClass("show");
    },
    onEnterBack: () => {
      $(".navbar-red-img").addClass("hide");
      $(".navbar-white-img").addClass("show");
    },
    onLeave: () => {
      $(".navbar-red-img").removeClass("hide");
      $(".navbar-white-img").removeClass("show");
    },
    onLeaveBack: () => {
      $(".navbar-red-img").removeClass("hide");
      $(".navbar-white-img").removeClass("show");
    },
  });
});

/*-------------------------------------------
DESKTOP DROPDOWN LINK HOVER IMAGE CHANGE
--------------------------------------------*/
$(".nav_drop_link").each(function (index) {
  $(this).on("mouseenter", function () {
    $(".drop_image").eq(index).addClass("show");
  });
  $(this).on("mouseleave", function () {
    $(".drop_image").eq(index).removeClass("show");
  });
});

/*-------------------------------------------
DESKTOP BUTTON HOVER
--------------------------------------------*/

let mm1 = gsap.matchMedia();

mm1.add("(min-width: 992px)", () => {
  $(".button").on("mouseenter", function () {
    $(this).find(".hover-circle").addClass("visible");
    $(this).find(".button_bg").addClass("visible");
  });
  $(".button").on("mouseleave", function () {
    $(this).find(".hover-circle").removeClass("visible");
    $(this).find(".button_bg").removeClass("visible");
  });

  document.addEventListener("DOMContentLoaded", function () {
    const parentDivs = document.querySelectorAll(".button");

    parentDivs.forEach(function (parentDiv) {
      const childDiv = parentDiv.querySelector(".hover-circle");

      parentDiv.addEventListener("mousemove", (e) => {
        const parentRect = parentDiv.getBoundingClientRect();
        const x = e.clientX - parentRect.left - parentRect.width / 2;
        const y = e.clientY - parentRect.top - parentRect.height / 2;

        childDiv.style.transform = `translate(${x}px, ${y}px)`;
      });
    });
  });
});
