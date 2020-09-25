var img = $('#imgSlider');
var imgBox = $('.imageSliderBox');
var nxtImg = $("#nextImg");
var prvImg = $("#prevImg");
var pausBtn = $("#pausBtn");
var toggle = 0;
$(function(){
start() 
createImage()
})

var images = [
  'BILD1.jpg',
  'BILD2.jpg',
  'BILD3.jpg',
  'BILD4.jpg'
];

var index = 0;

function createImage() {
  img.attr('src', images[index]);
  index++;
  console.log("Fired! " + index)
  if (index === images.length) {
    console.log("test")
    index = 0;
  }
}

function createReverseImage() {
  img.attr('src', images[index]);
  index--;
  console.log("Fired! " + index)
  if (index < 0) {
    console.log("test")
    index = images.length-1;
    console.log("TEst " + index)
  }
}



var interval = null;

function start() {
  $(document).ready(function () {
    interval = setInterval(createImage, 25000);
  });
}

function stop() {
  clearInterval(interval); // stop the interval
}

var pausa = false;
var hover = false;

$(document).ready(function () {
  img.hover(function () {
    //Musen är över bilden.
    hover = true;

    /* console.log($('#imgSlider').attr('id')); */

    //Musen är placerad på bilden, stoppa bildvisningen.
    stop();
    imgBox.css({ "filter": "grayscale(66%)" });
  }, function () {
    //Musen är inte över bilden, men kolla ifall man har pausat.
    hover = false;
    if (!pausa && !hover) {
      //Har man inte pausat och man har inte musen över bilden fortsätt bildspel.
      start();
      imgBox.css({ "filter": "grayscale(0%)" });
    }

    
  });

  
 img.click(function () {
    toggle++;
    /* Kolla ifall talet är udda eller jämt, detta kan vara tex 1, dvs udda (pausa), 2 innebär då (spela) */
    if (checkToggleState(toggle) === false) {
      /* Pause. */
      console.log("pause");
      stop();
      pausa = true;
      imgBox.css({ "filter": "grayscale(100%)" });
      pausBtn.attr("src", "playButton.png")
    }
    else if (checkToggleState(toggle) === true) {
      /* Resume. */
      console.log("resume");
      pausa = false;
      imgBox.css({ "filter": "grayscale(0%)" });
      pausBtn.attr("src", "pausButton.png")
    }
  
    

  })


 pausBtn.click(function () {

    toggle++;
    /* Kolla ifall talet är udda eller jämt, detta kan vara tex 1, dvs udda (pausa), 2 innebär då (spela) */
    if (checkToggleState(toggle) === false) {
      /* Pause. */
      console.log("pause");
      stop();
      pausa = true;
      imgBox.css({ "filter": "grayscale(100%)" });
      pausBtn.attr("src", "playButton.png")
    }
    else if (checkToggleState(toggle) === true) {
      /* Resume. */
      console.log("resume");
      pausa = false;
      imgBox.css({ "filter": "grayscale(0%)" });
      pausBtn.attr("src", "pausButton.png")
    }
    
    

  })


  nxtImg.click(function () {
    createImage();
});

prvImg.click(function () {
  createReverseImage();
});

})
var checkToggleState = function (toggleValue) {
  return (toggleValue % 2 === 0) ? true : false;
};

