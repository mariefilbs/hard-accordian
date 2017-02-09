//name the important variables
var currentPicture = 0;
var items = $('.container div');
var numberOfSlides = items.length;

//function to display cirrect image and HIDE the others
function slidePicture() {
  var item = $('.container div').eq(currentPicture);
  items.hide();
  item.css('display','inline-block');
}

$('.right-button').click(function() {
  currentPicture += 1;
  if (currentPicture > numberOfSlides - 1) {
//have to set the current picture back to zero or it will stop rotating pictures after one loop through
    currentPicture = 0;
  }
  slidePicture();
});

$('.left-button').click(function() {
  currentPicture -= 1;
  if (currentPicture < 0) {
    currentPicture = numberOfSlides - 1;
  }
  slidePicture();
});
