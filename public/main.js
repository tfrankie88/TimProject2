// bootsnipp java funtioning for category side bar http://bootsnipp.com/snippets/featured/sidebar-responsive
$(window).resize(function() {
	var path = $(this);
	var contW = path.width();
	if(contW >= 751){
		document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
	}else{
		document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
	}
});

$(document).ready(function() {
	$('.dropdown').on('show.bs.dropdown', function(e){
	    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});
	$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
	});
	$("#menu-toggle").click(function(e) {
		e.preventDefault();
		var elem = document.getElementById("sidebar-wrapper");
		left = window.getComputedStyle(elem,null).getPropertyValue("left");
		if(left == "200px"){
			document.getElementsByClassName("sidebar-toggle")[0].style.left="-200px";
		}
		else if(left == "-200px"){
			document.getElementsByClassName("sidebar-toggle")[0].style.left="200px";
		}
	});
  // End of bootsnipp
  
  // help stack overflow http://stackoverflow.com/questions/10709016/change-image-onmouseover
  $('#meth').hover(function() {
    $(this).attr('src', '/method-man-comment.svg');
    }, function() {
    $(this).attr('src', '/method-man.svg');
  });
  // end of stack overflow
});
