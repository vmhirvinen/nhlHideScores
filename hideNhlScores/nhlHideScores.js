document.addEventListener("DOMNodeInserted", function(event) {
	var elem = event.target;

	 if (elem.tagName == 'DIV' && elem.className == 'gameItem') {
		console.log("The node '" + elem.tagName + " (" + elem.className + ")' has been added to an document.";

		var nodeList = document.querySelectorAll(".offvalue");
		  for (var i = 0, length = nodeList.length; i < length; i++) {
     		var v = nodeList[i].innerHTML;
     		nodeList[i].innerHTML = v.replace(/OT/gi, "").replace(/SO/gi, "");
		  }

	 }
     
            

});