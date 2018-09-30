(function ($) {
	"use strict";
	

	$(window).on("resize load",function () {
		// Masonry Grid Gallery
		// init Masonry
		// layout Masonry after each image loads
		var $grid = $('.gallery-grid').masonry({});

		$grid.masonry("reloadItems");

		$grid.imagesLoaded().progress(function () {
			$grid.masonry('layout');
		});
	});

	$(document).ready(function () {

		// scrollspy bootstrap
		$('body').scrollspy({
			target: '.navbar',
			offset: 100

		});
		
		$('.navbar .nav li > a, .btn-location').on("click", function (e) {

			var target = this.hash;
			e.preventDefault();
			$('body').scrollTo(target, 800, {
				offset: {"left":0, "top":-30},
				'axis': 'y'
			});

		});

		$(".navbar-nav li a").on("click",function (event) {
			$(".navbar-collapse").collapse('hide');
		});

		// sticky navbar	
		$("nav.navbar").sticky({ topSpacing: 0 });

		// Falling Flower
		if ($(".falling-flower").length) {
			$(".falling-flower").sakura({
				className: 'sakura', // Class name to use
				fallSpeed: 1,        // Factor for petal fall speed
				maxSize: 14,         // Maximum petal size
				minSize: 9,          // Minimum petal size
				newOn: 300,          // Interval after which a new petal is added
				swayAnimations: [    // Swaying animation names
					'sway-0'
				]
			});
		}

		// Hero Youtube Background
		if ($(".video-background").length) {
			$(".video-background .hero-wrapper").YTPlayer({
				fitToBackground: true,
				videoId: 'Xfjo9mHwiIY'
			})
		}

		// Hero Slide Show
		if($("#slides").length){
			$("#slides").bxSlider({
				pager : false,
				controls : false,
				auto : true,
				adaptiveHeight:true,
				mode : 'fade',
				speed : 300
			});
			
		}
		// Countdown Settings
		var dateDemo = new Date();
		// date countdown format (yyyy/m/d)
		$("#countdown").countdown((dateDemo.getFullYear() + 1) + "/" + (dateDemo.getMonth() + 1) + "/" + dateDemo.getDate(), function (e) {
			var $this = $(this).html(e.strftime('<ul>' + '<li>%D <span>days</span></li> ' + '<li>%H <span>hours</span></li> ' + '<li>%M <span>minutes</span></li> ' + '<li>%S <span>seconds</span></li> ' + '</ul>'));
		});

	});

	// map location
	var $toggleMap = $(".toggle-map");

	$toggleMap.each(function () {

		$(this).on("click", function () {
			// coordinat from data-coord
			var dataLong = $(this).data("long");
			var dataLat = $(this).data("lat");
			var dataTitle = $(this).data("title");

			$("#mapTitle").text(dataTitle);
			$(".map-wrapper .loading").show();

			// load the map
			loadMap(dataLat, dataLong);

			// open google map
			$("#mapLink").attr("href", "https://www.google.com/maps/?q=" + dataLat + "," + dataLong);

		});
	});

	function loadMap(dataLat, dataLong) {
		// clear maps
		$("#map-canvas").html("");

		// initaTe Maps on Modal Bootstrap
		$('#modal-maps').on('shown.bs.modal', function (e) {
			setTimeout(function () {
				var map = new GMaps({
					div: '#map-canvas',
					zoom: 15,
					lat: dataLat,
					lng: dataLong,
					scrollwheel: false
				});

				map.addMarker({
					lat: dataLat,
					lng: dataLong,
					title: 'Elizabeth & William',
					icon: 'assets/images/marker.png',
				});

			}, 1000);
		});
	}


})(jQuery);