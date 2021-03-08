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

let accordions = Array.from(document.getElementsByClassName("program-entry"));

accordions.forEach( accordion => {
	accordion.addEventListener('click', function() {
		let panel =	this.getElementsByClassName('program-entry-detail')[0];
		preventLinkClicks(panel);
		toggleItem(this, panel)
  });
})

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
		preventLinkClicks(panel);
		toggleItem(this, panel)

		// scroll down to show opened panel if its the last
		// if (index + 1 == seasonEntries.length && bottomOfPage){
		// 	panel.scrollIntoView()
		// }
	});
});

let scheduleEntry = Array.from(document.getElementsByClassName("schedule-entry"));

scheduleEntry.forEach( (entry, index) => {

	entry.addEventListener('click', function(event){
		let panel =	this.getElementsByClassName('schedule-entry-detail')[0];
		preventLinkClicks(panel);
		toggleItem(this, panel)
	});
})


let preventLinkClicks = function(parentElement){
	Array.from(parentElement.getElementsByTagName("a")).forEach( element => {
		element.addEventListener("click", function(e) {
			e.stopPropagation();
		})
	});
}

let closebuttons = document.getElementsByClassName('toggle-nav')
let body = document.getElementsByTagName('body')[0];

Array.from(closebuttons).forEach( element => {
	element.addEventListener("click", function(e) {
		body.classList.toggle('show-mobile-nav');
	})
});
