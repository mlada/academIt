(function() {
	'use strict';

	document.addEventListener("DOMContentLoaded", function(event) {
		init();
	});

	function init(){
		function checkInput(e){
			var theTarget = e.target
			if (theTarget.value.length < 4){
				theTarget.className = " error";
			}
			else{
				theTarget.className = " ";
			}
		}
		document.getElementById('name').addEventListener('keyup',checkInput,false);
		document.getElementById('surname').addEventListener('keyup',checkInput,false);
		document.getElementById('about').addEventListener('keyup',checkInput,false);
	}

}());

