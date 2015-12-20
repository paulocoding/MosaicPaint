var getRGB = function(rgbStr){
	var rgb = rgbStr.replace(/[^\d,]/g, '').split(',');
	rgb[0] = parseInt(rgb[0]); 
	rgb[1] = parseInt(rgb[1]); 
	rgb[2] = parseInt(rgb[2]);
	return rgb; 
}