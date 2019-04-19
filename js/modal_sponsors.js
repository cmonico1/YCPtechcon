$(document).ready(function(){
  /*Hover States*/
  /* Tech Council */
  $("#sponsors_flex_1").mouseenter(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_tech_council").html('<img src="../../img/sponsor_logos/pa_tech_council_2_hover.png" id="tech_council" width="374px" height="auto" alt="Technology Council of Central Pennsylvania"></img>');
  });
  $("#sponsors_flex_1").mouseleave(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_tech_council").html('<img src="../../img/sponsor_logos/pa_tech_council_2.png" id="tech_council" width="374px" height="auto" alt="Technology Council of Central Pennsylvania"></img>');
  });
    /* Modal State */
    $("#sponsor_tech_council").click(function(){
      $(".speakers_modal_content_1").css({"display": "block"});
    });

  /* samsung */
  $("#sponsor_samsung").mouseenter(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_samsung").html('<img src="../../img/sponsor_logos/Samsung_hover.png" id="samsung" width="316px" height="100%" alt="Samsung"></img>');
  });
  $("#sponsor_samsung").mouseleave(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_samsung").html('<img src="../../img/sponsor_logos/Samsung.png" id="samsung" width="316px" height="100%" alt="Samsung"></img>');
  });
    /* Modal State */
    $("#sponsor_samsung").click(function(){
      $("#speakers_modal_content_2").css({"display": "block"});
    });

  /* Deloitte */
  $("#sponsor_deloitte").mouseenter(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_deloitte").html('<img src="../../img/sponsor_logos/deloitte_hover.png" id="deloitte" width="315px" height="100%" alt="Deloitte"></img>');
  });
  $("#sponsor_deloitte").mouseleave(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_deloitte").html('<img src="../../img/sponsor_logos/deloitte.png" id="deloitte" width="315px" height="100%" alt="Deloitte"></img>');
  });
    /* Modal State */
    $("#sponsor_deloitte").click(function(){
      $("#speakers_modal_content_3").css({"display": "block"});
    });

  /* Harrisburg */
  $("#sponsor_harrisburg").mouseenter(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_harrisburg").html('<img src="../../img/sponsor_logos/harrisburg_uni_hover.png" id="harrisburg" width="318px" height="100%" alt="Harrisburg Univerity"></img>');
  });
  $("#sponsor_harrisburg").mouseleave(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_harrisburg").html('<img src="../../img/sponsor_logos/harrisburg_uni.png" id="harrisburg" width="318px" height="100%" alt="Harrisburg Univerity"></img>');
  });
    /* Modal State */
    $("#sponsor_harrisburg").click(function(){
      $("#speakers_modal_content_4").css({"display": "block"});
    });

  /* Hosting */
  $("#sponsor_roasted").mouseenter(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_roasted").html('<img src="../../img/sponsor_logos/fresh_roasted_hosting_hover.png" id="roasted" width="131px" height="100%" alt="Fresh Roasted Hosting"></img>');
  });
  $("#sponsor_roasted").mouseleave(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_roasted").html('<img src="../../img/sponsor_logos/fresh_roasted_hosting.png" id="roasted" width="131px" height="100%" alt="Fresh Roasted Hosting"></img>');
  });
    /* Modal State */
    $("#sponsor_roasted").click(function(){
      $("#speakers_modal_content_5").css({"display": "block"});
    });

  /* Phoenix */
  $("#sponsor_phoenix").mouseenter(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_phoenix").html('<img src="../../img/sponsor_logos/phoenix_contact_hover.png" id="phoenix" width="257px" height="100%" alt="Phoenix Connect"></img>');
  });
  $("#sponsor_phoenix").mouseleave(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_phoenix").html('<img src="../../img/sponsor_logos/phoenix_contact.png" id="phoenix" width="257px" height="100%" alt="Phoenix Connect"></img>');
  });
    /* Modal State */
    $("#sponsor_phoenix").click(function(){
      $("#speakers_modal_content_6").css({"display": "block"});
    });

  /* PWC */
  $("#sponsor_pwc").mouseenter(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_pwc").html('<img src="../../img/sponsor_logos/pwc_hover.png" id="pwc" width="170px" height="100%" alt="PWC"></img>');
  });
  $("#sponsor_pwc").mouseleave(function(){ /*On hover shows hover state, and then returns to original html/css */
    $("#sponsor_pwc").html('<img src="../../img/sponsor_logos/pwc.png" id="pwc" width="170px" height="100%" alt="PWC"></img>');
  });
    /* Modal State */
    $("#sponsor_pwc").click(function(){
      $("#speakers_modal_content_7").css({"display": "block"});
    });

/*Close Modals*/
  $(".sponsors_modal").click(function(){ /* Closes Modal by clicking off modal */
    $(".sponsor_modal").css({"display": "none"});
  });

  $(".close_modal").click(function(){ /* Closes Modal By X */
    $(".sponsors_modal").css({"display": "none"});
  });
});
