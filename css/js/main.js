$(document).ready(function(){
  $(".hamburger_menu").click(function(){
    $(".mobile_nav_text").slideToggle();
  });

  $("#sarah_drasner_link").click(function(){
    $("#speakers_modal_content_20").css({"display": "block"});
  });

  $("#romain_guy_link").click(function(){
    $("#speakers_modal_content_18").css({"display": "block"});
  });

  $("#phil_nash_link").click(function(){
    $("#speakers_modal_content_14").css({"display": "block"});
  });

  $(".speakers_modal").click(function(){ /* Closes Modal */
    $(".speakers_modal").css({"display": "none"});
  });

  $(".close_modal").click(function(){ /* Closes Modal By X */
    $(".speakers_modal").css({"display": "none"});
  });
});
