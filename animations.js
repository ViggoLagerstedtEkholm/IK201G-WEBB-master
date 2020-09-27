
 



$(function(){
  var size = $(window).width();
  $(window).on('resize', function(){
    size = $(window).width();
  
  console.log("Storlek" + size);
  });

    var text1 = $("#headerForMain");
    text1.fadeIn(2750);
    
    var text2 = $("#textForMain");
    text2.fadeIn(4550);
    
    var text3 = $("#subHeadingContact");
    text3.fadeIn(2750);
    
    var text4 = $("#subHeadingContact2");
    text4.fadeIn(4550);

    
    function mouseHoverOverProject(projectId){
      
      $(projectId).mouseenter(function() {
        if(size > 600){
       var $projectDiv= $(projectId);
       $projectDiv.css("background-image", "none");
       $projectDiv.css("background-color", "teal");
       $projectDiv.children().removeClass("notVisible");
       $projectDiv.children().addClass("visible");
    }

      
     
  });
    }
   
    function mouseLeavingProject(projectId, backgroundImage){
      
      
      $(projectId).mouseleave(function() {
        if(size > 600){
         console.log("MouseLeave"); 
        var $projectDiv= $(projectId);
        $projectDiv.css("background-image", backgroundImage);
        $projectDiv.css("background-color", "teal");
        $projectDiv.children().removeClass("visible");
        $projectDiv.children().addClass("notVisible");
  
      }
        
    });
    }

    
    function focus(projectId){
      
      $(projectId).mouseover(function() {
        if(size <= 600){
       $(projectId).children(".layerForProjects").css({height: "100%" ,  top: "0%"});

        
        }
      });
    
        
      }

      function focusOut(projectId){
        
        $(projectId).mouseleave(function() {
          if(size <= 600){
           $(projectId).children(".layerForProjects").css({height: "30%" ,  top: "70%"});
        }
      }); 
        
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
     
        focus("#sortingVisualizer");

        focusOut("#sortingVisualizer");

        focus("#interActiveDesign");

        focusOut("#interActiveDesign");

        focus("#sparKoll");

        focusOut("#sparKoll");

        focus("#dataVisualizer");

        focusOut("#dataVisualizer");

  

       
    })

      