var leftNavIsOpen = false;
var rightNavIsOpen = false;

// Functions
function openLeftNav() {
  $("#leftNav").css("width", "20%");
  $("#main").css("marginLeft", "20%");
  $("#leftTab").css("left", "20%");
  $("#navbar").css("marginLeft", "20%");
  leftNavIsOpen=!leftNavIsOpen;
}

function closeLeftNav() {
  $("#leftNav").css("width", "0");
  $("#main").css("marginLeft", "0");
  $("#leftTab").css("left", "0");
  $("#navbar").css("marginLeft", "0");
  leftNavIsOpen=!leftNavIsOpen;
}

function openRightNav() {
  $("#rightNav").css("width", "20%");
  $("#rightTab").css("right", "20%");
  rightNavIsOpen=!rightNavIsOpen;
}

function closeRightNav() {
  $("#rightNav").css("width", "0");
  $("#rightTab").css("right", "0");
  rightNavIsOpen=!rightNavIsOpen;
}

// Buttons
$("#rightTab").on("click", function() {
  if (rightNavIsOpen) {
    closeRightNav();
  } else {
    openRightNav();
  }
});

$("#leftTab").on("click", function() {
	if (leftNavIsOpen) {
		closeLeftNav();
	} else {
		openLeftNav();
	}
});

