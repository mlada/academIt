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

		function createUser() {
			this.name = document.getElementById('name').value;
			this.surname = document.getElementById('surname').value;
			this.country = document.querySelectorAll("select[name='country']");
			this.subscribe = document.querySelectorAll("input[name='subscribe']");
			this.education = document.querySelectorAll("input[name='education']");
			this.about = document.getElementById('about').value;
			console.log(this);
		}
		document.getElementById('submit').addEventListener('click',
			function(e){
				e.preventDefault();
				var os = new createUser;
			},true);
	}
	

}());

