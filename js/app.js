$(function() {
	// Product View image click
	$('.side-image').click(function() {
		var $imageLink = $(this).find('img').data('src');
		$('.main-image').find('img').attr('src', $imageLink);
	});
});