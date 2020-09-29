$(function () {
  function mouseHoverOverProject(projectId) {
    $(projectId).mouseenter(function () {
      var $projectDiv = $(projectId);
      $projectDiv.css("background-image", "none");
      $projectDiv.css("background-color", "teal");
      $projectDiv.children().removeClass("notVisible");
      $projectDiv.children().addClass("visible");
    });
  }

  function mouseLeavingProject(projectId, backgroundImage) {
    $(projectId).mouseleave(function () {
      console.log("MouseLeave");
      var $projectDiv = $(projectId);
      $projectDiv.css("background-image", backgroundImage);
      $projectDiv.css("background-color", "teal");
      $projectDiv.children().removeClass("visible");
      $projectDiv.children().addClass("notVisible");
    });
  }

  var $animatedHeaderForMain = $("#headerForMain");
  $animatedHeaderForMain.fadeIn(2750);

  var $animatedTextForMain = $("#textForMain");
  $animatedTextForMain.fadeIn(4550);

  var $animatedBarMeterQuarter = $(".barMeterQuarter");
  $animatedBarMeterQuarter.animate({ width: "+=25%" }, 3000);

  var $animatedBarMeterHalf = $(".barMeterHalf");
  $animatedBarMeterHalf.animate({ width: "+=50%" }, 3000);

  var $animatedBarMeterFull = $(".barMeterFull");
  $animatedBarMeterFull.animate({ width: "+=95%" }, 3000);

  var $animatedOmOssHeading = $("#omOssHeading");
  $animatedOmOssHeading.animate({
    "marginLeft": "+=15%"
  }, 1000);

  var $animatedHeaderTextForPerson = $("#headertextForPerson");
  $animatedHeaderTextForPerson.animate({
    "marginLeft": "+=13%"
  }, 1000);

  var $headerTextForPortfolio = $("#headertextForPortfolio");
  $headerTextForPortfolio.animate({
    "marginLeft": "+=14%"
  }, 1000);

  var $mainOmOssContact = $("#mainOmOssContact");
  $mainOmOssContact.animate({
    "marginTop": "+=-4%"
  }, 1000);

  var $portfolioMain = $("#portfolioMain");
  $portfolioMain.animate({
    "marginTop": "+=-4%"
  }, 1000);

  mouseLeavingProject("#sortingVisualizer", "url(img/projects.jpg)");

  mouseHoverOverProject("#sortingVisualizer");

  mouseLeavingProject("#interActiveDesign", "url(img/projects.jpg)");

  mouseHoverOverProject("#interActiveDesign");

  mouseLeavingProject("#sparKoll", "url(img/projects.jpg)");

  mouseHoverOverProject("#sparKoll");

  mouseLeavingProject("#dataVisualizer", "url(img/projects.jpg)");

  mouseHoverOverProject("#dataVisualizer");

  mouseLeavingProject("#collision", "url(img/projects.jpg)");

  mouseHoverOverProject("#collision");

  mouseLeavingProject("#inDev", "url(img/inDevImg.jpg)");

  mouseHoverOverProject("#inDev");
})