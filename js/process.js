if( $("li.menu-item-object-custom.menu-item-5234").length ){
	$("li.menu-item-object-custom.menu-item-5234").hide();
	console.log("hidden");
	clearInterval(interval);
}

if( $("div.cartTotalRow").length ){
	console.log($("div.cartTotalRow .cartTotalAmount").text());
	var curHtml = $("div.cartTotalRow .cartTotalAmount").html();
	curHtml += "<span style='position: absolute;top:-5px;'> *</span>";
	$("div.cartTotalRow .cartTotalAmount").html(curHtml);
	var strHtml = '';
	strHtml += '<div class="row cartSummaryRow cartTotalRow">';
		strHtml += '<div class="col-md-8 col-xs-7 text-right"></div>';
		strHtml += '<div class="col-md-4 col-xs-5 text-right" style="font-size: 1.2em !important">* Installation extra</div>';
	strHtml += '</div>';
	$(strHtml).insertAfter($("div.cartTotalRow"));
}
