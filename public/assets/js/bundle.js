var main= function(){
	var mySquare = '<div class="square"></div>';
	// generates a grid with l squares on each side
	var generateGrid = function(totalWidth, l){
		var squareWidth=(totalWidth/l)+'px';
		l = l*l
		$mosaic=$('.my-mosaic');
		for(var i=0;i<l;i++){
			$mosaic.append(mySquare);
		}
		$('.square').css('width',squareWidth);
		$('.square').css('height', squareWidth);
	}
	
	// paints the square
	var paintGrid = function(){
		$(this).css('background-color', '#ddd');
	};
	
	// setting grid length 
	var gridLength = 10;
	
	generateGrid(parseInt($('.my-mosaic').css('width')), gridLength);
	$('.square').mouseover(paintGrid);
	// end of main function
};

$(document).ready(main);
