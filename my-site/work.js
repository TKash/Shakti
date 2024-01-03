/*-------------------------------------------
Work CODE
--------------------------------------------*/

let points = $(".w_point_wrapper");
let text_wrapper = $(".w_text_wrapper");

points.each(function (index) {});

/*$(".w_point_wrapper").each(function (index) {
  let activePoint = $(this);
  let activeIndex = index;
  //switch active classes
  
  // create triggers
  text_wrapper
    .eq(activeIndex)
    .find("[work-heading]")
    .css("will-change", "transform");

  tl.from(text_wrapper.eq(activeIndex).find("[work-heading]").find(".char"), {
    opacity: 0,
    filter: "blur(10px)",
    scale: 1.5,
    rotationX: -90,
    rotationY: -30,
    stagger: { each: 0.1 },
    scrolltrigger: {
      trigger: activePoint,
      start: "top center",
      end: "bottom center"
    }
  });
});*/

$(".w_point_wrapper").each(function (index) {
  // switch active class
  function makeItemActive(index) {
    text_wrapper.removeClass("show");
    text_wrapper.eq(index).addClass("show");
  }

  // create triggers
  ScrollTrigger.create({
    trigger: $(this),
    start: "top center",
    end: "bottom center",
    onToggle: (isActive) => {
      if (isActive) {
        makeItemActive(index);
      }
    }
  });
});
