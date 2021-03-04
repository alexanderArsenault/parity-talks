// Accordions working
let bottomOfPage = (window.innerHeight + window.scrollY) >= document.body.offsetHeight


let activate = function(element){
	element.classList.add("active")
}

let deactivate = function(element){
	element.classList.remove("active")
}

let showPanel = function(activatedElement, panel){
	activate(activatedElement)
	panel.style.maxHeight = panel.scrollHeight + "px";
}

let hidePanel = function(deactivatedElement, panel){
	deactivate(deactivatedElement);
	panel.style.maxHeight = null;
}

let toggleItem = function(toggled, panel){
	if (panel.style.maxHeight) {
		hidePanel(toggled, panel);
	} else {
		showPanel(toggled, panel);
	}
}

let accordions = Array.from(document.getElementsByClassName("program-entry-title"));

accordions.forEach( accordion => {
	accordion.addEventListener('click', function() {
	console.log(accordion)

		let panel = this.nextElementSibling;
		console.log(panel)
    accordions.forEach(item => {
      if (accordion !== this){
				let accordionpanel = item.nextElementSibling;
        hidePanel(accordion, accordionpanel)
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


let seasonPageToggle = Array.from(document.getElementsByClassName("season-toggle"));

seasonPageToggle.forEach( toggle => {

	toggle.addEventListener('click', function(){
		seasonPageToggle.forEach( toggleElement => {
			let childElement = toggleElement.getElementsByTagName('h2')[0]
			deactivate(childElement);
		})
		let childElement = this.getElementsByTagName('h2')[0]
		activate(childElement)
		document.getElementById('season').className = this.id
	});

});


let seasonEntries = Array.from(document.getElementsByClassName("season-entry"));

seasonEntries.forEach( (entry, index) => {

	entry.addEventListener('click', function(){
		let panel =	this.getElementsByClassName('season-entry-detail')[0];
		toggleItem(this, panel)

		// scroll down to show opened panel if its the last
		// if (index + 1 == seasonEntries.length && bottomOfPage){
		// 	panel.scrollIntoView()
		// }
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
