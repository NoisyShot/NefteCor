// smooth scroll - start
jQuery(document).ready(function () {
   jQuery("a.scrollto").click(function () {
      elementClick = jQuery(this).attr("href")
      destination = jQuery(elementClick).offset().top - 100;
      jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1000);
      return false;
   });
});

function myFunction() {
   document.getElementById("floatingBlock").classList.toggle("show");
   document.getElementById("floatingNavbar").classList.toggle("show");
};

window.onclick = function (e) {
   if (!e.target.matches('.floating_navbar>img')) {
      var floatingBlock = document.getElementById("floatingBlock");
      if (floatingBlock.classList.contains('show')) {
         floatingBlock.classList.remove('show');
      }
      var floatingNavbar = document.getElementById("floatingNavbar");
      if (floatingNavbar.classList.contains('show')) { }
      else (floatingNavbar.classList.add('show'))
   }
};
// smooth scroll - end

// drop-down menu - start
let menu = $('.navbar'),
		scrollPrev = 0;

$(window).scroll(function() {
	let scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		menu.addClass('out');
	} else {
		menu.removeClass('out');
	}
	scrollPrev = scrolled;
});
// drop-down menu - end