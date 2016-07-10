
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
	makeDivs( $("input:text").val() );
	//makeDivs( 32 );
	$(".cell").mouseenter(function() {
    	$(this).css("background-color", "#000");
    });
};

var getRandomColor = function() {
	var red = Math.floor(Math.random() * 255);
	var green = Math.floor(Math.random() * 255);
	var blue = Math.floor(Math.random() * 255);
	return "rgb(" + red + "," + green + "," + blue + ")";
};

var clickRandom = function() {
	makeDivs( $("input:text").val() );
	var color;
	$(".cell").mouseenter(function() {
		color = getRandomColor();
    	$(this).css("background-color", color);
    });
};

var clickTrails = function() {
	makeDivs( $("input:text").val() );

	$(".cell").mouseenter(function() {
    	$(this).css("background-color", "#000");
    	// animate black to #ccc
    });
};


$(document).ready(function() {

	//makeDivs( 32 );

    //$("#container").css("background-color", "#666");

    //var length = prompt("Please enter a length for the sides.");

    //makeDivs(length);

    /*
    $(".cell").mouseenter(function() {
    	$(this).css("background-color", "#000");
    });
	*/
});