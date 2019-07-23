var interval = setInterval( function(){
	if( $("li.menu-item-object-custom.menu-item-5234").length ){
		$("li.menu-item-object-custom.menu-item-5234").hide();
		console.log("hidden");
		clearInterval(interval);
	} else{
		console.log("a");
	}
})