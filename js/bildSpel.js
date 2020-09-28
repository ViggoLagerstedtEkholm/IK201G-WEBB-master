var img = $('#imgSlider');
var imgBox = $('.imageSliderBox');
var nxtImg = $("#nextImg");
var prvImg = $("#prevImg");
var pausBtn = $("#pausBtn");
var $pauseBar = $("#imgSliderControlPnl");
var toggle = 0;
$(function () {
  start()
  createImage()
})

var images = [
  'img/BILD1.jpg',
  'img/BILD2.jpg'
];

var index = 0;

function createImage() {
  img.attr('src', images[index]);
  index++;
  if (index === images.length) {
    index = 0;
  }
}

function createReverseImage() {
  img.attr('src', images[index]);
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
}



var interval = null;

function start() {
  $(document).ready(function () {
    interval = setInterval(createImage, 8000);
  });
}

function stop() {
  clearInterval(interval); // stop the interval
}

var pausa = false;
var hover = false;

$(document).ready(function () {
  img.hover(function () {
    hover = true;

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
      stop();
      pausa = true;
      imgBox.css({ "filter": "grayscale(100%)" });
      pausBtn.show();
      pausBtn.attr("src", "img/playButton.png")
    }
    else if (checkToggleState(toggle) === true) {
      /* Resume. */
      console.log("resume");
      pausa = false;
      imgBox.css({ "filter": "grayscale(0%)" });
      pausBtn.hide();
    }

  })


  pausBtn.click(function () {

    toggle++;
    /* Kolla ifall talet är udda eller jämt, detta kan vara tex 1, dvs udda (pausa), 2 innebär då (spela) */
    if (checkToggleState(toggle) === false) {
      /* Pause. */
      stop();
      pausa = true;
      imgBox.css({ "filter": "grayscale(100%)" });
      pausBtn.show();
      pausBtn.attr("src", "img/playButton.png")
    }
    else if (checkToggleState(toggle) === true) {
      /* Resume. */
      console.log("resume");
      pausa = false;
      imgBox.css({ "filter": "grayscale(0%)" });
      pausBtn.hide();
      
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

