$(function() {
	$("[data-fancybox]").fancybox();

	$(".navbar-toggle, .mob-menu .close-btn").on("click", function(e) {
		mobMenuToggle();
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

		modalToggle(modal);
	});

	$(".close-btn").on("click", function() {
		$(".modal, body").removeClass("modal-active");
	});

// AJAX Form submit

	$(document).on('af_complete', function(event,response) {
		var form_id = '' || response.form.parents('.modal').attr('id');
		var modalSuccess = "modal-success";

		if (response.success) {
			if( form_id ) {
				modalToggle(form_id);
			}

			modalToggle(modalSuccess);

			var timer = setTimeout(function() { 
				modalToggle(modalSuccess, true) 
			}, 5000);
		}
	});


// Mask

	if( $('input[name="phone"]').length ) {
		$('input[name="phone"]').mask("+7 (999) 999-9999");
	}
	
});

function modalToggle(modalWindow, closeOption) {
	var modal = modalWindow || "modal";

	if (closeOption) {
		$("body, ." + modal).removeClass("modal-active");
	} else {
		$("body, ." + modal).toggleClass("modal-active");
	}	

	if( $(".mob-menu").hasClass("opened") ) {
		mobMenuToggle();
	}
}

function mobMenuToggle() {
	$(".mob-menu").toggleClass("opened");
	$(".navbar-toggle").toggleClass("menu-active");
	$("body").toggleClass("mob-menu-active");
}