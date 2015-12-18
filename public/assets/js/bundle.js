var main= function(){
	var mySquare = '<div class="square"></div>';
	var generateGrid = function(l){
		var totalWidth=400;
		var squareWidth=(totalWidth/l)+'px';
		l = l*l
		$mosaic=$('.my-mosaic');
		for(var i=0;i<l;i++){
			$mosaic.append(mySquare);
		}
		$('.square').css('width',squareWidth);
		$('.square').css('height', squareWidth);
	}
	var gridLength = 10;
	
	
	generateGrid(gridLength);
	
};

$(document).ready(main);
