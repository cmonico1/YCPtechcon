$(document).ready(function(){
  $("#sarah_drasner_link").click(function(){
    $("#speakers_modal_content_20").css({
      "display": "block",/* Shows element */
      "position": "fixed",/* Stay in place */
      "z-index": "1",
      "padding-top": "100px",
      "left": "0",
      "top": "-60px",
      "width": "100%",
      "height": "100%",
      "overflow": "auto",
      "background-color": "rgb(0,0,0)",
      "background-color": "rgba(0,0,0,0.4)"
    });
  });

  $("#romain_guy_link").click(function(){
    $("#speakers_modal_content_18").css({
      "display": "block",/* Shows element */
      "position": "fixed",/* Stay in place */
      "z-index": "1",
      "padding-top": "100px",
      "left": "0",
      "top": "0",
      "width": "100%",
      "height": "100%",
      "overflow": "auto",
      "background-color": "rgb(0,0,0)",
      "background-color": "rgba(0,0,0,0.4)"
    });
  });

  $("#phil_nash_link").click(function(){
    $("#speakers_modal_content_14").css({
      "display": "block",/* Shows element */
      "position": "fixed",/* Stay in place */
      "z-index": "1",
      "padding-top": "100px",
      "left": "0",
      "top": "0",
      "width": "100%",
      "height": "100%",
      "overflow": "auto",
      "background-color": "rgb(0,0,0)",
      "background-color": "rgba(0,0,0,0.4)"
    });
  });

  $(".speakers_modal").click(function(){ /* Closes Modal */
    $(".speakers_modal").css({"display": "none"});
  });

  $(".close_modal").click(function(){ /* Closes Modal By X */
    $(".speakers_modal").css({"display": "none"});
  });
});
