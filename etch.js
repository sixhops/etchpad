
var makeDivs = function(length) {
	var $myDiv;
	for (var i = 0; i < length; i++) {
		for (var j = 0; j < length; j++) {
			$myDiv = $("<div class='cell'></div>");
			$("#container").append($myDiv);
		}
	}
	$(".cell").css("width", (640 / length));
	$(".cell").css("height", (640 / length));
	$(".cell").css("background-color", "#ccc");
	$(".cell").css("margin", 0);
	$(".cell").css("padding", 0);
	$(".cell").css("float", "left");
};

var clickBlack = function() {
	$(".cell").mouseenter(function() {
    	$(this).css("background-color", "#000");
    });
};

var getRandomColor = function() {
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	return "rgb(" + red + "," + green + "," + blue")";
}

var clickRandom = function() {
	var color;
	$(".cell").mouseenter(function() {
		color = getRandomColor();
    	$(this).css("background-color", color);
    });
};

var clickTrails = function() {
	$(".cell").mouseenter(function() {
    	$(this).css("background-color", "#000");
    });
};


$(document).ready(function() {
	var length = prompt("Please enter a length for the sides.");
	makeDivs(length);
/*
    $("#container").css("background-color", "#ccc");

    var length = prompt("Please enter a length for the sides.");

    makeDivs(length);

    $(".cell").mouseenter(function() {
    	$(this).css("background-color", "#000");
    });

*/

});