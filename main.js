var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");
var clearb = document.getElementById("clear");
var toggleb = document.getElementById("toggle");

var circle = true;
var shapeDrawn = false;

var oldX = 0;
var oldY = 0;

var tog = function() {
    if (circle) {
        circle = false;
    } else {
        circle = true;
    }
};


toggleb.addEventListener('click', tog, true);

var draw = function(e) {
    var x = e.offsetX;
    var y = e.offsetY;
	ctx.beginPath();
	
	if (shapeDrawn) {
		ctx.lineTo(oldX, oldY);
		ctx.stroke();
		var dim = 20;
      	if (circle) {
			ctx.arc(x - 5, y - 5, dim, 0, 2 * Math.PI);
           	ctx.stokeStyle = "#800000";
           	ctx.stroke();
   		   	ctx.fillStyle = "#800000";
           	ctx.fill();
      	 } else {
			ctx.fillStyle = "#808000";
			ctx.fillRect(x - dim, y - dim, dim*2, dim*2);
			ctx.moveTo(x,y);
			ctx.lineTo(oldX, oldY);
			ctx.stroke();
      	 }
	}
	else{
		var dim = 20;
		if (circle) {
			ctx.arc(x - 5, y - 5, dim, 0, 2 * Math.PI);
        	ctx.stokeStyle = "#800000";
       	 	ctx.stroke();
			ctx.fillStyle = "#800000";
       	 	ctx.fill();
			shapeDrawn = true;
		} else {
        	ctx.fillStyle = "#808000";
        	ctx.fillRect(x - dim, y - dim, dim*2, dim*2);
			shapeDrawn = true;
   	 	}
	}
	
	oldX = x;
	oldY = y;
};


canv.addEventListener('click', draw, true);

var clear = function() {
    ctx.clearRect(0, 0, 650, 650);
};

clearb.addEventListener('click', clear, true);