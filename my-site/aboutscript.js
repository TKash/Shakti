/*-------------------------------------------
ABOUT PAGE CODE
--------------------------------------------*/

/*-------------------------------------------
DESKTOP ONLY
--------------------------------------------*/

//Journey scroll animation - Desktop -
let mm = gsap.matchMedia();
let picture_block = $(".jr_picture");

mm.add("(min-width: 992px)", () => {
  gsap.to(picture_block, {
    xPercent: -120,
    scrollTrigger: {
      start: "15% top",
      end: "25% top",
      trigger: ".journey-section",
      scrub: 1.5
    }
  });
  gsap.to("div.jr-content-1 > *", {
    opacity: 0,
    scrollTrigger: {
      start: "25% top",
      end: "26% top",
      trigger: ".journey-section",
      scrub: 1.5
    }
  });

  //slide 2
  gsap.from("div.jr-content-2 > *", {
    y: 20,
    opacity: 0,
    stagger: { each: 0.1 },
    filter: "blur(10px)",
    scrollTrigger: {
      start: "28% top",
      end: "35% top",
      trigger: ".journey-section",
      scrub: 1.5
    }
  });

  //slide 3
  gsap.to(".jr-content-2", {
    opacity: 0,
    y: -20,
    filter: "blur(10px)",
    scrollTrigger: {
      start: "55% top",
      end: "55.5% top",
      trigger: ".journey-section",
      scrub: 1.5
    }
  });
  gsap.to(".pic_movement_block", {
    xPercent: 120,
    scrollTrigger: {
      start: "50% top",
      end: "60% top",
      trigger: ".journey-section",
      scrub: 1.5
    }
  });
  gsap.from("div.jr-content-3 > *", {
    y: 20,
    opacity: 0,
    filter: "blur(10px)",
    stagger: { each: 0.1 },
    scrollTrigger: {
      start: "58% top",
      end: "65% top",
      trigger: ".journey-section",
      scrub: 1.5
    }
  });
});

function checkBreakpoint(x) {
  if (x.matches) {
    //About Team Members Hover
    $(".member_wrap--ph1").on("mouseenter", function () {
      $(this).find(".mm_info_wrap").addClass("show");
      $(this).find(".red-overlay").addClass("hide");
    });
    $(".member_wrap--ph1").on("mouseleave", function () {
      $(this).find(".mm_info_wrap").removeClass("show");
      $(this).find(".red-overlay").removeClass("hide");
    });
  }
}
const matchMediaDesktop = window.matchMedia("(min-width: 992px)");
checkBreakpoint(matchMediaDesktop);
matchMediaDesktop.addListener(checkBreakpoint);

/*-------------------------------------------
ALL BREAKPOINTS
--------------------------------------------*/

//Team members Information OPEN CLOSE
$(document).ready(function () {
  // Get all items of member tiles
  const tilesItems = $(".members_grid_wrap--mt6 .member_wrap--ph1");

  tilesItems.on("click", function () {
    const index = $(this).index();
    $(".mm_fixed_info_wrap").addClass("show");
    $(".nav").css("transform", "translate(0px, -50px)");
    setTimeout(() => {
      $(".mm_fixed_info_contain").addClass("show");
      $(".page_wrap").addClass("popup_open");
    }, 100);
    setTimeout(() => {
      $(".mm_info_card").eq(index).addClass("show");
    }, 500);
  });

  $(".close_button").on("click", function () {
    $(".mm_info_card").removeClass("show");
    $(".page_wrap").removeClass("popup_open");
    setTimeout(() => {
      $(".mm_fixed_info_contain").removeClass("show");
    }, 100);
    setTimeout(() => {
      $(".mm_fixed_info_wrap").removeClass("show");
      $(".nav").css("transform", "translate(0px, 1px)");
    }, 600);
  });
});
