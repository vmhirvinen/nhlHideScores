document.getElementById("hsbGames").addEventListener("DOMSubtreeModified", function(evt) {  
	var elem = evt.target;	
	if (elem && elem.nodeType == 3) {		
		var value = elem.nodeValue;
		if (value && (value.indexOf("OT") > -1 || value.indexOf("SO") > -1)) {
			var parent = elem.parentElement;
			if (parent) {
				parent.innerHTML = value.replace(/OT/gi, "").replace(/SO/gi, "");
			}
		}
	}
});
