$(document).ready(function(){
	img_url = chrome.extension.getURL("img/note.png");
	img_url1 = chrome.extension.getURL("img/note_color.png");

	chrome.storage.sync.get(null, function(items) {
    	var allKeys = Object.keys(items);

   		$('h3.r').find('a').each(function() {

   			if(jQuery.inArray(this.href, allKeys) !== -1){
   				$(this).parents("h3.r").prepend("<img class='note_icon' src=" + img_url1 + " width=16 height=16> &nbsp");
    		} else {
    			$(this).parents("h3.r").prepend("<img class='note_icon' src=" + img_url + " width=16 height=16> &nbsp");
    		}
    	});

    	
    	$("img.note_icon").click(function(){
			link = $(this).next()[0].href

			chrome.storage.sync.get(link, function(obj) {
				if (jQuery.isEmptyObject(obj)){
					note = prompt("Annotation:");
					dict = {}
					dict[link] = note;
					chrome.storage.sync.set(dict)
				} else {
					alert("Your Annotation:\n" + obj[link])		
				}
			});
		});

	});

});