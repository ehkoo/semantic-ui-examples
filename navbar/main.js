$(document).ready(function(){
	var navbar = $('.ui.sidebar.navbar')
    .sidebar({overlay: true})
    .sidebar('attach events', '.menu.item');
	$('.ui.dropdown').dropdown();
});