$(document).ready(function(){
	img_url = chrome.extension.getURL("img/note.png");
	
	$("h3.r").prepend("<img id='note_icon' src=" + img_url + " width=16 height=16>");
	$("#note_icon").click(function(){
		note = prompt("Annotation:");
		alert("Your annotation:\n" + note);
	});
});