
let toggleActive = function(event){
  this.parentNode.classList.toggle('active');
}

let elements = document.getElementsByClassName('toggle-active-overlay');

for (var i = 0; i < elements.length; i++) {
	elements[i].addEventListener('click', toggleActive, false);
}




let hamburgerActive = function(event){
	document.getElementById('navigation').classList.toggle('is-active');
	this.classList.toggle('is-active');
}

let hamburgers = document.getElementsByClassName('hamburger');

for (var i = 0; i < hamburgers.length; i++) {
	hamburgers[i].addEventListener('click', hamburgerActive, false);
}




let activeOnParent = function(event){
  this.parentNode.classList.toggle('active');
}

let headers = document.getElementsByClassName('answer-header');

for (var i = 0; i < headers.length; i++) {
	headers[i].addEventListener('click', activeOnParent, false);
}


