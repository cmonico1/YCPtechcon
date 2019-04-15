$(document).ready(function(){
  /*Hover States*/
  /* Brad Frost */
  $("#speakers_flex_1").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_1").html("<p>Brad Frost</p>").css(".speakers_hover_on");
  }, function(){
    $("#speakers_flex_hover_1").html("<p></p>").css("display": "none");
  });
  /* Modal State */
  $("#speakers_flex_1").click(function(){
    $("#speakers_modal_content_1").css({
      "display": "block",/* Shows element */
      "position": "fixed",/* Stay in place */
      "z-index": "1",
      "padding-top": "100px",
      "left": "0",
      "top": "-40px",
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
      "top": "-95px",
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
      "top": "-40px",
      "width": "100%",
      "height": "100%",
      "overflow": "auto",
      "background-color": "rgb(0,0,0)",
      "background-color": "rgba(0,0,0,0.4)"
    });
  });

  /* Dave Alpert */
  $("#speakers_flex_4").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_4").html("<p>Dave Alpert</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
  }, function(){
    $("#speakers_flex_hover_4").html('<img src="../img/dave_alpert.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
  });
  /* Modal State */
  $("#speakers_flex_4").click(function(){
    $("#speakers_modal_content_4").css({
      "display": "block",/* Shows element */
      "position": "fixed",/* Stay in place */
      "z-index": "1",
      "padding-top": "100px",
      "left": "0",
      "top": "-100px",
      "width": "100%",
      "height": "100%",
      "overflow": "auto",
      "background-color": "rgb(0,0,0)",
      "background-color": "rgba(0,0,0,0.4)"
    });
  });

  /* EG Nadhan */
  $("#speakers_flex_5").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_5").html("<p>EG Nadhan</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "50px", "padding": "40px 0"});
  }, function(){
    $("#speakers_flex_hover_5").html('<img src="../img/eg_nadhan.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "30px 0"});
  });
  /* Modal State */
  $("#speakers_flex_5").click(function(){
    $("#speakers_modal_content_5").css({
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

  /* Elishia Dvorak */
  $("#speakers_flex_6").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_6").html("<p>Elishia Dvorak</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "50px", "padding": "50px 0"});
  }, function(){
    $("#speakers_flex_hover_6").html('<img src="../img/elishia_dvorak.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_6").click(function(){
    $("#speakers_modal_content_6").css({
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

  /* Harry Roberts */
  $("#speakers_flex_7").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_7").html("<p>Harry Roberts</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "55px", "padding": "35px 0"});
  }, function(){
    $("#speakers_flex_hover_7").html('<img src="../img/harry_roberts.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_7").click(function(){
    $("#speakers_modal_content_7").css({
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

  /* Jeff Beck */
  $("#speakers_flex_8").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_8").html("<p>Jeff Beck</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
  }, function(){
    $("#speakers_flex_hover_8").html('<img src="../img/jeff_beck.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
  });
  /* Modal State */
  $("#speakers_flex_8").click(function(){
    $("#speakers_modal_content_8").css({
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

  /* Leemay Nassery */
  $("#speakers_flex_9").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_9").html("<p>Leemay Nassery</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "50px", "padding": "45px 0"});
  }, function(){
    $("#speakers_flex_hover_9").html('<img src="../img/leemay_nassery.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_9").click(function(){
    $("#speakers_modal_content_9").css({
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

  /* Marie Leaf */
  $("#speakers_flex_10").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_10").html("<p>Marie Leaf</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"padding": "35px 0"});
  }, function(){
    $("#speakers_flex_hover_10").html('<img src="../img/marie_leaf.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_10").click(function(){
    $("#speakers_modal_content_10").css({
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

  /* Matt Layman */
  $("#speakers_flex_11").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_11").html("<p>Matt Layman</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "55px", "padding": "35px 0"});
  }, function(){
    $("#speakers_flex_hover_11").html('<img src="../img/matt_layman.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_11").click(function(){
    $("#speakers_modal_content_11").css({
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

  /* Melanie Sumner */
  $("#speakers_flex_12").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_12").html("<p>Melanie Sumner</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "55px", "padding": "45px 0"});
  }, function(){
    $("#speakers_flex_hover_12").html('<img src="../img/melanie_sumner.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_12").click(function(){
    $("#speakers_modal_content_12").css({
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

  /* Michael Albers */
  $("#speakers_flex_13").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_13").html("<p>Michael Albers</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "52px", "padding": "54px 0"});
  }, function(){
    $("#speakers_flex_hover_13").html('<img src="../img/michael_albers.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_13").click(function(){
    $("#speakers_modal_content_13").css({
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

  /* Phil Nash */
  $("#speakers_flex_14").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_14").html("<p>Phil Nash</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
  }, function(){
    $("#speakers_flex_hover_14").html('<img src="../img/phil_nash.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
  });
  /* Modal State */
  $("#speakers_flex_14").click(function(){
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

  /* Rebecca Fitzbugh */
  $("#speakers_flex_15").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_15").html("<p>Rebecca Fitzbugh</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "50px", "padding": "50px 0"});
  }, function(){
    $("#speakers_flex_hover_15").html('<img src="../img/rebecca_fitzbugh.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_15").click(function(){
    $("#speakers_modal_content_15").css({
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

  /* Renaud Visage */
  $("#speakers_flex_16").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_16").html("<p>Renaud Visage</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "55px", "padding": "45px 0"});
  }, function(){
    $("#speakers_flex_hover_16").html('<img src="../img/renaud_visage.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_16").click(function(){
    $("#speakers_modal_content_16").css({
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

  /* Rohit Basu */
  $("#speakers_flex_17").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_17").html("<p>Rohit Basu</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "60px", "padding": "35px 0"});
  }, function(){
    $("#speakers_flex_hover_17").html('<img src="../img/rohit_basu.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_17").click(function(){
    $("#speakers_modal_content_17").css({
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

  /* Romain Guy */
  $("#speakers_flex_18").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_18").html("<p>Romain Guy</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "55px", "padding": "45px 0"});
  }, function(){
    $("#speakers_flex_hover_18").html('<img src="../img/romain_guy.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_18").click(function(){
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

  /* Ryan King */
  $("#speakers_flex_19").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_19").html("<p>Ryan King</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
  }, function(){
    $("#speakers_flex_hover_19").html('<img src="../img/ryan_king.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
  });
  /* Modal State */
  $("#speakers_flex_19").click(function(){
    $("#speakers_modal_content_19").css({
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

  /* Sarah Drasner */
  $("#speakers_flex_20").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_20").html("<p>Sarah Drasner</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "55px", "padding": "40px 0"});
  }, function(){
    $("#speakers_flex_hover_20").html('<img src="../img/sarah_drasner.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_20").click(function(){
    $("#speakers_modal_content_20").css({
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

  /* Sarah Squire */
  $("#speakers_flex_21").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_21").html("<p>Sarah Squire</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "55px", "padding": "40px 0"});
  }, function(){
    $("#speakers_flex_hover_21").html('<img src="../img/sarah_squire.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_21").click(function(){
    $("#speakers_modal_content_21").css({
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

  /* Tricia Katz */
  $("#speakers_flex_22").hover(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#speakers_flex_hover_22").html("<p>Tricia Katz</p>").css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "#e83d4d",
    });
    $(".speakers_flex_hover p").css({"font-size": "55px", "padding": "40px 0"});
  }, function(){
    $("#speakers_flex_hover_22").html('<img src="../img/tricia_katz.jpg" class="speakers_flex_img" id="speakers_flex_img_1" alt="DevCon Logo">').css({
      "width": "247px",
      "height": "247px",
      "border-radius": "50%",
      "background-color": "transparent",
    });
    $(".speakers_flex_hover p").css({"font-size": "64px", "padding": "25px 0"});
  });
  /* Modal State */
  $("#speakers_flex_22").click(function(){
    $("#speakers_modal_content_22").css({
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
