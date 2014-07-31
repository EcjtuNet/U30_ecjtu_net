$(document).ready(function() {
	var img = $('.banner').find('li'),
		img_count = $('.banner').find('li').length;
	var banner_btn = "<li class='selected'><a href=''></a></li>";


	$(".banner_btn").append( banner_btn );
	for (var i = 1; i < img_count; ++i) {
		banner_btn += "<li><a href=''></a></li>";
	}
});