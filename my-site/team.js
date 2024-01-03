/*-------------------------------------------
TEAM PAGE CODE
--------------------------------------------*/

//Team members Information OPEN CLOSE
$(document).ready(function () {
  // Get all items of member tiles
  const tilesItems = $(".managing_grid_wrap--mt6 .member_wrap--ph1");

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

  const advisoryItems = $(".advisory_grid_wrap--mt6 .member_wrap--ph1");

  advisoryItems.on("click", function () {
    const index = $(this).index();
    $(".mm_fixed_info_wrap_adv").addClass("show");
    $(".nav").css("transform", "translate(0px, -50px)");
    setTimeout(() => {
      $(".mm_fixed_info_contain_adv").addClass("show");
      $(".page_wrap").addClass("popup_open");
    }, 100);
    setTimeout(() => {
      $(".mm_info_card_adv").eq(index).addClass("show");
    }, 500);
  });

  $(".close_button").on("click", function () {
    $(".mm_info_card").removeClass("show");
    $(".mm_info_card_adv").removeClass("show");
    $(".page_wrap").removeClass("popup_open");
    setTimeout(() => {
      $(".mm_fixed_info_contain").removeClass("show");
      $(".mm_fixed_info_contain_adv").removeClass("show");
    }, 100);
    setTimeout(() => {
      $(".mm_fixed_info_wrap").removeClass("show");
      $(".mm_fixed_info_wrap_adv").removeClass("show");
      $(".nav").css("transform", "translate(0px, 1px)");
    }, 600);
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
