
$(function(){

    var text1 = $("#headerForMain");
    text1.fadeIn(2750);
    
    var text2 = $("#textForMain");
    text2.fadeIn(4550);
    
    var text3 = $("#subHeadingContact");
    text3.fadeIn(2750);
    
    var text4 = $("#subHeadingContact2");
    text4.fadeIn(4550);

    console.log($(window).width())
    
    function mouseHoverOverProject(projectId){
      if($(window).width() > 600){
      
    $(projectId).mouseenter(function() {
       var $projectDiv= $(projectId);
       $projectDiv.css("background-image", "none");
       $projectDiv.css("background-color", "teal");
       $projectDiv.children().removeClass("notVisible");
       $projectDiv.children().addClass("visible");
       })
      
     
      }
    }
    function mouseLeavingProject(projectId, backgroundImage){
      if($(window).width() > 600){
        console.log($(window).width())
      $(projectId).mouseleave(function() {
        var $projectDiv= $(projectId);
        $projectDiv.css("background-image", backgroundImage);
        $projectDiv.css("background-color", "teal");
        $projectDiv.children().removeClass("visible");
        $projectDiv.children().addClass("notVisible");
      })
    }
  }


      var text5 = $(".barMeterQuarter");
      text5.animate({width: "+=25%"}, 3000);
      
      var text6 = $(".barMeterHalf");
      text6.animate({width: "+=50%"}, 3000);

      var text7 = $(".barMeterFull");
      text7.animate({width: "+=95%"},3000);


      var text8 = $("#omOssHeading");
      text8.animate({
        "marginLeft": "+=20%"}, 1000);

      var text9 = $("#headertextForPerson");
      text9.animate({
        "marginLeft": "+=13%"}, 1000);  
        
      var text10 = $(".centerOmOss");
      text10.animate({
          "marginTop": "+=-15%"}, 1000);  
     
      mouseLeavingProject("#sortingVisualizer", "url(sortingvisualizer.PNG)")
      mouseHoverOverProject("#sortingVisualizer")
      mouseLeavingProject("#interActiveDesign", "url(cykelApp.jpg")
      mouseHoverOverProject("#interActiveDesign")
      
      mouseLeavingProject("#sparKoll", "url(sparKollen.PNG)")
      
      mouseHoverOverProject("#sparKoll")
      
      mouseLeavingProject("#dataVisualizer", "url(dataVi.png)")
      
      mouseHoverOverProject("#dataVisualizer")
      
      mouseLeavingProject("#collision", "url(88412527-06457000-cdda-11ea-9f01-a69bc80b391c.png)")
      
      mouseHoverOverProject("#collision")
      
      mouseLeavingProject("#inDev", "url(inDevImg.jpg)")
      
      mouseHoverOverProject("#inDev", "#sortingVisualizer")
     



    })

      