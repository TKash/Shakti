/*-------------------------------------------
HOME PAGE CODE upd 1
--------------------------------------------*/

gsap.registerPlugin(CustomEase);

//Preloader Animation
let vid1 = document.getElementById("prel_video");
let vid2 = document.getElementById("prel_video2");
vid1.playbackRate = 1;
vid2.playbackRate = 1;
vid1.currentTime = 0;
vid2.currentTime = 0;
vid1.play();
vid2.play();
$("[hero-heading]").css("will-change", "transform");
$("[hero-subheading]").css("will-change", "transform");
$("[hero-button]").css("will-change", "transform");

let circle1 = document.getElementById("prel-circle-1");
let circle1div = $(".circle1");
let circle2 = $(".circle2");
let text1 = $("[prel-text-1]");

let preloadtl = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power3.easeOut",
  },
});

CustomEase.create(
  "custom",
  "M0,0,C0.212,0,0.211,0.01,0.29,0.086,0.366,0.16,0.378,0.332,0.402,0.482,0.414,0.638,0.482,0.756,0.532,0.83,0.594,0.922,0.734,1,1,1"
);

/*-------------------------------------------
DESKTOP + TAB + LANDSCAPE PRELOADER
--------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  var html = document.documentElement;

  // Check if the specific class is applied to the html element
  if (html.classList.contains("show-big-loader")) {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 479px)", () => {
      preloadtl
        .to($(".preloader_blank_div"), { opacity: 0 })
        .fromTo(
          circle1,
          { "stroke-dashoffset": 3000 },
          {
            "stroke-dashoffset": 0,
            duration: 7,
            ease: "custom",
          },
          "<"
        )
        .from(
          text1.find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
            delay: 1.2,
          },
          "<"
        )
        .from(circle2, { opacity: 0, duration: 0.1, delay: 2.5 }, "<")
        .to(
          circle1div,
          { xPercent: -55, ease: "power3.inOut", duration: 2 },
          "<"
        )
        .to(
          $(".circle1video"),
          { xPercent: -55, ease: "power3.inOut", duration: 2 },
          "<"
        )
        .to(circle2, { xPercent: 55, ease: "power3.inOut", duration: 2 }, "<")
        .to(
          $(".circle2video"),
          { xPercent: 55, ease: "power3.inOut", duration: 2 },
          "<"
        )
        .to(
          text1.find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .to($(".circle1video"), { opacity: 1, delay: 1 }, "<")
        .to($(".circle2video"), { opacity: 1 }, "<")
        .from(
          $("[our-text]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .from(
          $("[their-text]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .to(circle1div, { opacity: 0, delay: 4 }, "<")
        .to(circle1div, { xPercent: 0, ease: "power2.inOut", duration: 2 }, "<")
        .to(circle2, { opacity: 0 }, "<")
        .to(circle2, { xPercent: 0, ease: "power2.inOut", duration: 2 }, "<")
        .to($(".circle1video"), { opacity: 0 }, "<")
        .to(
          $(".circle1video"),
          { xPercent: 0, ease: "power2.inOut", duration: 2 },
          "<"
        )
        .to($(".circle2video"), { opacity: 0 }, "<")
        .to(
          $(".circle2video"),
          { xPercent: 0, ease: "power2.inOut", duration: 2 },
          "<"
        )
        .from(
          $("[text3]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
            delay: 1,
          },
          "<"
        )
        .to($("[text3]"), {
          opacity: 0,
          y: -15,
          delay: 0.75,
          filter: "blur(10px)",
        })
        .from($(".prel-logo"), { opacity: 0, y: 15, delay: 0.5 }, "<")
        .to($("[preloader-wrapper]"), {
          filter: "blur(30px)",
          scale: 1.5,
          duration: 2,
          ease: "power4.inOut",
          delay: 0.5,
          onComplete: function () {
            $("[preloader-wrapper]").addClass("pe0");
          },
        })
        .to(
          $("[preloader-wrapper]"),
          { opacity: 0, delay: 1, duration: 2 },
          "<"
        )
        .fromTo(
          $("[hero-bg]"),
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1.1 },
          "<"
        )
        .from(
          $("[hero-heading]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .from(
          $("[hero-subheading]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .from(
          $("[hero-button]"),
          { y: 15, opacity: 0, filter: "blur(15px)", delay: 0.75 },
          "<"
        )
        .from(
          $("[hero-nav]"),
          { y: -20, opacity: 0, filter: "blur(15px)", delay: 2 },
          "<"
        )
        .from(
          $("[hero-bottom]"),
          { y: 20, opacity: 0, filter: "blur(15px)" },
          "<"
        )
        .from(
          $("[hero-vision]"),
          { y: 20, opacity: 0, filter: "blur(15px)" },
          "<"
        );
    });
  } else {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 479px)", () => {
      preloadtl
        .to($(".preloader_blank_div"), { opacity: 0 })
        .from($(".prel-quick-logo"), { opacity: 0, y: 15, delay: 0.5 }, "<")
        .to($("[preloader-quick-wrapper]"), {
          filter: "blur(30px)",
          scale: 1.5,
          duration: 2,
          ease: "power4.inOut",
          delay: 0.5,
          onComplete: function () {
            $("[preloader-quick-wrapper]").addClass("pe0");
          },
        })
        .to(
          $("[preloader-quick-wrapper]"),
          { opacity: 0, delay: 1, duration: 2 },
          "<"
        )
        .fromTo(
          $("[hero-bg]"),
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1.1 },
          "<"
        )
        .from(
          $("[hero-heading]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .from(
          $("[hero-subheading]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .from(
          $("[hero-button]"),
          { y: 15, opacity: 0, filter: "blur(15px)", delay: 0.75 },
          "<"
        )
        .from(
          $("[hero-nav]"),
          { y: -20, opacity: 0, filter: "blur(15px)", delay: 2 },
          "<"
        )
        .from(
          $("[hero-bottom]"),
          { y: 20, opacity: 0, filter: "blur(15px)" },
          "<"
        )
        .from(
          $("[hero-vision]"),
          { y: 20, opacity: 0, filter: "blur(15px)" },
          "<"
        );
    });
  }
});

/*-------------------------------------------
MOB PORTRAIT PRELOADER
--------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  var html = document.documentElement;

  // Check if the specific class is applied to the html element
  if (html.classList.contains("show-big-loader")) {
    let mobm = gsap.matchMedia();

    mobm.add("(max-width: 478px)", () => {
      preloadtl
        .to($(".preloader_blank_div"), { opacity: 0 })
        .fromTo(
          circle1,
          { "stroke-dashoffset": 3000 },
          {
            "stroke-dashoffset": 0,
            duration: 7,
            ease: "custom",
          },
          "<"
        )
        .from(
          text1.find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
            delay: 1.2,
          },
          "<"
        )
        .from(circle2, { opacity: 0, duration: 0.1, delay: 2.5 }, "<")
        .to(
          circle1div,
          { yPercent: -55, ease: "power3.inOut", duration: 2 },
          "<"
        )
        .to(
          $(".circle1video"),
          { yPercent: -55, ease: "power3.inOut", duration: 2 },
          "<"
        )
        .to(circle2, { yPercent: 55, ease: "power3.inOut", duration: 2 }, "<")
        .to(
          $(".circle2video"),
          { yPercent: 55, ease: "power3.inOut", duration: 2 },
          "<"
        )
        .to(
          text1.find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .to($(".circle1video"), { opacity: 1, delay: 1 }, "<")
        .to($(".circle2video"), { opacity: 1 }, "<")
        .from(
          $("[our-text]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .from(
          $("[their-text]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .to(circle1div, { opacity: 0, delay: 4 }, "<")
        .to(circle1div, { yPercent: 0, ease: "power2.inOut", duration: 2 }, "<")
        .to(circle2, { opacity: 0 }, "<")
        .to(circle2, { yPercent: 0, ease: "power2.inOut", duration: 2 }, "<")
        .to($(".circle1video"), { opacity: 0 }, "<")
        .to(
          $(".circle1video"),
          { yPercent: 0, ease: "power2.inOut", duration: 2 },
          "<"
        )
        .to($(".circle2video"), { opacity: 0 }, "<")
        .to(
          $(".circle2video"),
          { yPercent: 0, ease: "power2.inOut", duration: 2 },
          "<"
        )
        .from(
          $("[text3]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
            delay: 1,
          },
          "<"
        )
        .to($("[text3]"), {
          opacity: 0,
          y: -15,
          delay: 0.75,
          filter: "blur(10px)",
        })
        .from($(".prel-logo"), { opacity: 0, y: 15, delay: 0.5 }, "<")
        .to($("[preloader-wrapper]"), {
          filter: "blur(30px)",
          scale: 1.5,
          duration: 2,
          ease: "power4.inOut",
          delay: 0.5,
          onComplete: function () {
            $("[preloader-wrapper]").addClass("pe0");
          },
        })
        .to(
          $("[preloader-wrapper]"),
          { opacity: 0, delay: 1, duration: 2 },
          "<"
        )
        .fromTo(
          $("[hero-bg]"),
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1.1 },
          "<"
        )
        .from(
          $("[hero-heading]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .from(
          $("[hero-subheading]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .from(
          $("[hero-button]"),
          { y: 15, opacity: 0, filter: "blur(15px)", delay: 0.75 },
          "<"
        )
        .from(
          $("[hero-nav]"),
          { y: -20, opacity: 0, filter: "blur(15px)", delay: 2 },
          "<"
        )
        .from(
          $("[hero-bottom]"),
          { y: 20, opacity: 0, filter: "blur(15px)" },
          "<"
        )
        .from(
          $("[hero-vision]"),
          { y: 20, opacity: 0, filter: "blur(15px)" },
          "<"
        );
    });
  } else {
    let mobm = gsap.matchMedia();

    mobm.add("(max-width: 478px)", () => {
      preloadtl
        .to($(".preloader_blank_div"), { opacity: 0 })
        .from($(".prel-quick-logo"), { opacity: 0, y: 15, delay: 0.5 }, "<")
        .to($("[preloader-quick-wrapper]"), {
          filter: "blur(30px)",
          scale: 1.5,
          duration: 2,
          ease: "power4.inOut",
          delay: 0.5,
          onComplete: function () {
            $("[preloader-quick-wrapper]").addClass("pe0");
          },
        })
        .to(
          $("[preloader-quick-wrapper]"),
          { opacity: 0, delay: 1, duration: 2 },
          "<"
        )
        .fromTo(
          $("[hero-bg]"),
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1.1 },
          "<"
        )
        .from(
          $("[hero-heading]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .from(
          $("[hero-subheading]").find(".char"),
          {
            opacity: 0,
            filter: "blur(10px)",
            scale: 1.5,
            rotationX: -90,
            rotationY: -30,
            stagger: { each: 0.05 },
          },
          "<"
        )
        .from(
          $("[hero-button]"),
          { y: 15, opacity: 0, filter: "blur(15px)", delay: 0.75 },
          "<"
        )
        .from(
          $("[hero-nav]"),
          { y: -20, opacity: 0, filter: "blur(15px)", delay: 2 },
          "<"
        )
        .from(
          $("[hero-bottom]"),
          { y: 20, opacity: 0, filter: "blur(15px)" },
          "<"
        )
        .from(
          $("[hero-vision]"),
          { y: 20, opacity: 0, filter: "blur(15px)" },
          "<"
        );
    });
  }
});

//Who we are (Our Works) slider - Swiper.js
$(".slider-main_component").each(function (index) {
  gsap.from($(this).find(".swiper-slide"), {
    opacity: 0,
    filter: "blur(10px)",
    y: 20,
    stagger: { each: 0.2 },
    scrollTrigger: {
      start: "top 70%",
      trigger: $(this),
      scrub: false,
    },
  });
  const swiper = new Swiper($(this).find(".swiper")[0], {
    slidesPerView: "auto",
    speed: 700,
    keyboard: true,
    mousewheel: {
      forceToAxis: true,
    },
    followFinger: false,
    spaceBetween: 24,
    scrollbar: {
      el: $(this).find(".swiper-drag-wrapper")[0],
      draggable: true,
      dragClass: "swiper-drag",
      snapOnRelease: true,
    },
    slideActiveClass: "is-active",
    slideDuplicateActiveClass: "is-active",
    breakpoints: {
      //Mobile Landscape and up (>=480)
      480: {
        spaceBetween: "2%",
      },
    },
  });
});

//photo grid mission interaction
$(".photo_img").each(function (index) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top 10%",
      end: "bottom top",
      scrub: true,
    },
  });
  tl.to($(this), {
    filter: "blur(20px)",
    opacity: 0,
    scale: 0.5,
    ease: "none",
  });
});


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



//Count up animation
jQuery(document).ready(function ($) {
  $(".counterup").counterUp({
    delay: 15, // the delay time in ms
    time: 1000, // the speed time in ms
  });
});

// MARQUEE POWER-UP
window.addEventListener("DOMContentLoaded", (event) => {
  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  }
  // marquee component
  $("[tr-marquee-element='component']").each(function (index) {
    let componentEl = $(this),
      panelEl = componentEl.find("[tr-marquee-element='panel']"),
      triggerHoverEl = componentEl.find("[tr-marquee-element='triggerhover']"),
      triggerClickEl = componentEl.find("[tr-marquee-element='triggerclick']");
    let speedSetting = attr(100, componentEl.attr("tr-marquee-speed")),
      verticalSetting = attr(false, componentEl.attr("tr-marquee-vertical")),
      reverseSetting = attr(false, componentEl.attr("tr-marquee-reverse")),
      scrollDirectionSetting = attr(
        false,
        componentEl.attr("tr-marquee-scrolldirection")
      ),
      scrollScrubSetting = attr(
        false,
        componentEl.attr("tr-marquee-scrollscrub")
      ),
      moveDistanceSetting = -100,
      timeScaleSetting = 1,
      pausedStateSetting = false;
    if (reverseSetting) moveDistanceSetting = 100;
    let marqueeTimeline = gsap.timeline({
      repeat: -1,
      onReverseComplete: () => marqueeTimeline.progress(1),
    });
    if (verticalSetting) {
      speedSetting = panelEl.first().height() / speedSetting;
      marqueeTimeline.fromTo(
        panelEl,
        { yPercent: 0 },
        { yPercent: moveDistanceSetting, ease: "none", duration: speedSetting }
      );
    } else {
      speedSetting = panelEl.first().width() / speedSetting;
      marqueeTimeline.fromTo(
        panelEl,
        { xPercent: 0 },
        { xPercent: moveDistanceSetting, ease: "none", duration: speedSetting }
      );
    }
    let scrubObject = { value: 1 };
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (!pausedStateSetting) {
          if (scrollDirectionSetting && timeScaleSetting !== self.direction) {
            timeScaleSetting = self.direction;
            marqueeTimeline.timeScale(self.direction);
          }
          if (scrollScrubSetting) {
            let v = self.getVelocity() * 0.006;
            v = gsap.utils.clamp(-60, 60, v);
            let scrubTimeline = gsap.timeline({
              onUpdate: () => marqueeTimeline.timeScale(scrubObject.value),
            });
            scrubTimeline.fromTo(
              scrubObject,
              { value: v },
              { value: timeScaleSetting, duration: 0.5 }
            );
          }
        }
      },
    });
    function pauseMarquee(isPausing) {
      pausedStateSetting = isPausing;
      let pauseObject = { value: 1 };
      let pauseTimeline = gsap.timeline({
        onUpdate: () => marqueeTimeline.timeScale(pauseObject.value),
      });
      if (isPausing) {
        pauseTimeline.fromTo(
          pauseObject,
          { value: timeScaleSetting },
          { value: 0, duration: 0.5 }
        );
        triggerClickEl.addClass("is-paused");
      } else {
        pauseTimeline.fromTo(
          pauseObject,
          { value: 0 },
          { value: timeScaleSetting, duration: 0.5 }
        );
        triggerClickEl.removeClass("is-paused");
      }
    }
    if (window.matchMedia("(pointer: fine)").matches) {
      triggerHoverEl.on("mouseenter", () => pauseMarquee(true));
      triggerHoverEl.on("mouseleave", () => pauseMarquee(false));
    }
    triggerClickEl.on("click", function () {
      !$(this).hasClass("is-paused") ? pauseMarquee(true) : pauseMarquee(false);
    });
  });
});
