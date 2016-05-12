'use strict'

$(function() {

	//Call API From http://quotesondesign.com/
	var url = "http://quotesondesign.com/api/3.0/api-3.0.json";
	var quote_chrome = $("#quote");

	$.get(url, function(data){

		var new_quote = data;

		quote_chrome.text(new_quote.quote);

	});

});