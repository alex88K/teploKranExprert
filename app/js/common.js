$(function() {
	$("[data-fancybox]").fancybox();

	$(".navbar-toggle, .mob-menu .close-btn").on("click", function(e) {
		$(".mob-menu").toggleClass("opened");
		$(".navbar-toggle").toggleClass("menu-active");
		$("body").toggleClass("mob-menu-active");
	});

// Sliders

	$(".cert-slider").slick({
		adaptiveHeight: true,
		nextArrow: '<button type="button" class="slick-next"><svg class="arrow-i arrow-next-i"><use xlink:href="#arrow-next"></use></svg></button>',
		prevArrow: '<button type="button" class="slick-prev"><svg class="arrow-i arrow-prev-i"><use xlink:href="#arrow-next"></use></svg></button>',
		responsive: [{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
				variableWidth: false,
			},
		}]
	});

	$(".partner-slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		nextArrow: '<button type="button" class="slick-next"><svg class="arrow-i arrow-next-i"><use xlink:href="#arrow-next"></use></svg></button>',
		prevArrow: '<button type="button" class="slick-prev"><svg class="arrow-i arrow-prev-i"><use xlink:href="#arrow-next"></use></svg></button>',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3
			},
			breakpoint: 982,
			settings: {
				slidesToShow: 2
			},
			breakpoint: 600,
			settings: {
				slidesToShow: 1
			}
		}]
	});

// Modals

	$("[data-modal]").on("click", function() {
		var modal = $(this).attr('data-modal');
		$("."+modal).addClass("modal-active");
		$('body').addClass('modal-active');

		if ($(this).closest( ".mob-menu" ).length > 0) {
			$(".mob-menu").toggleClass("opened");
			$(".navbar-toggle").toggleClass("menu-active");
			$("body").toggleClass("mob-menu-active");
		}
	});

	$(".close-btn").on("click", function() {
		$(".modal").removeClass("modal-active modal-animate");
		$(".modal").addClass('out');
		$('body').removeClass('modal-active');
	});

// AJAX Form submit

	$(document).on('af_complete', function(event,response) {
		var form_id = response.form.parents('.modal').attr('id');
		if (response.success) {
			$('#'+form_id).modal('hide');
			$('.modal-success').modal('show');
		}
	});

// Mask

	if( $('input[name="phone"]').length ) {
		$('input[name="phone"]').mask("+7 (999) 999-9999");
	}
	
});

