/*-------------------------------------------
DONATE PAGE CODE
--------------------------------------------*/

$(".donate_button").removeClass("pe0");
$(".donate_block").css("opacity", "0");

$("[donate-block]").on("mouseenter", function () {
  $(this).find(".icon-hover").css("opacity", "1"); //transform: translateX(0);
  gsap.to($(this).find(".sec_button_text"), {
    x: 10,
    duration: 0.5,
    ease: "Cubic.easeOut"
  });
});
$("[donate-block]").on("mouseleave", function () {
  $(this).find(".icon-hover").css("opacity", "0");
  gsap.to($(this).find(".sec_button_text"), {
    x: 0,
    duration: 0.5,
    ease: "Cubic.easeOut"
  });
});
