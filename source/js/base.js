var main= function(){
	var mySquare = '<div class="square"></div>';
	// generates a grid with l squares on each side
	var generateGrid = function(totalWidth, l){
		var squareWidth=(totalWidth/l)+'px';
		// squaring side size
		l = l*l
		$('.my-mosaic')[0].innerHTML="";
		$mosaic=$('.my-mosaic');
		for(var i=0;i<l;i++){
			$mosaic.append(mySquare);
		}
		$('.square').css('width',squareWidth);
		$('.square').css('height', squareWidth);
	}
	
	// paints the square white
	var paintGridWhite = function(){
		$(this).css('background-color', '#fff');
	};
	
	// paints the square random
	var paintGridRand = function(){
		//randon number between 0 and 255
		$(this).css('background-color', 'rgb('+Math.floor((Math.random() * 256))+', '+Math.floor((Math.random() * 256))+', '+Math.floor((Math.random() * 256))+')');
	};
	
	var paintGrid = paintGridRand;
	
	// setting default grid length 
	var gridLength = 10;
	
	$('#square-range').change(function(){
		$('.square-number').text(this.value);
	});
	
	$('.new-mosaic').click(function(){
		generateGrid(parseInt($('.my-mosaic').css('width')), parseInt($('#square-range')[0].value));
	$('.square').mouseover(paintGrid);	
	});
	
	generateGrid(parseInt($('.my-mosaic').css('width')), gridLength);
	
	$('.square').mouseover(paintGrid);	
	// end of main function
};

$(document).ready(main);