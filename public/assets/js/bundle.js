var main= function(){
	var generateGrid = function(l){
		l = l*l
		for(var i=0;i<l;i++){
			$('.my-mosaic').append(mySquare);
		}
	}
	var mySquare = '<div class="square"></div>';
	var gridLength = 10;
	
	
	generateGrid(gridLength);
	
};

$(document).ready(main);
