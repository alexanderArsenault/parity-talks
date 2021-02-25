import 'normalize.css';
import './assets/scss/style.scss';
import '@fortawesome/fontawesome-free/js/all.js';


let toggleActive = function(event){
  event.target.parentNode.classList.toggle('active');
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
