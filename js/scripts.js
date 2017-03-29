//VARIABLES AND OBJECTS
var btnMenu = document.getElementById("toggle-menu"),
	nav = document.getElementById("navigation");

//FUNCTIONS

//script to show menu
var showNav = function() {
	nav.classList.toggle("show-menu");
}

//script to scroll header
var scrollHeader = function(e) {
	var header = document.getElementById("header"),
		headerTop = document.body.scrollTop;

	if(headerTop > 100)
	{
		header.classList.add("scroll-header");
	}
	else
	{
		header.classList.remove("scroll-header");
	}
}



//ASIGNIN EVENTS
btnMenu.addEventListener('click', showNav);

window.addEventListener('scroll', scrollHeader);