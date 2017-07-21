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

		function User() {
			this.name = document.getElementById('name').value;
			this.surname = document.getElementById('surname').value;
			this.country = document.querySelectorAll("option[name='country']:checked").value;
			this.subscribe = document.querySelectorAll("input[name='subsctibe']").value;
			this.education = document.querySelectorAll("input[name='education']:checked").value;
			this.about = document.getElementById('about').value;
		}

		function checkForm(id){
			
		}
		document.getElementById('submit').addEventListener('click',checkForm('user'),false);
	}
	

}());

