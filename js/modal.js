$(document).ready(function(){
  /*Hover States*/
  /* Brad Frost */
  $("#speakers_flex_1").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_1").html("<p>Brad Frost</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
  }, function(){
    $("#speakers_flex_hover_1").html('<img src="../img/brad_frost.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
  });

  /* Modal State */
  $("#speakers_flex_1").click(function(){
    $("#speakers_modal_content_1").css({
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

  /* Cal Henderson */
  $("#speakers_flex_2").hover(function(){
    $("#speakers_flex_hover_2").html("<p>Cal Henderson</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "45px", "padding": "40px 0"});
  }, function(){
    $("#speakers_flex_hover_2").html('<img src="../img/cal_henderson.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });

  /* Modal State */
  $("#speakers_flex_2").click(function(){
    $("#speakers_modal_content_2").css({
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

  /* Dana White */
  $("#speakers_flex_3").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_3").html("<p>Dana White</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
  }, function(){
    $("#speakers_flex_hover_3").html('<img src="../img/dana_white.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
  });

  /* Modal State */
  $("#speakers_flex_3").click(function(){
    $("#speakers_modal_content_3").css({
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
