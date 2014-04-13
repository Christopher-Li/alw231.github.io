$(function(){

	var getColor = function()
	{
		var items = ['#CF8897','#D4BA39','#7D64BD','#DE5F77','#55B59B','#C4964B','#04D476','#4E4BA6','#47C1CC','#FF7052','#2D8A63','#A84A97','#3A6FBD'];
		return(items[Math.floor(Math.random()*items.length)]);
	}
	
	var asignColor = function(tr){
		var color = getColor();
		console.log(color);
		$(tr).css("background-color", color);
	}

	$('tr').each(function(index, element){
  		asignColor(element);
	})
})