function replaceValues(v) {
	return v.replace(/OT/gi, "").replace(/SO/gi, "");
}

function replaceBySelector(sel) {
	var nodeList = document.querySelectorAll(sel);
	for (var i = 0, length = nodeList.length; i < length; i++) {     		
		nodeList[i].innerHTML = replaceValues(nodeList[i].innerHTML);
	}
}

// in addition to showing OT/SO, winner has different color, this removes class highlighting it
function removeWinner() {
	var nodeList = document.querySelectorAll(".winner");	
	for (var i = 0, length = nodeList.length; i < length; i++) {     		
		nodeList[i].className = nodeList[i].className.replace(/winner/gi, "");
	}
}

// when some games are still live, nodes are modified after insertion
document.addEventListener("DOMSubtreeModified", function(event) {  
	var elem = event.target;
	if (elem.className == 'bsc final') {
		replaceBySelector(".offvalue");
		removeWinner();
	}
	
	if (elem && elem.nodeType == 3) {		
		var value = elem.nodeValue;				
		if (value && (value.indexOf("OT") > -1 || value.indexOf("SO") > -1)) {
			var parent = elem.parentElement;
			if (parent) {
				parent.innerHTML = replaceValues(value);
				removeWinner();
			}
		}
	}
});

// event handler to remove OT/SO markups on initial DOM insertion
document.addEventListener("DOMNodeInserted", function(event) {
	var elem = event.target;
	if (elem.tagName == 'DIV' && elem.className == 'gameItem') {				
		replaceBySelector(".offvalue");
	}               
});
