// Accordions working

let accordions = Array.from(document.getElementsByClassName("header-three-accordion"));

let showItem = function(toggled, panel){
	toggled.classList.add("active")
	panel.style.maxHeight = panel.scrollHeight + "px";
}
let hideItem = function(toggled, panel){
	toggled.classList.remove("active")
	panel.style.maxHeight = null;
}
let toggleItem = function(toggled, panel){
	if (panel.style.maxHeight) {
		hideItem(toggled, panel);
	} else {
		showItem(toggled, panel);
	}
}

accordions.forEach( accordion => {
	accordion.addEventListener('click', function() {
		let panel = this.nextElementSibling;
    accordions.forEach(item => {
      if (accordion !== this){
				let accordionpanel = item.nextElementSibling;
        hideItem(accordion, accordionpanel)
      }
    });
    toggleItem(this, panel);
  });
})

let navthreeitems = Array.from(document.getElementsByClassName("nav-three-item"));

navthreeitems.forEach( navitem => {
	navitem.addEventListener('click', function(){
		let selectedpanel = document.getElementById(navitem.id);
		if (navitem !== this){
			let accordionpanel = document.getElementById(item.id);
			hideItem(item, accordionpanel)
		}
		toggleItem(this, selectedpanel);
	});
});






let hamburgerActive = function(event){
	document.getElementById('navigation').classList.toggle('is-active');
	this.classList.toggle('is-active');
}

let hamburgers = document.getElementsByClassName('hamburger');

for (var i = 0; i < hamburgers.length; i++) {
	hamburgers[i].addEventListener('click', hamburgerActive, false);
}
