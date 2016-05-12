'use strict'

$(function() {

	//Call API From http://quotesondesign.com/
	var url = "http://quotesondesign.com/api/3.0/api-3.0.json";
	var quote_chrome = $("#quote");
	var quote_author = $("#author");

	$.get(url, function(data){

		var new_quote = data;

		quote_chrome.text(new_quote.quote);
		quote_author.text(new_quote.author);

	});

});