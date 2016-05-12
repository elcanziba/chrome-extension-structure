/*$(function() {

	//Call API From https://theysaidso.com/api/
	var url = "https://santapanminda.com/api.php?format=json";
	var quote = $("#quote");

	$.get(url, function(data){

		var new_quote = JSON.parse(data);

		quote.text(new_quote.posts[0].post.content);

	});

});*/

$(function() {

	//Call API From https://theysaidso.com/api/
	var url = "http://quotesondesign.com/api/3.0/api-3.0.json";
	var quote_chrome = $("#quote");

	$.get(url, function(data){

		var new_quote = data;

		quote_chrome.text(new_quote.quote);

	});

});