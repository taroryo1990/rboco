$(function() {
	var slideImgW = $(window).width() - 26;
	var aniMarginL = '-'+slideImgW;
	$('#slide_area').css('width',slideImgW);
	$('#slide_area .slide_img li').css('width',slideImgW);
	$(window).load(function(){
		var loop = setInterval(function() {
			var clone = $('.slide_img li:first').clone(true);
			$('.slide_img li:first').animate({
				marginLeft : aniMarginL+'px'
			}, {
				duration : 1000,
				complete : function() {
					$('.slide_img li:first').remove();
				clone.clone(true).insertAfter($('.slide_img li:last'));
				}
			});
		}, 3000);
	});
});