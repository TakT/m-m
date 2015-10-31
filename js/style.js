$(document).ready(function() {
	$('.block-footer-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 860,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});
	jQuery('.js-faq .item__title a').on('click', function(event) {
		event.preventDefault();

		jQuery(this).parents('.faq').find('.item').removeClass('active');
		jQuery(this).parents('.item').toggleClass('active');
	});

	jQuery('.modal').on('show.bs.modal', function(e) {
		jQuery('.modal').modal('hide');
	});

	jQuery('.js-sms__checkbox-toggle input').on('ifChanged', function() {
		jQuery(this).parents('fieldset').find('.sms__code').toggleClass('hide');
	});

	jQuery('input').iCheck({
		checkboxClass: 'icheckbox_minimal',
		increaseArea: '20%' // optional
	});

	jQuery('.js-menu__switch-link').on('click', function(event) {
		event.preventDefault();

		if (jQuery(this).parents('.js-mobilemenu-toggle').length) {
			if (jQuery(this).parents('.js-mobilemenu-toggle').hasClass('active')) {
				jQuery(this).parents('.js-mobilemenu-toggle').removeClass('active');
			} else {
				jQuery(this).parents('.js-mobilemenu-toggle').addClass('active');
			}
		} else {
			jQuery('.js-mobilemenu-toggle').removeClass('active');
		}
		jQuery(this).parents('.navigation__wrapper').find('.header-nav').toggleClass('active');
	});
	if(window.innerHeight > window.innerWidth){
	    $('.cap').show();
	    $('#canvas').hide();
	} else {
		$('.cap').hide();
		$('#canvas').show();
	}
	 var element = $('.ico-scroll');
    $(window).scroll(function(){
        element['fade'+ ($(this).scrollTop() > 200 ? 'Out': 'In')](500);    
    });

});
$(window).load(function() {
	heigFooter = $('footer').outerHeight();
	$('body').css('paddingBottom', heigFooter);
});
$(window).resize(function() {
	heigFooter = $('footer').outerHeight();
	$('body').css('paddingBottom', heigFooter);
	if(window.innerHeight > window.innerWidth){
	    $('.cap').show();
	    $('#canvas').hide();
	} else {
		$('.cap').hide();
		$('#canvas').show();
	}
});
