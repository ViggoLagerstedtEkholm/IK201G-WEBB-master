
$(function(){
    var text1 = $("#headerForMain");
    text1.fadeIn(2750);
    
    var text2 = $("#textForMain");
    text2.fadeIn(4550);
    
    var text3 = $("#subHeadingContact");
    text3.fadeIn(2750);
    
    var text4 = $("#subHeadingContact2");
    text4.fadeIn(4550);

    
    var test = $("#sortingVisualizer");

    
    test.mouseenter(function () {
        
        test.removeAttr("id")
        $(".headingForIndividualProject").show();
        $(".descriptionForIndividualProject").show();
        $(".subHeadingForIndividualProject").show();
        
        }
    )


    test.mouseleave(function() {
        test.attr("id", "sortingVisualizer")
        $(".headingForIndividualProject").hide();
        $(".descriptionForIndividualProject").hide();
        $(".subHeadingForIndividualProject").hide();
      });


      var text5 = $(".barMeterQuarter");
      text5.animate({width: "+=25%"}, 3000);
      
      var text6 = $(".barMeterHalf");
      text6.animate({width: "+=50%"}, 3000);

      var text7 = $(".barMeterFull");
      text7.animate({width: "+=95%"},3000);



    })