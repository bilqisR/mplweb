var $ = jQuery.noConflict();

$(document).ready(function($) {

	/*-------------------------------------------------*/
	/* =  Mobile Menu
	/*-------------------------------------------------*/
	// Create the dropdown base
    $("<select />").appendTo("#logisco-main-menu");
    
    // Create default option "Go to..."
    $("<option />", {
		"selected": "selected",
		"value"   : "",
		"text"    : "Go to..."
    }).appendTo("#logisco-main-menu select");
    
    // Populate dropdown with menu items
    $(".sf-menu a").each(function() {
		var el = $(this);
		$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo("#logisco-main-menu select");
    });

    $("#logisco-main-menu select").change(function() {
		window.location = $(this).find("option:selected").val();
    });
	

    
   
});
