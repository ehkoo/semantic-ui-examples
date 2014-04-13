$(document).ready(function(){
	$('.reorder.icon').on("click",function(e){
        e.preventDefault();
		$('.ui.vertical.menu').toggle();
	});
    
	$('.ui.dropdown').dropdown();
});
