/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Search Js
03. Info Bar Js
04. Sticky Header Js
05. Data-Background Js
06. Mobile Menu Js
07. Scroll To Top Js
08. Hero Slider Js
09. Testimonial Js
10. Product Slider Js
11. Product Slider 2 Js
12. Product Slider 3 Js
13. Product Slider 4 Js
14. Sale Slider Js 
15. Sale Slider 2 Js 
16. Client Slider Js
17. Blog Slider Js
18. Product Offer SLider Js 
19. Masonary Js
20. WoW Js
21. Cart Plus Minus Js
22. Range Slider Js
23. Show Login Toggle Js
24. Show Coupon Toggle Js
25. Create An Account Toggle Js
26. Shipping Box Toggle Js
****************************************************/

(function ($) {
	"use strict";


	/////////////////////////////////////////////////
	////////////////////////////////////////////////
	// menu active indicator
	const activeIndicator = document.querySelector(".active-indicator");
	const menuItems = document.querySelectorAll(".main-menu ul li a");
	function indicator(e) {
		activeIndicator.style.left = e.offsetLeft + "px"
		activeIndicator.style.width = e.offsetWidth + "px"
	}
	menuItems.forEach(item => {

		item.addEventListener('mouseenter', (e) => {
			indicator(e.target)
		})
	})

	/////////////////////////////////////////////////
	////////////////////////////////////////////////
	// hero slider 
	var heroSlider = new Swiper(".hero-slider", {
		loop: true,
		effect: 'fade',
		speed: 1000,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".hero-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: ".button-next",
			prevEl: ".button-prev",
		},
	});





	////////////////////////////////////////////////////
	// 05. Data-Background Js
	$("[data-background]").each(function () {
		// Set the background image
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
		// Add the 'bg-img' class
		$(this).addClass("bg-img");
		// Remove the data-background attribute
		$(this).removeAttr("data-background");
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"))
	})



})(jQuery);