$(document).ready(function() {
	$('.block-footer-slider').slick();
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
});

$(window).load(function() {
	heigFooter = $('footer').outerHeight();
	$('body').css('paddingBottom', heigFooter);
});
$(window).resize(function() {
	heigFooter = $('footer').outerHeight();
	$('body').css('paddingBottom', heigFooter);
});